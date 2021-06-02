
// import { setError, setLoading } from '../actions/globalActions'
import api from '../../api/api';
import path from '../../api/path';
import { set_items, set_category, set_favourite, set_featured, set_user, set_coupon, set_orders, set_transactions } from '../actions/appAction'

export const _getItems = () => {

    return async (dispatch, getState) => {


        let res = await api.getItems();
        if (res) {
            dispatch(set_items(res.result))
        }
    }
}
export const _getFeatured = () => {

    return async (dispatch, getState) => {

        let res = await api.getFeatured();
        if (res) {
            dispatch(set_featured(res.result))
        }
    }
}
export const _getCategories = () => {

    return async (dispatch, getState) => {

        let res = await api.getCategory();
        if (res) {
            dispatch(set_category(res.result))
        }
    }
}
export const _getFavourite = () => {

    return async (dispatch, getState) => {

        let res = await api.getFavourite();
        if (res) {
            dispatch(set_favourite(res.result))
        }
    }
}

export const _getUsers = () => {

    return async (dispatch, getState) => {

        let res = await api(path.getuser, "GET",)
        if (res) {
            // dispatch(set_user(res.result))
        }
    }
}
 
 
 


