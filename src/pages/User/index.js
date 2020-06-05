import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
	UserCompanyContainer,
	CompanyIcon,
	UserCompany,
	UserLocationContainer,
	LocationIcon,
	UserLocation
} from './styles';
import { orderBy } from '../../utils/repo';
import { enableScroll, disableScroll } from '../../utils/scroll';

import RepoList from '../../components/RepoList';
import RepoDetails from '../../components/RepoDetails';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';
import SortOptions from '../../components/SortOptions';

import * as dimens from '../../theme/dimens';
import * as colors from '../../theme/colors';

function User() {
	const { user } = useParams();
	const dispatch = useDispatch();

	const repoList = useSelector((state) => state.repo.repos);
	const currentUser = useSelector((state) => state.repo.currentUser);
	const hasPrevious = useSelector((state) => state.repo.hasPrevious);
	const loading = useSelector((state) => state.repo.loading);
	const hasNext = useSelector((state) => state.repo.hasNext);

	const [currentPage, setCurrentPage] = useState(1);
	const [sort, setSort] = useState('desc');
	const [repos, setRepos] = useState([]);
	const [showDetails, setShowDetails] = useState(false);
	const [selectedRepo, setSelectedRepo] = useState();

	useEffect(() => {
			dispatch(Actions.getUserRepos(user, currentPage, sort));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		const newList = orderBy(repoList, sort);
		setRepos(newList);
	}, [repoList]);

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
		setSelectedRepo(repo);
		setShowDetails(true);
		disableScroll();
	};

	const handleCloseDetails = () => {
		setShowDetails(false);
		enableScroll();
	};

	const handleSortItems = () => {
		const newSort = sort === 'desc' ? 'asc' : 'desc';
		const newList = orderBy(repos, newSort);
		setRepos(newList);
		setSort(newSort);
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
					{currentUser.company && (
						<UserCompanyContainer>
							<CompanyIcon fontSize='small' />
							<UserCompany>{currentUser.company}</UserCompany>
						</UserCompanyContainer>
					)}
					{currentUser.location && (
						<UserLocationContainer>
							<LocationIcon fontSize='small' />
							<UserLocation>{currentUser.location}</UserLocation>
						</UserLocationContainer>
					)}
				</SideContainer>
				<ContentContainer>
					<TitleContainer>
						<Title>Repositórios</Title>
						<SortOptions onClick={handleSortItems} />
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
			<RepoDetails 
				repo={selectedRepo}
				show={showDetails}
				onClose={handleCloseDetails}
			/>
		</MainContainer>
	);
}

export default User;
