import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from "../components/image"

import StickyBoard from "../components/stickyBoard"

export default () => (
  <Layout>
    <SEO title="Business model Generator" />
    
    
    <StickyBoard />

    <div style={{ position: `fixed`, top: 0, left: 0, right: 0, bottom: 0, zIndex:0 }}>
      <Image/>  
    </div>
    
  </Layout>
)
