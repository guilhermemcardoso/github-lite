import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

function Repo() {
	const { user, repo } = useParams();
    const navigate = useNavigate();
	return (<h1>Repo {repo} from user {user}
    <Button onClick={() => navigate('/')}>Vai</Button></h1>);
}

export default Repo;