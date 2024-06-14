export type InitialStateType = {
    themeId: number
}

export type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID';
    id: number;
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeIdActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { themeId: action.id }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id });
