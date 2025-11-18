// Components
import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'
import SaveCard from './SaveCard'

// Types
import { AddFlashCardProps } from '../types';

function CardControl({ card, setFlashCards }: AddFlashCardProps) {
    return (
        <div className='flex gap-2 flex-wrap'>
            <AddCard
                card={card}
                setFlashCards={val => setFlashCards(val)}
            />
            <SaveCard />
            <UpdateCard />
            <CancelUpdate />
        </div>
    )
}

export default CardControl