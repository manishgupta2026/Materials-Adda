import Link from 'next/link';

interface DashboardCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link: string;
  bgColor?: string;
  textColor?: string;
}

export default function DashboardCard({ 
  title, 
  description, 
  icon, 
  link, 
  bgColor = 'bg-white', 
  textColor = 'text-gray-800'
}: DashboardCardProps) {
  return (
    <Link href={link}>
      <div className={`${bgColor} p-6 rounded-lg shadow hover:shadow-md transition-shadow`}>
        {icon && <div className="mb-3">{icon}</div>}
        <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}