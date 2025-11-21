'use client';
import { useEffect } from "react";
import { AddFlashCardProps } from "../types";

function AddCard({
    card,
    setCard,
    setFlashcards,
    flashcards,
    createUniqueId,
    setMessage
}: AddFlashCardProps) {

    const handleClick = () => {
        if (flashcards.length < 200 && card.q !== "" && card.a !== "") {
            setFlashcards(card)
            setMessage?.("Item Added!");

            setTimeout(() => {
                setMessage?.("");
            }, 1500)
        }
    }

    useEffect(() => {
        const nextID = createUniqueId();
        setCard({ id: nextID, q: "", a: "" });
    }, [flashcards])

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