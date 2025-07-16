export interface CardProps {
  title: string;
  description?: string;
  link?:string;
}


export interface CardGridProps {
  cards: CardProps[];
}
