// Components
import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'
import SaveCard from './SaveCard'

// Types
import { CardControlProp } from '../types';
import { useState } from 'react';

function CardControl({
    card,
    setCard,
    setFlashcards,
    flashcards,
    createUniqueId,
    editMode,
    setEditMode
}: CardControlProp) {
    const [message, setMessage] = useState("");
    return (
        <div className='flex gap-2 flex-wrap select-none items-center'>
            {editMode ?
                <>
                    <UpdateCard
                        card={card}
                        flashCards={flashcards}
                        setFlashCards={setFlashcards}
                        setEditMode={setEditMode}
                    />
                    <CancelUpdate
                        setEditMode={setEditMode}
                    />
                </> :
                <>
                    <AddCard
                        setMessage={val => setMessage(val)}
                        card={card}
                        setCard={setCard}
                        createUniqueId={createUniqueId}
                        setFlashcards={val => setFlashcards(val)}
                        flashcards={flashcards}
                    />
                    <SaveCard
                        setMessage={val => setMessage(val)}
                        flashCards={flashcards}
                    />
                </>
            }
            <span className='text-green-600'>{message}</span>
        </div>
    )
}

export default CardControl