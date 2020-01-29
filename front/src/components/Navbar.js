import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Напоминалки</Link>
        <div className="collapse navbar-collapse">
            <Link to="/NewNote">
              <button className="btn btn-success my-2 my-sm-0">Добавить</button>
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
