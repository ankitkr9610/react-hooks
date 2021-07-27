import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Ask = () => {
    return (
        <>
            <Story apiFunc={api.ask()} />
        </>
    );
};


export default Ask;