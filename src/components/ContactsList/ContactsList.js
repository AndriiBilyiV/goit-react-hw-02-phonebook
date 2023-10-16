export const ContactsList = ({ contacts }) => {
    
    return (
        <ul>
            {contacts.map(item => {
                const { name, id, tel } = item;
                return <li key={id}>{name}: {tel}</li>
            })}
        </ul>
    )
}