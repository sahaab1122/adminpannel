import React from 'react';
import { Route } from 'react-router-dom';
import ProductsPage from '../screen/ProductsPage';
import CategoriesPage from '../screen/CategoriesPage';
import OrdersPage from '../screen/OrdersPage';
import UsersPage from '../screen/UsersPage';
import Login from '../screen/Login';
import App from '../App';
import { connect } from 'react-redux';
import path from '../api/path';
import AddCategory from '../screen/AddCategory';
import Addproduct from '../screen/Addproduct';

class Routes extends React.Component {
  render() {
    // console.log(this.props.user.type)
    // const { type, path, component, logged, } = this.props

// console.log('props',this.props);
console.log(this.props.logged)
    return (
      // <Switch>
      //   {
      //     this.props.user.type=='Pages'  ?
    <>
        <Route exact path="/"  />
        {
                    this.props.logged ?
                    <App />
                    :
                    <Login />



                }
        <Route path='/products' component={ProductsPage} />
        <Route path='/Login' component={Login} />
        <Route path='/catogaries' component={CategoriesPage} />
        <Route path='/order' component={OrdersPage} />
        <Route path='/user' component={UsersPage} />
        
        <Route path='/AddCategory' component={AddCategory} />
        <Route path='/Addproduct' component={Addproduct} />
        </>
      //   :
      //      <>
      //       <Route exact path="/" component={Login} />
      //       <Route login='login' exact path="/store" component={DashboardPage} />
      //       </>
      //   }
      // </Switch>
    );
  }
}

// const mapState = state => {
//   return {
//     // logged: state.authReducer.logged,
//     // token: state.authReducer.token,
//     // user: state.authReducer.user,
//     // city: state.authReducer.city,
//     // logged: state.authReducer.logged,
//     // type: state.authReducer.user.type,
//     // lang: state.globalReducer.lang,
//   }
// }
// const mapDispatch = dispatch => {
//   return {
//     // setCity: () => dispatch({ type: SET_CITY, }),
//     // _getItems: () => dispatch(_getItems()),
//     // _getCategories: () => dispatch(_getCategories()),
//     // _getFeatured: () => dispatch(_getFeatured()),
//     // _getFavourite: (token, uid) => dispatch(_getFavourite(token, uid)),
//     // _getCoupon: (token) => dispatch(_getCoupon(token))
//   }
// }
// export default ;
const mapState = state => {
  return {
      logged: state.authReducer.logged,
  }
}

export default connect(mapState, null)(Routes)