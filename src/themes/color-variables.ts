export type ColorVariables = typeof colorVariables;

const singleColors = {
  simplizeBlue: 'var(--simplizeBlue)', // primary
  simplizeOrange: 'var(--simplizeOrange)', // secondary

  // primary
  blue700: 'var(--blue700)',
  blue600: 'var(--blue600)',
  blue500: 'var(--blue500)',
  blue400: 'var(--blue400)',
  blue300: 'var(--blue300)',
  blue200: 'var(--blue200)',
  blue100: 'var(--blue100)',
  blue_opacity80: 'var(--blue_opacity80)',
  blue_opacity30: 'var(--blue_opacity30)',
  blue_opacity10: 'var(--blue_opacity10)',
  blue_opacity5: 'var(--blue_opacity5)',

  // secondary
  orange600: 'var(--orange600)',
  orange500: 'var(--orange500)',
  orange400: 'var(--orange400)',
  orange300: 'var(--orange300)',
  orange200: 'var(--orange200)',
  orange100: 'var(--orange100)',
  orange_opacity80: 'var(--orange_opacity80)',
  orange_opacity30: 'var(--orange_opacity30)',
  orange_opacity10: 'var(--orange_opacity10)',
  orange_opacity5: 'var(--orange_opacity5)',

  // base Color Palette
  // text color
  gray600: 'var(--gray600)',
  gray500: 'var(--gray500)',
  gray400: 'var(--gray400)',
  gray300: 'var(--gray300)',
  gray200: 'var(--gray200)',
  gray100: 'var(--gray100)',
  gray_opacity70: 'var(--gray_opacity70)',
  gray_opacity40: 'var(--gray_opacity40)',
  gray_opacity10: 'var(--gray_opacity10)',
  gray_opacity5: 'var(--gray_opacity5)',

  // black
  black600: 'var(--black600)',
  black500: 'var(--black500)',
  black400: 'var(--black400)',
  black300: 'var(--black300)',
  black200: 'var(--black200)',
  black100: 'var(--black100)',
  black_opacity90: 'var(--black_opacity90)',
  black_opacity70: 'var(--black_opacity70)',
  black_opacity40: 'var(--black_opacity40)',
  black_opacity10: 'var(--black_opacity10)',
  black_opacity5: 'var(--black_opacity5)',

  // white
  white500: 'var(--white500)',
  white_dark400: 'var(--white_dark400)',
  white_dark300: 'var(--white_dark300)',
  white_dark200: 'var(--white_dark200)',
  white_dark100: 'var(--white_dark100)',
  white_opacity70: 'var(--white_opacity70)',
  white_opacity40: 'var(--white_opacity40)',
  white_opacity10: 'var(--white_opacity10)',
  white_opacity5: 'var(--white_opacity5)',

  // green
  green600: 'var(--green600)',
  green500: 'var(--green500)',
  green400: 'var(--green400)',
  green300: 'var(--green300)',
  green200: 'var(--green200)',
  green100: 'var(--green100)',
  green_opacity80: 'var(--green_opacity80)',
  green_opacity30: 'var(--green_opacity30)',
  green_opacity10: 'var(--green_opacity10)',
  green_opacity5: 'var(--green_opacity5)',

  // yellow
  yellow600: 'var(--yellow600)',
  yellow500: 'var(--yellow500)',
  yellow400: 'var(--yellow400)',
  yellow300: 'var(--yellow300)',
  yellow200: 'var(--yellow200)',
  yellow100: 'var(--yellow100)',
  yellow_opacity80: 'var(--yellow_opacity80)',
  yellow_opacity30: 'var(--yellow_opacity30)',
  yellow_opacity10: 'var(--yellow_opacity10)',
  yellow_opacity5: 'var(--yellow_opacity5)',

  // red
  red600: 'var(--red600)',
  red500: 'var(--red500)',
  red400: 'var(--red400)',
  red300: 'var(--red300)',
  red200: 'var(--red200)',
  red100: 'var(--red100)',
  red_opacity80: 'var(--red_opacity80)',
  red_opacity30: 'var(--red_opacity30)',
  red_opacity10: 'var(--red_opacity10)',
  red_opacity5: 'var(--red_opacity5)',

  // Support Color
  // background
  background_dark: 'var(--background_dark)',
  background_light: 'var(--background_light)',
  chart_color: 'var(--chart_color)',

  // stock price color
  purple600: 'var(--purple600)',
  purple500: 'var(--purple500)',
  purple400: 'var(--purple400)',
  purple300: 'var(--purple300)',
  purple200: 'var(--purple200)',
  purple100: 'var(--purple100)',
  purple_opacity80: 'var(--purple_opacity80)',
  purple_opacity30: 'var(--purple_opacity30)',
  purple_opacity10: 'var(--purple_opacity10)',
  purple_opacity5: 'var(--purple_opacity5)',

  // cyan
  cyan600: 'var(--cyan600)',
  cyan500: 'var(--cyan500)',
  cyan400: 'var(--cyan400)',
  cyan300: 'var(--cyan300)',
  cyan200: 'var(--cyan200)',
  cyan100: 'var(--cyan100)',
  cyan_opacity80: 'var(--cyan_opacity80)',
  cyan_opacity30: 'var(--cyan_opacity30)',
  cyan_opacity10: 'var(--cyan_opacity10)',
  cyan_opacity5: 'var(--cyan_opacity5)',

  // custom
  gray19009: 'var(--gray19009)',
  black19002: 'var(--black19002)',
  black190024: 'var(--black190024)',
  black0025: 'var(--black0025)',
  black01: 'var(--black01)',
};

