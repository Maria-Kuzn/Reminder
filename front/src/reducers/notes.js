export function notes(state = [], action){
  switch(action.type){
    case "NOTES_FETCH_DATA_SUCCESS":
        return action.notes;
    default:
      return state;
  }
}
