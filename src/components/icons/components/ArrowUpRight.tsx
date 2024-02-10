import SVGIcon from '../SVGIcon';
import { DEFAULT_COLOR, DEFAULT_SIZE, IconProps } from '../utils';

const ArrowUpRight: React.FC<IconProps> = ({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
}) => {
  return (
    <SVGIcon color={color} size={size}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </SVGIcon>
  );
};

export default ArrowUpRight;
