import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store/ducks/repo';
import {
	UserContainer,
	SpinnerContainer,
	SideContainer,
	UserAvatar,
	MainContainer,
	ContentContainer,
	TitleContainer,
	Title,
	UserName,
	UserLogin,
	UserBio,
} from './styles';

import RepoList from '../../components/RepoList';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';
import SortOptions from '../../components/SortOptions';

import * as dimens from '../../theme/dimens';
import * as colors from '../../theme/colors';

function User() {
	const { user } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const repos = useSelector((state) => state.repo.repos);
	const currentUser = useSelector((state) => state.repo.currentUser);
	const hasPrevious = useSelector((state) => state.repo.hasPrevious);
	const loading = useSelector((state) => state.repo.loading);
	const hasNext = useSelector((state) => state.repo.hasNext);

	const [currentPage, setCurrentPage] = useState(1);
	const [sort, setSort] = useState('desc');

	useEffect(() => {
		dispatch(Actions.getUserRepos(user, currentPage, sort));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [repos]);

	const handlePreviousPage = () => {
		const page = currentPage - 1;
		dispatch(Actions.getUserRepos(user, page, sort));
		setCurrentPage(page);
	};

	const handleNextPage = () => {
		const page = currentPage + 1;
		dispatch(Actions.getUserRepos(user, page, sort));
		setCurrentPage(page);
	};

	const handleRepoClick = (repo) => {
		navigate(repo);
	};

	if (loading || !currentUser)
		return (
			<SpinnerContainer>
				<Spinner size={dimens.font_subtitle} color={colors.accent} />
			</SpinnerContainer>
		);
	return (
		<MainContainer>
			<UserContainer>
				<SideContainer>
					<UserAvatar src={currentUser.avatar_url} />
					{currentUser.name && (
						<UserName>{currentUser.name}</UserName>
					)}
					<UserLogin>{currentUser.login}</UserLogin>
					{currentUser.bio && <UserBio>{currentUser.bio}</UserBio>}
				</SideContainer>
				<ContentContainer>
					<TitleContainer>
						<Title>Repositórios</Title>
						<SortOptions />
					</TitleContainer>
					<RepoList data={repos} onItemClick={handleRepoClick} />
				</ContentContainer>
			</UserContainer>
			{(hasPrevious || hasNext) && (
				<Pagination
					currentPage={currentPage}
					hasPrevious={hasPrevious}
					hasNext={hasNext}
					clickNext={handleNextPage}
					clickPrevious={handlePreviousPage}
				/>
			)}
		</MainContainer>
	);
}

export default User;
