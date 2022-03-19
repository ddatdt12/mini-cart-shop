import { Button, Card, Typography } from 'antd';
import React from 'react';
import { selectCart } from '../../store/selector/cart';
import { useStore } from '../../store';
import { vndFomatter } from '../../utils';
const { Title } = Typography;

const TotalPriceCard = () => {
  const cart = useStore(selectCart);

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
    return vndFomatter.format(totalPrice);
  };
  return (
    <div className="total-card">
      <Card
        title={
          <div className="flex justify-between items-center">
            <Title level={3}>Total Price:</Title>
            <h3>{getTotalPrice()}</h3>
          </div>
        }
        style={{ width: 500 }}>
        <p>{}</p>
        <Button style={{ width: '100%' }} type="primary">
          Payment
        </Button>
      </Card>
    </div>
  );
};

export default TotalPriceCard;
