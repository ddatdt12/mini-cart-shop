import { Col, message, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import ProductCard from '../../components/ProductCard';
import { useStore } from '../../store';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToCart = useStore(state => state.addToCart);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    (() => {
      productApi
        .getProducts()
        .then(products => {
          if (mounted) {
            setProducts(products);
          }
        })
        .catch(error => {
          console.log(error.error);
          message.error(error?.message || 'Something went wrong!');
        });
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="px-4 center">
      <Row className="list-wrapper" gutter={[0, 50]}>
        {products.map(prod => (
          <Col key={prod.id} xs={24} md={8} xl={6} sm={12}>
            <ProductCard {...prod} loading={loading} onAddToCartClick={() => addToCart(prod)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
