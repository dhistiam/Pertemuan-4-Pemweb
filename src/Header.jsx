// Import Libraries
import React, {useState} from "react";
// function Header(){
//   const [state] = useState("ini judul dari state");
//       return(
//         <div>
//           <h2>Makanan Khas Indonesia</h2>
//           <h3>{state}</h3>
//         </div>
//       );
//     };

class Header extends React.Component {
   constructor (props){
     super(props);
     this.state = {
      judul : 'ini judul dari state',
      dataMakanan : this.props.list,
     }
     this.handlePesan = this.handlePesan.bind(this);
   }
  handlePesan(pesan, e){
    e.preventDefault()
    alert(pesan)
    alert('Hai')


  }
  
  render(){
    return(
      <div>
        <h2>Makanan Khas Indonesia</h2> 
        <h3>{this.state.judul}</h3>
        <p>Mengakses props dari app secara langsung {this.props.list}</p>
        <p>Mengakses props dari state :{this.state.dataMakanan}</p>
        <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Parameter",e)}>Halaman Header</a>
      </div>
    );
  }
}
  export default Header;