import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Menu, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { selectCart } from '../../store/selector/cart';
import { useStore } from '../../store';
const Navbar = props => {
  const cart = useStore(selectCart);
  return (
    <>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key={'Logo'}>
          <span>Mini App</span>
        </Menu.Item>
        <Menu.Item key={'Home'}>
          <Link to="/">
            <Space>
              Home
              <HomeOutlined style={{ marginLeft: 2 }} />
            </Space>
          </Link>
        </Menu.Item>
        <Menu.Item key={'Cart'}>
          <Link to="/cart">
            <Space>
              Cart
              <ShoppingCartOutlined style={{ marginLeft: 2 }} />
              <Badge count={cart.length} size="small" />
            </Space>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
