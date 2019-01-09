import React from "react"
import PropTypes from "prop-types"
import { dispatch } from "../redux/store"
import { UPDATE_FOOD } from "../redux/actions"
import styled from "styled-components"

const Wrap = styled.li`
	padding: 1em;
	border-radius: 3px;
	margin-top: 1em;
	transform: ${props => `translateX(${props.delicious ? "30px" : "0px"})`};
	background-color: ${props => (props.healthy ? "#60A561" : "#D2CBCB")};
	transition: all 0.2s linear;
	width: 80%;
`

const Title = styled.strong`
	text-transform: capitalize;
	display: block;
	margin-bottom: 0.5em;
`

const CheckboxInput = styled.input`
	margin-right: 0.5em;
`

const CheckboxLabel = styled.label`
	margin-right: 1em;
	user-select: none;
	cursor: pointer;
`

const Food = ({ food, itemKey }) => (
	<Wrap healthy={food.isHealthy} delicious={food.isDelicious}>
		<Title>{food.label}</Title>
		{[{ label: "Delicious", key: "isDelicious" }, { label: "Healthy", key: "isHealthy" }].map(opt => (
			<CheckboxLabel key={opt.label}>
				<CheckboxInput
					type="checkbox"
					checked={food[opt.key]}
					onChange={e => dispatch({ type: UPDATE_FOOD, key: itemKey, payload: { [opt.key]: !food[opt.key] } })}
				/>
				{opt.label}
			</CheckboxLabel>
		))}
	</Wrap>
)

Food.propTypes = {
	food: PropTypes.shape({
		label: PropTypes.string.isRequired,
		isDelicious: PropTypes.bool.isRequired,
		isHealthy: PropTypes.bool.isRequired
	}).isRequired,
	itemKey: PropTypes.string.isRequired
}

export default Food
