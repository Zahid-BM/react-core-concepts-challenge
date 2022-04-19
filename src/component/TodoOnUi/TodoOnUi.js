import React from 'react';

const TodoOnUi = (props) => {
    const { id, title, completed } = props.todoData;
    return (

        <div className='bg-success p-3 mx-auto my-3 rounded w-50 text-white'>
            <p>
                Id : {id} <br />
                Todo : {title}  <br />
                Status : {JSON.stringify(completed)}
            </p>
        </div>
    );
};

export default TodoOnUi;