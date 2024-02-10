import SVGIcon from '../SVGIcon';
import { DEFAULT_COLOR, DEFAULT_SIZE, IconProps } from '../utils';

const CheckCircle: React.FC<IconProps> = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}) => {
  return (
    <SVGIcon color={color} size={size}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </SVGIcon>
  );
};

export default CheckCircle;
