

import React from 'react'
import Botao from '../../components/button/button'
import Titulo from '../../components/tituloHeader/titulo'

export default props => (

<>

    <div class="main-content">


    <div class="container-fluid content-top-gap">


      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb my-breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Pricing Tables</li>
        </ol>
      </nav>
    
      <section class="pricing">
        <div class="card card_border mb-5">
          <div class="cards__heading">
            {/* TITULO DA PAGINA: */}
          <Titulo titulo="Sessão de Pricing" />
          </div>
          <div class="card-body">
         

            <div class="w3l-pricing1">
              <div class="row px-2">
                <div class="col-md-4 px-2">
                  <div class="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                    <div class="card-header p-0 card-heading">
                      <h4 class="mb-4">Free</h4>
                    </div>
                    <div class="card-body p-0">
                      <h1 class="card-title pricing-card-title my-price-title">$0<small
                          class="text-dull">month</small>
                      </h1>
                      <p>There are many variations of passages of Lorem Ipsum available.</p>
                      <ul class="list-unstyled list-pricing mt-3 mb-4">
                        <li>1 Domain</li>
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                      </ul>
                      <div class="mt-4">
                      <Botao campo='Teste de graça' />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 px-2">
                  <div class="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                    <div class="card-header p-0 card-heading">
                      <h4 class="mb-4">Regular <span class="label label-popular">Popular</span></h4>
                    </div>
                    <div class="card-body p-0">
                      <h1 class="card-title pricing-card-title my-price-title">$49<small
                          class="text-dull">month</small>
                      </h1>
                      <p>There are many variations of passages of Lorem Ipsum available.</p>
                      <ul class="list-unstyled list-pricing mt-3 mb-4">
                        <li>10 Domain</li>
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                      </ul>
                      <div class="mt-4">
                        <Botao campo='Começar' />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 px-2">
                  <div class="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                    <div class="card-header p-0 card-heading">
                      <h4 class="mb-4">Premium</h4>
                    </div>
                    <div class="card-body p-0">
                      <h1 class="card-title pricing-card-title my-price-title">$199<small
                          class="text-dull">month</small>
                      </h1>
                      <p>There are many variations of passages of Lorem Ipsum available.</p>
                      <ul class="list-unstyled list-pricing mt-3 mb-4">
                        <li>30 Domain</li>
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                      </ul>
                      <div class="mt-4">
                      <Botao campo='Contratar' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>




 
      <div class="pricing-version-2">
        <div class="card card_border mb-5">
          <div class="cards__heading">
            <h3>Pricing Tables -<span> Version 2</span></h3>
          </div>
          <div class="card-body">
            <div class="row px-2">


              <div class="col-lg-4 col-md-6 px-2 mb-4">
                <div class="card text-center card__hover">
                  <div class="card-header">
                    <h3 class="display-4"><span class="currency">$</span>19<span class="period">month</span></h3>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">
                      Basic Plan
                    </h4>
                    <ul class="list-group">
                      <li class="list-group-item">1 Domain</li>
                      <li class="list-group-item">Ultimate Features</li>
                      <li class="list-group-item">Responsive Ready</li>
                      <li class="list-group-item">Editor Ready Builder</li>
                      <li class="list-group-item">Limited UI Blocks</li>
                      <li class="list-group-item">24/7 Support System</li>
                    </ul>
                    <Botao campo='Botao Escolher plano' />
                  </div>
                </div>
              </div>

        
              <div class="col-lg-4 col-md-6 px-2 mb-4">
                <div class="card text-center card__hover">
                  <div class="card-header">
                    <h3 class="display-4"><span class="currency">$</span>29<span class="period">month</span></h3>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">
                      Regular Plan
                    </h4>
                    <ul class="list-group">
                      <li class="list-group-item">10 Domain</li>
                      <li class="list-group-item">Ultimate Features</li>
                      <li class="list-group-item">Responsive Ready</li>
                      <li class="list-group-item">Editor Ready Builder</li>
                      <li class="list-group-item">Unlimited UI Blocks</li>
                      <li class="list-group-item">24/7 Support System</li>
                    </ul>
                    <Botao campo='Botao Escolher plano' />
                  </div>
                </div>
              </div>

         
              <div class="col-lg-4 col-md-6 px-2 mb-4">
                <div class="card text-center card__hover">
                  <div class="card-header">
                    <h3 class="display-4"><span class="currency">$</span>39<span class="period">month</span></h3>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">
                      Premium Plan
                    </h4>
                    <ul class="list-group">
                      <li class="list-group-item">15 Domain</li>
                      <li class="list-group-item">Ultimate Features</li>
                      <li class="list-group-item">Responsive Ready</li>
                      <li class="list-group-item">Editor Ready Builder</li>
                      <li class="list-group-item">Unlimited UI Blocks</li>
                      <li class="list-group-item">24/7 Support System</li>
                    </ul>
                    <Botao campo='Botao Escolher plano' />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

</section>


</div>


</div>



</>
)