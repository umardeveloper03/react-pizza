import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Component } from "react";
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzas";
import { connect } from "react-redux";
// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/pizzas').then((res) =>{
//       console.log(setPizzas(res.data));
//     })
//   },[])
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} exact />
//           <Route path="/cart" Component={Cart} exact />
//         </Routes>
//       </div>
//     </div>
//   );
// }

class App extends Component {
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      this.props.dispatch(setPizzas(data.pizzas))
    })
  }
  render() {
    console.log(this.props.items);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} exact />
            <Route path="/cart" Component={Cart} exact />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.pizzas.items,
  }
}
 
export default  connect(mapStateToProps)(App);
