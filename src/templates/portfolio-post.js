import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import Icon from '../images/gatsby-icon.png'
import { graphql } from 'gatsby'

function PortfolioPost(props) {

    const post = props.data.markdownRemark;
    const { title, description } = post.frontmatter;
    // const thumbnail =
    //     post.frontmatter.image &&
    //     post.frontmatter.image.childImageSharp.resize.src

    return (
      <div class="bgrid folio-item">
        <div class="item-wrap">
          <Img fluid={this.props.image} alt={this.props.imgAlt} />
          <a href={"#"+id} class="overlay">
            <div class="folio-item-table">
              <div class="folio-item-cell">
                <h3 class="folio-title">{this.props.title}</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
    // return (
    //   <StaticQuery
    //   query={graphql`
    //     query {
    //       placeholderImage: file(relativePath: { eq: "sites/vanburen.PNG" }) {
    //         childImageSharp {
    //           fluid(maxWidth: 300) {
    //             ...GatsbyImageSharpFluid
    //           }
    //         }
    //       }
    //     }
    //   `}
    //   render={data => 
      
    //   } 
    // /> 
    // )
}

export default PortfolioPost;

// export const query = graphql`
//  query PostQuery($slug: String!) {
//      markdownRemark(fields: { slug: { eq: $slug } }) {
//        html
//        frontmatter {
//         title
//         description
//         image {
//           childImageSharp {
//             resize(width: 1500, height: 1500) {
//               src
//             }
//             fluid(maxWidth: 786) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//        }
//        }
//    }
// }
// `