import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"; 
import backgroundImage from './bgimage2.jpg';

function Signout({isAuthenticated, setIsAuthenticated}) {
	let history = useHistory();

  useEffect(() => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('name');
		setIsAuthenticated(false);
		history.push("/");
  }, [history, setIsAuthenticated])

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
		<div className="text-center">
			<h1>Successfully sign out</h1>
		</div>
		</div>
	)
}

export default Signout;