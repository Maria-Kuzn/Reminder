import React, {Component} from 'react';

class Authorization extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h2>Вход</h2>
          <form >
            <div className="form-group">
              <label for="username">Имя</label>
              <input type="text" class="form-control" id="username"/>
            </div>
            <div className="form-group">
              <label for="password">Пароль</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <button type="submit" class="btn btn-primary">Войти</button>
        </form>
      </div>
      <div className="col-3"></div>
    </div>
    );
  }
}

export default Authorization;
