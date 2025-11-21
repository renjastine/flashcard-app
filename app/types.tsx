import { RefObject } from "react";

type Setter<T> = (val: T) => void;

export type TextareaProps = {
    value: string;
    setCard: Setter<string>;
    placeholder: string;
}

export type CardT = {
    readonly id: number
    q: string,
    a: string
}

export type AddFlashCardProps = {
    card: CardT;
    setCard: Setter<CardT>;
    setFlashcards: Setter<CardT>;
    flashcards: CardT[];
    createUniqueId: () => number;
    setMessage?: Setter<string>;
}

export type CardControlProp = AddFlashCardProps & {
    editMode: boolean;
    setEditMode: Setter<boolean>;
};

export type CardProps = {
    keyID: number;
    setCard: Setter<CardT>;
    question: string;
    answer: string;
    flashcards: CardT[];
    setFlashcards: Setter<CardT[]>;
    setEditMode: Setter<boolean>;
    containerRef: RefObject<HTMLDivElement | null>;
    cardID: number
}

export type CardListControlProps = {
    keyID: number;
    cardID?: number;
    setCard?: Setter<CardT>;
    controlName: string,
    flashCards: CardT[];
    setFlashCards: Setter<CardT[]>
    setEditMode?: Setter<boolean>;
    containerRef?: RefObject<HTMLDivElement | null>;
}

export type UpdateCardProps = {
    card: CardT;
    flashCards: CardT[];
    setFlashCards: Setter<CardT>;
    setEditMode: Setter<boolean>;
}

export type DeleteAllProps = {
    editMode: boolean;
    setEditMode: Setter<boolean>;
    setFlashCards: Setter<CardT[]>
}

export type SaveCardProps = {
    setMessage: Setter<string>;
    flashCards: CardT[];
}

export type NoDisplayProps = {
    setManageCard: Setter<boolean>;
}

export type ManageCardsModalProps = NoDisplayProps & {
    setCurrentIndex: Setter<number>;
    flashcards: CardT[];
    setFlashcards: Setter<CardT | CardT[]>;
}

export type FlashcardProps = {
    flipped: boolean;
    setFlipped: Setter<boolean>;
    question: string;
    answer: string;
}

export type NextCardProps = {
    setFlipped: Setter<boolean>;
    flashcardsLen: number;
    currentIndex: number;
    setCurrentIndex: Setter<number>;
}

export type ShuffleCardProps = {
    setCurrentIndex: Setter<number>;
    flashcards: CardT[];
    setFlashcards: Setter<CardT[]>
}

export type CancelUpdateProps = {
    setEditMode: Setter<boolean>;
}