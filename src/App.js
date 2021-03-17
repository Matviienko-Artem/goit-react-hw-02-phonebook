import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
// import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = data => {
    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    console.log(data);
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addNewContact} />

        <h2>Contacts</h2>

        {/* <Filter /> */}

        <ContactList />
      </div>
    );
  }
}

export default App;
