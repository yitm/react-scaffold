import * as tool from './tool'

export const Loading = (state = false, action) => {
	if (action.type === 'loading') {
		return action.value
	}
	return state
}

export const tools = tool.tool