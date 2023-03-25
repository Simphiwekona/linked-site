import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import '../footer/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';

import React from 'react'

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' color='white' className='text-center text-lg-start text-muted shadow-1-strong text-white'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
    </div>

    <div className='text-white'>

        <a href='' className='me-4 text-reset text-white'>
            <FacebookIcon />
        </a>
        <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
    </div>
    </section>
    <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Linked Digital Computers
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Gaming Pc
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Phones and Tablets
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laptop Upgrades
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Computer repairs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Website Design
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Networking and Configurations
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Linked Digital 
                52 Thenus Street, Kempton Park Johannesburg, 1618
                South Africa
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                support@linkeddigitalcomputers.co.za
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +27 69 300 1958
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +27 78 503 3727
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          linkeddigitalcomputers.co.za
        </a>
      </div>
    </MDBFooter>
  )
}
