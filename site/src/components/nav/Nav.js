import React from 'react';
import imgCarousel from "../../img/logo.svg";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">        <img
          className="d-block w-100"
          src={imgCarousel}
          alt="Imagem1"
        /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" className="justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cultura e Religião</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cor e Raça</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Acessibilidade</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">LGBTQIA+</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Idade e Gerações</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Em Contrução</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Nav;