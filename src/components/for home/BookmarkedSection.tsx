import styled from "styled-components";
import { useState } from "react";
import fullBookmark from "../../images/icon-bookmark-full.svg";
import tvSeries from "../../images/icon-category-tv.svg";
import movieIcon from "../../images/icon-category-movie.svg";
import { IpropsData } from "../Home";


function BookmarkedSection({ data, setData }: IpropsData) {


    const newBook = data.filter((e: any) => e.isBookmarked == true)

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [bookmarked, setBookmarked] = useState(Array(data.length).fill(false));
    const [isDeleted, setIsDeleted] = useState(false)

    const handleClick = (index: any) => {
        setSelectedIndex(index);
        setBookmarked((prevBookmarked) => {
            const newBookmarked = [...prevBookmarked];
            newBookmarked[index] = !newBookmarked[index];
            return newBookmarked;
        });

    };

    return (
        <RecomendedDiv>
            <Text>  Bookmarked Movies
            </Text>
            <Wrapper style={{ minHeight: "100vh" }}>

                {newBook.map((item: any, index: any) => {

                    return (
                        <div >
                            <RecommendedMovie key={index} image={`url(${item.thumbnail.regular.large})`} >
                                <BookmarkIconDiv onClick={() => {
                                    item.isBookmarked = !item.isBookmarked;
                                    setIsDeleted(!isDeleted);
                                }}

                                ><img src={fullBookmark} alt="bookmark empty icon" /></BookmarkIconDiv>
                            </RecommendedMovie>

                            <DateTitleWrapper>
                                <Year><span style={{ marginRight: "6px" }} >{item.year}</span> • <img style={{ marginLeft: "6px", marginRight: "4px" }} src={movieIcon} /> <span style={{ marginRight: "6px" }} >{item.category}</span> • <span style={{ marginLeft: "6px" }} >{item.rating}</span> </Year>
                                <Title>{item.title}</Title>
                            </DateTitleWrapper>
                        </div>

                    )
                })}

            </Wrapper>
        </RecomendedDiv>
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

const RecommendedMovie = styled.div<any>`
    cursor: pointer;
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
    height: 100vh;
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



export default BookmarkedSection;
