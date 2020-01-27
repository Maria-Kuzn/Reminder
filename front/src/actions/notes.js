//проверка успешности запроса
export function notesFetchDataSuccess(type, data){
  return{
    type,
    data
  }
}

//GET-запрос для таблицы заметок
export function stateFetchGetNotes(url){
  return(dispatch)=>{
    fetch(url)
      .then(response => {
        if (!response.ok){
          throw new Error(response.statusText);
        }
        return response;
      })
      .then (response => response.json())
      .then (notes => dispatch(notesFetchDataSuccess("GET_NOTES_FETCH", notes)))
  }
}

//DELETE-запрос для удаления заметки
export function stateFetchDeleteNote(url){
  return(dispatch)=>{
    fetch(url, {
          method: 'DELETE'
        })
        .then(response => {
          if (!response.ok)
            throw new Error(response.statusText);
          else
            return response;
        })
        .then (response => response.json())
        .then (note => dispatch(notesFetchDataSuccess("DELETE_NOTES_FETCH", note)))
  }
}
