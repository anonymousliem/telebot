import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  
} from "reactstrap";
import axios from "axios";
import { urlLogin } from "../../../Constant";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      logged: false,
      messageErrorPassword: "",
      messageErroremail: "",
      url: urlLogin,
    };
  }

  handleEmail = (e) => {
    var values = e.target.value;
    if (values !== "") {
      this.setState({
        messageErroremail: "",
      });
    }

    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    var valuesPassword = e.target.value;
    if (valuesPassword !== "") {
      this.setState({
        messageErrorPassword: "",
      });
    }
    this.setState({
      password: e.target.value,
    });
  };

  onHandleSubmit = () => {
    var email = this.state.email;
    var password = this.state.password;
    if (
      email !== null &&
      email !== "" &&
      password !== null &&
      password !== ""
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
        url: this.state.url,
        headers: Header,
        data: Data,
      })
        .then((data) => {
          console.log(data)
          var token = data.data.token;
          //var id_account = data.data.response[0].id_account;

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("logged", true);
          //sessionStorage.setItem("id_session", id_account);

          this.props.history.push("/keyword/list");
        })
        .catch((err) => {
          alert("email atau password salah");
        });
    }

    if (email === null || email === "") {
      this.setState({
        messageErroremail: "email Tidak Boleh Kosong",
      });
    }

    if (password === null || password === "") {
      this.setState({
        messageErrorPassword: "Password tidak boleh kosong",
      });
    }
  };
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          required
                          onChange={this.handleEmail}
                          placeholder="email"
                          autoComplete="email"
                        />
                      </InputGroup>
                      <font color="red">{this.state.messageErroremail}</font>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          onChange={this.handlePassword}
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <font color="red">{this.state.messageErrorPassword}</font>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={this.onHandleSubmit}
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card body className="justify-content-center" style={{ width: '44%', backgroundColor: '#FFFFFF', }}>
                <CardImg src={Logo} alt="Logo" style={{padding:'auto'}}  />
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
