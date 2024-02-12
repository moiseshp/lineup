import SVGJersey, { DEFAULT_COLORS, JerseyProps } from './SVGJersey';

const DStripe: React.FC<JerseyProps> = ({
  primaryColor = DEFAULT_COLORS.PRIMARY,
  secondaryColor = DEFAULT_COLORS.SECONDARY,
}) => {
  return (
    <SVGJersey>
      <g transform="translate(-116.29709,44.633385)">
        <path
          fill={primaryColor}
          d="m 132.42242,-44.633388 c -4.13388,0.02386 -6.81637,0.03968 -6.80026,0.04135 0,0 -1.55459,0.529023 -5.34282,2.04432 -1.98222,0.792891 -3.00241,2.068112 -3.49798,3.140893 -0.49512,1.071784 -0.48423,1.970807 -0.48421,1.97249 l 0.0548,5.179529 3.8902,0.05116 0.002,15.885336 c 2.75321,1.399351 5.87349,1.996906 8.94002,2.055688 3.68697,-0.03308 6.57926,-0.885082 8.83771,-2.032951 l 0.0176,-15.951481 3.9212,-0.04858 0.0548,-5.175911 c 0,0 0.0114,-0.903966 -0.48421,-1.976624 -0.49558,-1.072657 -1.7478,-2.347489 -3.73,-3.140376 -1.78755,-0.692588 -3.55947,-1.434962 -5.37797,-2.044837 z"
        />
        <path
          fill={secondaryColor}
          d="m 135.50421,-43.237498 -14.70505,18.04231 c 0.0671,2.882822 0.14211,5.764765 0.23048,8.594307 l 17.00516,-20.286617 v -5.23999 c -0.14383,-0.06797 -0.2236,-0.201065 -0.37981,-0.26355 -0.83918,-0.335671 -1.52673,-0.60457 -2.15078,-0.84646 z m 5.92574,7.702889 -2.50269,0.858863 h -1.42627 v 2.391585 h 4.13928 z m -24.54683,0.09405 -0.21084,2.721281 4.13928,0.529167 v -2.391584 h -1.42627 z"
        />
        <path
          fill={DEFAULT_COLORS.BASE}
          d="m 132.42222,-44.633383 c -4.13387,0.02386 -6.81621,0.03967 -6.8001,0.04134 0,0 -1.5546,0.529024 -5.34282,2.044319 -1.98222,0.792891 -3.00241,2.068114 -3.49798,3.140894 -0.49512,1.071783 -0.48423,1.970806 -0.48421,1.972489 l 0.0548,5.179529 3.8902,0.05116 0.002,15.885335 c 2.75321,1.39935 5.8735,1.996907 8.94002,2.055689 3.68697,-0.03308 6.57926,-0.885083 8.8377,-2.032951 l 0.0176,-15.951481 3.92121,-0.04858 0.0548,-5.175912 c 0,0 0.0114,-0.903966 -0.48421,-1.976623 -0.49558,-1.072656 -1.7478,-2.347491 -3.73,-3.140377 -1.78755,-0.692587 -3.55947,-1.434962 -5.37797,-2.044836 z m -0.16226,0.783414 c 0.005,0.0017 0.40964,0.148153 0.60358,0.216525 -0.20768,1.618273 -1.8402,2.562659 -3.68453,3.159497 -1.9782,-0.514242 -3.43829,-1.602402 -3.68556,-3.217892 0.0656,-0.02256 0.3545,-0.127124 0.3545,-0.127124 z m -7.88376,0.563273 c 0.65196,2.783902 4.59895,3.9175 4.78524,3.895887 0.17304,0.04199 4.10114,-1.080482 4.7935,-3.841626 0.40954,0.153654 0.87294,0.329776 1.45883,0.557072 -0.0622,0.150497 -0.14552,0.345983 -0.24598,0.56379 -0.21439,0.464677 -0.5137,1.01959 -0.73329,1.281058 l 0.9431,0.579293 c 0.36169,-0.43066 0.65258,-1.012103 0.88211,-1.509468 0.0842,-0.182553 0.15776,-0.352676 0.21756,-0.495577 0.35144,0.138543 0.62804,0.244499 1.03094,0.40566 1.80036,0.720147 2.8768,1.815247 3.30161,2.734716 0.42481,0.919468 0.41238,1.630909 0.41238,1.630909 v 0.0021 l -0.047,4.403865 -3.11764,0.03721 v -4.422986 l -0.79478,0.917774 -0.0341,19.730062 c -2.20134,1.064452 -4.98548,1.732065 -8.05274,1.759582 -2.958,0.02453 -5.91483,-0.783637 -8.14059,-1.775602 l 0.016,-19.714042 -0.79478,-0.917774 v 4.465878 l -3.1197,-0.03876 -0.047,-4.404382 v -0.0021 c 0,0 -0.0124,-0.711308 0.41237,-1.630908 0.42481,-0.9196 1.27182,-2.016126 3.07217,-2.736267 0.49633,-0.19853 0.85137,-0.335026 1.27072,-0.499711 0.0635,0.153413 0.14467,0.343012 0.2403,0.550354 0.22953,0.497365 0.52042,1.078808 0.88211,1.509468 l 0.9431,-0.579293 c -0.21959,-0.261468 -0.5189,-0.816381 -0.73329,-1.281058 -0.11325,-0.245531 -0.20533,-0.463019 -0.26872,-0.618051 0.59919,-0.231465 1.06277,-0.406274 1.46761,-0.557072 z m -6.4642,4.849834 v 4.899442 l 1.43919,0.0026 0.79892,-0.749825 -1.34359,-0.0031 c 0,0 -0.0106,-2.941768 0.0362,-3.339331 z m 22.5211,0 -0.93069,0.809769 c 0.0468,0.397563 0.0362,3.339331 0.0362,3.339331 l -1.34359,0.0031 0.79892,0.749825 1.43919,-0.0026 z m -18.3813,7.507552 v 13.668933 l 2.7373,0.903304 0.79892,-0.749825 -2.55902,-0.815971 c 0,0 -0.0933,-11.798592 -0.0465,-12.196155 z m 14.2415,0 -0.93069,0.810286 c 0.0468,0.397563 -0.047,12.196155 -0.047,12.196155 l -2.5585,0.815971 0.79892,0.749825 2.7373,-0.903304 z"
        />
      </g>
    </SVGJersey>
  );
};

export default DStripe;
