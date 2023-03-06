import React, { useState, useEffect } from 'react'
import './css/blog.css'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/firebaseConfig'
import { addDoc, collection, getDocs } from 'firebase/firestore'

function BlogComment({ id }) {
    const randomNumber = Math.floor(Math.random() * Date.now()).toString();

    const [newComment, setNewComment] = useState({ name: "", comment: "" })
    function handleChange(e) {
        setNewComment(prevState => ({ ...prevState, [e.target.name]: e.target.value, [e.target.comment]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const addData = async () => {
            try {

                const subCollectionRef = collection(db, "blog", id, "comments")
                await addDoc(subCollectionRef, {
                    name: newComment.name,
                    comment: newComment.comment
                });

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        addData();
        setDiscussion((prev) => [...prev, <div key={randomNumber}><hr></hr><span className='userName'>{newComment.name}</span> <br /> <div className='userComment'> {newComment.comment}</div> </div>])

        setNewComment({ name: "", comment: "" })
    }
    //reading the existing data
    const [discussion, setDiscussion] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "blog", id, "comments"));

                if (!querySnapshot.empty) {
                    querySnapshot.forEach(doc => {
                        var userName = doc.data().name;
                        var UserName = userName.charAt(0).toUpperCase() + userName.slice(1)
                        setDiscussion((prev) => [...prev, <div key={doc.id}><span className='userName'>{UserName}</span> <br /> <div className='userComment'> {doc.data().comment}</div> <hr></hr></div>])
                    })
                }
                else {
                    setDiscussion("No previous comments. Feel free to reply.")
                }

            } catch (e) {
                console.error("Could not find", e);
            }
        }
        fetchData();
    }, [id])
    const navigate = useNavigate()
    const [showFeedback, setShowFeedback] = useState(false)
    return (
        <div>

            <div className='oldCommentSection'>
                <p className='comment-heading'>Feedback</p>

                {discussion}
            </div>
            <div className='new-comment-btn-container'>
                <button className="new-comment-btn" onClick={() => setShowFeedback(!showFeedback)}>New Comment</button>
                <button onClick={() => navigate(-1)} className="new-comment-btn" >👈 Go back</button>
            </div>
            {showFeedback && <form onSubmit={handleSubmit} className='commentSection'>
                {/* <div className='comment-heading'></div> */}
                <textarea className='nameTextarea' rows={1} cols={40} placeholder="Your name..." name='name' value={newComment.name} onChange={handleChange} required />
                <br />
                <textarea className='commentTextarea' rows={2} cols={40} placeholder="Your comment here..." name='comment' value={newComment.comment} onChange={handleChange} required />
                <br />
                <input type="submit" value="Submit" />

            </form>}


        </div>
    )
}

export default BlogComment