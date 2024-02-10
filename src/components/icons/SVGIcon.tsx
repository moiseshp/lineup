/**
 * Icons based https://lucide.dev/icons
 */

import { ICON_SIZE, SVGIconProps } from './utils';

const SVGIcon: React.FC<SVGIconProps> = ({ color, size, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE[size]}
      height={ICON_SIZE[size]}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
};

export interface IconProps {
  color?: string;
}

export default SVGIcon;
