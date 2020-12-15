// import { DiScala } from "react-icons/Di"
import { GiBookshelf } from "react-icons/gi"
import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.div`
  background-color: #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%auto;
  max-width: 1000px;
  margin: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-left: 2rem;
`

export const SocialIcon = styled(GiBookshelf)`
  margin-right: 10px;
  margin-top: -5px;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-family: "Ubuntu", sans-serif;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 20px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
