import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Show = () => {
    return (
        <>
            <Story apiFunc={api.show()} />
        </>
    );
};


export default Show;