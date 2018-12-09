export default function loadData(props, url) {
  //let url;
	const { dispatch} =props;

//	if (act==="ListAllBreed") {url='https://dog.ceo/api/breeds/list/all'}
//	if (act==="ListAllBreed") { url="https://dog.ceo/api/breeds/list/all"}
	fetch(url)
		.then(function(response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function(data) {
		dispatch({  type: "ADD_LIST_DOG",  payload: Object.entries(data.message)})
		console.log(Object.entries(data.message))
				});
			}
		)
		.catch(function(err) {	console.log('Fetch Error :-S', err)	});
}
