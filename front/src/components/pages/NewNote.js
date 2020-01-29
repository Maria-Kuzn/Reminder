import React, {Component} from 'react';
import {FormErrors} from '../FormErrors';

import {API_BACK_URL} from '../../constants';
import {getCookie} from '../../util';

class NewNote extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {title: '', date: '', time: ''},
      titleValid: false,
      dateValid: false,
      timeValid: false,
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
    let dateValid = this.state.dateValid;
    let timeValid = this.state.timeValid;

    switch(fieldName) {
      case 'title':
        titleValid = value.length > 0;
        fieldValidationErrors.title = titleValid ? '' : 'Введите название';
        break;
      case 'date':
        dateValid = value.length > 0;
        fieldValidationErrors.date = dateValid ? '': 'Введите дату';
        break;
      case 'time':
        timeValid = value.length > 0;
        fieldValidationErrors.time = timeValid ? '': 'Введите время';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    titleValid: titleValid,
                    dateValid: dateValid,
                    timeValid: timeValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.titleValid && this.state.dateValid && this.state.timeValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const date = data.get("date");
    const time = data.get("time");

    fetch(API_BACK_URL + "/notes/add", {
          method: 'POST',
          body: JSON.stringify({
            title: data.get("title"),
            date: new Date(date + ' ' + time),
            comment: data.get("comment"),
            user_id: getCookie("user_id")
          }),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            window.location.href = "/";
          }
        })
  }

  render(){
    return(
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <h2>Добавление новой напоминалки</h2>
            <div className="panel panel-default">
              <div class="panel-body">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.title)}`}>
                <label htmlFor="title">Название напоминалки</label>
                <input type="text" required className="form-control" name="title" onChange={this.handleUserInput}/>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.date)}`}>
              <label htmlFor="date">Дата</label>
              <input type="date" required className="form-control" name="date" onChange={this.handleUserInput}/>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.time)}`}>
              <label htmlFor="time">Время</label>
              <input type="time" required className="form-control" name="time" onChange={this.handleUserInput} />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Комментарий</label>
              <input  type="text" className="form-control" name="comment"/>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Сохранить</button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default NewNote;
