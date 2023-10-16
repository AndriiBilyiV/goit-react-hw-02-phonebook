import { Component } from "react";
import { ContactsList } from "./ContactsList/ContactsList";
import { InputForm } from "./InputForm/InputForm";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [ {
    name: "Alex",
      id: 1,
    tel: 5651331
  }, {
    name: "Sofia",
      id: 2,
    tel: 4451232
  }, {
    name: "Lucifer",
      id: 3,
    tel:4019910
  }],
    name: '',
    number: ''
  };
  addContact = (name, tel) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {id : nanoid(), name : name, tel: tel}]
    }))
  }
  render() {
    return (
      <div>
        <InputForm  onSubmit={this.addContact} />
        <ContactsList contacts={this.state.contacts}/>
     </div>
    )
  }
}