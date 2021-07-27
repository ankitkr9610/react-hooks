import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Top = () => {

    return (
        <>
            <Story apiFunc={api.top()} />
        </>
    );
};


export default Top;