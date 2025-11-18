export type CardT = {
    id: number
    q: string,
    a: string
}

export type AddFlashCardProps = {
    card: CardT;
    setFlashCards: (val: CardT) => void;
}