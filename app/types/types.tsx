export type CardT = {
    q: string,
    a: string
}

export type AddFlashCardProps = {
    card: CardT;
    setFlashCards: (val: CardT) => void;
}