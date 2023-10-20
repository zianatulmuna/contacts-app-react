import React from 'react';
import ContactList from './ContactList';
import ContactInput from './ContactInput';
import { getData } from '../utils/data';
 
class ContactApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     contacts: getData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddContactHandler = this.onAddContactHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const contacts = this.state.contacts.filter(contact => contact.id !== id);
   this.setState({ contacts });
 }

 onAddContactHandler({ name, tag }) {
  this.setState((prevState) => {
    return {
      contacts: [
        ...prevState.contacts,
        {
          id: +new Date(),
          name,
          tag,
          imageUrl: '/images/default.jpg',
        }
      ]
    }
  });
}
 
 render() {
   return (
    <>
      <h2 className="my-4 text-center text-white">Aplikasi Kontak</h2>
      <div className="contact-app bg-white h-100">
        <h4 className="mb-4 text-dark fw-bold">Tambah Kontak</h4>
        <ContactInput addContact={this.onAddContactHandler} />
      </div>
      <div className="contact-app bg-white h-100">
        <h4 className="mb-4 text-dark fw-bold">Daftar Kontak</h4>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
     </>
   );
 }
}
 
export default ContactApp;