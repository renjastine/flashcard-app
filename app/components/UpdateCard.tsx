import { UpdateCardProps } from "../types"
function UpdateCard({ card, flashCards, setFlashCards, setEditMode }: UpdateCardProps) {
    const handleClick = () => {
        const { id, q, a } = card;
        const index = flashCards.findIndex(c => c.id === id);
        if (index !== -1) {
            const [removed] = flashCards.splice(index, 1);
            setFlashCards({ ...removed, q: q, a: a })
            setEditMode(false);
        }
    }

    return (
        < button
            className="flex items-center px-3 gap-2 h-9 bg-stone-900 text-stone-100 rounded-md w-fit cursor-pointer"
            onClick={handleClick}
        >
            Update Card
        </button >
    )
}

export default UpdateCard