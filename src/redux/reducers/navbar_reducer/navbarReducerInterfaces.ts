interface PageLink {
  title: string;
  link: string;
  id: string;
}

export interface NavbarData {
  pageLinks: PageLink[];
}

export interface NavbarAction {
  type: string;
}
