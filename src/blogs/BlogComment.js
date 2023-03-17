import React, { useState, useEffect } from 'react'
import './css/blog.css'
import { Link } from 'react-router-dom'
import { db } from '../firebase/firebaseConfig'
import { addDoc, collection, getDocs, serverTimestamp/* , Timestamp, query, where, orderBy  */ } from 'firebase/firestore'


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
                    comment: newComment.comment,
                    timestamp: serverTimestamp()
                });

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        addData();
        setDiscussion((prev) => [...prev, <div key={randomNumber}><span className='userName'>{newComment.name}</span> <br /> <div className='userComment'> {newComment.comment}</div><hr /> </div>])

        setNewComment({ name: "", comment: "" })
    }
    //reading the existing data
    const [discussion, setDiscussion] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "blog", id, "comments"));
                /* const commentsRef = collection(db, "blog", id, "comments");
                const q = query(commentsRef, orderBy("timestamp", "asc"));
                const querySnapshot = await getDocs(q); */

                if (!querySnapshot.empty) {
                    querySnapshot.forEach(doc => {
                        var userName = doc.data().name;
                        var UserName = userName.charAt(0).toUpperCase() + userName.slice(1)
                        var timestamp = doc.data().timestamp ? doc.data().timestamp.toDate().toLocaleString() : ''
                        setDiscussion((prev) => [...prev, <div key={doc.id}>
                            <div >
                                <span className='userName'>{UserName}</span>
                                {timestamp && <span className='timestamp'>[{timestamp}]</span>}
                            </div>
                            <div className='userComment'> {doc.data().comment}</div> <hr></hr>
                        </div>])
                    })
                }
                else {
                    setDiscussion([<div key='1'>No previous comments. Feel free to reply.</div>, <hr key='2'></hr>])
                }

            } catch (e) {
                console.error("Could not find", e);
            }
        }
        fetchData();
    }, [id])


    return (
        <div>
            <div style={{ marginBottom: '0.7rem' }}>
                Please give your feedback..<Link to=".." relative='path' className="new-comment-btn">👈Go to menu</Link>
            </div>
            <div className='oldCommentSection'>
                <p className='comment-heading'>Feedback</p>

                {discussion}

            </div>

            <form onSubmit={handleSubmit} className='commentSection' >
                {/* <div className='comment-heading'></div> */}
                <textarea className='nameTextarea' rows={1} cols={40} placeholder="Your name..." name='name' value={newComment.name} onChange={handleChange} required />
                <br />
                <textarea className='commentTextarea' rows={2} cols={40} placeholder="Your comment here..." name='comment' value={newComment.comment} onChange={handleChange} required />
                <br />
                <input type="submit" value="Submit" />

            </form>


        </div>
    )
}

export default BlogComment