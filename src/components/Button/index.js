import React from 'react';
import { ButtonContainer } from './styles';
import PropTypes from 'prop-types';

function Button({title, children, type, disabled, ...rest}) {

    return (
        <ButtonContainer type={type} disabled={disabled} {...rest}>
            {children}
        </ButtonContainer>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'outline']),
    title: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool
  };
  
  Button.defaultProps = {
    type: 'primary',
    title: '',
    children: null,
    disabled: false
  };

export default Button;