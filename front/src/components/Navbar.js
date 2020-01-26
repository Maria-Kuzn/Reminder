import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Напоминалки</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/NewNote"><button className="btn btn-success my-2 my-sm-0" type="submit">Добавить</button></Link>
      </div>
  </nav>
  )
}

export default Navbar;
