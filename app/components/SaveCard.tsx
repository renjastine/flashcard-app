import { SaveCardProps } from "../types"

function SaveCard({ flashCards, setMessage }: SaveCardProps) {
    const handleClick = () => {
        localStorage.setItem("flashcards", JSON.stringify(flashCards));
        setMessage("Saved!");

        setTimeout(() => {
            setMessage("");
        }, 1500)

    }

    return (
        < button
            type="button"
            onClick={handleClick}
            className="flex items-center px-3 gap-2 h-9 bg-white text-black rounded-md w-fit cursor-pointer hover:bg-stone-50"
        >
            <img className="w-4" src="/save.svg" alt="save" />
            <span className="max-[375px]:hidden">
                Save to Device
            </span>
        </button >
    )
}

export default SaveCard