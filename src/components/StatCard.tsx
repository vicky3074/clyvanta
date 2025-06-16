interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-xl sm:text-2xl font-bold text-clyvanta-text-primary">{value}</div>
      <div className="text-xs sm:text-sm text-clyvanta-text-secondary">{label}</div>
    </div>
  );
}
