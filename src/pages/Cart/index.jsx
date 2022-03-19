import { Typography } from 'antd';
import React from 'react';
import { ProductCartTable, TotalPriceCard } from '../../components';

const { Title } = Typography;

const CartPage = () => {
  return (
    <div className="px-4">
      <Title>My cart</Title>
      <ProductCartTable />
      <TotalPriceCard />
    </div>
  );
};

export default CartPage;
