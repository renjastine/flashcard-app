export type CardT = {
    id: number
    q: string,
    a: string
}

export type AddFlashCardProps = {
    card: CardT;
    setCard: (val: CardT) => void;
    setFlashCards: (val: CardT) => void;
    flashCards: CardT[]
}