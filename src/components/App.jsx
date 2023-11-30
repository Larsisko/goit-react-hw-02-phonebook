import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = name => {
    const newContact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
