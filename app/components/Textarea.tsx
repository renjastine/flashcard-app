import { ChangeEvent } from 'react'
import { TextareaProps } from '../types';

function Textarea({ value, setCard, placeholder }: TextareaProps) {
    const handleChanges = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCard(e.target.value);
    }
    return (
        <textarea
            required
            className='bg-white rounded-md min-h-25 p-2 text-sm my-2 field-sizing-content resize-none'
            value={value}
            onChange={handleChanges}
            placeholder={placeholder}
        >
        </textarea>
    )
}

export default Textarea