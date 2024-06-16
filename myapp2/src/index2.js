import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();

// const cur_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
const cur_date = date.toLocaleDateString();

// const cur_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
const cur_time = date.toLocaleTimeString();

ReactDOM.render(
    <>
        <p>{`Current Date: ${cur_date}`}</p>
        <p>{`Current Time: ${cur_time}`}</p>
    </>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const link = "https://www.google.com/";

ReactDOM.render(
    <>
        <h1 contentEditable>Hello world</h1> {/* user can edit the content directly from browser */}
        <img src={img1} alt="random images" />
        <a href={link} target="_blank">
            <img src={img2} alt="click it" /> {/* click on image will direct to above link */}
        </a>
    </>,
    document.getElementById('root')
);

