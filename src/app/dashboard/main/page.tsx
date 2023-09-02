import { WidgetGrid } from '@/components/Dashboard/WidgetGrid';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'dashboard base',
}

export default function MainPage() {
  return (
    <div className="text-black p-3">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Info</span>

      <WidgetGrid />
    </div>
  );
}