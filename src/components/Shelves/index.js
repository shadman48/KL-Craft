import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import "./image.css"
import { Button } from "../ButtonElements"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  BookContainer,
  BookHeading,
  BookWrapper,
  BookCard,
  BookImg,
  BookText,
  OrderBtn,
} from "./bookElements"

const Book = ({ heading, data }) => {
  return (
    // <div className="image-container">
    // <h1>View Bookshelf bundles</h1>
    <BookContainer>
      <BookHeading>{heading}</BookHeading>
      <BookWrapper>
        {data.map((book, index) => {
          return (
            <BookCard key={index}>
              <BookImg src={book.img} alt={book.alt} />
              <BookText>{book.name}</BookText>
            </BookCard>
          )
        })}
      </BookWrapper>
      <OrderBtn to="/contact">
        <Button>Order</Button>
      </OrderBtn>
    </BookContainer>
  )
}

export default Book
