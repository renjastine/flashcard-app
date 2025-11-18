import React from 'react'

import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'
import SaveCard from './SaveCard'

type CardControlProps = {
    card: { q: string, a: string };
}

function CardControl({ card } : CardControlProps) {
    return (
        <div className='flex gap-2 flex-wrap'>
            <AddCard card={card}/>
            <SaveCard />
            <UpdateCard />
            <CancelUpdate />
        </div>
    )
}

export default CardControl