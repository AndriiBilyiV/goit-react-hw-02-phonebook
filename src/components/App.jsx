import { Component } from "react";
import { ContactsList } from "./ContactsList/ContactsList";
import { InputForm } from "./InputForm/InputForm";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";
import { sample } from "tempContacts";


export class App extends Component {

  state = {
    contacts: sample,
    filter: ''
  };

  addContact = ({ name, tel }) => {
    const names = this.state.contacts.map(contact => contact.name);
    if (names.includes(name)) {
      alert("No way")
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: name, tel: tel }]
    }))
  }

  delContact = ({ id }) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id!==id)
    }))
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter
    })
  }

  render() {
    const nameFilter = this.state.filter.toLowerCase();
    let contacts = this.state.contacts
    if (this.state.filter) {
      const contactsByName = contacts.filter(contact => {
       return contact.name.toLowerCase()
          .includes(nameFilter)
      })
      contacts = contactsByName;
    }
    
    return (
      <div>
        <h2>PhoneBook</h2>
        <InputForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter findName={this.changeFilter} />
        <ContactsList contacts={contacts} delContact={this.delContact} />
     </div>
    )
  }
}