import React, {useEffect, useState} from 'react'
import { Card, CardImg, CardText, CardTitle, Col, Container, Row  } from 'reactstrap'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productList, setProductList] = useState(null);

    useEffect(() => {
      setLoading(true)
      fetch("/api/product-list")
        .then(res => res.json())
        .then(response => {
            setProductList(response.products);
            setLoading(false);
            slides(response.products)
        }, error => {
            setError(error);
            setLoading(false);
        })
    }, []);

    const slides = productList?.map((product, index) => (
      <Col
        xs={ 6 }
        md={ 3 }
        key={ `product-carousel-col-${ index }` }
      >
        <Card className='text-center'>

          <div className='text-center'>
            <a className='product-card__link' href='/productList/1'>
              <CardImg
                top
                width='25%'
                src={ product.images[0] }
                alt={ product.title }
              />
              <CardTitle>
                <div className='text-uppercase'>
                  <strong>
                    { product.brand }
                  </strong>
                </div>
              </CardTitle>
              <CardText className='product-card__text__name'>
                { product.title }
              </CardText>

              <div className='product-card__price'>
                { product.price }
              </div>
            </a>
          </div>

          </Card>
      </Col>
    ));

    
      return <>
          {/* <div className='product-card__carousel'>
              { productList?.map((product, index) => {
            <div
              xs={6}
              md={3}
              key={`product-carousel-col-${index}`}
            >            
                <div className='text-center'>
                  <a className='product-card__link' href='/productList/1'>
                    <img
                      width='100%'
                      src={product?.images[0]}
                      alt={product.title} />
                    <h2>
                      <div className='text-uppercase'>
                        <strong>
                          {product.brand}
                        </strong>
                      </div>
                    </h2>
                    <p className='product-card__text__name'>
                      {product.title}
                    </p>

                    <div className='product-card__price'>
                      {product.price}
                    </div>
                  </a>
                </div>
            </div>;
          }) }
          </div> */}
          <Container fluid>
            <Row className='product-card__carousel'>
                { slides }
            </Row>
        </Container>
       </>
    
}

export default App
 