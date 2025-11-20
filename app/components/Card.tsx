import React from 'react'
import CardListControl from './CardListControl'
import { CardT } from '../types';

type CardProps = {
    keyID: number;
    id: number;
    question: string;
    answer: string;
    flashCards: CardT[];
}

function Card({ keyID, id, question, answer, flashCards }: CardProps) {
    return (
        <div
            key={id}
            className='border border-black/25 w-full min-h-5 rounded-lg flex flex-col px-6 py-4 gap-4 hover:bg-gray-100'
        >
            <div className='flex max-[321px]:justify-center justify-end w-full gap-5 border-b pb-4'>
                <CardListControl controlName={keyID > 0 ? "moveUp" : "moveUpDisabled"} />
                <CardListControl controlName={keyID === flashCards.length - 1 ? "moveDownDisabled" : "moveDown"} />
                <CardListControl controlName="edit" />
                <CardListControl controlName="delete" />
            </div>
            <div className='flex gap-3'>
                <div className='flex-none pt-1'>
                    <img src="/number-symbol.svg" className='w-3' alt="number-symbol" />
                </div>
                <div className='flex-1 flex flex-col text-gray-400'>
                    <p>Q:</p>
                    <p className='text-black whitespace-pre-wrap'>{question}</p>
                    <p>A:</p>
                    <p className='whitespace-pre-wrap'>{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Card