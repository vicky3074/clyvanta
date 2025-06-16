terraform {
  required_providers {
    oci = {
      source  = "oracle/oci"
      version = "~> 5.0"
    }
  }
}

# Configure the Oracle Cloud Infrastructure Provider
provider "oci" {
  tenancy_ocid     = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  user_ocid        = "ocid1.user.oc1..aaaaaaaa3mgmdjspgjgawye46yl5ene5rheqzvicc2vvdjs7uz5pkooxwtaa"
  fingerprint      = "2f:17:77:47:be:a8:1d:ba:cf:de:7c:a2:ce:ea:ad:cd"
  private_key_path = "/Users/vicky/Desktop/claude-oracle-api-key.pem"
  region           = "ca-toronto-1"
}

# Get availability domains
data "oci_identity_availability_domains" "ads" {
  compartment_id = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
}

# Get latest Ubuntu image
data "oci_core_images" "ubuntu_images" {
  compartment_id           = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  operating_system         = "Canonical Ubuntu"
  operating_system_version = "22.04"
  shape                    = "VM.Standard.E2.1.Micro"
  state                    = "AVAILABLE"
  sort_by                  = "TIMECREATED"
  sort_order               = "DESC"
}

# Create VCN
resource "oci_core_vcn" "clyvanta_vcn" {
  compartment_id = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  cidr_blocks    = ["10.0.0.0/16"]
  display_name   = "clyvanta-vcn"
  dns_label      = "clyvantavcn"
}

# Create Internet Gateway
resource "oci_core_internet_gateway" "clyvanta_igw" {
  compartment_id = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  vcn_id         = oci_core_vcn.clyvanta_vcn.id
  display_name   = "clyvanta-igw"
}

# Create Route Table
resource "oci_core_route_table" "clyvanta_route_table" {
  compartment_id = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  vcn_id         = oci_core_vcn.clyvanta_vcn.id
  display_name   = "clyvanta-route-table"

  route_rules {
    destination       = "0.0.0.0/0"
    destination_type  = "CIDR_BLOCK"
    network_entity_id = oci_core_internet_gateway.clyvanta_igw.id
  }
}

# Create Security List
resource "oci_core_security_list" "clyvanta_security_list" {
  compartment_id = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  vcn_id         = oci_core_vcn.clyvanta_vcn.id
  display_name   = "clyvanta-security-list"

  # Allow outbound traffic
  egress_security_rules {
    destination = "0.0.0.0/0"
    protocol    = "all"
  }

  # Allow SSH
  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      min = 22
      max = 22
    }
  }

  # Allow HTTP on port 8080 (main website)
  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      min = 8080
      max = 8080
    }
  }

  # Allow HTTP on port 4040 (webhook)
  ingress_security_rules {
    protocol = "6"
    source   = "0.0.0.0/0"
    tcp_options {
      min = 4040
      max = 4040
    }
  }

  # Allow ICMP
  ingress_security_rules {
    protocol = "1"
    source   = "0.0.0.0/0"
  }
}

# Create Subnet
resource "oci_core_subnet" "clyvanta_subnet" {
  compartment_id      = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  vcn_id              = oci_core_vcn.clyvanta_vcn.id
  cidr_block          = "10.0.1.0/24"
  display_name        = "clyvanta-public-subnet"
  dns_label           = "clyvantasubnet"
  route_table_id      = oci_core_route_table.clyvanta_route_table.id
  security_list_ids   = [oci_core_security_list.clyvanta_security_list.id]
  availability_domain = data.oci_identity_availability_domains.ads.availability_domains[0].name
}

# Create Compute Instance
resource "oci_core_instance" "clyvanta_instance" {
  compartment_id      = "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
  availability_domain = data.oci_identity_availability_domains.ads.availability_domains[0].name
  display_name        = "clyvanta-oracle-prod"
  shape               = "VM.Standard.E2.1.Micro"

  create_vnic_details {
    subnet_id        = oci_core_subnet.clyvanta_subnet.id
    assign_public_ip = true
    hostname_label   = "clyvanta-oracle"
  }

  source_details {
    source_type = "image"
    source_id   = data.oci_core_images.ubuntu_images.images[0].id
  }

  metadata = {
    ssh_authorized_keys = file("/Users/vicky/Desktop/clyvanta_oracle_deploy_key.pub")
    user_data = base64encode(templatefile("${path.module}/cloud-init.yaml", {
      ssh_public_key = file("/Users/vicky/Desktop/clyvanta_oracle_deploy_key.pub")
    }))
  }

  shape_config {
    memory_in_gbs = 1
    ocpus         = 1
  }

  # Preserve boot volume when instance is terminated
  preserve_boot_volume = false
}

# Outputs
output "instance_public_ip" {
  description = "Public IP of the created instance"
  value       = oci_core_instance.clyvanta_instance.public_ip
}

output "instance_private_ip" {
  description = "Private IP of the created instance"
  value       = oci_core_instance.clyvanta_instance.private_ip
}

output "instance_id" {
  description = "OCID of the created instance"
  value       = oci_core_instance.clyvanta_instance.id
}

output "vcn_id" {
  description = "OCID of the created VCN"
  value       = oci_core_vcn.clyvanta_vcn.id
}