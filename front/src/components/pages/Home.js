import React, {Component} from 'react';
import {API_BACK_URL} from '../../constants';
import Notifications from '../Notifications';

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

  dateBeautifier(date){
    var newDate = new Date(date);
    var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    var minutes = newDate.getMinutes()
    if (minutes < 10) minutes = '0' + minutes;
    return(
      newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear() + "г. " + newDate.getHours() + ":" + minutes
    )
  }

  render(){
    return(
      <div className="container">

        <Notifications notes={this.props.notes} />

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
                       <td>{this.dateBeautifier(note.date)}</td>
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

    );
  }
}

export default Home;
