import React from 'react'
import Link from 'next/link'
import Projects from '../pages'
import Image from 'next/image'

export default function ProjectCard({project}) {
    const {title,slug,thumbnail}=project.fields
    console.log(thumbnail)
    return (
        <div className="card">
            <div className="featured">
                <Image src={"https:" + thumbnail.fields.file.url} width={560}
          height={560}></Image>
            </div>
            <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          
        </div>
        <div className="actions">
          <Link href={'/projects/' + slug}><a>Learn More</a></Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background-image: linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%);;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
        </div>
    )
}
