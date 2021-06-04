import React from 'react';
import logo from "../assets/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="Grocery Cart" className="img-fluid" src={logo} />
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink to="/products" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-shopping-basket" className="mr-3" />
                        Products
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/Addproduct" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Add products
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/catogaries" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-bars" className="mr-3" />
                        Catogories
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/AddCategory" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Add Category
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/order" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-shopping-cart" className="mr-3" />
                        Order
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/user" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Users
                    </MDBListGroupItem>
                </NavLink>

                <div className="row justify-content-center mt-5 mr-3">
                    <MDBBtn className="Btn">Log out</MDBBtn>
                </div>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;