import Link from 'next/link'
import Footer from './common/Footer'
import Navigation from './common/Navigation'

export default function Layout({ children }) {
  return (
    <div className="layout">
      
       <Navigation></Navigation>

         

      <div className="page-content">
       
        { children }
      </div>

    <Footer/>
    </div>
  )
}