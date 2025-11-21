// Components
import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'
import SaveCard from './SaveCard'

// Types
import { CardControlProp } from '../types';

function CardControl({
    card,
    setCard,
    setFlashCards,
    flashCards,
    createUniqueId,
    editMode,
    setEditMode
}: CardControlProp) {
    return (
        <div className='flex gap-2 flex-wrap select-none'>
            {editMode ?
                <>
                    <UpdateCard 
                        card={card}
                        flashCards={flashCards}
                        setFlashCards={setFlashCards}
                        setEditMode={setEditMode}
                    />
                    <CancelUpdate
                        setEditMode={setEditMode}
                    />
                </> :
                <>
                    <AddCard
                        card={card}
                        setCard={setCard}
                        createUniqueId={createUniqueId}
                        setFlashCards={val => setFlashCards(val)}
                        flashCards={flashCards}
                    />
                    <SaveCard />
                </>
            }


        </div>
    )
}

export default CardControl