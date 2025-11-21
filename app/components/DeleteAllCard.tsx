import { DeleteAllProps } from "../types"

function DeleteAllCard({ editMode, setEditMode, setFlashCards }: DeleteAllProps) {
    const handleClick = () => {
        setFlashCards([]);
        if (editMode) setEditMode(false)
    }

    return (
        <button
            onClick={handleClick}
            className="border flex justify-center items-center px-2 py-1 gap-2 cursor-pointer rounded-md select-none text-red-400"
        >
            <img src="delete.svg" className='w-3 pointer-events-none' alt={"deleteall"} />
            Delete All
        </button>
    )
}

export default DeleteAllCard