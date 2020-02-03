import React, { Component } from "react";
import Data from './components/DataComponent';
import GoogleLogin from 'react-google-login';

var  image='';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile:{},
      image:'',
      error:'',
      LoggedIn:false
    }
  }

  responseGoogleOk = (response) => {
    console.log('response--------- ',response);
    console.log(response.profileObj);
    
    this.setState({profile:response.profileObj,
      image:response.profileObj.imageUrl,
    LoggedIn:true});
    console.log(this.state.LoggedIn);
  }

  responseGoogleFail = (response) => {
    console.log('response--------- ',response);
    
    this.setState({error:'Login Failed'});
    console.log(this.state.image);
  }

  render(){
  return ( 
  <>
  <div className={(this.state.LoggedIn ? "hidden":'flex')}>
    <div className={"flex flex-col w-3/4 mx-auto my-12 mt-20  items-center"}>
      <h1 className="text-xl p-4 mb-4 border rounded-lg block justify-center">
        <div className="pb-4">Welcome Login to Get started</div>
      <div className="ml-6"><GoogleLogin 
    clientId="434970631223-hlnj13be8rgpjel3r7eqfqph2sn496no.apps.googleusercontent.com"
    buttonText="Login to Get Started"
    onSuccess={this.responseGoogleOk}
    onFailure={this.responseGoogleFail}
    cookiePolicy={'single_host_origin'}
  /></div>

  <div className=" text-white bg-red-400 rounded">
    {this.state.error}</div>
</h1>
    </div>
    </div>
    <div className={(this.state.LoggedIn ? "flex":'hidden')}>
      <Data profile={this.state.profile}/>
    </div>
  </>  
  );
}
}
export default App;