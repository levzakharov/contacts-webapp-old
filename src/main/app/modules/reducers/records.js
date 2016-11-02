import {    GET_RECORDS_REQUEST, GET_RECORDS_SUCCESS, GET_RECORDS_FAILURE,    ADD_RECORD,    DELETE_RECORD} from '../actions/records';const initialState = () => {    return {        isFetching: false    }};const records = (state = initialState(), action) => {    switch (action.type) {        case (GET_RECORDS_REQUEST):            return {                ...state,                isFetching: true            };        case (GET_RECORDS_SUCCESS):            return {                ...state,                isFetching: false,                data: action.data            };        case (GET_RECORDS_FAILURE):            return {                ...state,                isFetching: false,                message: action.message            };        case (ADD_RECORD):            return {                ...state,                data: state.data.concat(action.record)            };        case (DELETE_RECORD):            const {data} = state;            return {                ...state,                data: data.filter(person => person.id != action.id)            };        default:            return state;    }};export default records;