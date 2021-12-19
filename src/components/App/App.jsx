import { Component } from 'react';
import { nanoid } from 'nanoid'

import Section from '../Section/Section'
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import Contacts from '../Contacts/Contacts';

import s from './App.module.css'

export default class App extends Component {
  state = {
  contacts: [
    {id: '123', name: 'Rosie Simpson', number: '459-12-56'},
    {id: '456', name: 'Hermione Kline', number: '443-89-12'},
    {id: '789', name: 'Eden Clements', number: '645-17-79'},
    {id: '987', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
   formSubmitHandler = data => {
    const findName = this.state.contacts.find(
      contact => contact.name === data.name,
    );
    if (findName) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
     
    const newData = { id: nanoid(3), ...data };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newData],
      };
    });
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <div className={s.container}>
          <Section title="Phonebook">
            <ContactsForm onSubmit={this.formSubmitHandler} />
            </Section>
          <Section title="Contacts">
            <Filter value={this.state.filter} onChange={this.onChangeFilter} /> 
            <Contacts contacts={filteredContacts} onDeleteContact={this.onDeleteContact} />
          </Section>
        </div>
      </>
    )
  }
}
