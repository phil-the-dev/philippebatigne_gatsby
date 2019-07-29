import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/section/banner"
import AboutSection from "../components/section/about"
import ProgressSection from "../components/section/progress"
import ServicesSection from "../components/section/services"
import ResumeSection from "../components/section/resume"
import ContactSection from "../components/section/contact"
import '../assets/scss/philippebatigne.scss'
import Icon from '../images/gatsby-icon.png'

import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <div className="gatsby-ribbon">HTML site proudly converted to <img src={Icon} style={{ height: '17px', marginBottom: '-3px' }} /><a href="//www.gatsbyjs.org/">Gatsby</a></div>
    <AboutSection />
    <ProgressSection />
    <ServicesSection />
    <ResumeSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
