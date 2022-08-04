
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: CollapsedButtonACType):StateType  => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state,collapsed:!state.collapsed}
        default:
            throw new Error('Bad action type')
    }
    return state
}
type CollapsedButtonACType = ReturnType<typeof collapsedButtonAC>
export const collapsedButtonAC = () => {
    return {
        type: TOGGLE_COLLAPSED
    }
}