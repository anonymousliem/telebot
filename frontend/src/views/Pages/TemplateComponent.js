import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class CekAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (
      sessionStorage.getItem("token") === "" ||
      sessionStorage.getItem("token") === null ||
      sessionStorage.getItem("logged") === "" ||
      sessionStorage.getItem("logged") === null ||
      sessionStorage.getItem("id_session") === "" ||
      sessionStorage.getItem("id_session") === null
    ) {
      this.props.history.push("/login");
    }
  }
  render() {
    return <div></div>;
  }
}

export default CekAuth;
