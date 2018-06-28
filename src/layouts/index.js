import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled from 'styled-components';
import './index.css'

const PageWrapper = styled.div`
	background: gray;
	min-height: 100vh;
	color: white;
`;

const Layout = ({ children, data, location }) => (
	<PageWrapper>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
			{ name: 'description', content: 'Sample' },
			{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<Header data={data}  location={location} />
		<div
			style={{
			margin: '0 auto',
			maxWidth: 960,
			padding: '0px 1.0875rem 1.45rem',
			paddingTop: 0,
			}}
		>
			{children()}
		</div>
	</PageWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutSiteMeta {
	site {
	  siteMetadata {
		title
		desc
	  }
	}
  }
`
