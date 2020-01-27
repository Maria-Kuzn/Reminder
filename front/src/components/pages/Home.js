import React, {Component} from 'react';
import {API_BACK_URL} from '../../constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount(){
    this.props.fetchGetNotes(API_BACK_URL + "/notes");
  }

  handleDelete(id) {
    this.props.fetchDeleteNote(API_BACK_URL + "/notes/" + id);
  }

  render(){
    return(
      <div className="row">
        <div className="col"></div>
        <div className="col-10">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Название</th>
                <th scope="col">Дата и время</th>
                <th scope="col">Комментарий</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                 {this.props.notes.map((note, index)=>{
                   return(
                     <tr>
                       <td>{note.title}</td>
                       <td>{note.date}</td>
                       <td>{note.comment}</td>
                       <td>
                         <button onClick={() => this.handleDelete(note._id)} className="btn btn-outline-danger btn-sm">Удалить</button>
                       </td>
                     </tr>
                )
                })}
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export default Home;
