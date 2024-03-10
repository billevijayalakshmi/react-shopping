import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Collections from '../components/Collections'


import WomenCollections from '../components/WomenCollections'
import {Gents,Ladies} from '../data'

const Mainpage = () => {

  const [gentsFashion,setGentsFashion]=useState(Gents)
  const [ladiesFashion,setLadiesFashion]=useState(Ladies)

  return (
    <div>
        
        
        <Header/>
        <Banner/>
        
        <Collections gentsFashion={gentsFashion}/>
        <WomenCollections ladiesFashion={ladiesFashion}/>
        <Footer/>
        
    </div>
  )
}

export default Mainpage