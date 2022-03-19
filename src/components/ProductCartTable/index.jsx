import { DeleteOutlined } from '@ant-design/icons';
import { InputNumber, Table } from 'antd';
import React from 'react';
import { useStore } from '../../store';
import { vndFomatter } from '../../utils';

const { Column } = Table;

const ProductCartTable = () => {
  const { removeFromCart, cart: products, updateItemQuantity } = useStore(state => state);
  const handleDelete = prodId => {
    removeFromCart(prodId);
  };
  const handleUpdateQuantity = (prodId, value) => {
    updateItemQuantity(prodId, value);
  };
  return (
    <Table dataSource={products} rowKey={'id'}>
      <Column title="" dataIndex="img" key="img" render={img => <img src={img} width={100} />} />
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Price"
        dataIndex="price"
        key="price"
        render={price => <p>{vndFomatter.format(price)}</p>}
      />
      <Column
        title="Quantity"
        dataIndex="quantity"
        key="quantity"
        render={(value, record) => (
          <InputNumber
            min={1}
            max={10}
            defaultValue={value}
            onChange={value => handleUpdateQuantity(record.id, value)}
          />
        )}
      />
      <Column
        title="Total"
        dataIndex="price"
        key="Total"
        render={(value, record) => <p>{vndFomatter.format(value * record.quantity)}</p>}
      />
      <Column
        title="Action"
        key="action"
        render={(_, record) => <DeleteOutlined size={30} onClick={() => handleDelete(record.id)} />}
      />
    </Table>
  );
};

export default ProductCartTable;
