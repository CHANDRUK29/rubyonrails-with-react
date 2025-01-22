import React from 'react'

const ServerSideError = ({error}) => {
    console.log(error)
    return (
        <>
            <p className='lead fw-bold'>Please Fix the errors below</p>
            {
                error.map((err, index) => (
                    <p className='text-danger' key={index}>{err}</p>
                ))
            }
        </>
    )
}

export default ServerSideError