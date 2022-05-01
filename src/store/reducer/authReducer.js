import * as actionType from '../actionType'

const initialState = {
    token: null,
    userData: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        // case actionType.SIGN_IN:
        //     return { ...state, user: action.payload }

        // case actionType.SIGN_OUT:
        //     return { ...state, user: null }

        case actionType.SET_USER_TOKEN:
            return { ...state, token: action.payload }

        case actionType.SET_USER_DATA: {
            return { ...state, userData: action.payload }
        }

        default:
            return state
    }
}

export default reducer
