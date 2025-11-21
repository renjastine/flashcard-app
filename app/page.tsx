'use client';
import { useEffect, useState } from "react";
import Flashcards from "./components/Flashcards";
import ManageCardsModal from "./components/ManageCardsModal";
import { CardT } from "./types";
import { createCards } from "./data";
import NoDisplay from "./components/NoDisplay";

export default function Home() {
  const [manageCard, setManageCard] = useState(false)
  const [flashcards, setFlashcards] = useState<CardT[]>([]);
  const [noDisplay, setNoDisplay] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("flashcards");
    const initialCards = storage && storage !== "[]" ? JSON.parse(storage) : [];
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
                <img className="w-4" src="/add-white.svg" alt="add" />
                Manage Cards
              </button >
            </div >
            <h1 className="text-stone-400">Card 1 of {flashcards.length}</h1>
            <Flashcards />
            <div className='flex gap-5'>
              <button className='flex items-center px-5 gap-3 h-10 bg-white rounded-md shadow-sm'>
                <img src="/shuffle.svg" className='w-4' alt="shuffle" />
                Shuffle
              </button>
              <button className='flex items-center px-5 gap-3 h-10 bg-gray-950 rounded-md shadow-sm text-gray-50'>
                Next
                <img src="/next.svg" className='w-4' alt="shuffle" />
              </button>
            </div>
          </>}
        {manageCard &&
          <ManageCardsModal
            setManageCard={setManageCard}
          />}
      </main>
    </div>
  );
}
