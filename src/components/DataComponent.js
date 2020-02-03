import React,{ Component } from "react";
import {clients} from '../clients';
import ShowData from './ShowdataComponent';
import {connect} from 'react-redux';
import {addData,deleteData,editData}  from '../actions/actions';


// import { useSelector} from 'react-redux';
// const data = useSelector(state => state.data);
class Data extends Component{
    constructor(props){
        super(props);
        this.state= {
            client:clients,
            prev:0,
            next:0,
            show:[],
            edit:false,
        }
    }
    forward(){
        if((this.state.client.length-this.state.prev)>10){
        this.setState({
            prev : this.state.prev+10
        })
    }
    }
    toggle(){
        this.setState({
            edit:true
        })
    }
    edit(id){
        //console.log("in main c -----------",id );
    }
    
    backward(){
        if(this.state.prev>10){
        this.setState({
            prev : this.state.prev-10
        })}
        else{
            this.setState({
                prev : 0
            })
        }
    }
    componentDidMount(){
        this.setState({
            show: [...this.state.client.slice(0,10)]
        })
    //console.log('client ---------- ',this.state.client);
    //console.log('clientshow ---------- ',this.state.client.slice(0,10));
    //console.log(this.props);
    //console.log('---------------------------------------------------------------------',clients);
    this.props.addData(clients);
    }


    render(){
        return(<>
        
        <div className={"block md:flex m-4 p-2 justify-around"}>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg md:mr-40 sticky top-0">
        
            
            <img className="w-full" src={this.props.profile.imageUrl} alt="profile"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{this.props.profile.name}</div>
                    <p className="text-gray-700 text-base">
                    {this.props.profile.email}
                    </p>
                </div>
                
                </div>

                <div className="">
                    {/* <div className="flex p-4 content-center">
                    <div>
                            <button className="bg-blue-500 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{this.backward()}}>Prev</button>
                    </div>
                    <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{this.forward()}}>Next</button>
                    </div>
                    </div> */}
                    <div>
                        
                        <ShowData />
                    </div>
                </div>
                
            
            
            </div>
            <div className={this.state.edit ? 'block':'hidden'}>
            <div className="w-full max-w-xs">
                
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

            </div>
            
            </>);
    }
}

function test(state){
    return {data : state.data};

}

const mapDispatchToProps = dispatch => {
    return {
      addData: (obj) => dispatch(addData(obj)),
      deleteData: (id) => dispatch(deleteData(id)),
      editData: (obj) => dispatch(editData(obj)),
      dispatch
    }
  }
export default connect(test,mapDispatchToProps)(Data);