import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarNew";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
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
              An application to improve reading literacy in Indonesia through a website that includes a feature to view books that are available to borrow and can be obtained easily because the book owners can share about their books to those who have the interest to read so that the website can make it easier for users to find the desired book by looking at the stock of books owned by other people and would be able to read the book without buying it or come to the library directly. The purpose of the application is to increase the level of reading literacy in Indonesia and to reach out Sustainable Development Goals number 4 about quality education.
              </p>
              <center>
                <div>
                  <a href="/#/register">
                    <Button
                      color="danger"
                      style={{ width: "50%", height: "5rem" }}
                    >
                      <p style={{ fontSize: "30px" }}>
                        <b>REGISTER</b>
                      </p>
                    </Button>
                  </a>
                </div>
              </center>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row xs="1" sm="1" md="3" style={{ marginTop: "2%" }}>
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
                    Member of DSC Diponegoro University
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  style={{ height: "10%" }}
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/arifatul_khasanah.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Arifatul Khasanah</CardTitle>
                  <CardText>
                  Member of DSC Diponegoro University
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  style={{ height: "10%" }}
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/erika_simanjuntak.jpg"
                  alt="Erika"
                />
                <CardBody>
                  <CardTitle tag="h5">Erika Simanjuntak</CardTitle>
                  <CardText>
                  Member of DSC Diponegoro University
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <center>
            <b>CODE WITH &#10084; BY DSC UNDIP</b>
          </center>
        </Container>
      </div>
    );
  }
}

export default HomePage;
