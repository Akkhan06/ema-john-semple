import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import SideBar from './component/SideBar/SideBar'

function App() {

  const [card, setCard] = useState([])

  const handelProdunt = (product) => {
    const newProduct = [...card, product]
    setCard(newProduct)
  }

  return (
    <div>
      <Header/>

      <div className="grid grid-cols-4 gap-4 w-[1240px]">
      <div className="col-span-3">
      <Main count={handelProdunt}/>
      </div>

    <div className="col-end-auto">
    <SideBar select={card.length}/>
    </div>
      </div>
    </div>
  )
}

export default App
