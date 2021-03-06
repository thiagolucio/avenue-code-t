import React, { useState, useEffect } from 'react';
import styles from '../styles/FirstTest.module.css'

const ListInserted = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const fuller = ["England", "Ireland"];

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
    }, []);

    return (
        <div className="container-fluid">
            {!isLoaded ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-dark mt-5" role="status"></div>
                </div> :
                <div className="row">
                    {/* {(fuller.value !== this.state.input.value) ?
                            <div className="badge badge-alert"><span>&#129488;</span>Please, provide the valid input</div>
                            :
                            <div className="badge badge-success"><span>&#128521;</span>Thanks to provide right input</div>                    
                        } */}
                    <ul className="list-group bg-dark mt-5" style={{ width: 320 }}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {fuller[0]}
                            <span class="badge font16">&#128515;</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center text-danger">
                            {fuller[1]}
                            <span class="badge font16">&#128553;</span>
                        </li>
                    </ul>

                </div>
            }
        </div>
    )
}

export default ListInserted