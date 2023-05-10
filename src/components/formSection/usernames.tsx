// jshint esversion:6
type UsernamesProps = {
    firstName: string,
    lastName: string,
    age: string
}

type UserUpdateProps = UsernamesProps & {
    updateFields: (formData: Partial<UsernamesProps>) => void
}

export function UsernamesFormInput({ firstName, lastName, age, updateFields }: UserUpdateProps) {
    return (
        <div className="grid grid-cols-[auto,_1fr] gap-x-5 gap-y-3">

            {/* Get user firstName */}
            <label htmlFor="firstName">First name</label>
            <input type="text" className="outline-none border-[1px] focus:border-blue-500 px-5" id="firstName"
                autoFocus required value={firstName} onChange={(e) => updateFields({ firstName: (e.target as HTMLInputElement).value })} />

            {/* Get user lastName */}
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="outline-none border-[1px] focus:border-blue-500 px-5" id="lastName" required value={lastName} onChange={(e) => updateFields({ lastName: (e.target as HTMLInputElement).value })} />

            {/* Get user Age */}
            <label htmlFor="lastName">Age</label>
            <input type="tel" className="outline-none border-[1px] focus:border-blue-500 px-5" min={0} id="age" required value={age} onChange={(e) => updateFields({ age: (e.target as HTMLInputElement).value })} />
        </div>
    )
}