import React from 'react';
import {
	RepoContainer,
	RepoName,
	RepoDescription,
	Badge
} from './styles';
import PropTypes from 'prop-types';

function RepoItem({ repo, onClick, ...rest }) {
	const handleClick = () => {
		onClick(repo.name);
	};

	return (
		<RepoContainer {...rest}>
			<RepoName onClick={handleClick}>
				{repo.name}
			</RepoName>
			{repo.description && <RepoDescription>{repo.description}</RepoDescription>}
		</RepoContainer>
	);
}

RepoItem.propTypes = {
	onClick: PropTypes.func,
	repo: PropTypes.object,
};

RepoItem.defaultProps = {
	repo: {},
};

export default RepoItem;
