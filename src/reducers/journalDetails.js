import { JOURNAL_DETAILS_FETCHED } from '../actions/journal'

export default (state = null, action) => {
    switch (action.type) {
        case JOURNAL_DETAILS_FETCHED:
            return state = action.payload
        default:
            return state
    }
}
