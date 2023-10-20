import React from 'react';
 
class ContactInput extends React.Component {
    constructor(props) {
      super(props);
    
      // inisialisasi state
      this.state = {
        name: '',
        tag: '',
      }
    
      this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
      this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onNameChangeEventHandler(event) {
      this.setState(() => {
        return {
          name: event.target.value,
        }
      });
    }
    
    onTagChangeEventHandler(event) {
      this.setState(() => {
        return {
          tag: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addContact(this.state);
    }

    render() {
        return (
            <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
              <input type="text" className='form-control mb-3' placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
              <input type="text" className='form-control mb-3' placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
              <div className="text-center">
                <button type="submit" className='btn btn-primary'>Tambah</button>
              </div>
            </form>
          )
    }
}
 
export default ContactInput;