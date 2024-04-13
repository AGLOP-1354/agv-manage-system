import styled from 'styled-components';
import { Table } from 'antd';

const RecentOrderTitle = styled.div`
  color: ${({ theme }) => theme.colors.text_100};
  width: fit-content;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const RecentOrderTable = styled(Table)`
  .ant-table {
    border-radius: 24px !important;
    overflow: hidden !important;
  }

  table {
    overflow: auto;
    text-wrap: nowrap;
    background: ${({ theme }) => theme.colors.bg_200} !important;
    color: ${({ theme }) => theme.colors.text_100} !important;

    .ant-table-cell-row-hover,
    .ant-table-thead > tr > th {
      background: ${({ theme }) => theme.colors.bg_200} !important;
      color: ${({ theme }) => theme.colors.text_100} !important;
    }
    
    .ant-table-header,
    .ant-table-cell {
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.bg_300}`} !important;
    }

    .ant-table-row:last-child {
      .ant-table-cell {
        border-bottom: unset !important;
      }
    }
  }

  .ant-pagination {
    color: ${({ theme }) => theme.colors.text_100} !important;
    
    .ant-pagination-next > button > .anticon,
    .ant-pagination-prev > button > .anticon {
      color: ${({ theme }) => theme.colors.text_100} !important;
    }
    
    input {
      background: ${({ theme }) => theme.colors.bg_200} !important;
      border: ${({ theme }) => theme.colors.bg_300} !important;
    }
  }
`;

export {
  RecentOrderTitle,
  RecentOrderTable,
};
