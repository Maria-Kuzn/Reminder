import React, {Component} from 'react';

import {API_BACK_URL} from '../../constants';
import {getCookie} from '../../util';

class NewNote extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const date = data.get("noteDate");
    const time = data.get("noteTime");

    fetch(API_BACK_URL + "/notes/add", {
          method: 'POST',
          body: JSON.stringify({
            title: data.get("noteTitle"),
            date: new Date(date + ' ' + time),
            comment: data.get("noteComment"),
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
          <h2>Добавление новой напоминалки</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="noteTitle">Название напоминалки</label>
                <input name="noteTitle" type="text" className="form-control" id="noteTitle"/>
            </div>
            <div className="form-group">
              <label htmlFor="noteDate">Дата</label>
              <input name="noteDate" type="date" className="form-control" id="noteDate" />
            </div>
            <div className="form-group">
              <label htmlFor="noteTime">Время</label>
              <input name="noteTime" type="time" className="form-control" id="noteTime" />
            </div>
            <div className="form-group">
              <label htmlFor="noteComment">Комментарий</label>
              <input name="noteComment" type="text" className="form-control" id="noteComment"/>
            </div>
            <div className="row">
              <button type="submit" className="btn btn-primary">Сохранить</button>
            </div>

        </form>
      </div>
      <div className="col-3"></div>
    </div>
    );
  }
}

export default NewNote;
