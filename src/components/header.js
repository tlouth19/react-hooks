import React from "react"
import styled from "styled-components"

const Wrap = styled.header`
	padding-bottom: 1em;
	border-bottom: 1px solid #ededed;
`

const Title = styled.h1`
	margin: 0;
`

const Header = () => (
	<Wrap>
		<Title>Awesome Foods</Title>
	</Wrap>
)

export default Header
