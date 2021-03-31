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

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      currentPage: 1,
      resultsPerPage: 40,
      show: false,
      showImage: false,
      file: null,
      showAddBook: false,
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

  onFileChangeImage = (e) => {
    this.setState({ file: e.target.files[0] });
  };

 
  handleSubmitEditBuku = () => {
    const Data = {
      judul_buku: this.state.judul_buku,
      id_user: sessionStorage.getItem("id_session"),
      penulis: this.state.penulis,
      tahun_terbit: this.state.tahun_terbit,
      penerbit: this.state.penerbit,
      jenis: this.state.jenis,
      jumlah: this.state.jumlah,
      foto: this.state.foto,
    };

    if (
      this.state.judul_buku === null ||
      this.state.judul_buku === "" ||
      this.state.penulis === null ||
      this.state.penulis === "" ||
      this.state.tahun_terbit === null ||
      this.state.tahun_terbit === "" ||
      this.state.penerbit === null ||
      this.state.penerbit === "" ||
      this.state.jenis === null ||
      this.state.jenis === "" ||
      this.state.jumlah === null ||
      this.state.jumlah === "" ||
      this.state.foto === null ||
      this.state.foto === ""
    ) {
      alert("tidak boleh ada data yang kosong");
    } else {
      axios({
        method: "PUT",
        url: urlKeyword + this.state.id_buku,
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

  componentDidMount() {
    axios({
      method: "get",
      url: urlKeyword,
    })
      .then((data) => {
        console.log(data);
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


  handleAddBooks = () => {
    if (this.state.exist === false) {
      alert("Please Complete Your Profile Before Add Book");
    } else {
      this.setState({
        showAddBook: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      show: false,
      showImage: false,
      showAddBook: false,
      showEdit: false,
    });
  };

  infoDetails = (result) => {
    this.setState({
      show: true,
      judul_buku: result.judul_buku,
      foto: result.foto,
      penulis: result.penulis,
      tahun_terbit: result.tahun_terbit,
      penerbit: result.penerbit,
      jenis: result.jenis,
      jumlah: result.jumlah,
      pemilik: result.nama,
      no_telepon: result.no_telepon,
      asal: result.asal,
    });
  };

  handleDeleteBook = (result) => {
    axios({
      method: "delete",
      url: urlKeyword + result.id_buku,
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
      url: urlKeyword + results.id_buku,
    })
      .then((data) => {
        this.setState({
          showEdit: true,
          judul_buku: data.data.response[0].judul_buku,
          id_user: data.data.response[0].id_user,
          penulis: data.data.response[0].penulis,
          tahun_terbit: data.data.response[0].tahun_terbit,
          penerbit: data.data.response[0].penerbit,
          jenis: data.data.response[0].jenis,
          jumlah: data.data.response[0].jumlah,
          foto: data.data.response[0].foto,
          id_buku: data.data.response[0].id_buku,
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
          <td>{results.results}</td>
          <td>
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
                  "Do you really want to delete this book?"
                );
                if (confirmBox === true) {
                  this.handleDeleteBook(results);
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
        <Modal show={this.state.showAddBook} onHide={this.handleClose}>
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
            <center>
              <img
                src={this.state.foto}
                alt={this.state.foto}
                style={{ maxHeight: "150px" }}
              />
            </center>
            <br />
            <table responsive striped>
              <thead></thead>
              <tbody>
                <tr>
                  <td>Judul</td>
                  <td>:</td>
                  <td>{this.state.judul_buku}</td>
                </tr>

                <tr>
                  <td>Penulis</td>
                  <td>:</td>
                  <td>{this.state.penulis}</td>
                </tr>

                <tr>
                  <td>Tahun Terbit</td>
                  <td>:</td>
                  <td>{this.state.tahun_terbit}</td>
                </tr>

                <tr>
                  <td>Penerbit</td>
                  <td>:</td>
                  <td>{this.state.penerbit}</td>
                </tr>

                <tr>
                  <td>Jenis</td>
                  <td>:</td>
                  <td>{this.state.jenis}</td>
                </tr>

                <tr>
                  <td>Jumlah</td>
                  <td>:</td>
                  <td>{this.state.jumlah}</td>
                </tr>

                <tr>
                  <td>Pemilik</td>
                  <td>:</td>
                  <td>{this.state.pemilik}</td>
                </tr>

                <tr>
                  <td>No Telepon</td>
                  <td>:</td>
                  <td>{this.state.no_telepon}</td>
                </tr>

                <tr>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>{this.state.asal}</td>
                </tr>
              </tbody>
            </table>
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
            <Modal.Title>EDIT Buku</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              Judul Buku
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleKeyword}
                  placeholder={this.state.judul_buku}
                />
              </InputGroup>
              Penulis
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleResults}
                  placeholder={this.state.penulis}
                />
              </InputGroup>
              Tahun Terbit
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleTahun}
                  placeholder={this.state.tahun_terbit}
                />
              </InputGroup>
              Penerbit
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handlePenerbit}
                  placeholder={this.state.penerbit}
                />
              </InputGroup>
              Jenis
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleJenis}
                  placeholder={this.state.jenis}
                />
              </InputGroup>
              Jumlah
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleJumlah}
                  placeholder={this.state.jumlah}
                />
              </InputGroup>
              Foto
              <InputGroup className="mb-3">
                <Input
                  type="text"
                  onChange={this.handleFoto}
                  placeholder={this.state.foto}
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
              onClick={this.handleSubmitEditBuku}
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
                          onClick={this.handleAddBooks}
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
