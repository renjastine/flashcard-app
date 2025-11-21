import { RefObject } from "react";

export type TextareaProps = {
    value: string;
    setCard: (val: string) => void;
    placeholder: string;
}

export type CardT = {
    readonly id: number
    q: string,
    a: string
}

export type AddFlashCardProps = {
    card: CardT;
    setCard: (val: CardT) => void;
    setFlashcards: (val: CardT) => void;
    flashcards: CardT[];
    createUniqueId: () => number;
    setMessage?: (val: string) => void;
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
    flashcards: CardT[];
    setFlashcards: (val: CardT[]) => void;
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

export type UpdateCardProps = {
    card: CardT;
    flashCards: CardT[];
    setFlashCards: (val: CardT) => void;
    setEditMode: (val: boolean) => void;
}

export type DeleteAllProps = {
    editMode: boolean;
    setEditMode: (val: boolean) => void;
    setFlashCards: (val: CardT[]) => void;
}

export type SaveCardProps = {
    setMessage: (val: string) => void;
    flashCards: CardT[];
}

export type NoDisplayProps = {
    setManageCard: (val: boolean) => void;
}

export type ManageCardsModalProps = NoDisplayProps & {
    setCurrentIndex: (val: number) => void;
    flashcards: CardT[];
    setFlashcards: (val: CardT | CardT[]) => void
}

export type FlashcardProps = {
    flipped: boolean;
    setFlipped: (val: boolean) => void;
    question: string;
    answer: string;
}

export type NextCardProps = {
    setFlipped: (val: boolean) => void;
    flashcardsLen: number;
    currentIndex: number;
    setCurrentIndex: (val: number) => void;
}

export type ShuffleCardProps = {
    setCurrentIndex: (val: number) => void;
    flashcards: CardT[];
    setFlashcards: (val: CardT[]) => void;
}