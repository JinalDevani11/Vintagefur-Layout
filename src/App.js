import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Navbar, Nav, Form } from 'react-bootstrap';
import { FiSearch } from "react-icons/fi";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaSearch } from "react-icons/fa";

function App() {
  const proslider ={
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:2,
        nav:false,
      },
      1000:{
        items:3,
        nav:true,
      }
    }
  }
  return (  

    <div className="section">
      {/* ======================main logo header start================== */}
      <header>
        <Container className='logoheader position-relative'>
          <Row>
            <Col xl={3} md={2} xs={6} className='mt-3'>
              <img src={require("./image/logo.png")}></img>
            </Col>
            <Col xl={6} md={8} xs={6}>
              <Navbar expand="lg">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mt-auto  header">
                    <Nav.Link href="#home" className='me-4'>HOME</Nav.Link>
                    <Nav.Link href="#services" className='me-4'>SERVICES</Nav.Link>
                    <Nav.Link href="#about" className='me-4'>ABOUT</Nav.Link>
                    <Nav.Link href="#shop" className='me-4'>SHOP</Nav.Link>
                    <Nav.Link href="#concat" className='me-4'>CONTACT</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col xl={3} md={2} className='d-none  d-lg-block  mt-3 text-center logo'>
              <span className='me-3'><FiSearch /></span>
              <font>LOG IN</font>
            </Col>
          </Row>
        </Container>
      </header>
      {/* ======================main logo header end================== */}

      {/* ==========================slider sec start=================== */}
      <OwlCarousel className='owl-theme slider w-100' id="Main_slider" items={1} loop margin={10} nav={true} dots={false} autoplay={true} autoplayTimeout={3000} autoplaySpeed={1500} >
        <div class='item slider_show'>
          <h1>FURNITURE</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but <br></br>the majority have suffered alteration in some fo</p>
          <div className='theme_btn'>
            <a href="#">CONTACT US</a>
          </div>
        </div>
        <div class='item slider_show'>
          <h1>FURNITURE</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but <br></br>the majority have suffered alteration in some fo</p>
          <div className='theme_btn'>
            <a href="#">CONTACT US</a>
          </div>
        </div>
        <div class='item slider_show'>
          <h1>FURNITURE</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but <br></br>the majority have suffered alteration in some fo</p>
          <div className='theme_btn'>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </OwlCarousel>
      {/* ==========================slider sec end=================== */}

      {/* ==========================our services start======================= */}
      <Container>
        <Row className='our_layout mb-5'>
          <Col className='mb-5'>
            <h1 className='fs-1'>OUR SERVICES</h1>
            <p className='fs-6'>There are many variations of passages of Lorem Ipsum</p>
          </Col>
        </Row>
        <Row lg={4} md={2} xs={1}>
          <Col className='text-center layout_info mb-5'>
            <img src={require("./image/furnitures.png")}></img>
            <h4 className='pt-3  pb-2 fw-normal'>FURNITURES</h4>
            <p className='fs-6  lh-base pb-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
            <a href="#">READ MORE </a>
          </Col>
          <Col className='text-center layout_info mb-5'>
            <img src={require("./image/office.png")}></img>
            <h4 className='pt-3 pb-2 fw-normal'>OFFICE</h4>
            <p className='fs-6 lh-base  pb-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
            <a href="#">READ MORE </a>
          </Col>
          <Col className='text-center layout_info mb-5'>
            <img src={require("./image/home.png")}></img>
            <h4 className='pt-3 pb-2 fw-normal'>HOME</h4>
            <p className='fs-6 lh-base  pb-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
            <a href="#">READ MORE </a>
          </Col>
          <Col className='text-center layout_info mb-5'>
            <img src={require("./image/badroom.png")}></img>
            <h4 className='pt-3 pb-2 fw-normal'>BADROOM</h4>
            <p className='fs-6 lh-base  pb-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
            <a href="#">READ MORE </a>
          </Col>
        </Row>
      </Container>
      {/* ==========================our services end======================= */}

      {/* ==========================about us section start===================== */}
      <about>
        <div className='about_bgcolor'>
          <Container>
            <Row className='about_us'>
              <Col sm={12} md>
                <h1 className='fs-1'>ABOUT US</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>
                <div className='about_btn'>
                  <a href="#">READ MORE</a>
                </div>
              </Col>
              <Col className='about_img' sm={12} md>
                <img src={require("./image/about.png")}></img>
              </Col>
            </Row>
          </Container>
        </div>
      </about>
      {/* ==========================about us section end===================== */}

      {/* =======================FURNITURES section start======================== */}
      <div>
        <Container>
          <Row className='furnitures' >
            <Col className=' text-center mb-5'>
              <h1 className='fs-1'>OUR  FURNITURES</h1>
              <p className='fs-6'>There are many variations of passages of Lorem Ipsum</p>
            </Col>
          </Row>
          <Row>
            <Col className='furnitures_info' sm={12} md>
              <img src={require("./image/tempor.png")} className='w-100 object-fit-cover '></img>
              <div className='info_search '>
                <span><FaSearch /></span>
              </div>
              <h6 >TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            </Col>
            <Col className='furnitures_info' sm={12} md>
              <img src={require("./image/tempor2.png")} className='w-100 object-fit-cover'></img>
              <div className='info_search'>
                <span><FaSearch /></span>
              </div>
              <h6 >TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =======================FURNITURES section end======================== */}

      {/* ===========================who we are sec start======================= */}
      <weare>
        <div className='who_we'>
          <Container>
            <Row>
              <Col className='who_we_info'>
                <h1>WHO WE ARE ?</h1>
                <font>DESIGNERS & INNOVATORS</font>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                <div className='about_btn'>
                  <a href='#'>GET A QUOTE</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </weare>
      {/* ===========================who we are sec end======================= */}

      {/* =====================projects sec start============================= */}
      <div className='projects'>
        <Container>
          <Row className='project_name'>
            <Col className=' text-center'>
              <h1 className='fs-1'>OUR PROJECTS</h1>
              <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <OwlCarousel className='owl-theme project' id='project' loop margin={30}  items={3} slideBy={3} dots={false} autoplay={true} autoplaySpeed={500} {...proslider}>
                <div className='item image'>
                  <img src={require("./image/p3.png")}></img>
                  <div className='image_a'><a href="#">view more</a></div>
                  <p>MODERN HOME DESIGNE</p>
                </div>
                <div class='item image'>
                  <img src={require("./image/p1.png")}></img>
                  <div className='image_a'><a href="#">view more</a></div>
                  <p>MODERN HOME DESIGNE</p>
                </div>
                <div class='item image'>
                  <img src={require("./image/p2.png")}></img>
                  <div className='image_a'><a href="#">view more</a></div>
                  <p>MODERN HOME DESIGNE</p>
                </div>
                <div class='item image'>
                  <img src={require("./image/p3.png")}></img>
                  <div className='image_a'><a href="#">view more</a></div>
                  <p>MODERN HOME DESIGNE</p>
                </div>
                <div class='item image'>
                  <img src={require("./image/p1.png")}></img>
                  <div className='image_a'><a href="#">view more</a></div>
                  <p>MODERN HOME DESIGNE</p>
                </div>
                <div class='item image'>
                  <img src={require("./image/p2.png")}></img>
                  <div className='image_a'><a href="#">view more</a></div>
                  <p>MODERN HOME DESIGNE</p>
                </div>
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </div>
      {/* =====================projects sec end============================= */}

      {/* =====================our client sec start========================= */}
      <div>
        <Container>
          <Row>
            <Col>
              <OwlCarousel className='owl-theme' id="testi" loop margin={10} items={1} autoplay={true} autoplaySpeed={500}>

                <div class='item'>
                  <div className='text-center'>
                    <h1 className='fs-1'>WHAT IS SAYS OUR CLIENTS</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                  <div>
                    <div>
                      <Row className='client'>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client1.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                        <Col></Col>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col></Col>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client2.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className='text-center'>
                    <h1 className='fs-1'>WHAT IS SAYS OUR CLIENTS</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                  <div>
                    <div>
                      <Row className='client'>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client1.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                        <Col></Col>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col></Col>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client2.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className='text-center'>
                    <h1 className='fs-1'>WHAT IS SAYS OUR CLIENTS</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                  <div>
                    <div>
                      <Row className='client'>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client1.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                        <Col></Col>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col></Col>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client2.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className='text-center'>
                    <h1 className='fs-1'>WHAT IS SAYS OUR CLIENTS</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                  <div>
                    <div>
                      <Row className='client'>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client1.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                        <Col></Col>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col></Col>
                        <Col sm={12} md={7} className='mb-5'>
                          <div className='client_infom d-flex'>
                            <div className='client_img'>
                              <img src={require("./image/client2.png")} className='object-fit-cover'></img>
                            </div>
                            <div className='info_user w-75 ps-4'>
                              <h4>LOKSANS</h4>
                              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>

              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </div>
      {/* =====================our client sec end========================= */}

      {/* =====================contact sec start end===================== */}
      <div className='contact_us'>
        <Container>
          <Row>
            <Col className='form me-5' sm={12} md>
              <h2>CONTACT US</h2>
              <form>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Name" className='fw-bold' />
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Email" className='fw-bold' />
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Control type="number" placeholder="Phonenumber" className='fw-bold' />
                </Form.Group>

                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder="Message" rows={3} className='fw-bold' />
                </Form.Group>
              </form>
              <div className='send'>
                <a href="#"> Send</a>
              </div>
            </Col>
            <Col className="map" sm={12} md>
              <div>
                <img src={require("./image/map.PNG")} className='object-fit-cover w-100'></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* =====================contact sec start ===================== */}


      {/* =======================footer sec start======================= */}
      <div className='footer'>
        <Container>
          <Row lg={4} md={2} xs={1}>
            <Col className='footer_info'>
              <h4>INFORMATION</h4>
              <p>There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
            </Col>
            <Col className='footer_info'>
              <h4>LET US HELP YOU</h4>
              <p>There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
            </Col>
            <Col className='footer_info'>
              <h4>USEFUL LINKS</h4>
              <li>About Us</li>
              <li>Careers</li>
              <li>Sell on shopee</li>
              <li>Press & News</li>
              <li>Competitions</li>
              <li>Terms & Conditions</li>
            </Col>
            <Col className='footer_info'>
              <h4>OUR DESIGN</h4>
              <p>There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
            </Col>
          </Row>
        </Container>
        
      </div>
      <div className='last_footer'>
      <Container>
        <Row >
            <Col>
              <p>2023 All Rights Reserved. Design by Free html Templates Distribution By ThemeWagon</p>
            </Col>
          </Row>
      </Container>
      </div>
      {/* =======================footer sec end======================= */}
    </div>
  );
}

export default App;
