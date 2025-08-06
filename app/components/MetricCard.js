'use client';

import { Skeleton } from "@/components/ui/skeleton";

const MetricCard = ({ title, value, growth = "0%", color, isLoading }) => {
  if (isLoading) {
    return <Skeleton className="h-[100px] w-full rounded-lg" />;
  }

  const growthClass = growth.startsWith('+') ? 'text-green-600' : 'text-red-600';
  const darkGrowthClass = growth.startsWith('+') ? 'dark:text-green-400' : 'dark:text-red-400';

  return (
    <div className="metric-card p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-2 value">{value}</p>
      <p className={`text-sm ${growthClass} ${darkGrowthClass} mt-1 growth`}>{growth}</p>
    </div>
  );
};

export default MetricCard;