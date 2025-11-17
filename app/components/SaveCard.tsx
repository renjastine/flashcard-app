import React from 'react'

function SaveCard() {
    return (
        < button className="flex items-center px-3 gap-2 h-9 bg-white text-black rounded-md w-fit cursor-pointer hover:bg-stone-50">
            <img className="w-4" src="/save.svg" alt="save" />
            Save
        </button >
    )
}

export default SaveCard