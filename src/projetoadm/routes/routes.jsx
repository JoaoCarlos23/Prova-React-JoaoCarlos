

import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Blocks from '../pages/blocks/blocks';
import Cards from '../pages/cards/cards';
import Forms from '../pages/forms/forms';
import Home from '../pages/home/home';
import Pricing from '../pages/pricing/pricing';

export default props => (

<Router history={hashHistory}>
    <Route path='/blocks' component={Blocks}/>
    <Route path='/cards' component={Cards}/>
    <Route path='/forms' component={Forms}/>
    <Route path='/home' component={Home}/>
    <Route path='/pricing' component={Pricing}/>
    <Redirect from='*' to='/home' /> 
    {/* se acessar algo que nao tenha, ele direciona pra rota de todo */}

</Router>



)












