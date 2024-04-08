import styled from 'styled-components';

const StyledTotalInfoTemplateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`;

const StyledTotalInfoTemplate = styled.div`
  background-color: ${({theme}) => theme.colors.bg_200};
  color: ${({theme}) => theme.colors.text_100};
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 16px;
  box-shadow: 0 0 5px rgba(58, 57, 57, 0.8) inset, 0 0 1px rgba(200, 200, 200, 0.5);
`;

const StyledTotalInfoFrameIcon = styled.span`
  background-color: ${({ theme }) => theme.colors.accent_200};
  color: ${({ theme }) => theme.colors.accent_100};
  padding: 8px;
  font-size: 24px;
  border-radius: 50px;
`;

const StyledTotalInfoFrameTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const StyledTotalInfoFrameResult = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

export {
  StyledTotalInfoTemplateContainer,
  StyledTotalInfoTemplate,
  StyledTotalInfoFrameIcon,
  StyledTotalInfoFrameTitle,
  StyledTotalInfoFrameResult,
};
