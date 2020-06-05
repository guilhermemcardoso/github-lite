import React from 'react';
import PropTypes from 'prop-types';
import { SortContainer } from './styles';
function SortOptions({size, color, ...rest}) {

    return (
       <SortContainer />
    );
}

SortOptions.propTypes = {
    sort: PropTypes.string
  };
  
  SortOptions.defaultProps = {
    sort: 'asc'
  };

export default SortOptions;