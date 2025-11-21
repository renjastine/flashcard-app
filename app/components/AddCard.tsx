'use client';
import { useEffect } from "react";
import { AddFlashCardProps } from "../types";

function AddCard({
    card,
    setCard,
    setFlashCards,
    flashCards,
    createUniqueId
}: AddFlashCardProps) {

    const handleClick = () => {
        if (flashCards.length < 200 && card.q !== "" && card.a !== "") setFlashCards(card)
    }

    useEffect(() => {
        const nextID = createUniqueId();
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