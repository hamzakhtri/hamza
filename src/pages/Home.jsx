import React from 'react'
import Herosection from '../components/Herosection'
import Services from '../components/Services'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'

const Home = () => {
    return (
        <>
            <Herosection />
            <Services />
            <Resume />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home