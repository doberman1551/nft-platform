import Link from 'next/link'
import Navigation from './common/Navigation'

export default function Layout({ children }) {
  return (
    <div className="layout">
      
       <Navigation></Navigation>

         

      <div className="page-content">
       
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  )
}