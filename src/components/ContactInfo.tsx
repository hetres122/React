import React from 'react';
import { IconBaseProps } from 'react-icons';

interface ContactInfoProps {
  icon: React.ComponentType<IconBaseProps>;
  label: string;
  value?: string;
  width?: string;
  to: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  label,
  value,
  to,
  width,
}) => {
  if (!value) {
    return null;
  }
  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      <div className={`flex gap-2 ${width}`}>
        {Icon && <Icon className="h-6 w-6 text-gray-600" />} <p>{label}</p>
      </div>
      <a href={`${to}${value}`}>{value}</a>
    </div>
  );
};

export default ContactInfo;
