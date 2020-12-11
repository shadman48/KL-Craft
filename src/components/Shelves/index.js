import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import "./image.css"
import { Button } from "../ButtonElements"
// import { Link } from "gatsby"
// import styled from "styled-components"
import {
  ShelvesContainer,
  ShelvesHeading,
  ShelvesWrapper,
  ShelvesCard,
  ShelvesImg,
  ShelvesText,
  OrderBtn,
} from "./shelvesElements"

const Shelves = ({ heading, data }) => {
  return (
    // <div className="image-container">
    // <h1>View Shelvesshelf bundles</h1>
    <ShelvesContainer>
      <ShelvesHeading>{heading}</ShelvesHeading>
      <ShelvesWrapper>
        {data.map((shelves, index) => {
          return (
            <ShelvesCard key={index}>
              <ShelvesImg src={shelves.img} alt={shelves.alt} />
              <ShelvesText>{shelves.name}</ShelvesText>
            </ShelvesCard>
          )
        })}
      </ShelvesWrapper>
      <OrderBtn to="/contact">
        <Button>Order</Button>
      </OrderBtn>
    </ShelvesContainer>
  )
}

export default Shelves
