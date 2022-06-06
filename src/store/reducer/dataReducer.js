import * as actionType from '../actionType'

const initialState = {
    companies: '',
    provinces: "",
    districts: "",
    openings: "",
    openingsDetail: ""
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

        case actionType.SET_OPENING_DETAIL:
            return {
                ...state,
                openingsDetail: action.payload
            }
       

        default:
            return state
    }
}
