import {
    USER_TRANSACTION_LIST,
    USER_TRANSACTION_LISTALLCOUNT,
    USER_TRANSACTION_DETAIL,
    USER_TRANSACTION_HISTORY,
    USER_TRANSACTION_ERROR,
    USER_TRANSACTION_LOADING,
    USER_TRANSACTION_SELECTED,
    USER_TRANSACTION_RECEIPT,
    USER_TRANSACTION_RECEIPT_ERROR,
    USER_TRANSACTION_EDIT_SUCCESS,
    USER_TRANSACTION_INITIAL
} from '../actions/Types'

const initialState = {
    list: null,
    listAllCount: null,
    detail: null,
    history: null,
    selected: 0,
    receiptImg: null,
    receiptImgError: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_TRANSACTION_LIST:
            return { ...state, list: action.payload, error: null, loading: false }
        case USER_TRANSACTION_LISTALLCOUNT:
            return { ...state, listAllCount: action.payload, error: null, loading: false }
        case USER_TRANSACTION_DETAIL:
            return { ...state, detail: action.payload, error: null, loading: false }
        case USER_TRANSACTION_HISTORY:
            return { ...state, history: action.payload, error: null, loading: false }
        case USER_TRANSACTION_ERROR:
            return { ...state, error: action.payload, loading: false }
        case USER_TRANSACTION_LOADING:
            return { ...state, loading: true }
        case USER_TRANSACTION_SELECTED:
            return { ...state, selected: action.payload }
        case USER_TRANSACTION_RECEIPT:
            return { ...state, receiptImg: action.payload, receiptImgError: null }
        case USER_TRANSACTION_RECEIPT_ERROR:
            return { ...state, receiptImgError: action.payload }
        case USER_TRANSACTION_EDIT_SUCCESS:
            return { ...state, loading: false }
        case USER_TRANSACTION_INITIAL:
            return initialState
        default:
            return state
    }
}