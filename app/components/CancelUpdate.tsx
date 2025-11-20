type CancelUpdateProps = {
    setEditMode: (val: boolean) => void;
}
function CancelUpdate({ setEditMode }: CancelUpdateProps) {
    const handleClick = () => {
        setEditMode(false)
    }

    return (
        < button
            className="flex items-center px-3 gap-2 h-9 bg-white rounded-md w-fit cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
        >
            Cancel
        </button >
    )
}

export default CancelUpdate