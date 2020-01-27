export function notes(state = [], action){
  switch(action.type){
    case "GET_NOTES_FETCH":
        return action.data;
    case "DELETE_NOTES_FETCH":
        return state.filter(row => row._id !== action.data._id);
    default:
      return state;
  }
}
