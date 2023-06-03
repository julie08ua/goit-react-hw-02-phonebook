import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    formSubmit = data => {
        if (
            this.state.contacts.find(
                ({name}) => name.toLowerCase() === data.name.toLowerCase()
            )
        ) {
            alert(`${data.name} is already in contacts.`);
          } else {
            this.state.contacts.push(data);
          }
        this.setState({ contacts: this.state.contacts });
    };

    deleteContact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    changeFilter = ({target}) => {
        this.setState({ filter: target.value });
    };

    render() {
        const { contacts, filter } = this.state;
        const visibleContact = contacts.filter(({name}) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );

        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmit} />

                <h2>Contacts:</h2>
                <Filter value={filter} changeFilter={this.changeFilter} />
                {contacts.length > 0 && (
                    <ContactsList
                        contacts={visibleContact}
                        deleteContact={this.deleteContact}
                    />
                )}
            </Container>
        );
    }
}