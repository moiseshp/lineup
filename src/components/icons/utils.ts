type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SVGIconProps {
  color: string;
  size: IconSize;
  children: React.ReactNode;
}

export interface IconProps {
  color?: string;
  size?: IconSize;
}

export const ICON_SIZE = {
  sm: 18,
  md: 22,
  lg: 26,
  xl: 30,
};

export const DEFAULT_COLOR = 'currentColor';
export const DEFAULT_SIZE = 'md';
