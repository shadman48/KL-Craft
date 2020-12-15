import styled from "styled-components"
import { Link } from "gatsby"
import bgImg from "../../assets/images/woodBackground3.jpg"

export const ShelvesContainer = styled.div`
  background: url(${bgImg}) center center/cover no-repeat;
  margin-top: -80px;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ShelvesHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  color: #fff;
  text-align: center;
  padding-top: 5rem;
  margin-bottom: 3rem;
`
export const ShelvesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`
export const ShelvesCard = styled.div`
  text-align: center;
  margin: 2rem;
  line-height: 2;
  width: 300px;
`

export const ShelvesImg = styled.img`
  border-radius: 20%;
  height: 300px;
  object-fit: cover; ///////////////helps fix the aspect ratio
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.5);
`
export const ShelvesText = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 2rem;
  color: #fff;
`

export const OrderBtn = styled(Link)`
  width: 5rem;
  margin-bottom: 2rem;
`
