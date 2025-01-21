import axios from 'axios'
import React, { useState } from 'react'

const QuestionDetails = ({ question, keyValue }) => {

    const [likeCount, setLikeCount] = useState(question.likesCount)
    const [dislikeCount, setDisLikeCount] = useState(question.dislikesCount)

    const handleLike = () => {
        updateQuestionCounter({ "addCountFor": "like" })
        setLikeCount((prev) => prev + 1)
    }

    const handleDisLike = () => {
        updateQuestionCounter({ "addCountFor": "dislike" })
        setDisLikeCount((prev) => prev + 1)
    }

    const updateQuestionCounter = (body) => {
        axios.put(`http://localhost:3000/api/v1/questions/${question.id}/updateCount`, body)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="card rounded-2 mt-3" key={keyValue}>
            <div className="card-body">
                <h3 className='card-title'>{question.title}</h3>
                <p className='lead'><span className='badge bg-success'>{question.tag}</span></p>

                <button type="button" className="btn btn-primary position-relative btn-sm" style={{ marginRight: 1 + 'em' }} onClick={handleLike}>
                    Like
                    {
                        likeCount > 0 ?
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {likeCount}
                            </span> : ""
                    }
                </button>
                <button type="button" className="btn btn-primary position-relative btn-sm" onClick={handleDisLike}>
                    DisLike
                    {
                        dislikeCount > 0 ?
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {dislikeCount}
                            </span> : ""
                    }
                </button>
            </div>
        </div>
    )
}

export default QuestionDetails