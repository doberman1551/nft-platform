
import styled from 'styled-components';
import { FaTwitter } from "react-icons/fa"
import { HiOutlineMail }  from "react-icons/hi"

 const Footer = () => {
    return (
        <FooterWrapper>
         
          <span>
          <a href="https://twitter.com/NftCompass/">
          <FaTwitter color="white"/>
          </a>
          &nbsp;</span>
           <a href="mailto:dobromir@nftcompass.xyz?Subject=Some%20subject">
              <HiOutlineMail color="white"/>
            </a>
         

        </FooterWrapper>
            
     
    )
}
export default Footer;
const FooterWrapper=styled.div`
 background: #0F1320;
  color: #bbb;
  padding: 40px;
  text-align: center;
  margin-top: auto
`
