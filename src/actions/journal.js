import request from 'superagent'

export const JOURNAL_FETCHED = 'JOURNAL_FETCHED'

const journalFetched = (journal) => ({
    type: JOURNAL_FETCHED,
    payload: journal
})

export const fetchJournal = (id) => (dispatch) => {
    request
        .get(`http://localhost:8000/api/journals`)
        .then(response =>{
            console.log('RESPONSE BODY:', response.body)
            dispatch(journalFetched(response.body))
        })
        .catch(console.error)
}

export const JOURNAL_DETAILS_FETCHED = 'JOURNAL_DETAILS_FETCHED'

const journalDetailsFetched = (journalDetails) => ({
    type: JOURNAL_DETAILS_FETCHED,
    payload: journalDetails
})

export const loadJournalDetails = (id) => (dispatch) => {
    request
        .get(`http://localhost:8000/api/journals/${id}`)
        .then(response =>{
            console.log('RESPONSE BODY:', response.body)
            dispatch(journalDetailsFetched(response.body))
        })
        .catch(console.error)
}