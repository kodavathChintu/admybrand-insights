// app/components/TopMetrics.js
import MetricCard from './MetricCard';

export default function TopMetrics() {
  return (
    <div className="top-metrics">
      <MetricCard title="Revenue" value="$1.2M" growth="N/A" />
      <MetricCard title="Users" value="24,500" growth="N/A" />
      <MetricCard title="Conversions" value="2,150" growth="N/A" />
      <MetricCard title="Growth" value="12.5%" growth="N/A" />
    </div>
  );
}
