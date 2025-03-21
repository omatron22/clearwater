'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaWater, FaLeaf, FaCalendarAlt, FaClipboardCheck, FaChartLine } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import Card from './Card';
import Button from './Button';

// Type definitions
type ServiceIconName = 'FaWater' | 'FaLeaf' | 'FaCalendarAlt' | 'FaClipboardCheck' | 'FaChartLine';

// Interface for icon components - based on react-icons API
interface IconProps extends IconBaseProps {
  size?: string | number;
  color?: string;
  className?: string;
}

type ServiceFeature = string;

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ServiceIconName | React.ComponentType<IconProps>;
  features: ServiceFeature[];
  delay?: number;
  className?: string;
  link?: string;
  cta?: string;
}

/**
 * Renders an icon component based on the icon name or component
 */
const IconComponent = ({ icon }: { icon: ServiceIconName | React.ComponentType<IconProps> }) => {
  // If icon is already a component, use it directly
  if (typeof icon !== 'string') {
    const IconComp = icon;
    return <IconComp size={48} className="text-blue-600" />;
  }
  
  // Otherwise, map the string name to a component
  const iconMap: Record<ServiceIconName, React.ComponentType<IconProps>> = {
    FaWater: FaWater,
    FaLeaf: FaLeaf,
    FaCalendarAlt: FaCalendarAlt,
    FaClipboardCheck: FaClipboardCheck,
    FaChartLine: FaChartLine,
  };

  const IconToRender = iconMap[icon as ServiceIconName];
  return <IconToRender size={48} className="text-blue-600" />;
};

/**
 * Service Card Component
 * Displays information about a service with consistent styling and animations
 */
const ServiceCard = ({
  title,
  description,
  icon,
  features,
  delay = 0,
  className = '',
  link = '/services',
  cta = 'Learn more',
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card 
        className={`h-full flex flex-col ${className}`}
        padding="p-6 md:p-8"
        shadow="lg"
        hoverEffect={true}
      >
        <div className="text-blue-600 mb-6">
          <div className="bg-blue-50 inline-flex p-4 rounded-full">
            <IconComponent icon={icon} />
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <Button 
            href={link} 
            variant="outline"
            rightIcon={<span className="text-xs">→</span>}
          >
            {cta}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;