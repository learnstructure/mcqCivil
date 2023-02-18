import React from 'react'
import './css/discussion.css'
import NewComment from './NewComment'
import { useState } from 'react'

function Discussion({ id }) {
    const [showDiscussion, setShowDiscussion] = useState(false)
    return (
        <>
            <button className="showDiscussion" onClick={() => setShowDiscussion(!showDiscussion)}>Show/hide discussion</button>

            {showDiscussion && <NewComment id={id} />}
        </>
    )
}

export default Discussion