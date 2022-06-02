import * as actionType from '../actionType'

const initialState = {
    companies: '',
    provinces: "",
    districts: "",
    openings: ""
}

export default (state = initialState, action) => {
    switch (action.type) {

        case actionType.SET_COMPANIES:
            return {
                ...state,
                companies: action.payload
            }
        case actionType.SET_OPENINGS:
            return {
                ...state,
                openings: action.payload
            }
        case actionType.SIGN_OUT:
            return {
                ...state,
                companies: "",
                provinces: "",
                districts: "",
                openings: ""
            }

        default:
            return state
    }
}
