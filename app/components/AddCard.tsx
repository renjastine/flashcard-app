'use client';
import { useEffect, useState } from "react";
import { CardT } from "../types";
import next from "next";

type AddFlashCardProps = {
    card: CardT;
    setCard: (val: CardT) => void;
    setFlashCards: (val: CardT) => void;
    flashCards: CardT[]
}

function AddCard({
    card,
    setCard,
    setFlashCards,
    flashCards
}: AddFlashCardProps) {

    const handleClick = () => {
        setFlashCards(card);
    }

    useEffect(() => {
        const nextID = flashCards.length > 0 ? flashCards[flashCards.length - 1].id + 1 : 1;
        setCard({ id: nextID, q: "", a: "" });
    }, [flashCards])

    return (
        < button
            className="flex items-center px-3 gap-2 h-9 bg-stone-900 text-stone-100 rounded-md w-fit cursor-pointer"
            onClick={handleClick}
        >
            <img className="w-4" src="/add-white.svg" alt="add" />
            Add Card
        </button >
    )
}

export default AddCard