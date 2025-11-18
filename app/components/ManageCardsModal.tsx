'use client';

import React, { useState } from 'react'
import Textarea from './Textarea'
import CardControl from './CardControl'
import Card from './Card'

const ManageCardsModal = () => {
  const [card, setCard] = useState({ q: "", a: "" });
  
  return (
    <div className='bg-black/30 fixed w-screen h-screen z-1 top-0 left-0 flex items-center justify-center px-4'>
      <div className="flex flex-col justify-center w-full max-w-[700px] h-[95%] bg-white rounded-md shadow-md p-4 relative">
        <img src="/x-close.svg" className='w-4 absolute top-4 right-4 cursor-pointer' alt="close" />
        <div className='flex justify-between'>
          <h1 className='text-xl font-medium'>Manage Flashcards</h1>
        </div>
        <h2 className='text-sm text-stone-400 my-2'>Add, Edit, Delete, or Reorder your flashcards</h2>
        <div className='max-h-123 overflow-y-auto text-sm'>
          <div className='rounded-md w-full flex flex-col px-4 py-5 bg-gray-200'>
            <h1>Question</h1>
            <Textarea
              value={card.q}
              setCard={val => setCard({ ...card, q: val })}
              placeholder='Enter your question...'
            />
            <h1 className='mt-4'>Answer</h1>
            <Textarea
              value={card.a}
              setCard={val => setCard({ ...card, a: val })}
              placeholder='Enter the answer...'
            />
            <CardControl card={card}/>
          </div>
          <h1 className='mt-4 text-sm mb-2'>Your Flashcards (1)</h1>
          <div className='flex flex-col gap-3'>
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageCardsModal