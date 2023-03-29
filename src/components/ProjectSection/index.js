import React from 'react'
import { useState, useEffect} from 'react'
import { ProjectContainer, ProjectH1, 
         ProjectBlurb, 
         RepoCardContainer
      } from './ProjectElements'
import RepoCard from './RepoCard'


const ProjectSection = () => {

const [repos, setRepos] = useState();
  
  // get list of repository names via git REST API
  useEffect(() => {
  fetch(`https://api.github.com/users/hannahvkirby/repos`)
      .then((response) => response.json())
      .then((data) => {setRepos(data)
      });
  }, []);

  // pull name of each repository from list of objects
  // (each object is a repo)
  const initRepoNames = repos ? 
              repos.map((repoObject) => 
                {return repoObject.name}) 
              : ["Failed to load repository"]

  
  //get total number of repositories  
  const numRepos = initRepoNames.length

  // takes six most recent repositories to be displayed
  const repoNames = numRepos > 6 ?
                initRepoNames.slice(numRepos-6)
                : initRepoNames


  return (
    <>
      <ProjectContainer id = "projects">
        <ProjectH1>PROJECTS</ProjectH1>
        <ProjectBlurb> 
          Some of my recent work 
        </ProjectBlurb>
        <RepoCardContainer>
          {repoNames.map((name) => 
            <RepoCard key = {name}
            repoName = {name}/>)}
        </RepoCardContainer>
      </ProjectContainer>
    </>
  )
}

export default ProjectSection