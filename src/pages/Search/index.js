import React, { useState, useEffect } from 'react';
import { SearchContainer, Logo, Title, SearchInput } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Actions } from '../../store/ducks/user';

import Button from '../../components/Button';
import UserList from '../../components/UserList';
import NoResults from '../../components/NoResults';
import Pagination from '../../components/Pagination';

function Search() {
	const logo = require('../../assets/imgs/github.svg');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loading = useSelector((state) => state.user.loading);
	const users = useSelector((state) => state.user.users);
	const totalCount = useSelector((state) => state.user.totalCount);
	const totalPages = useSelector((state) => state.user.totalPages);
	const currentPage = useSelector((state) => state.user.currentPage);

	const [hasSearches, setHasSearches] = useState(false);
	const [query, setQuery] = useState('');
	const [searchedQuery, setSearchedQuery] = useState('');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [users]);

	const handleSearch = () => {
		if (query.length < 1) return;
		if (!hasSearches) setHasSearches(true);
		setSearchedQuery(query);
		dispatch(Actions.searchUser(query, 1));
	};

	const handleItemClick = (userId) => {
		navigate(`users/${userId}`);
	};

	const handlePreviousPage = () => {
		const previousPage = currentPage - 1;
		dispatch(Actions.searchUser(searchedQuery, previousPage));
	};

	const handleNextPage = () => {
		const nextPage = currentPage + 1;
		dispatch(Actions.searchUser(searchedQuery, nextPage));
	};

	return (
		<SearchContainer>
			<Logo src={logo} />
			<Title>GitHub Lite</Title>
			<SearchInput
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button onClick={handleSearch} loading={loading} size='md'>
				Pesquisar
			</Button>
			{hasSearches && (
				<UserList
					data={users}
					totalResults={totalCount}
					onItemClick={handleItemClick}
				/>
			)}
			{totalCount === 0 && hasSearches && !loading && (
				<NoResults query={searchedQuery} />
			)}
			{hasSearches && totalCount > 10 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					clickNext={handleNextPage}
					clickPrevious={handlePreviousPage}
				/>
			)}
		</SearchContainer>
	);
}

export default Search;
