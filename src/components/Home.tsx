import styled from "styled-components";
import logo from "../images/logo.svg"
import avatar from "../images/image-avatar.png";
import React, { createContext, useState, } from 'react';
import SearchBar from "./SearchBar";
import IconHome from "./icons/IconHome";
import IconMovies from "./icons/IconMovies";
import IconTvSeries from "./icons/IconTvSeries";
import IconBookmark from "./icons/IconBookmark";

export const ThemeContext = createContext<any>("");

export interface IpropsData {
   data: any,
   setData: React.Dispatch<any>
}
function Home({ data, setData }: IpropsData) {
   const [movies, setMovies] = useState<boolean>(false);
   const [tvSeries, setTvSeries] = useState<boolean>(false);
   const [trendingAndRecommended, setTrendingAndRecommended] = useState<boolean>(false);
   const [bookmark, setBookmark] = useState<boolean>(false);
   const [home, setHome] = useState<boolean>(true)

   function movieHome() {
      return [
         setBookmark(false),
         setHome(true),
         setTrendingAndRecommended(false),
         setMovies(false),
         setTvSeries(false)
      ]
   }

   function bookmarkHandler() {
      return [
         setBookmark(true),
         setHome(false),
         setTrendingAndRecommended(false),
         setMovies(false),
         setTvSeries(false)
      ]
   }

   function moviestHandler() {
      return [
         setBookmark(false),
         setHome(false),
         setTrendingAndRecommended(false),
         setMovies(true),
         setTvSeries(false)
      ]
   }

   function tvSeriesHandler() {
      return [
         setBookmark(false),
         setHome(false),
         setTrendingAndRecommended(false),
         setTvSeries(true),
         setMovies(false),
      ]
   }

   function trendingAndRecommendedHandler() {
      return [
         setBookmark(false),
         setHome(false),
         setTrendingAndRecommended(true),
         setTvSeries(false),
         setMovies(false),
      ]
   }
   return (

      <ThemeContext.Provider value={{ bookmark, home, movies, tvSeries, trendingAndRecommended }}>
         <WrapperDiv>
            <HomeDiv>
               <ImageLogo src={logo} onClick={movieHome} />
               <IconsDiv>
                  <MovieTypes onClick={trendingAndRecommendedHandler} ><IconHome /></MovieTypes>
                  <MovieTypes onClick={moviestHandler} ><IconMovies /></MovieTypes>
                  <MovieTypes onClick={tvSeriesHandler} ><IconTvSeries /></MovieTypes>
                  <MovieTypes onClick={bookmarkHandler} ><IconBookmark /></MovieTypes>
               </IconsDiv>
               <ProfileImage src={avatar} />
            </HomeDiv>
            <SearchBar data={data} setData={setData}></SearchBar>
         </WrapperDiv>
      </ThemeContext.Provider>
   )
}


const ProfileImage = styled.img`
   width: 24px;
   height: 24px;
   border: 1px solid #FFFFFF;
   border-radius: 50%;

   @media (min-width: 768px) {
      width: 32px;
      height: 32px;
   }

   @media (min-width: 768px) {
      width: 40px;
      height: 40px;
   }

 `

const MovieTypes = styled.button`
 cursor: pointer;
 background-color: unset;
 border: none;
`


const IconsDiv = styled.div`
    width: 133px;
    display: flex;
    justify-content: space-between;
    align-items:center;

    @media (min-width: 768px) {
      width: 172.92px;
    }

    @media (min-width: 1440px) {
      height: 200px;
      width: 20px;
      flex-direction: column;
      margin-bottom: 500px;
    }
`

const ImageLogo = styled.img`
    cursor: pointer;
    width: 25px;
    height: 20px;

    @media (min-width: 768px) {
      width: 32px;
      height: 25.6px;
    }
 `

const HomeDiv = styled.div`
    width: 375px;
    height: 56px;
    background: #161D2F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
    padding-left: 16px;

    @media (min-width: 768px) {
      width: 719px;
      height: 72px;
      padding-right: 24px;
      padding-left: 24px;
      border-radius: 10px;
    }

    @media (min-width: 1440px) {
      width: 96px;
      height: 960px;
      padding-right: 31px;
      padding-left: 32px;
      padding-top: 35px;
      padding-bottom: 32px;
      border-radius: 20px;
      flex-direction: column;
    }
 `

const WrapperDiv = styled.div`
    background: #10141E;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    @media (min-width: 1440px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: start;
      padding-top: 32px;
    }
 `


export default Home;