import React from 'react'
import './css/discussion.css'
import NewComment from './NewComment'
import { useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
function Discussion() {

    const [showDiscussion, setShowDiscussion] = useState(false)
    return (
        <>
            <button className="showDiscussion" onClick={() => setShowDiscussion(!showDiscussion)}>Show/hide discussion</button>

            {showDiscussion && <NewComment />}
        </>
    )
}

export default Discussion