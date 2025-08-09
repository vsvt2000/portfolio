export interface CardProps {
  title: string;
  description?: string;
  link?: string;
  tag?: string;
  imageUrl?: string ;
}

export interface CardGridProps {
  cards: CardProps[];
}
