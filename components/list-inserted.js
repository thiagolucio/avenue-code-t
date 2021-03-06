import React, { useState, useEffect } from 'react';


const ListInserted = () => {

    const [isLoaded, setIsLoaded] = useState(false);

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
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder=" &#129299;  Valid input, please?" aria-label="input Country" aria-describedby="button-addon2" ref={(input) => { this.newText = input }} />
                        <button className="btn btn-dark" type="button" id="buttonAdd" onclick={addItem()}>Insert</button>
                    </div>
                    <ul className="list-group bg-dark mt-5" style={{ width: 320 }} id="dynamic-list">           
                        {this.state.cities.map(function(value) {
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}

export default ListInserted