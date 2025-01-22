import React, { useEffect, useState } from 'react'
import QuestionDetails from './QuestionDetails'
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import NewQuestion from './NewQuestion';

const QuestionList = () => {

    const tagsList = [
        { label: 'All', value: 0 },
        { label: 'Ruby', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Node', value: 3 },
        { label: 'JavaScript', value: 4 },
        { label: 'Rails', value: 5 },
    ]
    const [isShowAlert, setIsShowAlert] = useState(false)
    const [isShowLoader, setIsShowLoader] = useState(false)
    const [selectedOption, setSelectedOption] = useState(tagsList[0].value)
    const [questionList, setQuestionsList] = useState([]);

    const fetchQuestions = async () => {
        try {
            setIsShowLoader(true)
            setIsShowAlert(false)
            let response = await axios.get('http://localhost:3000/api/v1/questions');
            console.log(response.data)
            setQuestionsList(response.data)
            setIsShowLoader(false)
            if (response.data.length == 0) {
                setIsShowAlert(true)
            }
        } catch (error) {
            console.error("error -->", error)
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const handleSelectOption = (e) => {
        setIsShowLoader(true)
        setIsShowAlert(false)
        setQuestionsList([]);
        setSelectedOption(e.target.value)
        axios.get(`http://localhost:3000/api/v1/questions?tags=${tagsList[event.target.value].label}`).then((response) => {
            console.log(response.data)
            setQuestionsList(response.data)
            setIsShowLoader(false)
            if (response.data.length == 0) {
                setIsShowAlert(true)
            }
        }).catch((err) => {
            console.error(err)
        })
    }


    return (
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <p className='lead fw-bold'>Filtering Questions By Tags</p>
                <button type="button" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Create New Question
                </button>
                <select className='form-select form-select-lg' value={selectedOption} onChange={(event) => handleSelectOption(event)}>
                    {tagsList.map((listValue) => (
                        <option key={listValue.value} value={listValue.value}>{listValue.label}</option>
                    ))}
                </select>
                {
                    questionList.length > 0 ? questionList.map((data, index) => (
                        <QuestionDetails question={data} keyValue={data.id} key={data.id} />
                    )) :
                        <Loader isShowLoader={isShowLoader} />
                }

                {isShowAlert && <ErrorMessage tagName={tagsList[selectedOption].label} />}
                <NewQuestion/>
            </div>
        </div>
    )
}

export default QuestionList