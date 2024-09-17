import React, {useEffect, useState} from 'react'
import { Card, CardImg, CardText, CardTitle, Col, Container, Row  } from 'reactstrap'
import './App.css'
import './styles.css'

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productList, setProductList] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(30);

    useEffect(() => {
      setLoading(true)
      fetch("/api/product-list")
        .then(res => res.json())
        .then(response => {
            setProductList(response.products);
            setLoading(false);
            slides(response.products)

            setProductsPerPage(response.products.total)
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
              <CardText className='product-card__text__name'>
                { product.description }
              </CardText>
              <div className='product-card__price'>
                { product.price }
              </div>
            </a>
          </div>
          </Card>
      </Col>
    ));

    const Pagination = ({ productsPerPage, length }) => {
      const paginationNumbers = [];
      for (let i = 1; i <= Math.ceil(length / productsPerPage); i++) {
        paginationNumbers.push(i);
      }
      return (
        <div className='pagination'>
          {paginationNumbers.map((pageNumber) => (
            <button key={pageNumber}>{pageNumber}</button>
          ))}
        </div>
      );
    };
    
    const handlePagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return <>
      <Container fluid>
          <Row className='product-card__carousel'>
            { slides }
          </Row>
          <Row>
          <Pagination
            length={productsPerPage}
            productsPerPage={10}
            handlePagination={handlePagination}
          />
          </Row>
      </Container>
    </>
    
}

export default App
