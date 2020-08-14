export interface PageLink {
  title: string;
  link: string;
  id: string;
}

interface NavbarData {
  pageLinks: PageLink[];
}

interface ColorTheme {
  primaryBackground: string;
  secondaryBackground: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  primaryHeadColor: string;
}

export interface MapState {
  navbarData: NavbarData;
  colorTheme: ColorTheme;
}

export interface NavbarProps {
  navbarData: NavbarData;
  colorTheme: ColorTheme;
}

export interface StyledNavWrap {
  backgroundColor: string;
}

export interface StyledNavList {
  backgroundColor: string;
  open: boolean;
}
