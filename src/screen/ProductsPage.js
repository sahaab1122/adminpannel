import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody,MDBBtn, } from 'mdbreact';
import src from '../assets/apple.png';
import src1 from '../assets/corn.png';
import src2 from '../assets/dove.png';
import src3 from '../assets/eggs.png';
import src4 from '../assets/pan.png';
import src5 from '../assets/milk.png';
import src6 from '../assets/sani.png';
import src7 from '../assets/shirt.png';
import SideNavigation from '../components/SideNavigation'


const ProductsPage =  () => {
  return (
    <div className="flexible-content">
        <SideNavigation />
        <main id="content" className="p-5">
    <>
      <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-2 ">
          <MDBView className="gradient-card-header brown darken-2">
            <h4 className="h4-responsive text-white font-bold">Products</h4>
          </MDBView>
          <MDBCardBody className="scrolling-wrapper">

            <h3 className=" text-left"><strong>Add, edit, remove and list product here.</strong></h3>
            {/* <p>Use prop striped to add zebra-striping to any table row within the table body</p> */}
            {/* <MDBFormInline className="md-form m-0 pull-right">
                <input className="form-control form-control-sm " type="search" placeholder="Type your query" aria-label="Search"/>
                <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
            </MDBFormInline> */}
            <MDBTable striped>
              <MDBTableHead>
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Regular Price</th>
                  {/* <th>Offer</th> */}
                  <th>Description</th>
                  {/* <th>Delivery Instructions</th> */}
                  <th>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td><img src={src} alt="Project" className="img-fluid"/></td>
                  <td>Apple</td>
                  <td>5</td>
                  <td>150</td>
                  {/* <td>0%</td> */}
                  <td>Apples from limpopo</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>2</td>
                  <td><img src={src1} alt="Project" className="img-fluid"/></td>
                  <td>Corn Flakes</td>
                  <td>5</td>
                  <td>250</td>
                  {/* <td>5%</td> */}
                  <td>Kellogs Corn Flakes for a healthy <br/> power breakfast</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>3</td>
                  <td><img src={src2} alt="Project" className="img-fluid"/></td>
                  <td>Dove Shampoo</td>
                  <td>500ml</td>
                  <td>300</td>
                  {/* <td>0%</td> */}
                  <td>Dove shampoo for silky smooth hair</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>4</td>
                  <td><img src={src3} alt="Project" className="img-fluid"/></td>
                  <td>Farm Fresh Eggs</td>
                  <td>12</td>
                  <td>150</td>
                  {/* <td>0%</td> */}
                  <td>Farm fresh eggs for daily protein</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>5</td>
                  <td><img src={src4} alt="Project" className="img-fluid"/></td>
                  <td>Pancakes</td>
                  <td>10</td>
                  <td>200</td>
                  {/* <td>0%</td> */}
                  <td>Fresh ready to eat pancakes for <br/> the sweet toothed</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>6</td>
                  <td><img src={src5} alt="Project" className="img-fluid"/></td>
                  <td>Milk</td>
                  <td>5L</td>
                  <td>350</td>
                  {/* <td>0%</td> */}
                  <td>Fresh non fat milk</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>7</td>
                  <td><img src={src6} alt="Project" className="img-fluid"/></td>
                  <td>Sanitizer</td>
                  <td>500ml</td>
                  <td>150</td>
                  {/* <td>0%</td> */}
                  <td>Hand sanitizer for daily hygiene</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>8</td>
                  <td><img src={src7} alt="Project" className="img-fluid"/></td>
                  <td>TShirt</td>
                  <td>5</td>
                  <td>1500</td>
                  {/* <td>0%</td> */}
                  <td>Its very confirtable in Hot days</td>
                  {/* <td>Same Day</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Add product</MDBBtn>
                </tr>
                
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
    </main>
    </div>
  )
}

export default ProductsPage;






