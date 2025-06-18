// Google Analytics 4 Enhanced Setup
// Based on: https://developers.google.com/analytics/devguides/collection/ga4

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

// Initialize GA4
export const initGA = () => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  // Configure GA4 with enhanced settings
  window.gtag('config', GA_TRACKING_ID, {
    // Enhanced measurement (automatic events)
    enhanced_measurement: true,
    
    // Page view settings
    page_title: document.title,
    page_location: window.location.href,
    
    // Privacy settings
    anonymize_ip: true,
    
    // Custom parameters for your business
    custom_map: {
      custom_parameter_1: 'business_type',
      custom_parameter_2: 'service_interest'
    }
  });
};

// Track page views (for SPA navigation)
export const trackPageView = (url: string, title?: string) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: title || document.title,
  });
};

// Track custom events (based on GA4 documentation)
export const trackEvent = (
  eventName: string,
  parameters: {
    event_category?: string;
    event_label?: string;
    value?: number;
    // GA4 recommended parameters
    engagement_time_msec?: number;
    custom_parameter_1?: string;
    custom_parameter_2?: string;
    [key: string]: unknown;
  } = {}
) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  window.gtag('event', eventName, {
    // Standard GA4 parameters
    event_category: parameters.event_category || 'engagement',
    event_label: parameters.event_label,
    value: parameters.value,
    
    // Enhanced parameters
    engagement_time_msec: parameters.engagement_time_msec,
    
    // Custom business parameters
    custom_parameter_1: parameters.custom_parameter_1,
    custom_parameter_2: parameters.custom_parameter_2,
    
    // Spread any additional parameters
    ...parameters
  });
};

// Business-specific event tracking
export const trackBusinessEvents = {
  // Contact form interactions
  contactFormStart: () => trackEvent('contact_form_start', {
    event_category: 'form',
    event_label: 'contact_form',
    custom_parameter_1: 'lead_generation'
  }),
  
  contactFormSubmit: (service?: string) => trackEvent('contact_form_submit', {
    event_category: 'form',
    event_label: 'contact_form_complete',
    custom_parameter_1: 'lead_conversion',
    custom_parameter_2: service || 'general'
  }),
  
  // Service interest tracking
  serviceView: (serviceName: string) => trackEvent('service_view', {
    event_category: 'engagement',
    event_label: serviceName,
    custom_parameter_1: 'service_interest',
    custom_parameter_2: serviceName
  }),
  
  // CTA button clicks
  ctaClick: (ctaType: string, location: string) => trackEvent('cta_click', {
    event_category: 'engagement', 
    event_label: `${ctaType}_${location}`,
    custom_parameter_1: 'cta_engagement',
    custom_parameter_2: ctaType
  }),
  
  // Consultation requests
  consultationRequest: (source: string) => trackEvent('consultation_request', {
    event_category: 'conversion',
    event_label: source,
    value: 1,
    custom_parameter_1: 'lead_generation',
    custom_parameter_2: 'consultation'
  }),
  
  // Phone number clicks (for mobile)
  phoneClick: () => trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: 'phone_number',
    custom_parameter_1: 'contact_method',
    custom_parameter_2: 'phone'
  })
};

// Enhanced e-commerce tracking (for future use)
export const trackEcommerce = {
  // For when you add pricing/packages
  viewPromotion: (promotionName: string) => trackEvent('view_promotion', {
    event_category: 'ecommerce',
    promotion_id: promotionName,
    promotion_name: promotionName
  }),
  
  // Service package selections
  selectPromotion: (packageName: string, packageValue: number) => trackEvent('select_promotion', {
    event_category: 'ecommerce',
    promotion_id: packageName,
    promotion_name: packageName,
    value: packageValue
  })
};

// Debug mode for development
export const enableDebugMode = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('GA4 Debug Mode Enabled');
    // Enable debug mode
    window.gtag('config', GA_TRACKING_ID, {
      debug_mode: true
    });
  }
};