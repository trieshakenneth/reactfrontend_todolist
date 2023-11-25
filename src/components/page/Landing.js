import axios from 'axios';
import React, { useEffect, useState } from 'react';
import backgroundImage from './bgimage2.jpg';



export default function Landing({isAuthenticated, setIsAuthenticated}) {
  const [message, setMessage] = useState('')
  const [numberAllTodoNotCompleted, setNumberAllTodoNotCompleted] = useState(0);
  const [numberAllTodo, setNumberAllTodo] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const showErrorMessage = () => {
    if(errorMessage === ''){
      return <div></div>
    }

    return <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  }

  useEffect(() => {
    async function getAndSetNumberAllTodo() {
      try{
        const response = await axios.get('https://springbootmyproject.onrender.com/api/todo/count', {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          }
        });
        setNumberAllTodo(response.data.count);
      } catch (error) {
        setMessage('');
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } 
      }
    }

    async function getAndSetNumberAllTodoNotCompleted() {
      try{
        const response = await axios.get('https://springbootmyproject.onrender.com/api/todo/count?isCompleted=false', {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          }
        });

        setNumberAllTodoNotCompleted(response.data.count);
      } catch (error) {
        setMessage('');
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } 
      }
      
    }
    if(isAuthenticated){
      getAndSetNumberAllTodo();
      getAndSetNumberAllTodoNotCompleted();
      setMessage(`Welcome, ${sessionStorage.getItem('name')}. You have ${numberAllTodoNotCompleted} todo not completed out of ${numberAllTodo} todo.`);
    } else {
      setMessage('Please sign in to continue');
    }
  }, [isAuthenticated, numberAllTodo, numberAllTodoNotCompleted])

	return (
    <div
    className="landing-page"
    style={{
      backgroundImage: `url(${backgroundImage})`, // Use the imported image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the background covers the full viewport height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
        <h1 style={{ color: 'black' }}>Welcome to a Productive Lifestyle</h1>
        <h3 style={{ color: '#95365F' }}>Your Day, Your Way: Our App- Where Productivity Takes Center Stage!</h3>
          {showErrorMessage()}
          <p>{message}</p>
        </div>
      </div>
      
    </div>
  </div>
      
	)
}