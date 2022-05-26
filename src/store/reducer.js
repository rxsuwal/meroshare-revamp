import * as actionType from './actionType'
const initialState = {
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.LOADING_TRUE:
            return { ...state, loading: true }
        case actionType.LOADING_FALSE:
            return { ...state, loading: false }


        default:
            return state
    }
}

export default reducer
