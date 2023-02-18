import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from './firebaseConfig'
import { addDoc, collection, getDocs } from 'firebase/firestore'
function NewComment({ id }) {
    const usePathName = () => {                         //to get path so as to store data in respective collection
        var location = useLocation().pathname.slice(1)
        if (location === '') { location = "som" }
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
                }, { merge: true });
                //console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        addData();
        setNewComment({ name: "", comment: "" })
    }
    //reading the existing data
    const [discussion, setDiscussion] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, pathname, id, "comments"));

                /* if (querySnapshot.exists()) {
                    console.log("document data found")
                    //setDiscussion((prev) => [...prev, <p key={querySnapshot.id}>{querySnapshot.data().name}: {querySnapshot.data().comment}</p>])
                } else {
                    console.log("no such document")
                } */
                querySnapshot.forEach(doc => {
                    //console.log(`${doc.id} => ${doc.data().name} : ${doc.data().comment}`) 
                    setDiscussion((prev) => [...prev, <p key={doc.id}>{doc.data().name}: {doc.data().comment}</p>])
                })

            } catch (e) {
                console.error("Could not find", e);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div>{discussion}</div>
            <div>Your Reply</div>
            <form onSubmit={handleSubmit}>
                <textarea rows={2} cols={40} placeholder="Your name" name='name' value={newComment.name} onChange={handleChange} />
                <br />
                <textarea rows={4} cols={40} placeholder="Your comment here" name='comment' value={newComment.comment} onChange={handleChange} />
                <br />
                <input type="submit" value="Submit" />

            </form>

        </>
    )
}

export default NewComment