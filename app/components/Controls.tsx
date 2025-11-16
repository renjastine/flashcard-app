import React from 'react'

const Controls = () => {
    return (
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
    )
}

export default Controls