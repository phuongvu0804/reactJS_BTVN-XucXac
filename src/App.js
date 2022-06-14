import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { Choice, DiceList } from './components'
import { handleRollDice } from './redux/actions'

class App extends Component {

  render() {
    const { choice, winningGame, gameNumber, handleRollDice } = this.props
    return (
      <div className="app">
        <h1 className="title">Game đổ xúc xắc</h1>
        <div className="game-content">
          <Choice type/>
          <DiceList/>
          <Choice type={false}/>
        </div>
        <div className="dashboard">
          <div>
            <span className="dashboard_title">Bạn chọn: </span>
            <span className="dashboard_option">
              {choice ? 'Tài' : 'Xỉu'}
            </span>
          </div>
          <div>
            <span className="dashboard-title">Số bàn thắng: </span>
            <span className="dashboard_score">{winningGame}</span>
          </div>
          <div>
            <span className="dashboard_title">Tổng số bàn chơi: </span>
            <span className="dashboard_game-number">{gameNumber}</span>
          </div>
        </div>
        <button onClick={handleRollDice}>Play game</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    choice: state.choice,
    winningGame: state.winningGame,
    gameNumber: state.gameNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRollDice: payload => dispatch(handleRollDice(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
