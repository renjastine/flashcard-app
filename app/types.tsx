import { RefObject } from "react";

export type TextareaProps = {
    value: string;
    setCard: (val: string) => void;
    placeholder: string;
}

export type CardT = {
    id: number
    q: string,
    a: string
}

export type AddFlashCardProps = {
    card: CardT;
    setCard: (val: CardT) => void;
    setFlashCards: (val: CardT) => void;
    flashCards: CardT[];
    createUniqueId: () => number;
}

export type CardControlProp = AddFlashCardProps & {
    editMode: boolean;
    setEditMode: (val: boolean) => void;
};

export type CardProps = {
    keyID: number;
    setCard: (val: CardT) => void;
    question: string;
    answer: string;
    flashCards: CardT[];
    setFlashCards: (val: CardT[]) => void;
    setEditMode: (val: boolean) => void;
    containerRef: RefObject<HTMLDivElement | null>;
    cardID: number
}

export type CardListControlProps = {
    keyID: number;
    cardID?: number;
    setCard?: (val: CardT) => void;
    controlName: string,
    flashCards: CardT[];
    setFlashCards: (val: CardT[]) => void;
    setEditMode?: (val: boolean) => void;
    containerRef?: RefObject<HTMLDivElement | null>;
}