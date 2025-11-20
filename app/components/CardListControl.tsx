import { CardListControlProps, CardT } from "../types";
function CardListControl({
    controlName,
    keyID,
    cardID,
    setCard,
    flashCards,
    setFlashCards,
    setEditMode,
    containerRef
}: CardListControlProps) {

    const controlMap: Record<string, string> = {
        moveUp: "move-up.svg",
        moveDown: "move-down.svg",
        moveUpDisabled: "move-up-disabled.svg",
        moveDownDisabled: "move-down-disabled.svg",
        edit: "edit.svg",
        delete: "delete.svg",
    };

    function moveCard(direction: "up" | "down") {
        const newIndex = direction === "up" ? keyID - 1 : keyID + 1;
        const copyFlashCards = [...flashCards];
        const card = copyFlashCards.splice(keyID, 1)[0];
        copyFlashCards.splice(newIndex, 0, card);
        setFlashCards(copyFlashCards);
    }

    function editCard() {
        setEditMode?.(true);
        containerRef?.current?.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        const card = flashCards.find(c => c.id === cardID);
        if (card) setCard?.(card)
    }

    const handleClick = () => {
        if (controlName === "moveUp") moveCard("up")
        if (controlName === "moveDown") moveCard("down")
        if (controlName === "edit") editCard()
    }

    return (
        <div
            className={`flex justify-center w-8 h-8 rounded-md transition-colors select-none
                ${controlName !== "moveUpDisabled" && controlName !== "moveDownDisabled" ? "hover:bg-gray-300 cursor-pointer" : ""}`}
            onClick={handleClick}
        >
            <img src={controlMap[controlName]} className='w-3 pointer-events-none' alt={controlName} />
        </div>
    )
}

export default CardListControl