import { createClient } from "contentful"
import ProjectCard from "../components/ProjectCard";
export async function getStaticProps(){
const client=createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,

});
const res=await client.getEntries({ content_type:'project'})
return{
  props:{
    projects:res.items
  }
}
}

export default function Projects({projects}) {
  console.log(projects);
  return (
    <div className="project-list">
      Project List
      {projects.map(project=>(
        <ProjectCard key={project.sys.id} project={project}/>

      ))}

    <style jsx>{`
      .project-list{
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-gap:20px 60px;

      }
    
        `}

    </style>
    </div>
  )
}