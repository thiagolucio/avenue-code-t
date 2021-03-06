import React, { useState } from "react";

function List() {
    const [options, setOptions] = useState([]);
    const [textValue, setTextValue] = useState("");
    const [radioValue, setRadioValue] = useState("");
    const cities = ['England', 'Ireland','Italy','Frace']

    const handleOptionAdd = () => {
        if (textValue.trim().length === 0) return;
        setTextValue("");
        setOptions([
            ...options,
            { label: textValue, value: textValue.toLowerCase().replace(" ", "-") },
        ]);
    };

    const messages = () => {
        if(textValue !== cities.value && !textValue) return <div className="alert alert-danger" role="alert">&#129488; Please, provide the valid input</div>;
    }
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={textValue}
                        className="form-control"
                        placeholder=" &#129299;  City?"
                        onChange={(e) => setTextValue(e.target.value)}
                    />
                    <button className="btn btn-dark" type="button" id="buttonAdd" onClick={handleOptionAdd}>Insert</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {messages}
                </div>                    
            </div>
            <div className="row mt-2">
                <div className="col-12 ">
                    {options.map((option) => (
                        <div className="badge badge-light">
                            <input
                                type="hidden"
                                name="dynamic-radio"
                                value={option.value}
                                checked={radioValue === option.value}
                                onChange={(e) => setRadioValue(e.target.value)}
                            />
                            <span className="badge bg-dark slide-in-top font16">{option.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default List;