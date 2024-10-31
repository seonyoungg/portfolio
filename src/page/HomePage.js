import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {

  const [productList, setProductList] = useState([]);

  const getProducts = async()=>{
    let url      = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data     = await response.json();
    setProductList(data);
  };

  useEffect(()=>{
    getProducts()
  },[]);

  return (
    <div>
      <Container fluid>
        <Row>
          {productList.map((menu, index)=>(
            <Col xs={12} sm={6} lg={4} xl={3} key={index}>
            <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
