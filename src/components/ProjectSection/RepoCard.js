import React from 'react'
import { useState, useEffect} from 'react'
import {RepoTitle, RepoDescription,
        RepoCardWrapper, Language
      } from './ProjectElements'

const RepoCard = ({repoName}) => {
  const [repoDescription, setRepoDescription] = useState();
  const [repoLanguages, setRepoLanguages] = useState();
  
  useEffect(() => {
  fetch(`https://api.github.com/repos/hannahvkirby/${repoName}`)
      .then((response) => response.json())
      .then((data) => setRepoDescription(data.description));
  }, [repoName]);

  useEffect(() => {
  fetch(`https://api.github.com/repos/hannahvkirby/${repoName}/languages`)
      .then((response) => response.json())
      .then((langs) => setRepoLanguages(langs));
  }, [repoName]);
  

  function RepoLanguage(){
    if (repoLanguages){
    return <Language>
            {Object.keys(repoLanguages).join(", ")}
           </Language>
    }
    else{
      return<Language>No languages found</Language>
    }
  }

  return (
      <>
        <RepoCardWrapper>
          <RepoTitle 
            href = {`https://github.com/hannahvkirby/${repoName}`}
            target = "_blank">
            {repoName}
          </RepoTitle>
          <RepoDescription> 
            {repoDescription}
          </RepoDescription>          
          <RepoLanguage />
        </RepoCardWrapper>
      </>
    )
  }

export default RepoCard