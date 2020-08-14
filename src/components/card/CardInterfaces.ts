export interface CardProps {
  activeColor: string;
  title?: string;
  body?: string;
  onDelete: () => void;
  onCardClick: () => void;
}
