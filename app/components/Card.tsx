import CardListControl from './CardListControl'
import { CardT } from '../types';

type CardProps = {
    keyID: number;
    question: string;
    answer: string;
    flashCards: CardT[];
    setFlashCards: (val: CardT[]) => void;
}

function Card({ keyID, question, answer, flashCards, setFlashCards }: CardProps) {
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
                {/* <CardListControl controlName="edit" />
                <CardListControl controlName="delete" /> */}
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