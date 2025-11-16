import React from 'react'
import CardListControl from './CardListControl'

function Card() {
    return (
        <div className='border border-black/25 w-full min-h-5 rounded-lg flex flex-col px-6 py-4 gap-4 hover:bg-gray-100'>
            <div className='flex max-[321px]:justify-center justify-end w-full gap-5 border-b pb-4'>
                <CardListControl controlName="moveUpDisabled" />
                <CardListControl controlName="moveDownDisabled" />
                <CardListControl controlName="edit" />
                <CardListControl controlName="delete" />
            </div>
            <div className='flex gap-3'>
                <div className='flex-none pt-1'>
                    <img src="/number-symbol.svg" className='w-3' alt="number-symbol" />
                </div>
                <div className='flex-1 flex flex-col text-gray-400'>
                    <p>Q:</p>
                    <p className='text-black'>What is 2 + 2?</p>
                    <p>A:</p>
                    <p>4</p>
                </div>
            </div>
        </div>
    )
}

export default Card