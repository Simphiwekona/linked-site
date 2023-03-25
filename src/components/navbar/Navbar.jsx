<<<<<<< HEAD
import { MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React from 'react'



export default function Navbar() {
  return (
    <nav className='dark' bg-color='dark'>
        <MDBNavbarBrand>
            Linked Digital Computers
        </MDBNavbarBrand>
    </nav>
=======
import { MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler } from 'mdb-react-ui-kit'
import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [showNavCentred, setShowNavCentred] = useState(false);
  return (
    
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
            <MDBNavbarBrand>
                Linked Digital Computers
            </MDBNavbarBrand>
            <MDBNavbarToggler
                type='button'
                data-target='#navbarCenteredExample'
                aria-controls='navbarCenteredExample'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavCentred(!showNavCentred)}>

                    <MenuIcon />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            About Us
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>Testimonies</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link'>
                                Products
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Website Development</MDBDropdownItem>
                                <MDBDropdownItem link>Laptop Upgrade</MDBDropdownItem>
                                <MDBDropdownItem link>Gaming PC</MDBDropdownItem>
                                <MDBDropdownItem link>Upgrade Kit</MDBDropdownItem>
                                <MDBDropdownItem link>NEtworking</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBCollapse>

                
        </MDBContainer>
      </MDBNavbar>
    
>>>>>>> df6734fb088b2fde7990239edc7aa8ececc06bc9
  )
}
