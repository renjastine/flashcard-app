import { NextCardProps } from "../types"

function NextCard({ setFlipped, flashcardsLen, currentIndex, setCurrentIndex }: NextCardProps) {
    const handleClick = () => {
        setFlipped(false)

        setTimeout(() => {
            setCurrentIndex(currentIndex < flashcardsLen - 1 ? currentIndex + 1 : 0);
        }, 300)
    }

    return (
        <button
            onClick={handleClick}
            className='flex items-center px-5 gap-3 h-10 bg-gray-950 rounded-md shadow-sm text-gray-50 select-none cursor-pointer'
        >
            <span className="max-[375px]:hidden">
                Next
            </span>
            <img src="/next.svg" className='w-4' alt="next" />
        </button>
    )
}

export default NextCard