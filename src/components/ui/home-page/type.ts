export interface Card {
  id: string;
  link: string;
  name: string;
}

export interface HomepageUIProps {
  cards: Card[];
  onCardClick: (id: string) => void;
}