



import React from 'react'
import '../cards/cards.css'

export default props => {

    return (


<div class="col mb-4">
<div class="card">
  <img src={props.caminho} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.nome}</h5>
    <p class="card-text">{props.descricao}</p>
  </div>
</div>
</div>




    )
}



           











