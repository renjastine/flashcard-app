import React from 'react'

import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'

function CardControl() {
    return (
        <div className='flex gap-2 flex-wrap'>
            <AddCard />
            <UpdateCard />
            <CancelUpdate />
        </div>
    )
}

export default CardControl