import styled from 'styled-components';

import { breakpoint } from '../../../theme';

const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  max-width: 100%;
  padding-inline: 16px;

  ${breakpoint.lg} {
    max-width: 1254px;
    padding: 0;
  }

  ${breakpoint.xxl} {
    max-width: 1440px;
    margin-inline: auto;
  }
`;

export { Wrapper };
