
import React from 'react'
import '../Loginform/loginform.css';
import Botao from '../../components/button/button'


export default props => {

    return (

        <div class="card card_border py-2 mb-4">
          <div class="cards__heading">
            <h3>{props.titulo} <span></span></h3>
          </div>
          <div class="card-body">
            <form action="#" method="post">
              <div class="form-group">
                <label for="exampleInputEmail1" class="input__label">Email address</label>
                <input type="email" class="form-control input-style" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                  anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" class="input__label">Password</label>
                <input type="password" class="form-control input-style" id="exampleInputPassword1"
                  placeholder="Password"/>
              </div>
              <div class="form-check check-remember check-me-out">
                <input type="checkbox" class="form-check-input checkbox" id="exampleCheck1"/>
                <label class="form-check-label checkmark" for="exampleCheck1">Check me out</label>
              </div>
              
                <Botao campo='Botao enviar'/>

            </form>
          </div>
        </div>



    )
}








