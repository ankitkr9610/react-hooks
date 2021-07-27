import React, {useState, useEffect} from 'react';
import ListItem from '../List/ListItem';

const Story = ({apiFunc}) => {

    const [mainStory, setMainStory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        apiFunc.then(res => {
            setMainStory(res);
            setIsLoading(false);
        }).catch(error => {
            console.log(error.response);
            setIsLoading(false);
        })
        
    },[apiFunc])
    

    return (
        <>
            {!isLoading &&<ListItem data={mainStory} />}
        </>
    );
};

export default Story;