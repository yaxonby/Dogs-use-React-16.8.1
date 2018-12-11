const InitialState = {
  ' breedName': null,
  list: null,
  ListLoadImageBreed: null,
  loadListSubBreed: null,
};

export default function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case 'CHOOSE_BREED': return { ...state, breedName: action.payload };
    case 'ADD_LIST_DOG': return { ...state, list: action.payload };
    case 'ADD_RANDOM_IMAGE_BREED': return { ...state, RandomImageBreed: action.payload };
    case 'LOAD_IMAGE_BREED': return { ...state, ListLoadImageBreed: action.payload };
    case 'LOAD_LIST_SUB_BREED': return { ...state, loadListSubBreed: action.payload };
    default: return state;
  }
}
