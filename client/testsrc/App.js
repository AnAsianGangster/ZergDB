import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useRef, useEffect } from 'react';
// import TodoList from './TodoList'
// import uuidv4 from 'uuid/v4'
// import ProfileDisplay from './ProfileDisplay';

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

// function App() {
//   const [todos, setTodos] = useState([])

//   const [profiles, setProfiles] = useState(null)

//   const todoNameRef = useRef()


//   useEffect(()=> {
//     fetch('http://localhost:3000/profile/key')
//     .then(res => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data)
//       setProfiles(data)
//     })
//   },[])

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     if (storedTodos) setTodos(storedTodos)
//   }, [])

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
//   }, [todos])

//   function toggleTodo(id) {
//     const newTodos = [...todos]
//     const todo = newTodos.find(todo => todo.id === id)
//     todo.complete = !todo.complete
//     setTodos(newTodos)
//   }

//   function handleSearchDatabase(e) {
//     const name = todoNameRef.current.value
//     if (name === '') return
//     setTodos(prevTodos => {
//       return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
//     })
//     todoNameRef.current.value = null
//   }

//   function handleAddTodo(e) {
//     const name = todoNameRef.current.value
//     if (name === '') return
//     setTodos(prevTodos => {
//       return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
//     })
//     todoNameRef.current.value = null
//   }

//   function handleClearTodos() {
//     const newTodos = todos.filter(todo => !todo.complete)
//     setTodos(newTodos)
//   }

//   return (
//     <div className="App">
//     {profiles && <ProfileDisplay profiles={profiles} />}
//     <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input ref={todoNameRef} type="text" />
//       <button onClick={handleSearchDatabase}>Search</button>
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <button onClick={handleClearTodos}>Clear Complete</button>
//       <div>{todos.filter(todo => !todo.complete).length} left to do</div>
//     </div>
//   )
// }

// export default App;

// // import React from 'react';
// // import './App.css';

// // // import the Container Component from the semantic-ui-react
// // import { Container } from "semantic-ui-react";

// // // import the ToDoList component
// // import ToDoList from "./To-Do-List";

// // function App() {
// //   return (
// //     <div>
// //       <Container>
// //         <TodoList todos={todos}/>
// //         {/* <ToDoList /> */}
// //       </Container>
// //     </div>
// //   );
// // }

// // export default App;
