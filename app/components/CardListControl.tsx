function CardListControl(
    { controlName }: {
        controlName: "moveUp" | "moveDown" | "moveUpDisabled" | "moveDownDisabled" | "edit" | "delete"
    }
) {

    const controlMap: Record<string, string> = {
        moveUp: "move-up.svg",
        moveDown: "move-down.svg",
        moveUpDisabled: "move-up-disabled.svg",
        moveDownDisabled: "move-down-disabled.svg",
        edit: "edit.svg",
        delete: "delete.svg",
    };

    return (
        <div
            className={`flex justify-center w-8 h-8 rounded-md transition-colors
                ${controlName !== "moveUpDisabled" && controlName !== "moveDownDisabled" ? "hover:bg-gray-300 cursor-pointer" : ""}`}
        >
            <img src={controlMap[controlName]} className='w-3' alt={controlName} />
        </div>
    )
}

export default CardListControl