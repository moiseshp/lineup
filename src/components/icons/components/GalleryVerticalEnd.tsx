import SVGIcon from '../SVGIcon';
import { DEFAULT_COLOR, DEFAULT_SIZE, IconProps } from '../utils';

const GalleryVerticalEnd: React.FC<IconProps> = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}) => {
  return (
    <SVGIcon color={color} size={size}>
      <path d="M7 2h10" />
      <path d="M5 6h14" />
      <rect width="18" height="12" x="3" y="10" rx="2" />
    </SVGIcon>
  );
};

export default GalleryVerticalEnd;
