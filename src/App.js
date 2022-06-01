import './App.css'
import {Banner} from './components/banner'
import {Banner2} from './components/banner2'
import {Banner3} from './components/banner3'

function App() {
  return (
    <div className='bg-gray-100 flex items-center justify-center'>
      <div className='max-w-7xl  '>
        <Banner />
        <Banner2 />
        <Banner3 />
      </div>
    </div>
  )
}

export default App
