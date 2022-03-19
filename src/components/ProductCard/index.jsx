import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { vndFomatter } from '../../utils';
const { Meta } = Card;

const ProductCard = props => {
  const { name, price, description, img, loading, onAddToCartClick } = props;

  return (
    <Card
      className="card"
      cover={<img alt="example" src={img} style={{ width: '100%', justifySelf: 'center' }} />}
      actions={[
        <div key={'add_to_cart'} onClick={onAddToCartClick}>
          <ShoppingCartOutlined style={{ marginRight: 10 }} />
          Add to cart
        </div>,
        <p key="price">{vndFomatter.format(price)}</p>,
      ]}
      loading={loading}>
      <Meta title={name} description={description} />
    </Card>
  );
};

export default ProductCard;
