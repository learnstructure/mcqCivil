import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './css/discussion.css'
import NewComment from './NewComment'
import { useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { McqContext } from '../components/Mcq'
function Discussion() {
    const { id } = useContext(McqContext)
    const path = window.location.pathname

    const [showDiscussion, setShowDiscussion] = useState(false)
    return (
        <>
            <button className="showDiscussion" onClick={() => setShowDiscussion(!showDiscussion)}>Show/hide discussion</button>
            <Link to={`${path}/${id}`}>click </Link>
            {showDiscussion && <NewComment pathname='/som' />}
        </>
    )
}

export default Discussion