import React, { useState, useEffect } from "react";
import './statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => { // async chahiye kyunki fetch API use krne wale hai
        try {
            const res = await fetch('https://api.covid19india.org/data.json'); // async promise return kr rha hoga, in future it will fulfil or reject but till then we have to wait
            // ye jo response mila usko proper js obj mai change krna hoga
            const actualData = await res.join(); //iske paas sara data hai jo api se mil rha tha
            console.log(actualData.statewise);
            setData(actualData.statewise);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);  // blank [] means first time jb refresh krenge tbhi ye call hoga

    return (
        <>
            <div className="continer-fluid">
                <div className="main-heading">
                    <h1>INDIA COVID-19 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className="table-hover table">
                        <thead className="thread-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curEle, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{curEle.State}</th>
                                            <td>{curEle.Confirmed}</td>
                                            <td>{curEle.Recovered}</td>
                                            <td>{curEle.Deaths}</td>
                                            <td>{curEle.Active}</td>
                                            <td>{curEle.Updated}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Statewise;