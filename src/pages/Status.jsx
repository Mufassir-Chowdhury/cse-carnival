import React from 'react';
import {useParams} from "react-router-dom";

const Status = (props) => {
    const {id} = useParams();
    console.log(id);
    return (
        <div className='py-48'>
            {id}
        </div>
    );
};

export default Status;