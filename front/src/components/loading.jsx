import React from 'react';

export default ({ isLoading }) => {
    return (
        <div>
            <div className={`${isLoading ? 'show' : 'hide'}`}>Loading..</div>
        </div>
    )
}