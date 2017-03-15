export default function reducer(state={
    buildData: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch (action.type) {
        case "FETCH_STATUS":
            return {...state, fetching: true}
            break;
        case "FETCH_STATUS_REJECTED":
            return {...state, fetching: true}
            break;
        case "FETCH_STATUS_FULFILLED":
            return {...state, fetching: true, fetched: true, buildData: [...state.buildData, action.payload]}
            break;
        default:
            return state;
    }
}