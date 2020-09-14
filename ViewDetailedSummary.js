import { Table, Tag, Space, Rate } from 'antd';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    TransactionDate : 'Nov 5,2019, midnight',
    TransactionDescription : 'GOOG BUY',
    CreditAmount : '4500',
    DebitAmount : '-',
    Balance : '804500',

  },
  {
    key: '2',
    TransactionDate : 'Nov 6,2019, midnight',
    TransactionDescription : 'AAPL Sell',
    CreditAmount : '4600',
    DebitAmount : '-',
    Balance : '809100',

  },
  {
    key: '3',
    TransactionDate : 'Nov 5,2019, midnight',
    TransactionDescription : 'MSFT Sell',
    CreditAmount : '-',
    DebitAmount : '10000',
    Balance : '709100',

  }
  
];

export default class ExampleViewDetailedSummary extends PureComponent {
    
    render() {
        return (
            <Table dataSource={data}>
           <Table width={3400} height={100} data={data}>
            <Column title="TransactionDate" dataIndex="TransactionDate" key=" TransactionDate" />
            <Column title="TransactionDescription" dataIndex="TransactionDescription" key="TransactionDescription" />
            <Column title="CreditAmount" dataIndex="CreditAmount" key="CreditAmount" />
            <Column title="DebitAmount" dataIndex="DebitAmount" key="DebitAmount" />
            <Column title="Balance" dataIndex="Balance" key="Balance" />
            
    
    
    
  </Table>
          </Table>
        );
      }
}