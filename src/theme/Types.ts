export enum Themes {
    light = 'light',
    dark = 'dark',
}
export type ThemeType = keyof typeof Themes;
  export interface DefaultTheme {
    PRIMARY_COLOR: String;
    SECONDARY_COLOR: String;
    SUCCESS_COLOR: String;
    DANGER_COLOR: String;
    WARNING_COLOR: String;
    INFO_COLOR: String;
    LIGHT_COLOR: String;
    DARK_COLOR: String;
    WHITE_COLOR: String;
    GLASS_COLOR: String;
    BLACK_COLOR: String;
    SIDEBAR_COLOR: String;
    TEXT_SIDEBAR_COLOR: String;
  }
  export type ThemeStylesType = {
    theme: ThemeType;
  }