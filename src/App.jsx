import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './Rotas/Rotas';

function App() {

  return (
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
  )

}
export default App;

// import React from "react";
// import Header from './Componentes/header';

// function App() {
//   return (
//     <>
//       <Header />
//     </>
//   );
// }

// export default App;
