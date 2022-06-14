import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './DiceList.module.css'
import Dice from './../Dice'

class DiceList extends Component {

  render() {
    return (
      <div className={styles.container}>
        {this.props.diceList.map((dice, index) => 
          <Dice key={index} data={dice}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    diceList: state.diceList
  }
}


export default  connect(mapStateToProps, null)(DiceList)