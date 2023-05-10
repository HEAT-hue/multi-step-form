// jshint esversion:6

type UserlocationFormInputProps = {
    state: string,
    city: string,
    street: string
    zip: string
}

type UserUpdateProps = UserlocationFormInputProps & {
    updateFields: (formData: Partial<UserlocationFormInputProps>) => void
}

export function UserlocationFormInput({ state, city, street, zip, updateFields }: UserUpdateProps) {
    return (
        <div className="grid grid-cols-[auto,_1fr] gap-x-5 gap-y-3">
            <label htmlFor="firstName">State</label>
            <input type="text" className="outline-none border-[1px] focus:border-blue-500 px-5" id="firstName" autoFocus required
                value={state} onChange={(e) => updateFields({ state: (e.target as HTMLInputElement).value })} />

            <label htmlFor="lastName">City</label>
            <input type="text" className="outline-none border-[1px] focus:border-blue-500 px-5" id="lastName" required
                value={city} onChange={(e) => updateFields({ city: (e.target as HTMLInputElement).value })} />

            <label htmlFor="lastName">Street</label>
            <input type="tel" className="outline-none border-[1px] focus:border-blue-500 px-5" min={0} id="age" required
                value={street} onChange={(e) => updateFields({ street: (e.target as HTMLInputElement).value })} />

            <label htmlFor="lastName">Zip</label>
            <input type="tel" className="outline-none border-[1px] focus:border-blue-500 px-5" min={0} id="age" required
                value={zip} onChange={(e) => updateFields({ zip: (e.target as HTMLInputElement).value })} />
        </div>
    )
}