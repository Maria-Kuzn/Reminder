import React, {Component} from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount(){
    this.props.fetchData("http://localhost:8000/api/notes");
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
                         <a href=""><button className="btn btn-outline-danger btn-sm">Удалить</button></a>
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
