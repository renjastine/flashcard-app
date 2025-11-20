// Components
import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'
import SaveCard from './SaveCard'

// Types
import { CardT } from '../types';

type AddFlashCardProps = {
    card: CardT;
    setCard: (val: CardT) => void;
    setFlashCards: (val: CardT) => void;
    flashCards: CardT[]
}

function CardControl({
    card,
    setCard,
    setFlashCards,
    flashCards
}: AddFlashCardProps) {
    return (
        <div className='flex gap-2 flex-wrap'>
            <AddCard
                card={card}
                setCard={setCard}
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