import React, { useEffect, useState } from 'react';
import TodoOnUi from '../TodoOnUi/TodoOnUi';

const Todo = () => {
    const [showTodo, setShowTodo] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setShowTodo(data))

    }, []);
    return (
        <div >
            <h1>Json Place Holder API todo data show challenge</h1>
            <h2>Found data : {showTodo.length}</h2>
            {
                showTodo.map(todo => <TodoOnUi key ={todo.id} todoData = {todo}></TodoOnUi>)
            }
        </div>
    );
};

export default Todo;