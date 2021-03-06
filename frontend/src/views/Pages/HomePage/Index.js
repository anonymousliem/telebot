import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarNew";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Container>
          <Row xs="1" sm="1" md="1" style={{ marginTop: "2%" }}>
            {/* <Col>
    <CardImg top width="100%" src="https://cdn0.iconfinder.com/data/icons/hardware-solid-set/512/phone_portrait_mode_hardware_solid_a-512.png" alt="Card image cap" />
    </Col> */}
            <Col>
              <center>
                <h1>
                  <b>ABOUT US</b>
                </h1>
              </center>
              <p>
              Covid-19 Bot adalah sebuah chatbot yang terintegrasi dengan Telegram untuk meningkatkan kepedulian dan pemahaman pengguna terkait Covid-19 dan vaksinasi Covid-19
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row xs="1" sm="1" md="3" style={{ marginTop: "2%" }}>
            <Col></Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  style={{ height: "10%" }}
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/muslim_muslim.jpeg"
                  alt="Muslim"
                />
                <CardBody>
                  <CardTitle tag="h5">Muslim</CardTitle>
                  <CardText>
                   21120117140032
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <center>
            <b>CODE WITH &#10084; BY Muslim</b>
          </center>
        </Container>
      </div>
    );
  }
}

export default HomePage;
