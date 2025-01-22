import React from 'react'

const Loader = ({ isShowLoader }) => {
    return (
        <div>
            {isShowLoader &&
                <div className="mt-5 d-flex justify-content-center text text-warning">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Loader