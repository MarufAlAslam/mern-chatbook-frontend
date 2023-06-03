import React from 'react'
import Hero from '../../components/hero'
import Counter from '../../components/counter'
import RecentMembers from '../../components/recent-members'

import recent1 from '../../assets/images/r1.jpg'
import recent2 from '../../assets/images/r2.jpg'
import recent3 from '../../assets/images/r3.jpg'
import recent4 from '../../assets/images/r4.jpg'
import recent5 from '../../assets/images/r5.jpg'
import recent6 from '../../assets/images/r6.jpg'
import Footer from '../../components/footer'


const Home = () => {
    const recentMembers = [
        {
            id: 1,
            name: 'Michele Storm',
            image: recent1,
            online: true
        },
        {
            id: 2,
            name: 'Hanna Marcovick',
            image: recent2,
            online: true
        },
        {
            id: 3,
            name: 'Sarah',
            image: recent3,
            online: true
        },
        {
            id: 4,
            name: 'Jessica',
            image: recent4,
            online: true
        },
        {
            id: 5,
            name: 'Peter Shull',
            image: recent5,
            online: true
        },
        {
            id: 6,
            name: 'Brady Patterson',
            image: recent6,
            online: true
        }
    ]
    return (
        <div>
            <Hero/>
            <Counter/>
            <RecentMembers recentMembers = {recentMembers}/>
            <Footer/>
        </div>
    )
}

export default Home