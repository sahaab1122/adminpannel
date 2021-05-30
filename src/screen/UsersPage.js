import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, } from 'mdbreact';


const UsersPage = () => {
  return (
    <>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-2 ">
            <MDBView className="gradient-card-header brown darken-2">
              <h4 className="h4-responsive text-white font-bold">Offers</h4>
            </MDBView>
            <MDBCardBody className="scrolling-wrapper">

              <h3 className=" text-left"><strong>Add, edit, remove and list offers here.</strong></h3>
        
              {/* <p>Use prop striped to add zebra-striping to any table row within the table body</p> */}
              {/* <MDBFormInline className="md-form m-0 pull-right">
                <input className="form-control form-control-sm " type="search" placeholder="Type your query" aria-label="Search"/>
                <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
            </MDBFormInline> */}
              <MDBTable striped>
                <MDBTableHead>
                  <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>1</td>
                    <td>abcd</td>
                    <td>Male</td>
                    <td>abcd@gmail.com</td>
                    <td>01069988270</td> 
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>abcd</td>
                    <td>Male</td>
                    <td>abcd@gmail.com</td>
                    <td>01069988270</td> 
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>abcd</td>
                    <td>Male</td>
                    <td>abcd@gmail.com</td>
                    <td>01069988270</td> 
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>abcd</td>
                    <td>Male</td>
                    <td>abcd@gmail.com</td>
                    <td>01069988270</td> 
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>abcd</td>
                    <td>Male</td>
                    <td>abcd@gmail.com</td>
                    <td>01069988270</td> 
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>abcd</td>
                    <td>Male</td>
                    <td>abcd@gmail.com</td>
                    <td>01069988270</td> 
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  )
}

export default UsersPage;






