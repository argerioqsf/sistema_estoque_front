import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

function Produto() {
  return (
      <div>
          <h1>
              Pagina de produtos
          </h1>
          <Link href="/login">
            Login
          </Link>
      </div>
  );
}

export default Produto;