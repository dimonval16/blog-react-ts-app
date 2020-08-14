import { History } from 'history';

interface ColorTheme {
  primaryBackground: string;
  secondaryBackground: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  primaryHeadColor: string;
}

export interface MapState {
  colorTheme: ColorTheme;
}

export interface MapDispatch {
  onCreatingNewPost: (formValues: FormValues) => void;
}

interface FormValues {
  title: string;
  body: string;
}

export interface CreatePostPageProps {
  colorTheme: ColorTheme;
  onCreatingNewPost: (formValues: FormValues) => void;
  history?: History;
}

export interface StyledButtonI {
  bgColor: string;
}
