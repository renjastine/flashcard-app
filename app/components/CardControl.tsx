// Components
import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'
import SaveCard from './SaveCard'

// Types
import { AddFlashCardProps } from '../types';

function CardControl({
    card,
    setCard,
    setFlashCards,
    flashCards,
    createUniqueId
}: AddFlashCardProps) {
    return (
        <div className='flex gap-2 flex-wrap'>
            <AddCard
                card={card}
                setCard={setCard}
                createUniqueId={createUniqueId}
                setFlashCards={val => setFlashCards(val)}
                flashCards={flashCards}
            />
            <SaveCard />
            <UpdateCard />
            <CancelUpdate />
        </div>
    )
}

export default CardControl