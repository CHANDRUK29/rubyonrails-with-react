import React from 'react'

const Loader = ({ isShowLoader }) => {
    return (
        <div>
            {isShowLoader &&
                <div class="mt-5 d-flex justify-content-center text text-warning">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Loader