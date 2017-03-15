import axios from "axios";

export function fetchBuildStatus(params) {
    return function (dispatch) {
        axios.get("http://localhost:3000/posts")
            .then((response) => {
                dispatch({
                    type: "FETCH_STATUS_FULFILLED",
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_STATUS_REJECTED",
                    payload: err
                });
            });
    }
}