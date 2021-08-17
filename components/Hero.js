

const Hero = () => {
    return (
        <div>

           <h1 className="HeroTitle">NFT Compass: read short stories and tips from  sucessful NFT artists </h1> 
            <p className="Subtitle">We interview not so much "famous" artists about their stories and how they created and sold their NFT successfuly. Have a similar story? <span className="colorLink">Lets talk!</span></p>

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
