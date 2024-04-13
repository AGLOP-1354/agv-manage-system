import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  background: ${({ theme }) => theme.colors.bg_200};
  width: 100% !important;
  height: 100% !important;
`;

export {
  StyledCanvas,
};
