import request from 'superagent'

export const JOURNAL_FETCHED = 'JOURNAL_FETCHED'

const journalFetched = (journal) => ({
    type: JOURNAL_FETCHED,
    payload: journal
})

export const fetchJournal = (id) => (dispatch) => {
    request
        .get(`http://localhost:4000/test/${id}`)
        .then(response =>{
            console.log('RESPONSE BODY:', response.body)
            dispatch(journalFetched(response.body))
        })
        .catch(console.error)
}