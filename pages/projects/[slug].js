import { createClient } from "contentful"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Skeleton from "../../components/Skeleton"

const client=createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths=async()=>{
  const res=await client.getEntries({content_type:'project'})

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({params}){
const {items}=await client.getEntries({content_type:'project','fields.slug':params.slug})

return{
  props:{project:items[0]},
  revalidate:2,
}
}

export default function ProjectDetails({project}) {
  if (!project) return <Skeleton/>
  const {featuredImage, title, details}=project.fields
  console.log(project)
  
  return (
    <div>
      <div className="banner"> 
       <Image src={'https:'+ featuredImage.fields.file.url} width={featuredImage.fields.file.details.image.width} height={featuredImage.fields.file.details.image.height} className="FeaturedImage" ></Image> 
     <h1>{title}</h1>
    
      </div>

      <div className="info">
      
      </div>
      <div className="method">
      <div>{documentToReactComponents(details)}</div>

      </div>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
      
        .banner h1 {
          margin: 0;
          //background: #fff;
          display: inline-block;
          padding: 24px;
          position: relative;
         // top: -60px;
        
         // transform: rotateZ(-1deg);
          //box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .FeaturedImage{
         margin:0 auto;
         position:relative;
          
  

        }
        
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }

      `}

      </style>
    </div>
  )
}