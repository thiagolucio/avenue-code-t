import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import ListInserted from '../components/list-inserted';
import styles from '../styles/FirstTest.module.css'

const FirstTest = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1500);
    }, []);

    return (
        <div className="container height100">
            <div className="d-flex justify-content-center">
                <Link href="/">
                    <button type="button" class="btn  btn-lg btn-dark m-4">Voltar</button>
                </Link>
            </div>
            {!isLoaded ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-dark mt-5" role="status" style={{ width: "8em", height: "8em" }}></div>
                </div> :
                <div className="row p-2 fade-in">
                    <div className="col-6 d-flex justify-content-center">
                        <img src="/list-view.gif" width="320" className="shadow-sm" />
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <div className="card bg-light border-0 shadow-sm rounded" style={{ minHeight: 550, maxWidth: 320 }}>
                            <div className={styles.topMenu}>
                                <img src="/roundLogo.png" alt="logo do topo da Avenue Code" title="Logo Avenue Code" />
                            </div>
                            <div className="card-body mt-5">
                                <div className="input-group mb-3">
                                    <input type="text" class="form-control" placeholder=" &#129299;  Valid input, please?" aria-label="input Country" aria-describedby="button-addon2" />
                                    <button className="btn btn-dark" type="submit" id="buttonAdd" onclick="addItem()">Insert</button>
                                </div>
                                <ListInserted />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default FirstTest