const dynamicColors = {
  // old-colors
  white_dark100ToBlack100: 'var(--white_dark100ToBlack100)',
  BlueOpacity5ToBlue100: 'var(--BlueOpacity5ToBlue100)',
  white_dark100ToWhite500: 'var(--white_dark100ToWhite500)',
  white_dark200ToWhite500: 'var(--white_dark200ToWhite500)',
  backgroundBlogSecondary: 'var(--backgroundBlogSecondary)',
  black600Towhite500: 'var(--black600Towhite500)',
  blue_opacity10ToWhite500: 'var(--blue_opacity10ToWhite500)',
  blue_opacity10ToBlue_opacity5: 'var(--blue_opacity10ToBlue_opacity5)',
  white_opacity5ToBlack200: 'var(--white_opacity5ToBlack200)',
  white_opacity5ToBlue100: 'var(--white_opacity5ToBlue100)',
  gray100ToGray500: 'var(--gray100ToGray500)',
  black300ToBlack400: 'var(--black300ToBlack400)',
  gray300ToGray500: 'var(--gray300ToGray500)',
  gray400ToBlue300: 'var(--gray400ToBlue300)',
  white500ToWhiteDark200: 'var(--white500ToWhiteDark200)',
  white500ToBlack500: 'var(--white500ToBlack500)',
  white500ToGray400: 'var(--white500ToGray400)',
  white_opacity5ToWhite500: 'var(--white_opacity5ToWhite500)',
  black300ToBlue300: 'var(--black300ToBlue300)',
  white500ToBlue500: 'var(--white500ToBlue500)',
  black500Towhite500: 'var(--black500Towhite500)',
  gray300ToGray400: 'var(--gray300ToGray400)',
  white_opacity10ToBlue200: 'var(--white_opacity10ToBlue200)',
  gray200ToGray400: 'var(--gray200ToGray400)',
  gray200ToGray500: 'var(--gray200ToGray500)',
  white_opacity10ToBlack200: 'var(--white_opacity10ToBlack200)',
  white_opacity10ToBlack100: 'var(--white_opacity10ToBlack100)',
  white_opacity10ToBlack_opacity10: 'var(--white_opacity10ToBlack_opacity10)',
  black400ToBlue200: 'var(--black400ToBlue200)',
  background_darkTobackground_light: 'var(--background_darkTobackground_light)',
  white_opacity5ToBlack100: 'var(--white_opacity5ToBlack100)',
  white_opacity5ToBlue_opacity5: 'var(--white_opacity5ToBlue_opacity5)',
  white_opacity10ToWhite500: 'var(--white_opacity10ToWhite500)',
  white_opacity10ToBlue_opacity5: 'var(--white_opacity10ToBlue_opacity5)',
  white_opacity5ToBlack_opacity10: 'var(--white_opacity5ToBlack_opacity10)',
  whiteDark100ToBlack100: 'var(--whiteDark100ToBlack100)',
  blueOpacity05ToBlue100: 'var(--blueOpacity05ToBlue100)',
  whiteDark100ToWhite500: 'var(--whiteDark100ToWhite500)',
  whiteDark200ToWhite500: 'var(--whiteDark200ToWhite500)',
  black01ToWhite500: 'var(--black01ToWhite500)',
  blueOpacity10ToWhite500: 'var(--blueOpacity10ToWhite500)',
  blueOpacity10ToBlueOpacity05: 'var(--blueOpacity10ToBlueOpacity05)',
  whiteOpacity05ToBlack200: 'var(--whiteOpacity05ToBlack200)',
  whiteOpacity05ToBlue100: 'var(--whiteOpacity05ToBlue100)',
  whiteOpacity05ToWhite500: 'var(--whiteOpacity05ToWhite500)',
  whiteOpacity10ToBlue200: 'var(--whiteOpacity10ToBlue200)',
  whiteOpacity10ToBlack200: 'var(--whiteOpacity10ToBlack200)',
  whiteOpacity10ToBlack100: 'var(--whiteOpacity10ToBlack100)',
  whiteOpacity10ToBlackOpacity10: 'var(--whiteOpacity10ToBlackOpacity10)',
  backgroundDarkToBackgroundLight: 'var(--backgroundDarkToBackgroundLight)',
  whiteOpacity05ToBlack100: 'var(--whiteOpacity05ToBlack100)',
  whiteOpacity05ToBlueOpacity05: 'var(--whiteOpacity05ToBlueOpacity05)',
  whiteOpacity10ToWhite500: 'var(--whiteOpacity10ToWhite500)',
  whiteOpacity10ToBlueOpacity05: 'var(--whiteOpacity10ToBlueOpacity05)',
  whiteOpacity05ToBlackOpacity10: 'var(--whiteOpacity05ToBlackOpacity10)',

  // new dynamic colors
  dc001: 'var(--dc001)',
  dc002: 'var(--dc002)',
  dc003: 'var(--dc003)',
  dc004: 'var(--dc004)',
  dc005: 'var(--dc005)',
  dc006: 'var(--dc006)',
  dc007: 'var(--dc007)',
  dc008: 'var(--dc008)',
  dc009: 'var(--dc009)',
  dc010: 'var(--dc010)',
  dc011: 'var(--dc011)',
  dc012: 'var(--dc012)',
  dc013: 'var(--dc013)',
  dc014: 'var(--dc014)',
  dc015: 'var(--dc015)',
  dc016: 'var(--dc016)',
  dc017: 'var(--dc017)',
  dc018: 'var(--dc018)',
  dc019: 'var(--dc019)',
  dc020: 'var(--dc020)',
  dc021: 'var(--dc021)',
  dc022: 'var(--dc022)',
  dc023: 'var(--dc023)',
  dc024: 'var(--dc024)',
  dc025: 'var(--dc025)',
  dc026: 'var(--dc026)',
  dc027: 'var(--dc027)',
  dc028: 'var(--dc028)',
  dc029: 'var(--dc029)',
  dc030: 'var(--dc030)',
  dc031: 'var(--dc031)',
  dc032: 'var(--dc032)',
  dc033: 'var(--dc033)',
  dc034: 'var(--dc034)',
  dc035: 'var(--dc035)',
  dc036: 'var(--dc036)',
  dc037: 'var(--dc037)',
  dc038: 'var(--dc038)',
  dc039: 'var(--dc039)',
  dc040: 'var(--dc040)',
  dc041: 'var(--dc041)',
  dc042: 'var(--dc042)',
  dc043: 'var(--dc043)',
  dc044: 'var(--dc044)',
  dc045: 'var(--dc045)',
  dc046: 'var(--dc046)',
  dc047: 'var(--dc047)',
  dc048: 'var(--dc048)',
  dc049: 'var(--dc049)',
  dc050: 'var(--dc050)',
  dc051: 'var(--dc051)',
  dc052: 'var(--dc052)',
  dc053: 'var(--dc053)',
  dc054: 'var(--dc054)',
  dc055: 'var(--dc055)',
  dc056: 'var(--dc056)',
  dc057: 'var(--dc057)',
  dc058: 'var(--dc058)',
  dc059: 'var(--dc059)',
  dc060: 'var(--dc060)',
  dc061: 'var(--dc061)',
  dc062: 'var(--dc062)',
  dc063: 'var(--dc063)',
  dc064: 'var(--dc064)',
  dc065: 'var(--dc065)',
  dc066: 'var(--dc066)',
  dc067: 'var(--dc067)',
  dc068: 'var(--dc068)',
  dc069: 'var(--dc069)',
  dc070: 'var(--dc070)',
  dc071: 'var(--dc071)',
  dc072: 'var(--dc072)',
  dc073: 'var(--dc073)',
  dc074: 'var(--dc074)',
  dc075: 'var(--dc075)',
  dc076: 'var(--dc076)',
};

export const colorVariables = {
  ...singleColors,
  ...dynamicColors,
};
