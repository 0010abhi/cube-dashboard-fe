import { useState } from 'react'
import './App.css'
import { Container } from 'reactstrap';
import WorkforceByGender from './components/WorkforceByGender';
import ProductCategoryCount from './components/ProductCategoryCount';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container fluid className="bg-light">
      <h5>
        Demo Cube JS
      </h5>
      <WorkforceByGender />
      <ProductCategoryCount />
    </Container>
  )
}

export default App
