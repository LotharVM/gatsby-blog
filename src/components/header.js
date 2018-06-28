import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	background: black;
	margin-bottom: 1.45rem;
	height: ${({ isHome }) => isHome ? '50vh' : '20vh' }
`;
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 960px;
	padding: 1.45rem 1.0875rem;
	a {
		color: white;
	}
	ul {
		display: flex;
		list-style-type: none;
		li {
			margin-left: 1rem;
		}
	}
`;



class Header extends Component {
	
	componentDidUpdate = (prevProps, prevState) => {
		const {location} = this.props;
		if(location.pathname !== prevProps.location.pathname) {
			if(this.props.location.pathname === '/') {
				this.wrapper.animate([
					{ height: '20vh' },
					{ height: '50vh' }
				], {
						duration: 300,
						fill: 'forwards',
						iterations: 1
					})
			} else {
				this.wrapper.animate([
					{ height: '50vh' },
					{ height: '20vh' }
				], {
					duration: 300,
					fill: 'forwards',
					iterations: 1
				})
			}
		}
	}

	render() {
		const { data, location } = this.props;
		return (
			<HeaderWrapper 
				isHome={location.pathname === '/'}
				ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
			>
				<HeaderContainer>
					<h1><Link to="/"> {data.site.siteMetadata.title} </Link></h1>
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
						</ul>
					</nav>
				</HeaderContainer>
			</HeaderWrapper>
		);
	}
}

export default Header;