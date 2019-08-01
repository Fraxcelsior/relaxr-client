import request from 'superagent'

const baseUrl = 'http://localhost:8000/api/journals'

export const JOURNAL_FETCHED = 'JOURNAL_FETCHED'

const journalFetched = (journal) => ({
    type: JOURNAL_FETCHED,
    payload: journal
})

export const fetchJournal = (id) => (dispatch) => {
    request
        .get(`${baseUrl}`)
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
        .get(`${baseUrl}/${id}`)
        .then(response =>{
            console.log('RESPONSE BODY:', response.body)
            dispatch(journalDetailsFetched(response.body))
        })
        .catch(console.error)
}

export const JOURNAL_CREATED = 'JOURNAL_CREATED'

const journalCreated = (journal) => ({
    type: JOURNAL_CREATED,
    payload: journal
})

export const createJournal = (data) => (dispatch) => {
    console.log('DATA PASSED IS:', data)
    request
        .post(`${baseUrl}`)
        .send(data)
        .then(response => {
            dispatch(journalCreated(response.body))
        })
        .catch(console.error)
}