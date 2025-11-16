import React from 'react'

function Textarea({ inputType }: { inputType: "q" | "a"}) {
    return (
        <textarea
            className='bg-white rounded-md min-h-25 p-2 text-sm my-2 field-sizing-content overflow-y-hidden resize-none'
            name=""
            id=""
            placeholder={`${inputType === "q" ? "Enter your questions..." : "Enter the answer..."}`}>
        </textarea>
    )
}

export default Textarea