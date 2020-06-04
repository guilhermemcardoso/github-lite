import React from 'react';
import { PaginationContainer, Button, CurrentPage } from './styles';
import PropTypes from 'prop-types';

function Pagination({
	currentPage,
	totalPages,
	clickNext,
	clickPrevious,
	...rest
}) {

	return (
		<PaginationContainer {...rest}>
			{currentPage > 1 && (<Button onClick={clickPrevious}>{'<'}</Button>)}
			<CurrentPage>Página {currentPage}</CurrentPage>
			{currentPage < totalPages && (<Button onClick={clickNext}>{'>'}</Button>)}
		</PaginationContainer>
	);
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	totalPages: PropTypes.number,
	clickNext: PropTypes.func,
	clickPrevious: PropTypes.func,
};

Pagination.defaultProps = {
	currentPage: 1,
	totalPages: 1,
};

export default Pagination;
