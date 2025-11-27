export interface CardProps {
  title: string;
  description?: string;
  link?: string;
  tag?: string;
  imageUrl?: string ;
  size?:number;
}

export interface CardGridProps {
  cards: CardProps[];
}

export interface BlogItemType{
  title:string,
  items:CardProps[]
}
