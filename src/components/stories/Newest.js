import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Newest = () => {

    return (
        <>
            <Story apiFunc={api.newest()} />
        </>
    );
};


export default Newest;