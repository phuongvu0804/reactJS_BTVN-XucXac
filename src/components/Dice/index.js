import React, { Component } from 'react'
import styles from './Dice.module.css'

class Dice extends Component {

  render() {
    return (
      <img 
        src={`./img/${this.props.data}.png`}
        alt="Dice"
        className={styles.dice}
      />
    )
  }
}

export default Dice