import * as actionType from '../actionType'

const initialState = {
    user: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.SIGN_IN:
            return { ...state, user: action.payload }

        default:
            return state
    }
}

export default reducer
