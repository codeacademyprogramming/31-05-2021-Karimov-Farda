import React, { createElement, useState } from 'react';
export const TemperatureList = ({
    temperature
}) => {
    console.log(temperature)
    const [lists, setLists] = useState([]);
    const [listtext, setListText] = useState("");
    const [unit, setUnit] = useState({ unit: "C" })
    const handleListCreate = evt => {
        evt.preventDefault();
        setLists([
            ...lists,
            { text: listtext }
        ])

        setListText("")
    }

    return (
        <div>
            <form onSubmit={handleListCreate}>
                <label> Order : London, Baku , Ankara, Istanbul , Berlin, Paris, Madrid , Moscow </label>
                <input style={{ width: '60%', marginTop: '2rem', padding: '0.5rem', border: '1px solid black', borderRadius: "0.5rem" }}
                    value={listtext}
                    onChange={e => setListText(e.target.value)}
                    type="text" id="input" />
                <button type="submit" style={{ cursor: 'pointer', marginLeft: '2rem', padding: '0.5rem 1.5rem', backgroundColor: 'red', color: "white", border: 'none', borderRadius: '0.5rem' }}>Add</button>


            </form>

            <ul id="list">

                <input type="radio" value="radio" onClick={() => { var degree = "tempCelcius"; localStorage.clear(); localStorage.setItem('degree', 'tempCelcius') }} name="unit"></input>Celcius
                <input type="radio" value="radio" onClick={() => { localStorage.clear(); localStorage.setItem('degree', 'tempKelvin') }} name="unit"></input>Kelvin
                <input value="radio" style={{ marginBottom: '2rem' }} onClick={() => { localStorage.clear(); localStorage.setItem('degree', 'tempFehren') }} type="radio" name="unit"></input>FehrenHeight


                    {


                    lists.map((list, index) => (
                        <li id={index} style={{ listStyle: 'none' }} key={index}><button onClick={() => { document.getElementById(`${index}`).style.display = "none" }} style={{ padding: '0 0.5rem', fontSize: '1rem', }}>{'-'}</button>      {index + 1}  {temperature[index][list.text].name}  {temperature[index][list.text].tempCelcius} {unit.unit}</li>
                    ))}

            </ul>



        </div>







    );
}


