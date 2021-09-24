

const Hero = () => {
    return (
        <div>

           <h1 className="HeroTitle">Read short stories and tips from  sucessful NFT artists. </h1> 
            <p className="Subtitle">We ask creators to share how they created and sold their NFT successfuly and to give their advice. Have a similar story? <span className="colorLink">Lets talk!</span></p> <br></br>
            
        

           <style jsx>{`
       .HeroTitle{
           font-size:52px;
           padding:16px;
        }
        .SubTitle{
            font-size:24px;
            color:#000000;
            opacity:0.5;
        }
        .colorLink{
        color: #9F03FF   //#9F03FF #0038F5; 
        }
       
        
      `}</style>
        </div>
    )
}

export default Hero
