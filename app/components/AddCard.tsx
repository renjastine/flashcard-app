import { AddFlashCardProps } from "../types/types";

function AddCard({ card, setFlashCards }: AddFlashCardProps) {
    const handleClick = () => {
        setFlashCards(card);
    }
    
    return (
        < button
            className="flex items-center px-3 gap-2 h-9 bg-stone-900 text-stone-100 rounded-md w-fit cursor-pointer"
            onClick={handleClick}
        >
            <img className="w-4" src="/add-white.svg" alt="add" />
            Add Card
        </button >
    )
}

export default AddCard