import React from 'react';
import { ButtonContainer } from './styles';
import PropTypes from 'prop-types';
import MDSpinner from "react-md-spinner";

import * as dimens from '../../theme/dimens';
import * as colors from '../../theme/colors';

function Button({title, children, type, disabled, loading, ...rest}) {

    return (
        <ButtonContainer type={type} disabled={disabled} {...rest}>
            {loading ? <MDSpinner size={dimens.font_content} singleColor={colors.lightFont} /> : children}
        </ButtonContainer>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'outline']),
    title: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    loading: PropTypes.bool
  };
  
  Button.defaultProps = {
    type: 'primary',
    title: '',
    children: null,
    disabled: false,
    size: 'md',
    loading: false
  };

export default Button;