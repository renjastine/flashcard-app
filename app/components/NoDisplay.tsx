import { NoDisplayProps } from '../types'

function NoDisplay({ setManageCard } : NoDisplayProps) {
    const handleClick = () => {
        setManageCard(true);
    }

    return (
        <div className='w-full flex flex-col items-center text-center gap-1'>
            <h1 className='w-50'>No Flashcards Yet</h1>
            <button
                onClick={handleClick}
                className='flex gap-3 border px-3 py-2 rounded-sm cursor-pointer bg-gray-950 text-white'
            >
                <img className="w-4" src="/add-white.svg" alt="add" />
                Add First Card
            </button>
        </div>
    )
}

export default NoDisplay