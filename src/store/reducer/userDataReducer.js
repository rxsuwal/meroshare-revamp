import * as actionType from '../actionType'


const initialState = {
    details: "",
    shares: "",
}


const reducer = (state = initialState, action) => {


    switch (action.type) {

        case actionType.SET_USER_DETAILS:
            return {
                ...state,
                details: action.payload
            }

        case actionType.SET_USER_SHARES:
            return {
                ...state,
                shares: action.payload
            }

       


        default:
            return state
    }
}

export default reducer
