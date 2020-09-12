import React, { Component, useState } from 'react';
import './form.css';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

export default class Exampleform extends React.Component
{
  
   render()
   {
     return(
       <form>
         <Form.Item label="Type of security">
           <TreeSelect
              treeData={[
                {
                  title: 'Bond',
                  value: 'bond',
                },
                {
                  title: 'Equity',
                  value: 'equity',
                },
                {

                  title: 'Commodity',
                  value: 'commodity',
                },
                {

                  title: 'Indices',
                  value: 'indices',
                },
                {

                  title: 'Derivatives',
                  value: 'derivatives',
                  children: [
                                        {
                                          title: 'Futures',
                                          value: 'futures',
                                        },

                                        {
                                          title: 'Options',
                                          value: 'options',
                                        },
                                      ],


                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Symbol "  >
                <Input />
          </Form.Item>

          <Form.Item label="Rate      ">
                < Input />
          </Form.Item>

          <Form.Item label="Quantity">
                <InputNumber />
          </Form.Item>
          
          <Form.Item label="Total      ">
                <Input />
          </Form.Item>

          <Form.Item label="Transaction type" >
             <Radio.Group>
               <Radio.Button value="buy">Buy</Radio.Button>
               <Radio.Button value="sell">Sell</Radio.Button>
               
             </Radio.Group>
         </Form.Item>

       </form>
     );
   }

  }

