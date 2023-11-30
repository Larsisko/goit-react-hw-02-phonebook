import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ContactList;
