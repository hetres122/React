import React from 'react';
import { IconBaseProps } from 'react-icons';

interface SocialMediaProps {
  icon: React.ComponentType<IconBaseProps>;
  label: string;
  value?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  icon: Icon,
  label,
  value,
}) => {
  if (!value) {
    return null;
  }
  return (
    <a href={value}>
      {Icon && <Icon className="h-12 w-12 " />}
      <span className="sr-only">{label}</span>
    </a>
  );
};

export default SocialMedia;
