import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const SortContainer = styled.div`
	display: flex;
    margin-top: ${dimens.margin_lg}px;
    height: 30px;
    width: 30px;
    background-color: ${colors.darkDivider};
`;