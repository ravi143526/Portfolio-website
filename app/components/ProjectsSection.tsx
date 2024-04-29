import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: "A personal portfolio website built using the popular JavaScript library React.js.",
        image: "/images/projects/1.png",
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: 'Photography Portfolio Website',
        description: "A personal portfolio website built using the popular JavaScript library React.js.",
        image: "/images/projects/2.png",
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: 'E-commerce Application',
        description: "A personal portfolio website built using the popular JavaScript library React.js.",
        image: "/images/projects/3.png",
        gitUrl: "/",
        previewUrl: "/",
    }
];

const ProjectsSection = () => {
  return (
    <section id='projects'>
     <h2 className='text-center text-4xl font-bold text-white my-4'>My Projects</h2>
     <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}</div>
    </section>
  )
}

export default ProjectsSection
