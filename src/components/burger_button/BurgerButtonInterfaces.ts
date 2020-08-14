export interface StyledBurgerWrap {
  open: boolean;
  bgColor: string;
}

export interface BurgerButtonProps {
  open: boolean;
  onClick: () => void;
  bgColor: string;
}
