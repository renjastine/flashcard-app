import { ChangeEvent } from 'react'

type TextareaProps = {
    value: string;
    setCard: (val: string) => void;
    placeholder: string;
}

function Textarea({ value, setCard, placeholder }: TextareaProps) {
    const handleChanges = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCard(e.target.value);
    }
    return (
        <textarea
            className='bg-white rounded-md min-h-25 p-2 text-sm my-2 field-sizing-content'
            value={value}
            onChange={handleChanges}
            placeholder={placeholder}
        >
        </textarea>
    )
}

export default Textarea