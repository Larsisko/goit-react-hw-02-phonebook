import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.name);
    console.log(this.state.name);
    // this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Wpisz nazwę kontaktu"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Dodaj kontakt</button>
      </form>
    );
  }
}
export default ContactForm;
