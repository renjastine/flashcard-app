'use client';
import { useState } from 'react'
import { FlashcardProps } from '../types';

const Flashcards = ({ flipped, setFlipped, question, answer }: FlashcardProps) => {
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`card w-full h-[400px] relative cursor-pointer ${flipped ? "flip" : ""}`}
    >
      <div className="card-face bg-white h-full flex flex-col justify-center items-center rounded-md shadow-md">
        <div className='my-5 flex flex-col justify-center items-center w-full'>
          <p className='text-fuchsia-600'>Question</p>
          <p className={`${!flipped ? "overflow-auto" : "hidden"} w-full text-center text-wrap max-h-72 whitespace-pre-wrap`}>
            {question}
          </p>
        </div>
        <p className='text-gray-400 select-none'>Click to reveal answer</p>
      </div>

      <div className="card-face card-back bg-linear-35 from-purple-500 to-purple-400 h-full flex flex-col justify-center items-center rounded-md shadow-md">
        <div className='my-5 flex flex-col justify-center items-center w-full'>
          <p className='text-white'>Answer</p>
          <p className={`${flipped ? "overflow-auto" : "hidden"} w-full text-center text-wrap max-h-72 text-white whitespace-pre-wrap`}>
            {answer}
          </p>
        </div>
        <p className='text-gray-200 select-none'>Click to see question</p>
      </div>
    </div>
  )
}

export default Flashcards