import React, { useState } from 'react';
import todo from './Images/logo.png';

const App = () => {

    const [cur, upd] = useState("");
    const [item, setItem] = useState([]); // item array hai aur isi mai store krenge jo bhi hm add kr rhe hai
    // do hooks bnaye hai upar, ek add item ke liye hai aur ek list ke liye

    const add = (e) => {
        upd(e.target.value);
    };
    const addMore = (e) => {
        setItem((oldItems) => {
            return [...oldItems, cur];
        });
        upd("");
    };

    const removeAll = () => {
        setItem(() => {
            return [];
        });
    };

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todoLogo" />
                        <figcaption>Add Your List Here 🥇</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add an Item ..." onChange={add} value={cur} />
                        <i class="fa fa-plus add-btn" title="Add Items" onClick={addMore}></i>
                    </div>
                    <ol>
                        {item.map((val, idx) => { // array ko val ke saath map kr rhe hai
                            return (
                                <div>
                                    <div className="showItems">
                                        <div className='eachItem'>
                                            <h3>{val}</h3 >
                                            <div className="todo-btn">
                                                <i className="fas fa-edit" title='Edit Item' onClick={((id) => {
                                                    setItem((oldItems) => {
                                                        return oldItems.filter((curEle, idx) => {
                                                            if (idx === id) { // jo krna hai yahan kr lo
                                                                upd(curEle);
                                                            }
                                                            return idx !== id; // last mai return kr dena array jiska idx!=id hai
                                                        });
                                                    });
                                                })}></i>
                                                <i className="fa fa-trash-alt add-btn" title='Delete Item' onClick={(id) => {
                                                    setItem((oldItems) => {
                                                        return oldItems.filter((curEle, idx) => {
                                                            return idx !== id; // jo match nhi hua unko return krwa do
                                                        });
                                                    });
                                                }}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ol>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default App;