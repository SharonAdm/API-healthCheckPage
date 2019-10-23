import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import ApiTable from './components/apiTable';

class App extends Component{
  render(){
    return(
      <main className="container">
        <Header />
        <ApiTable />
      </main>
    )
  }
}
export default App;
