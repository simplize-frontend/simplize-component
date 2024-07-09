import { BoxShadows, boxShadows } from './box-shadows';
import { ColorVariables, colorVariables } from './color-variables';
import { FontFamilys, fontFamilys } from './font-familys';
import { FontSizes, fontSizes } from './font-sizes';
import { FontWeights, fontWeights } from './font-weights';
import { LineHeights, lineHeights } from './line-heights';
import { MediaQueries, mediaQueries } from './media-queries';

export type ThemeCss = any;

export interface Theme {
  color: ColorVariables;
  fontSize: FontSizes;
  lineHeight: LineHeights;
  fontFamily: FontFamilys;
  fontWeight: FontWeights;
  mediaQuery: MediaQueries;
  boxShadow: BoxShadows;
}

export const theme: Theme = {
  color: { ...colorVariables },
  fontSize: { ...fontSizes },
  lineHeight: { ...lineHeights },
  fontFamily: { ...fontFamilys },
  fontWeight: { ...fontWeights },
  mediaQuery: { ...mediaQueries },
  boxShadow: { ...boxShadows },
};
