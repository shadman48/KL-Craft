import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import "./image.css"
import { Button } from "../ButtonElements"
import {
  CustomContainer,
  CustomHeading,
  CustomWrapper,
  CustomCard,
  CustomImg,
  CustomDetails,
  CustomTitle,
  CustomInfo,
  OrderBtn,
  CustomIcon,
} from "./customElements"

const Custom = ({ heading, data }) => {
  return (
    <CustomContainer>
      <CustomHeading>{heading}</CustomHeading>
      <CustomWrapper>
        {data.map((custom, index) => {
          return (
            <CustomCard key={index}>
              <CustomImg src={custom.img} alt={custom.alt} />
              <CustomIcon />
              <CustomDetails>
                <CustomTitle>{custom.name}</CustomTitle>
                <CustomInfo>{custom.info}</CustomInfo>
              </CustomDetails>
            </CustomCard>
          )
        })}
      </CustomWrapper>
      <OrderBtn to="/contact">
        <Button>Order</Button>
      </OrderBtn>
    </CustomContainer>
  )
}

export default Custom
