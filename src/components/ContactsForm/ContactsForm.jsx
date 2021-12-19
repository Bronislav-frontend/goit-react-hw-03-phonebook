import { Component } from "react";
import s from './ContactsForm.module.css'

export default class ContactsForm extends Component {
    state = {
      name: '',
      number: ''
    };

    handleChange = evt => {
        const { name, value } = evt.currentTarget

        this.setState({[name]: value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.resetState();
    };

    resetState = () => {
         this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form
                className={s.form}
                onSubmit={this.handleSubmit}
            >
                <label>
                    <p className={s.text}>Name</p> 
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                </label>
                <label>
                    <p className={s.text}>Phone number</p> 
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                </label>
                <p className={s.text}>
                    <button className={s.btn} type="submit">Add contact</button>
                </p>    
            </form>
        )
    }

}