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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <AboutSection />
    <ProgressSection />
    <ServicesSection />
    <ResumeSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
