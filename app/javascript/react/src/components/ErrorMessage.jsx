import React from 'react'

const ErrorMessage = ({ tagName }) => {
    return (
        <div className='container m-2'>
            <div className="mt-5 alert alert-danger alert-dismissible fade show" role="alert">
                <strong>OOPS!</strong> No Questions found with the tag: {tagName}. Please Select Another Question
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </div>
    )
}

export default ErrorMessage