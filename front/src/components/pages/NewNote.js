import React, {Component} from 'react';

class NewNote extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h2>Добавление новой напоминалки</h2>
          <form >
            <div className="form-group">
              <label for="noteTitle">Название напоминалки</label>
              <input type="text" class="form-control" id="noteTitle"/>
            </div>
            <div className="form-group">
              <label for="noteData">Дата</label>
              <input type="date" class="form-control" id="noteData" />
            </div>
            <div className="form-group">
              <label for="noteTime">Время</label>
              <input type="time" class="form-control" id="noteTime" />
            </div>
            <div className="form-group">
              <label for="noteComment">Комментарий</label>
              <input type="text" class="form-control" id="noteComment"/>
            </div>
            <div className="row">
              <button type="submit" class="btn btn-primary">Сохранить</button>
            </div>

        </form>
      </div>
      <div className="col-3"></div>
    </div>
    );
  }
}

export default NewNote;
