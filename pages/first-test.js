import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '../styles/FirstTest.module.css'
import List from '../components/list'
import Loading from '../components/loading';

const FirstTest = () => {       

    return (
        <div className="container height100">
            <div className="d-flex justify-content-center">
                <Link href="/">
                    <button type="button" className="btn  btn-lg btn-dark m-4">Voltar</button>
                </Link>
            </div>
            {!<Loading /> ?
                <Loading style={{ width: "8em", height: "8em" }}/> :
                <div className="row p-2 fade-in">
                    <div className="col-12 col-lg-6 d-flex justify-content-center mb-3">
                        <img src="/list-view.gif" width="320" className="shadow-sm" />
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div className="card bg-light border-0 shadow-sm rounded" style={{ minHeight: 550, width: 320 }}>
                            <div className={styles.topMenu}>
                                <img src="/roundLogo.png" alt="logo do topo da Avenue Code" title="Logo Avenue Code" />
                            </div>
                            <div className="card-body mt-5">
                                <List />                                   
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default FirstTest