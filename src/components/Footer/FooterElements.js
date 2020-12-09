// import { DiScala } from "react-icons/Di"
import { GiBookshelf } from "react-icons/Gi"
import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.div`
  background-color: #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: c;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%auto;
  max-width: 1000px;
  margin: 20px auto;

  @media screen and (max-width: 820px) {
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
`

export const SocialIcon = styled(GiBookshelf)`
  margin-right: 10px;
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
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
