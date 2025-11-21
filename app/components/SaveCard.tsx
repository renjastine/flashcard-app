import { SaveCardProps } from "../types"

function SaveCard({ flashCards }: SaveCardProps) {
    const handleClick = () => {
        localStorage.setItem("flashcards", JSON.stringify(flashCards));
    }

    return (
        < button
            onClick={handleClick}
            className="flex items-center px-3 gap-2 h-9 bg-white text-black rounded-md w-fit cursor-pointer hover:bg-stone-50"
        >
            <img className="w-4" src="/save.svg" alt="save" />
            Save
        </button >
    )
}

export default SaveCard