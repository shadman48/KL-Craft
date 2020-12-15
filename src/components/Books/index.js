import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import "./image.css"
import { HiBookmark } from "react-icons/Hi"
import { Button } from "../ButtonElements"
import {
  BookContainer,
  BookHeading,
  BookWrapper,
  BookCard,
  BookImg,
  BookDetails,
  BookTitle,
  BookInfo,
  OrderBtn,
  BookIcon,
} from "./bookElements"

const Book = ({ heading, data }) => {
  return (
    <BookContainer>
      <BookHeading>{heading}</BookHeading>
      <BookWrapper>
        {data.map((book, index) => {
          return (
            <BookCard key={index}>
              <BookImg src={book.img} alt={book.alt} />
              <BookIcon />
              <BookDetails>
                <BookTitle>{book.name}</BookTitle>
                <BookInfo>{book.info}</BookInfo>
              </BookDetails>
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
