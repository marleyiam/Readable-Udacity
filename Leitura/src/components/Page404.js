import React from 'react';

export default function Page404() {
  return (
    <div id='notfound'>
      <div className='notfound'>
        <div className='notfound-404'>
          <h1>404</h1>
        </div>
        <h2>Oops! Essa Página Não Foi Encontrada</h2>
        <p>Lamentamos mas a página que você procura não existe, foi removida, mudou de nome ou está temporariamente indisponível</p>
        <a href='/'>Vá para Página Inicial</a>
      </div>
	  </div>
  );
}
