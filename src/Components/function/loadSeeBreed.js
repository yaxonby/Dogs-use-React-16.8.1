export default function loadSeeBreed(breed, urlRandom) {
  // event.stopPropagation();
  return (dispatch) => {
    // const { dispatch } = props;
    // console.log('dispatch=', dispatch);
    console.log('breed=', breed);
    console.log('urlRandom=', urlRandom);
    const url = `https://dog.ceo/api/breed/${breed}${urlRandom}`;
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${response.status}`);
          return;
        }
        response.json().then((data) => {
          if (urlRandom === '/images') {
            console.log('data=', data.message);
            dispatch({ type: 'CHOOSE_BREED', payload: breed });
            dispatch({ type: 'LOAD_IMAGE_BREED', payload: data.message });
          } else {
            console.log('data=', data.message);
            dispatch({ type: 'ADD_RANDOM_IMAGE_BREED', payload: data.message });
            dispatch({ type: 'CHOOSE_BREED', payload: breed });
          }
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  };
}
