import React, {useState, useEffect} from 'react'

const Loading = () => {     

    const [isLoaded, setIsLoaded] = useState(false);    

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1500);
    }, []);
    
    return <div className="d-flex justify-content-center"><div className="spinner-grow text-dark mt-5" role="status"></div></div>    
}

export default Loading