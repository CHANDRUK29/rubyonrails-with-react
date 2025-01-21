import React, { useEffect, useState } from 'react'
import QuestionDetails from './QuestionDetails'
import axios from 'axios';

const QuestionList = () => {

    const [questionList, setQuestionsList] = useState([]);

    const fetchQuestions = async () => {
        try {
            let response = await axios.get('http://localhost:3000/api/v1/questions');
            console.log(response.data)
            setQuestionsList(response.data)
        } catch (error) {
            console.error("error -->",error)
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])


    return (
        <div className="row">
            <div className="col-lg-10 mx-auto">
                {questionList.map((data, index) => (
                    <QuestionDetails question={data} keyValue={data.id} key={data.id} />
                ))}
            </div>
        </div>
    )
}

export default QuestionList