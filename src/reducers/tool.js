export const tool = (state = false, action) => {
	if (action.type === 'tool') {
		return action.value
	}
	return state
}