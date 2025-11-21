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
            <img src="/shuffle.svg" style={{ width: '16px' }} alt="shuffle" />
            <span className="max-[375px]:hidden">
                Shuffle
            </span>
        </button>
    )
}

export default ShuffleCard