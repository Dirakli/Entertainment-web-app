import styled from "styled-components";
import { useState } from "react";
import emptyBookmark from "../../images/icon-bookmark-empty.svg";
import fullBookmark from "../../images/icon-bookmark-full.svg";
import movieIcon from "../../images/icon-category-movie.svg";
import { IpropsData } from "../Home";


function TrendingSection({ data, setData }: IpropsData) {
    
    const Trends = data.filter((e: any) =>e.isTrending == true);

    return (
        <>        
        <Trending>Trending</Trending>
        <TrendingMovies>
        {
            Trends.map((item: any, index: any) => {
                const [isActive, setIsActive] = useState<boolean>(false);

                return (
                    <Movie key={index} image={`url(${Trends[index].thumbnail.trending?.large})`}>
                        <BookmarkIconDiv><img src={!isActive ? emptyBookmark : fullBookmark} onClick={() => setIsActive(!isActive)} alt="bookmark empty icon" /></BookmarkIconDiv>
                        <TitleDetailDiv>
                            <Date>
                                <YearDiv>{Trends[index].year} • <img style={{width: "12px", height: "12px"}} src={movieIcon}/>{Trends[index].category}</YearDiv>
                                <TitleDiv>{Trends[index].title}</TitleDiv>
                            </Date>
                            <Rating>
                                <TrendDiv>
                                    <p style={{color: "#FFFFFF"}}>
                                {Trends[index].rating}
                                </p>
                                </TrendDiv>
                                </Rating>
                        </TitleDetailDiv>

                </Movie>

                )
            
            })
        }
        </TrendingMovies>
        </>

    )
}

const TitleDiv = styled.p`
margin-bottom: 16px;
margin-left: 16px;
font-weight: 500;
line-height: 18.9px;
font-size: 15px;
color: #FFFFFF;
font-family: 'Outfit', sans-serif;

@media (min-width: 768px) {
    font-size: 24px;
    width: 300px;
    margin-top: 10px;
}
`

const YearDiv = styled.div`
margin-bottom: 4px;
opacity: 0.75;
font-weight: 300;
line-height: 15.12px;
font-size: 12px;
color: #FFFFFF;
font-family: 'Outfit', sans-serif;
margin-left: 16px;
width: 94px;
display: flex;
justify-content: space-between;

@media (min-width: 768px) {
    font-size: 15px;
    align-items: center;
    width: 132px;
}
`

const TrendDiv = styled.div`
width: 34px;
height: 21px;
margin-right: 16px;
margin-bottom: 24px;
border-radius: 10.5px;
display: flex;
justify-content: center;
align-items: center;
background: #ffffff1b;
mix-blend-mode: normal;


@media (min-width: 768px) {
    margin-left: 30px;
}
`

const Rating = styled.div`
width: 120px;
height: 70px;
display: flex;
justify-content: end;
align-items: end;

@media (min-width: 768px) {
    width: 200px;
    justify-content: start;
    align-items: start;
}

`

const Date = styled.div`
width: 120px;
height: 70px;
display: flex;
flex-direction: column;
justify-content: end;
align-items: start;

@media (min-width: 768px) {
    justify-content: start;
    align-items: start;
}

`

const TitleDetailDiv = styled.div`
width: 240px;
height: 70px;
display: flex;


@media (min-width: 768px) {
    width: 470px;
    height: 100px;
    justify-content: start;
    align-items: end;
}
`

const BookmarkIconDiv = styled.div`
margin-top: 16px;
margin-right: 16px; 
width: 32px;
height: 32px;
background: #10141e71;
border-radius: 50%;
border: none;
display: flex;
justify-content: center;
align-items: center;

`

const TrendingMovies = styled.div<any>`
margin-top: 16px;
width: 1200px;
display: flex;
justify-content: space-between;

@media (min-width: 768px) {
    width: 2594px;
}

`


const Movie = styled.div<any>`
 width: 240px;
 height: 140px;
 border-radius: 8px;
 display: flex;
 flex-direction: column;
 align-items: end;
 justify-content: space-between;
 background-size: cover;
 background-position-x: 51.61%;
 background-position-y: 22.65%;
 background-image: ${(props) => props.image};

 @media (min-width: 768px) {
    width: 470px;
    height: 250px;
    background-position-x: 81.27%;
    background-position-y: 22.03%;
 }

 @media (min-width: 1440px) {
    width: 470px;
    height: 250px;
    background-position-x: 81.27%;
    background-position-y: 22.03%;
 }
`

const Trending = styled.h2`
font-size: 20px;
color: #FFFFFF;
line-height: 25.2px;
font-family: 'Outfit', sans-serif;
font-weight: 300;

@media (min-width: 768px) {
    font-size: 32px;
    line-height: 40.32px;
    letter-spacing: -0.5px;
}
`


export default TrendingSection;