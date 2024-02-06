import { version } from './config';
import isProduction from './isProduction';

export function getVersion() {
  return `v${version}${isProduction() ? '-beta' : '-dev'}`;
}
