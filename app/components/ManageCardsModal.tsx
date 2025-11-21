'use client';

import { useEffect, useRef, useState } from 'react'

import DeleteAllCard from './DeleteAllCard';
import CardControl from './CardControl'
import Textarea from './Textarea'
import Card from './Card'

import { CardT, ManageCardsModalProps } from '../types';

const ManageCardsModal = ({ setCurrentIndex, setManageCard, flashcards, setFlashcards }: ManageCardsModalProps) => {
  const [editMode, setEditMode] = useState(false);
  const [translateY, setTranslateY] = useState("translate-y-50 opacity-0")
  const containerRef = useRef<HTMLDivElement>(null);

  const createUniqueId = (): number => {
    const sorted = [...flashcards].sort((a, b) => a.id - b.id);

    if (sorted.length > 0)
      return sorted[sorted.length - 1].id + 1

    return 1
  }

  const [card, setCard] = useState<CardT>({
    id: createUniqueId(),
    q: "",
    a: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setTranslateY("translate-y-0");
    }, 1)
  }, [])

  const handleClick = () => {
    setTranslateY("translate-y-50 opacity-0");

    setTimeout(() => {
      setManageCard(false);
      setCurrentIndex(0)
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className='bg-black/30 fixed w-screen h-screen z-1 top-0 left-0 flex items-center justify-center px-4'>
      <div
        className={`transition ${translateY} duration-300 ease-in flex flex-col justify-center w-full max-w-[700px] h-[95%] bg-white rounded-md shadow-md p-4 relative`}
      >
        <div
          onClick={handleClick}
          className="w-4 absolute top-4 right-4 cursor-pointer select-none"
        >
          <img src="/x-close.svg" className='pointer-events-none' alt="close" />
        </div>
        <div className='flex justify-between'>
          <h1 className='text-xl font-medium'>Manage flashcards</h1>
        </div>
        <h2 className='text-sm text-stone-400 my-2'>Add, Edit, Delete, or Reorder your flashcards</h2>
        <div ref={containerRef} className='max-h-123 overflow-y-auto text-sm'>
          <form onSubmit={handleSubmit} className='rounded-md w-full flex flex-col px-4 py-5 bg-gray-200'>
            <dt>Question</dt>
            <Textarea
              value={card.q}
              setCard={val => setCard({ ...card, q: val })}
              placeholder='Enter your question...'
            />
            <dt className='mt-4'>Answer</dt>
            <Textarea
              value={card.a}
              setCard={val => setCard({ ...card, a: val })}
              placeholder='Enter the answer...'
            />
            <CardControl
              card={card}
              setCard={setCard}
              createUniqueId={createUniqueId}
              setFlashcards={val => setFlashcards(val)}
              flashcards={flashcards}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          </form>
          <div className="mt-4 text-sm mb-2 flex items-center justify-between">
            <h1 className=''>Your flashcards ({flashcards.length})</h1>
            <DeleteAllCard
              editMode={editMode}
              setEditMode={setEditMode}
              setFlashCards={val => setFlashcards(val)}
            />
          </div>
          <div className='flex flex-col gap-3'>
            {flashcards.map(
              (card, i) =>
                <Card
                  key={card.id}
                  keyID={i}
                  cardID={card.id}
                  setCard={setCard}
                  question={card.q}
                  answer={card.a}
                  flashcards={flashcards}
                  setFlashcards={val => setFlashcards(val)}
                  setEditMode={val => setEditMode(val)}
                  containerRef={containerRef}
                />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageCardsModal