import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Page = () => {
    return (
        <div className="Home flex flex-row">
          <Navbar />
            <Sidebar />
        </div>
    )
}
export default Page
