import PropTypes from 'prop-types';
// import { ListOfContact, ContactItem } from './ContactList.styled';

export const ContactsList = ({ contacts, deleteContact }) =>
    (
        <ul>
            {contacts.map(({id,name,number}) => (
                <li key={id}>
                    {name}: {number}
                    <button
                        type="button"
                        onClick={() => deleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
};