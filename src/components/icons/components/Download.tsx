import SVGIcon from '../SVGIcon';
import { DEFAULT_COLOR, DEFAULT_SIZE, IconProps } from '../utils';

const Download: React.FC<IconProps> = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}) => {
  return (
    <SVGIcon color={color} size={size}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </SVGIcon>
  );
};

export default Download;
