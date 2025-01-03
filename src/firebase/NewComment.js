import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import './css/discussion.css'
import { useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { db } from './firebaseConfig'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import McqOne from './McqOne'

function NewComment() {

    const randomNumber = Math.floor(Math.random() * Date.now()).toString();
    const location = useLocation()
    const { data } = useOutletContext()
    const params = useParams()

    if (location.state) {
        var { id, path, ques, quesno, ansA, ansB, ansC, ansD, correct } = location.state
        var pathname = path.slice(1)

    } else {
        var onemcq = data.find(mcq => mcq.id === params.id)
        pathname = params.subject
        id = onemcq.id; ques = onemcq.question;
        quesno = onemcq.serialno; ansA = onemcq.optionA; ansB = onemcq.optionB;
        ansC = onemcq.optionC; ansD = onemcq.optionD; correct = onemcq.correct
    }
    id = id.slice(0, 30)

    const [newComment, setNewComment] = useState({ name: "", comment: "" })
    function handleChange(e) {
        setNewComment(prevState => ({ ...prevState, [e.target.name]: e.target.value, [e.target.comment]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const addData = async () => {
            try {

                const subCollectionRef = collection(db, pathname, id, "comments")
                await addDoc(subCollectionRef, {
                    name: newComment.name,
                    comment: newComment.comment
                });

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        addData();
        setDiscussion((prev) => [...prev, <div key={randomNumber}><span className='userName'>{newComment.name}</span> <br /> <div className='userComment'> {newComment.comment}</div><hr></hr> </div>])

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
                    setDiscussion([<div key='1'>No previous comments. Feel free to reply.</div>, <hr key='2'></hr>])
                }

            } catch (e) {
                console.error("Could not find", e);
            }
        }
        fetchData();
    }, [])
    const navigate = useNavigate()
    return (
        <div className='mcq'>
            <Helmet>
                <meta name="description" content={ques} />
            </Helmet>
            <button onClick={() => navigate(-1)} className="showDiscussion" style={{ marginBottom: "0.3rem", }}>👈 Go back</button>
            <McqOne ques={ques} quesno={quesno} ansA={ansA} ansB={ansB} ansC={ansC} ansD={ansD} correct={correct} />
            <div className='oldCommentSection'>
                <p className='comment-heading'>Discussion forum</p>

                {discussion}
            </div>

            <form onSubmit={handleSubmit} className='commentSection'>
                <div className='comment-heading'>Place your comment below</div>
                <textarea className='nameTextarea' rows={1} cols={40} placeholder="Your name..." name='name' value={newComment.name} onChange={handleChange} required />
                <br />
                <textarea className='commentTextarea' rows={3} cols={40} placeholder="Your comment here..." name='comment' value={newComment.comment} onChange={handleChange} required />
                <br />
                <input type="submit" value="Submit" />

            </form>

        </div>
    )
}

export default NewComment