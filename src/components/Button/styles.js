import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const ButtonContainer = styled.button`
	background: ${(props) => {
		if (props.type === 'primary') return colors.primary;
		return colors.lightBackground;
	}};
	border-color: ${colors.primary};
	color: ${(props) => {
		if (props.type === 'primary') return colors.lightFont;
		return colors.primary;
	}};
	border-style: solid;
	font-size: ${dimens.font_content}px;
	margin: ${dimens.padding_md}px;
	padding: ${dimens.padding_sm}px ${dimens.padding_lg}px;
	border-width: 2px;
	border-radius: 3px;
	&:focus {
		border: 2px solid ${colors.darkFont};
		outline: 0;
	}
	&:hover {
		cursor: pointer;
		background: ${(props) => {
			if (props.type === 'primary') return colors.primaryDark;
			return colors.lightBackground;
		}};
		border-color: ${colors.primaryDark};
		color: ${(props) => {
			if (props.type === 'primary') return colors.lightFont;
			return colors.primaryDark;
		}};
	}
`;
