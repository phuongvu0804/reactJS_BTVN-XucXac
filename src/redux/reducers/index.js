import { ADD_CHOICE, ROLL_DICE } from './../constants'
const initialState = {
    choice: true,
    diceList: [1,1,1],
    winningGame: 0,
    gameNumber: 0
}

const handleResult = (diceList, choice) => {
    const totalPoints = diceList.reduce((sum, dice) => sum + dice, 0)
    let result

    if (totalPoints >= 4 && totalPoints <= 10) {
      result = true
    } else if (totalPoints >= 11 && totalPoints <= 17) {
      result = false
    }

    if (result === choice) {
        return true
    } else {
        return false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHOICE:
            state.choice = action.payload
            return { ...state }
        case ROLL_DICE:
            state.diceList = state.diceList.map( dice => {
                dice = Math.floor(Math.random() * ( 6 - 1 + 1)) + 1
                return dice
            })

            state.gameNumber++

            const result = handleResult(state.diceList, state.choice)
            if (result) state.winningGame++

            return { ...state }
        default: 
            return {...state}
    }
}

export default reducer