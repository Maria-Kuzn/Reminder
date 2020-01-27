import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notifications extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
    }

    getDelay(date){
      var noteDate = new Date(date);
      var nowDate = new Date();
      return(
        noteDate - nowDate
      )
    }

    render(){
        return (
          <div>
            {this.props.notes.map((note, index)=>{
              if (! toast.isActive(this.toastId)){
                return(
                  toast(note.title, {
                     delay: this.getDelay(note.date),
                     position: toast.POSITION.BOTTOM_RIGHT,
                     toastId: note._id
                  }
                )
              )
              }
             })
           }
           <ToastContainer />
          </div>
        );
    }
}

export default Notifications;
