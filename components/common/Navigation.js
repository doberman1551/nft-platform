import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link'

const Navigation = ( {href, name }) => {
    return (
            <Nav>
            
            <Link href="/" passHref>
                 <NavLogo>
                    <Image src="/logo.png" width={123} height={90}  />
                 </NavLogo>
                 </Link>
                 
          
       
             </Nav>
    )
  


}
export default Navigation


const Nav=styled.nav`

max-width:1400px;
height:90px;
padding:16px 16px;



`
     
export const NavBarContainer = styled.div`
margin: 0 auto;
padding: 0 50px;


display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
`

export const NavLogo = styled.a`
color: #fff;

cursor: pointer;
padding-left:60px;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover{
    transform: scale(1.05);
}
`;