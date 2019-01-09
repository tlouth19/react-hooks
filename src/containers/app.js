import React from "react"
import { useGlobalState } from "../redux/store"
import Header from "../components/header"
import Food from "../components/food"
import Footer from "../components/footer"
import styled from "styled-components"

const Wrap = styled.section`
	margin: 3em;
	padding: 2em;
	box-shadow: rgba(20, 20, 20, 0.27) 1px 1px 20px;
	border-radius: 3px;
	color: #333333;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol";
`

const ListWrapper = styled.ul`
	padding-left: 0;
	margin: 0;
	list-style-type: none;
`

const App = () => {
	const [value] = useGlobalState("foods")
	return (
		<Wrap>
			<Header />
			<form>
				<ListWrapper>
					{Object.keys(value).map(key => (
						<Food key={key} food={value[key]} itemKey={key} />
					))}
				</ListWrapper>
			</form>
			<Footer />
		</Wrap>
	)
}

export default App
