import * as actionType from '../actionType'


const initialState = {
    details: ""
}

const reducer = (state = initialState, action) => {


    switch (action.type) {

        case actionType.SET_USER_DETAILS:
            return { ...state, details: action.payload }

        default:
            return state
    }
}

export default reducer
