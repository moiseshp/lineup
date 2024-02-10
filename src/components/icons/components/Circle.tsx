import SVGIcon from '../SVGIcon';
import { DEFAULT_COLOR, DEFAULT_SIZE, IconProps } from '../utils';

const Circle: React.FC<IconProps> = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}) => {
  return (
    <SVGIcon color={color} size={size}>
      <circle cx="12" cy="12" r="10" />
    </SVGIcon>
  );
};

export default Circle;
