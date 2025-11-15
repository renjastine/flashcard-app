import React from 'react'

const Header = () => {
    return (
        < div className="flex justify-between items-center w-full" >
            {/* APP NAME */}
            < h1 className="" > Flashcard Quiz</h1 >
            {/* MANAGE CARDS BUTTON */}
            < button className="flex items-center border px-3 gap-2 h-9 bg-stone-900 text-stone-100 rounded-md" >
                <img className="w-4" src="/add-white.svg" alt="add" />
                Manage Cards
            </button >
        </div >
    )
}

export default Header