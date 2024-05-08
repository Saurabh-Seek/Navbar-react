
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
   <>
  <Navbar/>

<div className='Cards'>
  <Card title="Card number 1" Description="this is Description 1"/>
  <Card title="Card number 1" Description="this is Description 1"/>
  <Card title="Card number 1" Description="this is Description 1"/>
  <Card title="Card number 1" Description="this is Description 1"/>
  <Card title="Card number 1" Description="this is Description 1"/>
 
</div>

  <Footer/>
   </>
  )
}

export default App
