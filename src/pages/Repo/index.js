import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

function Repo() {
	const { userId, repoId } = useParams();
    const navigate = useNavigate();
	return (<h1>Repo {repoId} from user {userId}
    <Button onClick={() => navigate('/')}>Vai</Button></h1>);
}

export default Repo;