import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
	switch (action.type) {
		case 'sort': {
			const compareNames = action.payload === 'up'
				? (a: UserType, b: UserType) => a.name.localeCompare(b.name)
				: (a: UserType, b: UserType) => b.name.localeCompare(a.name);
			return [...state].sort(compareNames);
		}
		case 'check': {
			return state.filter((person) => person.age >= action.payload);
		}
		default:
			return state
	}
}
