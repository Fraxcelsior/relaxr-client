import { JOURNAL_FETCHED} from '../actions/journal'
  
const reducer = (state = null, action) => {
  switch(action.type) {
    case JOURNAL_FETCHED:
            return state = action.payload
    default: 
      return state
  }
}

export default reducer