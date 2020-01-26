export function notesFetchDataSuccess(notes){
  return{
    type: "PERSONS_FETCH_DATA_SUCCESS",
    notes
  }
}

export function notesFetchData(url){
  return(dispatch)=>{
    fetch(url)
      .then(response => {
        if (!response.ok){
          throw new Error(response.statusText);
        }
        return response;
      })
      .then (response => response.json())
      .then (notes => dispatch(notesFetchDataSuccess(notes)))
  }
}
