import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./DiceList.module.css";

class DiceList extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.diceList.map((dice, index) => (
          <img
            key={index}
            src={`./img/${dice}.png`}
            alt="Dice"
            className={styles.dice}
            style={{ width: 40, height: 40 }}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diceList: state.diceList,
  };
};

export default connect(mapStateToProps)(DiceList);
