import {combineReducers} from 'redux'
import journal from './journal'
import journalDetails from './journalDetails'

export default combineReducers ({
  journal,
  journalDetails
})