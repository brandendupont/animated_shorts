import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container, Footer } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import GithubLink from "../components/github-link";
import ShareButtons from "../components/share-buttons";
import Credits from "../components/credits";
import Particles from '../components/particles';
import MainHeader from "../components/main-header";
import SecondaryHeader from "../components/secondary-header";
import CountdownContainer from "../components/countdown-container";


const Layout = ({ 
  pageContext: {
    mainHeader,
    secondaryHeader,
    daysLabel,
    hoursLabel,
    minutesLabel,
    secondsLabel,
    repoUrl,
    targetDate,
    hideGithubButton,
    hideSeconds,
    hideMinutes,
    hideHours,
    hideDays,
    hideWhatsappShareButton,
    hideTwitterShareButton,
    hideFacebookShareButton,
    hideParticles,
  } 
}) => {
  const { 
    site: {
      siteMetadata: {
        title,
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        {!hideGithubButton && <GithubLink url={repoUrl} />}
        <MainHeader text={"Countdown to Animated Shorts on Pierce St"} />
      </Header>
      <Main>
        <Container>
          <CountdownContainer 
            targetDate={"2021-01-30T12:00:59-07:00"}
            hideDays={hideDays}
            hideHours={hideHours}
            hideMinutes={hideMinutes}
            hideSeconds={hideSeconds}
            daysLabel={daysLabel}
            hoursLabel={hoursLabel}
            minutesLabel={minutesLabel}
            secondsLabel={secondsLabel}
          />
        </Container>
      </Main>
      <Footer>
        <SecondaryHeader text={"Time flies like an arrow; fruit flies like a banana.― Anthony G. Oettinger "} />
        <ShareButtons 
          title={title}
          hideWhatsappShareButton={true}
          hideTwitterShareButton={hideTwitterShareButton}
          hideFacebookShareButton={true}
        />
        <Credits />
      </Footer>
      {!hideParticles && <Particles />}
    </StyledLayout>
  )
}

export default Layout
