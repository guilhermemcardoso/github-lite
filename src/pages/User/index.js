import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function User() {
	const { userId } = useParams();
    const navigate = useNavigate();
	return (<h1>User {userId}
    <button onClick={() => navigate('/')}>Vai</button></h1>);
}

export default User;
