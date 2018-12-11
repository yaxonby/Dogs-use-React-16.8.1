const InitialState = {
  ' breedName': null,
  list: null,
  ListLoadImageBreed: null,
  loadListSubBreed: null,
};

export default function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case 'CHOOSE_BREED': console.log('CHOOSE_BREED', action.payload); return { ...state, breedName: action.payload };
    case 'ADD_LIST_DOG': { console.log('ADD_LIST_DOG', action.payload); return { ...state, list: action.payload }; }
    case 'ADD_RANDOM_IMAGE_BREED': console.log('ADD_RANDOM_IMAGE_BREED', action.payload); return { ...state, RandomImageBreed: action.payload };
    case 'LOAD_IMAGE_BREED': { console.log('LOAD_IMAGE_BREED', action.payload); return { ...state, ListLoadImageBreed: action.payload }; }
    case 'LOAD_LIST_SUB_BREED': { console.log('LOAD_LIST_SUB_BREED', action.payload); return { ...state, loadListSubBreed: action.payload }; }
    default: return state;
  }
}
