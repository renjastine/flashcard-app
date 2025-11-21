import { ShuffleCardProps } from "../types"

function ShuffleCard({ setCurrentIndex, flashcards, setFlashcards }: ShuffleCardProps) {
    const handleClick = () => {
        setCurrentIndex(0)
        const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
        setFlashcards(shuffled);
    }

    return (
        <button
            onClick={handleClick}
            className='flex items-center px-5 gap-3 h-10 bg-white rounded-md shadow-sm select-none cursor-pointer'
        >
            <img src="/shuffle.svg" className='w-4' alt="shuffle" />
            Shuffle
        </button>
    )
}

export default ShuffleCard