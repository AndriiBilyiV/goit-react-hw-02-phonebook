export const InputForm = (onSubmit) => {
    return (
        <div>
            <h2>PhoneBook</h2>
            <form>
                <label>Name</label>
                <input type="text" name="name" required />
                <label>Number</label>
                <input type="tel" name="number" required />
                <button onClick={() => onSubmit()}>Add contact</button>
            </form>
        </div>
    )
}