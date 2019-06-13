import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import StaticImg from '../images/bmc_trans_small.jpg'

const Container = styled.div`
  margin: 1rem auto;
  max-width: 800px;
  padding: 2rem;
`

const TagList = styled.ul`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  list-style: none;
  @media screen and (max-width: 600px) { 
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    margin: 0 auto;
  }
`

const Tag = styled.li`
  border-radius: 5px;
  background: ${props => props.bad? 'tomato' : ' #77dd77'};
  padding: 10px;

  @media screen and (max-width: 600px) { 
    
  }

  `


const IndexPage = () => (
  <Layout>
    <SEO title="Free Business Model Generator" image={'http://bmc.surge.sh/static/bf09fa8eaecaff6da8895d16045a0312/73897/bmc_trans_small.jpg'} />
    <Container>
      <h1 style={{ textAlign: `center` }}>Business Model Generator</h1>
      <p style={{color:`red`}}> Attention/Disclaimer: Not working on mobile, this is an experimental prototype. </p>
      
      <Link to="/bmc" >
      <span style={{textAlign: `center`, display:`block`}}>Open Tool</span>   
        <div
          style={{ maxWidth: `450px`, margin: `auto`, marginBottom: `1.45rem` }}
        > 
          <Image />
        </div>
      </Link>

      <p>
        This is a very simple tool thats allows to generate a Business Model Canvas (BMC) online
        . <br /> 
        
        Use a BMC to describe a Business Model graphically and
      </p>
      <TagList>
        <Tag>Visualize the blueprint of your business model,</Tag>
        <Tag>Boost communication,</Tag>
        <Tag bad>Prevent to write unuseful Business Plans.</Tag>
      </TagList>

      <p>You can find further information  <a href="https://www.strategyzer.com/canvas/business-model-canvas" target="_blank">here</a>. </p>

      <h2>Instructions</h2>

      <ol>
        <li>
        Add new sticky-note: Double click over the canvas.
        </li>
        <li>
        Edit sticky-note: Double Click in sticky-note. Return to finish editing.
        </li>
        <li>Save canvas: Take a screenshot.</li>
      </ol>

      <p> This <a href="https://assets.strategyzer.com/assets/resources/designing-crystal-clear-business-model-canvases.pdf" target="_blank" > guide</a> will give you the best practices to fill a canvas and help you to design cristal clear business models.
      </p>

      <span style={{textAlign: `center`, display:`block`}}> <a href="mailto:julidelos@gmail.com?subject=[BMC tool] - Your Subject">Contact</a></span>

    </Container>
    <img src={StaticImg} style={{visibility: "hidden", display: "none"}} alt="Business Model Canvas" />
  </Layout>
  
)

export default IndexPage

export const query = graphql`
query Img{
  placeholderImage: file(relativePath: { eq: "bmc_trans.png" }) {
    childImageSharp {
      fluid(maxWidth: 1400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`