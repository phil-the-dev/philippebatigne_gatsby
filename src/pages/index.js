import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import AboutSection from "../components/about"
import ProgressSection from "../components/progress"
import ServicesSection from "../components/services"
import ResumeSection from "../components/resume"
import PortfolioSection from "../components/portfolio"
import ContactSection from "../components/contact"
import '../assets/scss/philippebatigne.scss'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    <Banner />
    <AboutSection />
    <ProgressSection />
    <ServicesSection />
    <ResumeSection />
    <PortfolioSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
