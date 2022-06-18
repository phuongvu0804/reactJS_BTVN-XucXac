import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Choice.module.css";
import { handleAddChoice } from "../../redux/actions";

class Choice extends Component {
  render() {
    return (
      <div
        className={styles.container}
        onClick={() => this.props.addChoice(this.props.type)}
      >
        <h1 className={styles.title}>{this.props.type ? "Tài" : "Xỉu"}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChoice: (payload) => dispatch(handleAddChoice(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Choice);
