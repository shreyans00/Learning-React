import React from 'react';

const List = (props) => {
    const select = () => {
        // console.log(props.id);
        return props.onSelect(props.id);
    }
    const edit = () => {
        // console.log(props.id);
        return props.onClick(props.id);
    }
    return (
        <>
            <div className="showItems">
                <div className='eachItem'>
                    <h3>{props.text}</h3>
                    <div className="todo-btn">
                        <i className="fas fa-edit" title='Edit Item' onClick={edit}></i>
                        <i className="fa fa-trash-alt add-btn" title='Delete Item' onClick={select}></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;