import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { urlRegister } from "../../../Constant";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onchagePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onhandleSubmit = (event) => {
    if (
      this.state.email !== "" &&
      this.state.email !== null &&
      this.state.password !== null &&
      this.state.password !== ""
    ) {
      const Header = {
        "Content-Type": "application/json",
      };

      const Data = {
        email: this.state.email,
        password: this.state.password,
      };

      axios({
        method: "post",
        url: urlRegister,
        headers: Header,
        data: Data,
      })
        .then((data) => {
          alert("Berhasil Ditambahkan");
          this.props.history.push("/login");
        })
        .catch((err) => {
          alert("Gagal. Email sudah terdaptar sebelumnya");
        });
    } else {
      alert("Tidak Boleh Ada Data Yang Kosong");
    }
  };
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={this.onChangeEmail}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={this.onchagePassword}
                      />
                    </InputGroup>
                    <Button color="success" onClick={this.onhandleSubmit} block>
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
