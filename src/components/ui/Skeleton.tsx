interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg ${className}`}
      style={{
        animation: 'shimmer 1.5s ease-in-out infinite'
      }}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <Skeleton className="w-20 h-20 rounded-xl mb-6" />
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
}

export function ContactFormSkeleton() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-12 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Skeleton className="h-4 w-16 mb-2" />
            <Skeleton className="h-12 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-12 mb-2" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>

        <div>
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-32 w-full" />
        </div>

        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-clyvanta-bg-light to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-5/6 mb-8" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
          <div>
            <Skeleton className="w-full h-[400px] rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}