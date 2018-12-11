export default function loadSeeBreed(props, breed, urlRandom) {
  const { dispatch } = props;
  console.log('breed=', breed);
  const url = `https://dog.ceo/api/breed/${breed}${urlRandom}`;
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then((data) => {
        if (urlRandom === '/images') {
          dispatch({ type: 'LOAD_IMAGE_BREED', payload: data.message });
        } else {
          dispatch({ type: 'ADD_RANDOM_IMAGE_BREED', payload: data.message });
        }
      });
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}
