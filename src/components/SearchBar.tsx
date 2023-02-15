import { useEffect } from "react";
import styled from "styled-components";
import IconSearch from "../images/icon-search.svg";
import TrendingSection from "./for home/TrendingSection";
import RecommendedSection from "./for home/RecommendedSection";
import MovieSection from "./for home/MovieSection";
import TvSeriesSection from "./for home/TvSeriesSection";
import BookmarkedSection from "./for home/BookmarkedSection";
import { useContext, useState } from "react";
import { ThemeContext } from "./Home";
import { IpropsData } from "./Home";
import emptyBookmark from "../images/icon-bookmark-empty.svg";
import fullBookmark from "../images/icon-bookmark-full.svg";
import movieIcon from "../images/icon-category-movie.svg";


function SearchBar({ data, setData }: IpropsData) {
    const { bookmark, home, movies, tvSeries, trendingAndRecommended } = useContext(ThemeContext);
    const [searchingItem, setSearchingItem] = useState<any>("");
    const [newData, setNewData] = useState<any>(data);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [bookmarked, setBookmarked] = useState(Array(data.length).fill(false));


    const handleClick = (index: any) => {
        setSelectedIndex(index);
        setBookmarked((prevBookmarked) => {
            const newBookmarked = [...prevBookmarked];
            newBookmarked[index] = !newBookmarked[index];
            return newBookmarked;
        });
        
    };

    const filteredArray = newData.filter(
        (item: any) => item.title.toLowerCase().indexOf(searchingItem.toLowerCase()) !== -1
    );


    return (
        <MovieWrapper>
            <InputDiv >
                <SearchIcon src={IconSearch} />
                <form>
                    <Input onChange={(e) => setSearchingItem(e.target.value)} value={searchingItem} placeholder="Search for movies or TV series" />
                </form>
            </InputDiv>
            <RecomendedDiv style={{ display: searchingItem != "" ? "block" : "none" }}>
            <Text >Found {filteredArray.length} results for `{searchingItem}`</Text>
                <Wrapper>
                    {filteredArray.map((item: any, index: any) => {
                        return (
                            <div>
                                
                                <RecommendedMovie key={index} image={`url(${filteredArray[index].thumbnail.regular.large})`} >
                                    <BookmarkIconDiv><img src={fullBookmark} alt="bookmark empty icon" /></BookmarkIconDiv>
                                </RecommendedMovie>

                                <DateTitleWrapper>
                                    <Year><span style={{ marginRight: "6px" }} >{filteredArray[index].year}</span> • <img style={{ marginLeft: "6px", marginRight: "4px" }} src={movieIcon} /> <span style={{ marginRight: "6px" }} >{filteredArray[index].category}</span> • <span style={{ marginLeft: "6px" }} >{filteredArray[index].rating}</span> </Year>
                                    <Title>{filteredArray[index].title}</Title>
                                </DateTitleWrapper>
                            </div>
                        )
                    })}
                </Wrapper>
            </RecomendedDiv>
            {home && searchingItem == "" ? <TrendingWrapper><TrendingSection data={data} setData={setData} /></TrendingWrapper> : ""}
            {home && searchingItem == "" ? <RecommendedSection data={data} setData={setData} /> : ""}
            {trendingAndRecommended && searchingItem == "" ? <TrendingWrapper><TrendingSection data={data} setData={setData} /></TrendingWrapper> : ""}
            {trendingAndRecommended && searchingItem == "" ? <RecommendedSection data={data} setData={setData} /> : ""}
            {movies && searchingItem == "" ? <MovieSection data={data} setData={setData} /> : ""}
            {tvSeries && searchingItem == "" ? <TvSeriesSection data={data} setData={setData} /> : ""}
            {bookmark && searchingItem == "" ? <BookmarkedSection data={data} setData={setData} /> : ""}

        </MovieWrapper>
    )
}


const Year = styled.div`
    display: flex;
    align-items: center;
    color: #FFFFFF;
    opacity: 0.75;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: 11px;
    line-height: 14px;

    @media (min-width: 768px) {
        font-size: 13px;
        line-height: 16.38px;
    }
`

const Title = styled.p`
    margin-top: 4px;
    color: #FFFFFF;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17.64px;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 22.68px;
    }
`


const DateTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    margin-bottom: 16px;
`

const BookmarkIconDiv = styled.div`
margin-top: 8px;
margin-right: 8px; 
width: 32px;
height: 32px;
background: #10141e71;
border-radius: 50%;
border: none;
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.p`
    margin-bottom: 24px;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 25.2px;
    color: #FFFFFF;
    letter-spacing: -0.3125px;

    @media (min-width: 768px) {
        font-size: 32px;
        line-height: 40.32px;
    }
`

const RecomendedDiv = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    margin-top: 24px;

    @media (min-width: 768px) {
        margin-top: 40px;
        margin-left: 25px;
    }
    @media (min-width: 1440px) {
        margin-left: 36px;
    }
`


const Wrapper = styled.div`
    display: grid;
    gap: 0 16px;
    grid-template-columns: 164px 164px;

    @media (min-width: 768px) {
        grid-template-columns: 220px 220px 220px;
        gap: 0 30px;
    }
    @media (min-width: 1440px) {
        grid-template-columns: 280px 280px 280px 280px;
        gap: 0 50px;
    }
    
    
`

const RecommendedMovie = styled.div<any>`
    width: 164px;
    height: 110px;
    display: flex;
    justify-content: end;
    align-items: start;
    background-color: blue;
    background-size: cover;
    border-radius: 8px;
    background-image: ${(props) => props.image};

    @media (min-width: 768px) {
        width: 220px;
        height: 140px;

    }
    @media (min-width: 1440px) {
        width: 280px;
        height: 174px;
    }
`


// new styles //

const TrendingWrapper = styled.div`
overflow-x: scroll;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
margin-left: 16px;
margin-top: 24px;

@media (min-width: 768px) {
    margin-left: 25px;
}

@media (min-width: 1440px) {
    margin-left: 36px;
}
`

const Input = styled.input`
        width: 230px;
        height: 30px;
        background-color: #10141E;
        border: none;
        :focus {
            outline: none;
            color: #FFFFFF;
            font-size: 16px;
            line-height: 20.16px;
            font-family: 'Outfit', sans-serif;
            font-weight: 300;
        }
        ::placeholder {
            color: #FFFFFF;
            font-size: 16px;
            line-height: 20.16px;
            font-family: 'Outfit', sans-serif;
            font-weight: 300;
            opacity: 0.5;        
        }

        @media (min-width: 768px) {
            margin-left: 36px;
            width: 340px;
            :focus {
            font-size: 24px;
            line-height: 30.24px;
        }
        ::placeholder {
            font-size: 24px;
            line-height: 30.24px;
        }
        }

        @media (min-width: 1440px) {
            width: 500px;
        }
        
    `

const SearchIcon = styled.img`
        width: 24px;
        height: 24px;

        @media (min-width: 768px) {
            width: 32px;
            height: 32px;
        }
    `

const InputDiv = styled.div`
        display: flex;
        width: 257px;
        height: 24px;
        margin-top: 16px;
        margin-left: 16px;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 768px) {
            width: 381px;
            height: 30px;
            margin-left: 25px;
            margin-top: 20px;
        }

        @media (min-width: 1440px) {
            width: 1184px;
            margin-left: 36px;
            margin-top: 36px;
            justify-content: start;
        }
    `

const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;

    @media (min-width: 768px) {
        width: 768px;
    }

    @media (min-width: 1440px) {
        width: 1351px;
    }
    `

export default SearchBar;

