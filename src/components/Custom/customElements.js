import styled from "styled-components"
import { Link } from "gatsby"
import bgImg from "../../assets/images/woodBackground3.jpg"

export const CustomContainer = styled.div`
  background: url(${bgImg}) center center/cover no-repeat;
  margin-top: -80px;
  object-fit: contain;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    /* display: flex; */
    /* margin: 2rem; */
    width: 100%;
    height: auto;
    /* flex-direction: column; */
    /* margin: 2rem; */
    /* margin-top: 4rem; */
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`
export const CustomHeading = styled.h1`
  /* background-color: rgba(255, 255, 255, 0.7); */
  margin: 80px;
  font-size: clamp(3rem, 2.5vw, 3rem);
  color: #fff;
  text-align: center;
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 3rem;
`
export const CustomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 480px) {
    margin-left: -1rem;
  }
`
export const CustomCard = styled.div`
  display: flex;
  text-align: start;
  margin: 2.5rem;
  line-height: 2;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    min-width: 100px;
    /* max-width: 600px; */
    height: auto;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    width: 100%;
    height: auto;
    text-align: center;
  }
`

export const CustomDetails = styled.div`
  display: inline;
  padding: 2rem;
  margin-left: 0.2rem;
  width: 400px;
  height: 400px;
  background-color: #f2eecb;
  border-radius: 5px 15px 15px 5px;
  box-shadow: 4px 4px rgba(255, 255, 255, 0.6), 8px 8px rgba(255, 255, 255, 0.5),
    13px 13px rgba(0, 0, 0, 1);
  @media screen and (max-width: 480px) {
    box-shadow: none;
    border-radius: 15%;
    max-width: 80vw;
    height: auto;
  }
`

export const CustomImg = styled.img`
  border-radius: 15px 5px 5px 15px;
  height: 400px;
  object-fit: cover; ///////////////helps fix the aspect ratio
  /* min-width: 400px; */
  width: 400px;
  box-shadow: -4px 4px rgba(255, 255, 255, 0.6),
    -8px 8px rgba(255, 255, 255, 0.5), -13px 13px rgba(0, 0, 0, 1);
  /* box-shadow: -8px 8px rgba(0, 0, 0, 0.5); */
  @media screen and (max-width: 960px) {
    /* display: flex;
    flex-direction: column; */
    min-width: 50px;
    max-width: 100%;
    max-height: auto;
  }
  @media screen and (max-width: 480px) {
    box-shadow: none;
    max-width: 80vw;
    border-radius: 15%;
    max-height: auto;
  }
`
export const CustomTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #000;
`

export const CustomInfo = styled.p`
  font-size: 1rem;
`

export const OrderBtn = styled(Link)`
  width: 5rem;
  margin-bottom: 2rem;
`
export const CustomIcon = styled.div`
  background-color: #000;
  border-radius: 4px 4px;
  /* margin-top: -0.25rem; */
  margin-inline: -0.5rem;
  z-index: 2;
  /* align-items: strech; */
  /* height: 417px; */
  width: 5px;
`
// .image-grid img:hover {
//   transform: scale(1.1);
//   transition: 0.6s all ease !important;
//   cursor: pointer;
// }
