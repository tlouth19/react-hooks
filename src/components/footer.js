import React, { useState, useEffect } from "react"
import { useGlobalState } from "../redux/store"
import styled from "styled-components"

const Wrap = styled.footer`
	border-top: 1px solid #ededed;
	margin-top: 1em;
	padding-top: 1em;
	display: flex;
	align-items: center;
`

const Button = styled.button`
	background: white;
	border-radius: 3px;
	padding: 0.5em 1em;
	cursor: pointer;
	margin-right: 1em;
`

const Message = styled.span`
	color: #60A561;
	opacity: ${props => props.visible ? 1 : 0};
	transition: opacity .2s ease-in-out;
`

const Footer = () => {
	const [value] = useGlobalState("foods")
	const [showMessage, toggleMessage] = useState(false);
	useEffect(() => {
    if (showMessage) {
			setTimeout(() => toggleMessage(false), 1000)
		}
  });
	return (
		<Wrap>
			<Button
				onClick={() => {
					console.log(value)
					toggleMessage(true)
				}}>
				Log Foods
			</Button>
			<Message visible={showMessage}>
				&#10003;&nbsp; Data logged to console!
			</Message>
		</Wrap>
	)
}

export default Footer
