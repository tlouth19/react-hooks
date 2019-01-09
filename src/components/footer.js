import React from "react"
import { useGlobalState } from "../redux/store"
import styled from "styled-components"

const Wrap = styled.footer`
	border-top: 1px solid #ededed;
	margin-top: 1em;
	padding-top: 1em;
`

const Button = styled.button`
	background: white;
	border-radius: 3px;
	padding: 0.5em 1em;
	cursor: pointer;
`

const Footer = () => {
	const [value] = useGlobalState("foods")
	return (
		<Wrap>
			<Button onClick={() => console.log(value)}>Log Foods</Button>
		</Wrap>
	)
}

export default Footer
