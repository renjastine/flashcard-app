'use client';
import { useEffect, useState } from "react";

import ManageCardsModal from "./components/ManageCardsModal";
import ShuffleCard from "./components/ShuffleCard";
import Flashcards from "./components/Flashcards";
import NoDisplay from "./components/NoDisplay";
import NextCard from "./components/NextCard";
import PrevCard from "./components/PrevCard";

import { createCards } from "./data";
import { CardT } from "./types";

export default function Home() {
  const [manageCard, setManageCard] = useState(false)
  const [flashcards, setFlashcards] = useState<CardT[]>([]);
  const [noDisplay, setNoDisplay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("flashcards");
    const initialCards = storage && storage !== "[]" ? JSON.parse(storage) : createCards;
    setFlashcards(initialCards);

  }, [])

  useEffect(() => {
    if (flashcards.length < 1) {
      setManageCard(true)
      setNoDisplay(true)
    }
    else {
      setNoDisplay(false)
    }

  }, [flashcards])

  const handleClick = () => {
    setManageCard(true);
  }

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="flex flex-col justify-center items-center p-4 w-full max-w-[730px] gap-6">
        {noDisplay ? <NoDisplay setManageCard={val => setManageCard(val)} /> :
          <>
            < div className="flex justify-between items-center w-full" >
              < h1 className=""> Flashcard Quiz</h1 >
              < button
                onClick={handleClick}
                className="select-none flex items-center border px-3 gap-2 h-9 bg-stone-900 text-stone-100 rounded-md cursor-pointer"
              >
                <img className="w-4 pointer-events-none" src="/add-white.svg" alt="add" />
                <span className="max-[375px]:hidden">
                  Manage Cards
                </span>
              </button >
            </div >
            <h1 className="text-stone-400">Card {currentIndex + 1} of {flashcards.length}</h1>
            <Flashcards
              flipped={flipped}
              setFlipped={setFlipped}
              question={flashcards[currentIndex]?.q}
              answer={flashcards[currentIndex]?.a}
            />
            <div className='flex gap-5'>
              <PrevCard
                setFlipped={val => setFlipped(val)}
                flashcardsLen={flashcards.length}
                currentIndex={currentIndex}
                setCurrentIndex={val => setCurrentIndex(val)}
              />
              <ShuffleCard
                setCurrentIndex={val => setCurrentIndex(val)}
                flashcards={flashcards}
                setFlashcards={val => setFlashcards(val)}
              />
              <NextCard
                setFlipped={val => setFlipped(val)}
                flashcardsLen={flashcards.length}
                currentIndex={currentIndex}
                setCurrentIndex={val => setCurrentIndex(val)}
              />
            </div>
          </>}
        {manageCard &&
          <ManageCardsModal
            setCurrentIndex={val => setCurrentIndex(val)}
            setManageCard={setManageCard}
            flashcards={flashcards}
            setFlashcards={val => Array.isArray(val) ? setFlashcards(val) : setFlashcards(prev => [...prev, val])}
          />}
      </main>
    </div>
  );
}
