import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody,MDBBtn, } from 'mdbreact';
import img from '../assets/fruits.png';
import img1 from '../assets/break.png';
import img2 from '../assets/noodle1.png';
import img3 from '../assets/p.png';
import img4 from '../assets/chips.png';
import img5 from '../assets/burger.jpg';
import SideNavigation from '../components/SideNavigation'

class CategoriesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        deleteID: '',
        showModal: false,
        orderdata:[]
    }
}

async componentDidMount(){
  console.log(this.props);

  // let res = await api.getCategory();
  // console.log(res.result);
  // this.setState({orderdata:res.result})
}

deleteHandler = async () => {
  console.log(this.state.deleteID)
  this.setState({ showModal: false })
  // let res = await api.deleteCategory( this.state.deleteID)
  // if (res) {
      // window.location.reload();

  // }
}
  render() {
    return (
      <div className="flexible-content">
        <SideNavigation />
        <main id="content" className="p-5">
    
      <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-2">
          <MDBView className="gradient-card-header brown darken-2">
            <h4 className="h4-responsive text-white font-bold">Catogories</h4>
          </MDBView>
          <MDBCardBody>

            <h3 className=" text-left"><strong>Add, edit, remove and list categories here.</strong></h3>
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
                  <th>Description</th>
                  {/* <th>Discount</th> */}
                  
                  {/* <th>Home Page Show</th> */}
                  
                  <th>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td><img src={img} alt="Project" className="img-fluid"/></td>
                  <td>Fruits</td>
                  <td>Fresh fruits for your daily vitamin <br/> and mineral needs</td>
                  {/* <td>10%</td> */}
                  {/* <td>True</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>2</td>
                  <td><img src={img1} alt="Project" className="img-fluid"/></td>
                  <td>Breakfast Items</td>
                  <td>Healthy breakfast is what <br/> makes the day great</td>
                  {/* <td>10%</td> */}
                  {/* <td>True</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>3</td>
                  <td><img src={img2} alt="Project" className="img-fluid"/></td>
                  <td>Noodles</td>
                  <td>Ready to eat food for those <br/> hungry times</td>
                  {/* <td>10%</td> */}
                  {/* <td>True</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>4</td>
                  <td><img src={img3} alt="Project" className="img-fluid"/></td>
                  <td>Pasta</td>
                  <td>Ready to eat food for those <br/> hungry times</td>
                  {/* <td>10%</td> */}
                  {/* <td>True</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>5</td>
                  <td><img src={img4} alt="Project" className="img-fluid"/></td>
                  <td>Chips And Crisps</td>
                  <td>Ready to eat food for those <br/> hungry times</td>
                  {/* <td>10%</td> */}
                  {/* <td>True</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                <tr>
                  <td>6</td>
                  <td><img src={img5} alt="Project" className="img-fluid"/></td>
                  <td>Fast Food</td>
                  <td>This Category contains Envato <br/> fruits</td>
                  <td>10%</td>
                  {/* <td>True</td> */}
                  <MDBBtn size="sm" outline color="brown">Edite</MDBBtn>
                  <MDBBtn size="sm" outline color="brown">Delete</MDBBtn>
                </tr>
                
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </main>
    </div>
    )

}

};

export default CategoriesPage;






