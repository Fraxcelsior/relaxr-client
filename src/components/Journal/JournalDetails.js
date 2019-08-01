import React from 'react'
//import TicketForm from './TicketForm'

export default function JournalDetails(props) {
    if (!props.journalDetails) return 'Loading journal data...'
    console.log('PROPS?', props)

    return (
        <div>

            <h1>Title: {props.journalDetails.title}</h1>
            <h3>When: {props.journalDetails.created_at}</h3>
            <h3>What happened?</h3>
            <p>{props.journalDetails.description}</p>
                
        </div>
    )
}

/* workbench

            {props.canEdit && <TicketForm onChange={props.onChange} onSubmit={props.onSubmit} values={props.formContent} />}

            {!props.canEdit && <div>
                <h1>{props.ticket.name}</h1>
                <img src={`${props.ticket.picture}`} alt="a ticket" />
                <p>{props.ticket.price}</p>
                <p>This ticket is offered for sale by: <strong>{props.ticket.user.name}</strong></p>
                <p>We calculate that the risk of this ticket being a fraud = {props.ticket.risk}%</p>
                <p><strong>Description: </strong></p><p>{props.ticket.description}</p>
                <p> <Link to={`/login`}>Login</Link></p>
                <button onClick={props.onEdit}>Edit</button>

                <ul>
                    {props.comments.map(comment =>
                        <li key={comment.id}><strong>{comment.user.name}</strong><p>{comment.content}</p></li>
                    )}
                </ul>
                <CommentFormContainer id={props.ticket.id}/>
            </div>}

*/