import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from './firebaseConfig'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { McqContext } from '../components/Mcq'
function NewComment() {
    const { id } = useContext(McqContext)
    const usePathName = () => {                         //to get path so as to store data in respective collection
        var location = useLocation().pathname.slice(1)

        return location
    }
    const pathname = usePathName();
    /* const randomId = Math.floor(Math.random() * Date.now()).toString(); */

    const [newComment, setNewComment] = useState({ name: "", comment: "" })
    function handleChange(e) {
        setNewComment(prevState => ({ ...prevState, [e.target.name]: e.target.value, [e.target.comment]: e.target.value }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        const addData = async () => {
            try {

                const subCollectionRef = collection(db, pathname, id, "comments")       //id is unique for each question
                await addDoc(subCollectionRef, {
                    name: newComment.name,
                    comment: newComment.comment
                });

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        addData();
        setDiscussion((prev) => [...prev, <div key={id}><span className='userName'>{newComment.name}</span> <br /> <div className='userComment'> {newComment.comment}</div> <hr></hr></div>])

        setNewComment({ name: "", comment: "" })
    }
    //reading the existing data
    const [discussion, setDiscussion] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, pathname, id, "comments"));

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
    }, [])

    return (
        <>
            <div className='oldCommentSection'>{discussion}</div>

            <form onSubmit={handleSubmit} className='commentSection'>
                <div className='yourReply'>Place your comment below</div>
                <textarea className='nameTextarea' rows={1} cols={40} placeholder="Your name..." name='name' value={newComment.name} onChange={handleChange} required />
                <br />
                <textarea className='commentTextarea' rows={3} cols={40} placeholder="Your comment here..." name='comment' value={newComment.comment} onChange={handleChange} required />
                <br />
                <input type="submit" value="Submit" />

            </form>

        </>
    )
}

export default NewComment