import CardListControl from './CardListControl'
import { CardProps } from '../types';

function Card({
    keyID,
    cardID,
    setCard,
    question,
    answer,
    flashCards,
    setFlashCards,
    setEditMode,
    containerRef,
}: CardProps) {
    return (
        <div className='border border-black/25 w-full min-h-5 rounded-lg flex flex-col px-6 py-4 gap-4 hover:bg-gray-100'>
            <div className='flex max-[321px]:justify-center justify-end w-full gap-5 border-b pb-4'>
                <CardListControl
                    controlName={keyID > 0 ? "moveUp" : "moveUpDisabled"}
                    keyID={keyID}
                    flashCards={flashCards}
                    setFlashCards={setFlashCards}
                />
                <CardListControl
                    controlName={keyID === flashCards.length - 1 ? "moveDownDisabled" : "moveDown"}
                    keyID={keyID}
                    flashCards={flashCards}
                    setFlashCards={setFlashCards}
                />
                <CardListControl
                    controlName="edit"
                    keyID={keyID}
                    cardID={cardID}
                    setCard={setCard}
                    flashCards={flashCards}
                    setFlashCards={setFlashCards}
                    setEditMode={setEditMode}
                    containerRef={containerRef}
                />
                {/* <CardListControl controlName="delete" /> */}
            </div>
            <div className='flex gap-3'>
                <div className='flex-none pt-1'>
                    <img src="/number-symbol.svg" className='w-3' alt="number-symbol" />
                </div>
                <dl className='flex-1 flex flex-col text-gray-400'>
                    <dt>Q:</dt>
                    <dd className='text-black whitespace-pre-wrap'>{question}</dd>
                    <dt>A:</dt>
                    <dd className='whitespace-pre-wrap'>{answer}</dd>
                </dl>
            </div>
        </div>
    )
}

export default Card