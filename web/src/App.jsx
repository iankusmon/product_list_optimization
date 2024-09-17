import { Col, Container, Row } from 'react'
import { Card, CardImg, CardText, CardTitle } from 'reactstrap'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState(null);

    const slides = productList.map((product, index) => (
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
                  width='100%'
                  src={ product.images[0].url }
                  alt={ product.title }
                />
                <CardTitle>
                  <div className='text-uppercase'>
                    <strong>
                      { brand }
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
      ))

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/api/product-list?');
          setProductList(response);
          console.log(response)
        }
        fetchData();
        setLoading(false)
      }, [loading]);

    
      return <>
        <Container fluid>
            <Row className='product-card__carousel'>
                { slides }
            </Row>
        </Container> </>
    
}

export default App
 