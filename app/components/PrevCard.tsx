import { NextCardProps } from "../types"

function PrevCard({ setFlipped, flashcardsLen, currentIndex, setCurrentIndex }: NextCardProps) {
    const handleClick = () => {
        setFlipped(false)

        setTimeout(()=>{
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : flashcardsLen - 1);
        }, 300)
    }

    return (
        <button
            onClick={handleClick}
            className='cursor-pointer flex items-center px-5 gap-3 h-10 bg-gray-950 rounded-md shadow-sm text-gray-50 select-none'
        >
            <img src="/next.svg" className='w-4 rotate-y-180' alt="next" />
            Prev
        </button>
    )
}

export default PrevCard