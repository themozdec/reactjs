import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Pg_00 from '../page/Pg_00'
import Pg_01 from '../page/Pg_01'
import Pg_02 from '../page/Pg_02'
import Pg_0X from '../page/Pg_0X'
import Evento_00 from '../page/Evento_00'
import Evento_01 from '../page/Evento_01'
import Form_00 from '../page/Form_00'
import Detail from '../page/comp/detail'
import Login from '../page/Login'
import Register from '../page/comp/register'
import Edit from '../page/comp/edit'
import Delete from '../page/comp/delete'
import Error from '../page/error'
import Home from '../page/Home'
import User from '../page/User'
import Product from '../page/Product'
import Cart from '../page/Cart'
import Favorite from '../page/Favorite'
import Address from '../page/Address'
import Settings from '../page/Settings'
import Detail_user from '../page/comp/detail_user'
import Detail_product from '../page/comp/detail_product'
import Detail_cart from '../page/comp/detail_cart'
import Detail_address from '../page/comp/detail_address'
import Detail_settings from '../page/comp/detail_settings'
import Register_user from '../page/comp/register_user'
import Register_product from '../page/comp/register_product'
import Register_cart from '../page/comp/register_cart'
import Register_favorite from '../page/comp/register_favorite'
import Register_address from '../page/comp/register_address'
import Edit_user from '../page/comp/edit_user'
import Edit_product from '../page/comp/edit_product'
import Edit_cart from '../page/comp/edit_cart'
import Edit_address from '../page/comp/edit_address'
import Edit_settings from '../page/comp/edit_settings'
import Delete_user from '../page/comp/delete_user'
import Delete_product from '../page/comp/delete_product'
import Delete_cart from '../page/comp/delete_cart'
import Delete_favorite from '../page/comp/delete_favorite'
import Delete_address from '../page/comp/delete_address'

export default function Router(){
   
    return(
        <BrowserRouter>
             <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/users' component={User}/>
                <Route exact path='/products' component={Product}/>
                <Route exact path='/cart' component={Cart}/>
                <Route exact path='/favorites' component={Favorite}/>
                <Route exact path='/addresses' component={Address}/>
                <Route exact path='/settings' component={Settings}/>
                <Route exact path='/register_user' component={Register_user}/>
                <Route exact path='/register_product' component={Register_product}/>
                <Route exact path='/register_favorite' component={Register_favorite}/>
                <Route exact path='/detail_user' component={Detail_user}/>
                <Route exact path='/detail_product' component={Detail_product}/>
                <Route exact path='/detail_cart' component={Detail_cart}/>
                <Route exact path='/detail_address' component={Detail_address}/>
                <Route exact path='/detail_settings' component={Detail_settings}/>
                <Route exact path='/register_cart' component={Register_cart}/>
                <Route exact path='/register_address' component={Register_address}/>
                <Route exact path='/edit_user' component={Edit_user}/>
                <Route exact path='/edit_product' component={Edit_product}/>
                <Route exact path='/edit_cart' component={Edit_cart}/>
                <Route exact path='/edit_address' component={Edit_address}/>
                <Route exact path='/edit_settings' component={Edit_settings}/>
                <Route exact path='/delete_user' component={Delete_user}/>
                <Route exact path='/delete_product' component={Delete_product}/>
                <Route exact path='/delete_cart' component={Delete_cart}/>
                <Route exact path='/delete_favorite' component={Delete_favorite}/>
                <Route exact path='/delete_address' component={Delete_address}/>
                <Route exact path='/pagina0' component={Pg_00}/>
                <Route exact path='/pagina' component={Pg_01}/>
                <Route exact path='/pagina2' component={Pg_02}/>
                <Route exact path='/crud' component={Pg_0X}/>
                <Route exact path='/evento_00' component={Evento_00}/>
                <Route exact path='/evento_01' component={Evento_01}/>
                <Route exact path='/form_00' component={Form_00}/>
                <Route exact path='/detail' component={Detail}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/edit' component={Edit}/>
                <Route exact path='/delete' component={Delete}/>
                <Route component={Error}/>
             </Switch>
        </BrowserRouter>
    )
    
}