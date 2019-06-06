const InitialState = {
    breedName: null,
    list: null,
    ListLoadImageBreed: null,
    loadListSubBreed: null,
};

export default function rootReducer(state = InitialState, action) {
    console.log('rootReducer state=', state);
    switch (action.type) {
        case 'CHOOSE_BREED':
            return {...state, breedName: action.payload};
        case 'ADD_LIST_DOG':
            console.log('пришел диспатч. Меняем state в store');
            return {...state, list: action.payload};
        case 'ADD_RANDOM_IMAGE_BREED':
            return {...state, RandomImageBreed: action.payload};
        case 'LOAD_IMAGE_BREED':
            return {...state, ListLoadImageBreed: action.payload};
        case 'LOAD_LIST_SUB_BREED':
            return {...state, loadListSubBreed: action.payload};
        default:
            return state;
    }
}