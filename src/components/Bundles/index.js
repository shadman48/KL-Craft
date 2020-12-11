import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import "./image.css"
import { Button } from "../ButtonElements"
// import { Link } from "gatsby"
// import styled from "styled-components"
import {
  BundleContainer,
  BundleHeading,
  BundleWrapper,
  BundleCard,
  BundleImg,
  BundleText,
  OrderBtn,
} from "./bundleElements"

const Bundle = ({ heading, data }) => {
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
    <BundleContainer>
      <BundleHeading>{heading}</BundleHeading>
      <BundleWrapper>
        {data.map((bundle, index) => {
          return (
            <BundleCard key={index}>
              <BundleImg src={bundle.img} alt={bundle.alt} />
              <BundleText>{bundle.name}</BundleText>
            </BundleCard>
          )
        })}
      </BundleWrapper>
      <OrderBtn to="/contact">
        <Button>Order</Button>
      </OrderBtn>
    </BundleContainer>
  )
}

export default Bundle

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
