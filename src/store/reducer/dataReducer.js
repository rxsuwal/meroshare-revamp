import * as actionType from '../actionType'

const initialState = {
    companies: '',
    provinces: "",
    districts: ""
}

export default (state = initialState, action) => {
    switch (action.type) {

        case actionType.SET_COMPANIES:
            return { ...state, companies: action.payload }

        default:
            return state
    }
}
