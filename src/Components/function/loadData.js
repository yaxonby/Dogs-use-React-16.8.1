export default function loadData(props, url) {
  const { dispatch } = props;

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${
          response.status}`);
        return;
      }
      response.json().then((data) => {
        console.log('loadData загрузил и отправляет dispatch');
        dispatch({ type: 'ADD_LIST_DOG', payload: Object.entries(data.message) });
        // console.log(Object.entries(data.message));
      });
    })
    .catch((err) => { console.log('Fetch Error :-S', err); });
}
