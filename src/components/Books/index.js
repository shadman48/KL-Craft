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
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(
  //       filter: {
  //         extension: { regex: "/(jpg)|(png)|(jpeg)/" }
  //         name: { nin: ["background", "background3"] }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           base
  //           childImageSharp {
  //             fluid(maxHeight: 600, maxWidth: 600) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

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

// export const OrderBtn = styled(Link)``

//  {/* <div className="image-grid">
//       {data.allFile.edges.map((image, key) => (
//         <Img
//           key={key}
//           className="image-item"
//           fluid={image.node.childImageSharp.fluid}
//           alt={image.node.base.split(".")[0]}
//         />
//       ))}
//     </div> */}
