import React from 'react'

import CancelUpdate from './CancelUpdate'
import UpdateCard from './UpdateCard'
import AddCard from './AddCard'
import SaveCard from './SaveCard'

function CardControl() {
    return (
        <div className='flex gap-2 flex-wrap'>
            <AddCard />
            <SaveCard />
            <UpdateCard />
            <CancelUpdate />
        </div>
    )
}

export default CardControl