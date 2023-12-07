// import { IGetStaticRepos, IRepository } from "@/interface/project.interface"
// import { GetStaticProps } from "next"

import { IRepository } from "@/interface/project.interface"

export const getProjectsList = async () => {
  const response = await fetch(
    "https://api.github.com/users/IS4I4SCANDID0/repos?sort=created&direction=desc",
    { next: { revalidate: 60 } }
  ); 
  // console.log(typeof response, 'olá response')
  

  let resJson = await response.json()
  // console.log(typeof resJson, 'olá response JSON')



  const updatedRes: IRepository[] = resJson.filter((_: number, index: number) => index !== 5)
  // console.log(typeof updatedRes, 'Olá response')
  return updatedRes 
}