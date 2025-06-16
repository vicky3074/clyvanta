'use client';

import { useEffect } from 'react';

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput?: boolean;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const reportWebVitals = (metric: { name: string; value: number; rating: string }) => {
      // You can send these metrics to your analytics service
      console.log({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
      });
    };

    // Performance Observer for LCP, FID, CLS
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
            rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const processingStart = (entry as PerformanceEventTiming).processingStart || entry.startTime;
            const fidValue = processingStart - entry.startTime;
            reportWebVitals({
              name: 'FID',
              value: fidValue,
              rating: fidValue < 100 ? 'good' : fidValue < 300 ? 'needs-improvement' : 'poor'
            });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!('hadRecentInput' in entry) || !(entry as LayoutShift).hadRecentInput) {
              clsValue += (entry as LayoutShift).value;
            }
          }
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Cleanup
        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (e) {
        console.error('Performance monitoring error:', e);
      }
    }
  }, []);

  return null;
}
