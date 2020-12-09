import React from "react"

import { FaInstagram } from "react-icons/fa"
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            KL Crafts
          </SocialLogo>
          <SocialIcons>
            <SocialIconLink
              href="https://www.instagram.com/kl.crafts/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
          <WebsiteRights>KL Crafts © {new Date().getFullYear()}</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
