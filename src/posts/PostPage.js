import React, { Component } from 'react';

class PostPage extends Component {
    render() {
        const { excerpt, html } = this.props.data.markdownRemark;
        const { title, date } = this.props.data.markdownRemark.frontmatter;
        return (
            <div>
                <p>{date}</p>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        );
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields:{ slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD YYYY")
            }
        }
    }
`

export default PostPage;

