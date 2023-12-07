import { NextFont } from "next/dist/compiled/@next/font";

export interface IRepository {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export interface IGetStaticRepos {
  repos: IRepository[]
}

export interface IFontProps {
  raleway: NextFont
}