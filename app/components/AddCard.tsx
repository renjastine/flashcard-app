'use client';

import React, { useEffect, useState } from 'react'

type Card = {
    q: string,
    a: string
}
type AddCardProps = {
    card: Card;
}

function AddCard({ card }: AddCardProps) {
    const [flashCards, setFlashCards] = useState<Card[]>([]);

    const handleClick = () => {
        setFlashCards(prev => [...prev, card]);
    }

    // useEffect(() => {
    //     console.log(flashCards);
    // }, [flashCards])

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