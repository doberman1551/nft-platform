import { createClient } from "contentful"
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import styled from 'styled-components';

export async function getStaticProps(){
const client=createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,

});
const res=await client.getEntries({ content_type:'project'})
return{
  props:{
    projects:res.items
  },
  revalidate:2,
}
}

export default function Projects({projects}) {
  console.log(projects);
  return (
    <div>
      <Hero/>
    <ProjectList>

      {projects.map(project=>(
        <ProjectCard key={project.sys.id} project={project}/>

      ))}

  
    </ProjectList>
    </div>
  )
}



const ProjectList=styled.div`

  margin-top:64px;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap:24px 80px;

  @media (min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1081px) { grid-template-columns: repeat(3, 1fr); }



`