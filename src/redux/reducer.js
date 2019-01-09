import { UPDATE_FOOD } from "./actions"

const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_FOOD:
			return {
				...state,
				foods: {
					...state.foods,
					[action.key]: {
						...state.foods[action.key],
						...action.payload
					}
				}
			}

		default:
			return state
	}
}

export default reducer
