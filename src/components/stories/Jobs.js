import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Jobs = () => {
    return (
        <>
            <Story apiFunc={api.job()} />
        </>
    );
};


export default Jobs;