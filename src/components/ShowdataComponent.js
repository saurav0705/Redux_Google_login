import React,{ Component } from "react";
import {connect} from 'react-redux';
import {addData,deleteData,editData}  from '../actions/actions';
import Pagination from "react-js-pagination";

class ShowData extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          open:false,
          name:'',
          email : '',
          product:'',
          quantity:0,
          id:'',
          arg:'',
        }
        this.handlename = this.handlename.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handleproduct = this.handleproduct.bind(this);
    this.handlequantity = this.handlequantity.bind(this);

    }
    handlename(event){
      this.setState({name: event.target.value});
    }

    handleemail(event){
      this.setState({email: event.target.value});
    }

    handleproduct(event){
      this.setState({product: event.target.value});
    }

    handlequantity(event){
      this.setState({quantity: event.target.value});
    }
    submit(){
      if(this.state.arg === 'edit'){
      this.setState({open:false});
      console.log(this.state);
      this.props.editData({
        customer_name:this.state.name,
          customer_email : this.state.email,
          product:this.state.product,
          quantity:this.state.quantity,
          id:this.state.id
      })
    }
      else{
        this.props.addData({
          customer_name:this.state.name,
            customer_email : this.state.email,
            product:this.state.product,
            quantity:this.state.quantity,
            id:Math.random*1000000
        })
      }
      this.setState({
        name:'',
        email : '',
        product:'',
        quantity:0,
        id:'',
        open:false
      })
      this.forceUpdate();
      
    }
    open(obj){
      console.log(obj);
      this.setState({
        open:true,
        name:obj.customer_name,
        email : obj.customer_email,
        product:obj.product,
        quantity:obj.quantity,
        id:obj.id,
        arg:'edit'
      })
    }

    add(){
      //console.log(obj);
      this.setState({
        open:true,
        arg:'add'
        })
    }
    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({activePage: pageNumber});
    }
    render(){
      
    return(<>{this.props.data.length}
    
    <div className={this.state.open ? 'hidden':'block'+' max-w-screen overflow-auto'}>
      <div><button onClick={()=> this.add()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add Data
</button></div>
      <table className="table-fixed border">

        <thead>
    <tr className="bg-gray-300">
      <td className="px-4 py-2 border">Name</td>
      <td className="w-10 px-4 py-2 border">Email</td>
      <td className=" py-2 border">Product</td>
      <td className=" px-4 py-2 border">Quantity</td>
      <td className=" px-4 py-2 border">Delete</td>
      <td className=" px-4 py-2 border">Edit</td>
    </tr>
  </thead>
  <tbody>
    
    {this.props.data.map((cl)=>{
    return (<tr className="border" key={cl.id}>
      <td className="border px-4 py-2"> {cl.customer_name}</td>
      <td className="border px-4 py-2">{cl.customer_email}</td>
      <td className="border px-4 py-2"> {cl.product}</td>
      <td className="border px-4 py-2"> {cl.quantity}</td>
      <td className="border px-4 py-2 bg-red-300 rounded text-white hover:bg-red-500" onClick={()=>{this.props.deleteData(cl.id);this.forceUpdate()}}>Delete</td>
      <td className="border px-4 py-2 bg-blue-300 rounded text-white hover:bg-blue-500" onClick={()=>{this.open(cl)}}>Edit</td>
      </tr>)
    })}
    </tbody></table></div>

    <div className={this.state.open ? 'block':'hidden'}>
    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input value={this.state.name} onChange={this.handlename} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input value={this.state.email} onChange={this.handleemail}class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Email"/>
      
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Product
      </label>
      <input value={this.state.product} onChange={this.handleproduct} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Product"/>
      
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Quantity
      </label>
      <input value={this.state.quantity} onChange={this.handlequantity} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="Quantity"/>
      
    </div>
    <div class="flex items-center justify-between">
      <button onClick={()=>this.submit()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  </form>
  
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
export default connect(test,mapDispatchToProps)(ShowData);