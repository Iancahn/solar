import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
}

html{
    @media (max-width: 1700px){
        font-size:75%
   }
   @media (max-width : 1300px){
    background: white;
   }
}
 body{
     font-family:'Readex Pro', sans-serif;
     background: #181818;
     overflow-x:hidden;
 }


`;

export default Globalstyle;