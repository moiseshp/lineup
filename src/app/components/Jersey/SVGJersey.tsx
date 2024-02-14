export const enum JERSEY_TYPES {
  FLAT = 'Flat',
  H_STRIPE = 'HStripe',
  D_STRIPE = 'DStripe',
  V_STRIPES = 'VStripes',
}

export const DEFAULT_COLORS = {
  BASE: '#000',
  PRIMARY: '#FFF',
  SECONDARY: '#F00',
};

export interface JerseyProps {
  primaryColor: string;
  secondaryColor?: string;
}

interface Props {
  children: React.ReactNode;
}

const SVGJersey: React.FC<Props> = ({ children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65%"
      height="100%"
      viewBox="0 0 25.718456 30.370768"
    >
      {children}
    </svg>
  );
};

export default SVGJersey;
