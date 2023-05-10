// jshint esversion:6

type UsernamesProps = {
    email: string,
    password: string,
}

type UserUpdateProps = UsernamesProps & {
    updateFields: (formData: Partial<UsernamesProps>) => void
}

export function UseraccountFormInput({ email, password, updateFields }: UserUpdateProps) {
    return (
        <div className="grid grid-cols-[auto,_1fr] gap-x-5 gap-y-3">
            <label htmlFor="firstName">Email</label>
            <input type="email" className="outline-none border-[1px] focus:border-blue-500 px-5" id="firstName" autoFocus required
                value={email} onChange={(e) => updateFields({ email: (e.target as HTMLInputElement).value })} />
            <label htmlFor="lastName">Password</label>
            <input type="password" className="outline-none border-[1px] focus:border-blue-500 px-5" id="lastName" required
                value={password} onChange={(e) => updateFields({ password: (e.target as HTMLInputElement).value })} />
        </div>
    )
}