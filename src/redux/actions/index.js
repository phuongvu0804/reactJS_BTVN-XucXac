import { ADD_CHOICE, ROLL_DICE } from './../constants'

export const handleAddChoice = payload => {
    return {
        type: ADD_CHOICE,
        payload
    }
}

export const handleRollDice = payload => {
    return {
        type: ROLL_DICE,
        payload
    }
}

