import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  InputGroup,
  Input,
} from "reactstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {urlKeyword } from "../../../Constant";
const moment = require('moment')
class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      currentPage: 1,
      resultsPerPage: 40,
      show: false,
      file: null,
      showAddKeyword: false,
      keyword: "",
      hasil : "",
      showEdit: false,
      exist: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleKeyword = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };
  handleResults = (e) => {
    this.setState({
      hasil: e.target.value,
    });
  };

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
 
  handleSubmitEditKeyword = () => {
    const Data = {
      keyword: this.state.keyword,
      results: this.state.hasil
    };

    if (
      this.state.keyword === null ||
      this.state.keyword === "" ||
      this.state.hasil === null ||
      this.state.hasil === "" 
    ) {
      alert("tidak boleh ada data yang kosong");
    } else {
      axios({
        method: "PUT",
        url: urlKeyword + this.state.id_keyword,
        data: Data,
      })
        .then((data) => {
          alert("berhasil diubah");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  getSeparanProvinsi = () =>{
    axios({
      method: "get",
      url: "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
    })
      .then((data) => {
        var simpan = "";
      
        for (var i=0;i<data.data.features.length;i++){
          simpan +=data.data.features[i].attributes.Provinsi + " Kasus Positif : " + data.data.features[i].attributes.Kasus_Posi + ", Kasus Sembuh : " + data.data.features[i].attributes.Kasus_Semb + ", Kasus meninggal : " + data.data.features[i].attributes.Kasus_Meni + "\n";
        }
        console.log(simpan)
      })

  }



  getHospital = () =>{
    axios({
      method: "get",
      url: "https://dekontaminasi.com/api/id/covid19/hospitals",
    })
      .then((data) => {
        console.log(data.data.length)
        var rs = "";
        for (var i=0;i<data.data.length;i++){
          rs += data.data[i].name + " " + ", Alamat : " + data.data[i].address + ", Phone: " + data.data[i].phone + "\n\n";
        }
        console.log(rs);
        console.log("Sumber API : https://dekontaminasi.com/api/id/covid19/hospitals");
      })

  }

  getNewsToday = () =>{
    axios({
      method: "get",
      url: "https://dekontaminasi.com/api/id/covid19/news",
    })
      .then((data) => {
        var random = Math.floor(Math.random() * data.data.length) + 1
        var tanggal = new Date(data.data[random].timestamp).toLocaleDateString("id")
        console.log("Judul Berita : " + data.data[random].title + "\n" + "link : "  +  data.data[random].url + "\n"  + "Tanggal " + tanggal + "\n" + "Sumber API : https://dekontaminasi.com/api/id/covid19/news")
      })

  }

  getHoaxToday = () =>{
    axios({
      method: "get",
      url: "https://dekontaminasi.com/api/id/covid19/hoaxes",
    })
      .then((data) => {
        var random = Math.floor(Math.random() * data.data.length) + 1
        var tanggal = new Date(data.data[random].timestamp).toLocaleDateString("id")
        console.log("Judul Berita : " + data.data[random].title + "\n" + "link : "  + data.data[random].url + "\n"  + "Tanggal " + tanggal + "\n" + "Sumber API : https://dekontaminasi.com/api/id/covid19/hoaxes")
      })

  }



  componentDidMount() {
this.getHospital()
//    this.getHoaxToday()
    //this.getNewsToday()
   //this.getSeparanProvinsi()
    axios({
      method: "get",
      url: urlKeyword,
    })
      .then((data) => {
       // console.log(data);
        this.setState({
          results: data.data.response,
          loading: true,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  filterList = (event) => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };


  handleAddKeywords = () => {
      this.setState({
        showAddKeyword: true,
      });
  };

  handleClose = () => {
    this.setState({
      show: false,
      showAddKeyword: false,
      showEdit: false,
    });
  };

  infoDetails = (result) => {
    this.setState({
      show: true,
      keyword: result.keyword,
      hasil: result.results,
    });
  };

  handleDeleteKeyword = (result) => {
    axios({
      method: "delete",
      url: urlKeyword + result.id_keyword,
    })
      .then((data) => {
        alert("berhasil dihapus");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEdit = (results) => {
    axios({
      method: "get",
      url: urlKeyword + results.id_keyword,
    })
      .then((data) => {
        this.setState({
          showEdit: true,
          keyword: data.data.response[0].keyword,
          hasil: data.data.response[0].results,
          id_keyword : results.id_keyword
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmitKeyword = () => {
    const Data = {
      keyword: this.state.keyword,
      results : this.state.hasil

    };

    if (
      this.state.keyword === null ||
      this.state.keyword === "" ||
      this.state.hasil === null ||
      this.state.hasil === "" 
    ) {
      alert("tidak boleh ada data yang kosong");
    } else {
      axios({
        method: "POST",
        url: urlKeyword,
        data: Data,
      })
        .then((data) => {
          alert("berhasil ditambahkan");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    const { results, currentPage, resultsPerPage } = this.state;
    const indexOfLastTodo = currentPage * resultsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - resultsPerPage;
    const currentresults = results.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderresults = currentresults.map((results, index) => {
      return (
        <tr key={results.id_keyword} data-category={results.id_keyword}>
          <td>{results.keyword}</td>
          <td style={{width:'1200px'}}>{results.results.substring(0,200)+"..."}</td>
          <td style={{width:'300px'}}>
            <Button
              className="btn btn-info"
              onClick={() => this.infoDetails(results)}
            >
              Details
            </Button>{" "}
            <Button
              className="btn btn-warning"
              onClick={() => this.handleEdit(results)}
            >
              Edit
            </Button>{" "}
            <Button
              className="btn btn-danger"
              onClick={() => {
                const confirmBox = window.confirm(
                  "Do you really want to delete this keyword?"
                );
                if (confirmBox === true) {
                  this.handleDeleteKeyword(results);
                }
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(results.length / resultsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="page-link"
        >
          {number}
        </li>
      );
    });

    if (this.state.loading === false) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        {/*Modal Add */}
        <Modal show={this.state.showAddKeyword} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Keyword</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              Keyword
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleKeyword}
                  placeholder="keyword"
                />
              </InputGroup>
              Results
              <InputGroup className="mb-3">
                <Input
                  type="textarea"
                  onChange={this.handleResults}
                  placeholder="results"
                />
              </InputGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button className="btn btn-info" onClick={this.handleSubmitKeyword}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* modal details buku*/}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              Keyword
              <InputGroup className="mb-3">
                <Input
                  type="text" readOnly
                  placeholder={this.state.keyword}
                />
              </InputGroup>
              Result
              <InputGroup className="mb-3">
                <Input style={{height : '550px'}}
                  type="textarea" readOnly
                  placeholder={this.state.hasil}
                />
              </InputGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/*Modal EDIT */}
        <Modal show={this.state.showEdit} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT Keyword</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              Keyword
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleKeyword}
                  placeholder={this.state.keyword}
                />
              </InputGroup>
              Result
              <InputGroup className="mb-3">
                <Input
                  type="textarea"
                  onChange={this.handleResults}
                  placeholder={this.state.hasil}
                  value={this.state.hasil}
                />
              </InputGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              className="btn btn-info"
              onClick={this.handleSubmitEditKeyword}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="row"></div>

        <div className="animated fadeIn">
          {this.state.loading && (
            <Row>
              <Col xs="12" lg="12">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col>
                        <i className="fa fa-user" /> <b>&nbsp;List Keyword</b>
                        <Button
                          style={{ marginLeft: 10 }}
                          color="success"
                          className="px-4"
                          onClick={this.handleAddKeywords}
                        >
                          Add Keyword
                        </Button>
                      </Col>
                      <Col>
                        <input
                          type="text"
                          id="myInput"
                          className="form-control form-control-md"
                          style={{ width: "100%" }}
                          placeholder="Search By Keyword"
                          onChange={this.filterList}
                        />
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Table id="myTable" responsive striped>
                      <thead>
                        <tr>
                          <th>Keyword</th>
                          <th>Results</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>{renderresults}</tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </div>

        <ul className="pagination">{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default Tables;
