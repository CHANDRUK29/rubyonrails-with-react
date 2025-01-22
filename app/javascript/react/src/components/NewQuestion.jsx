import axios from 'axios'
import React, { useState } from 'react'
import ServerSideError from './ServerSideError'

const NewQuestion = () => {

    const tagsList = [
        { label: 'Ruby', value: "Ruby" },
        { label: 'React', value: 'React' },
        { label: 'Node', value: 'Node' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'Rails', value: 'Rails' },
        { label: 'DSA', value: 'DSA' },
    ]

    // const [title, setTitle] = useState('');
    // const [tag, setTag] = useState(tagsList[0].value)

    // const handleTitleChange = (event) => {
    //     setTitle(event.target.value)
    // }

    // const handleTagChange = (event) => {
    //     setTag(event.target.value)
    // }

    const [formData, setFormData] = useState({
        title: '',
        tag: tagsList[0].value
    })
    const [isServerSideError, setIsServerSideError] = useState(false)
    const [serverError, setServerError] = useState(null)

    const handleFormData = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
        setIsServerSideError(false)
        setServerError(null)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        axios.post('http://localhost:3000/api/v1/questions', formData)
            .then((response) => {
                console.log(response)
                console.log(response.data)
                // if (response.data['status'] == 'failure') {
                //     setIsServerSideError(true)
                //     setServerError(response.data['data'])
                // } else {
                //     setIsServerSideError(false)
                //     setServerError([])
                // }
                
            })
            .catch((err) => {
                console.error(err);
                const errorMessage = err.response?.data?.error || 'Something went wrong';
                setIsServerSideError(true);
                setServerError(errorMessage);
            })
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-5" id="exampleModalLabel">Enter your Question here</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            {isServerSideError && serverError && <ServerSideError error={serverError} />}
                            <div className="form-group">
                                <label className='form-label mt-3 mb-3'>Title</label>
                                <input type="text" className='form-control form-control-lg rounded-0' name='title' value={formData.title} onChange={event => handleFormData(event)} />
                            </div>
                            <div className="form-group">
                                <label className='form-label mt-3 mb-3'>Select the question Tag</label>
                                <select type="text" className='form-select form-select-lg rounded-0' name='tag' value={formData.tag} onChange={event => handleFormData(event)}>
                                    {
                                        tagsList.map((item) => (
                                            <option value={item.value} key={item.value}>{item.label}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Submit Question</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewQuestion