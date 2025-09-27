import { Component, Fragment } from "react";
import EmployeeList from '../assets/data/employeeList.json';

export class ClassCrudOperation extends Component {


    constructor() {
        super();
        this.state = {
            list : EmployeeList,
            empid : "",
            emp_name : "",
            designation : "",
            workLocation : "",
            searchText : ""
        }

        this.handleSearch =this.handleSearch.bind(this);
        this.handleUpdate =this.handleUpdate.bind(this);
        this.handleDelete =this.handleDelete.bind(this);
    }

    handleSearch() {

        const afterSearchNewList = this.state.list.filter((value, index) => {
               const {empid, emp_name, designation,workLocation} = value;
               return (this.state.searchText == empid ||
                    this.state.searchText == emp_name ||
                    this.state.searchText == designation ||
                    this.state.searchText == workLocation ) 
          })
          this.setState({
               list: afterSearchNewList
          })
    }
    handleDelete(profileIndex){
          const afterDeletelist = this.state.list.filter((value, index) => {
               return (index != profileIndex) 
          })
          this.setState ({
               list: afterDeletelist
          });
     }
     handleUpdate(profileIndex){
        
          const updatedList = this.state.list.filter((value, index) => {
            return (index == profileIndex) 
          })
                updatedList.map((value, index) => {
               const {empid, emp_name, designation, workLocation} = value;

               this.setState({
                    empid: empid,
                    emp_name: emp_name,
                    designation: designation,
                    workLocation: workLocation,
               });
          })
     }

    render() {
        const {list,searchText} = this.state;

        return <div>

                <div>
                    <h1>Employee List Management(Class Component)</h1>
                </div>

                <div className="search-box">
                    <input type="text" value={searchText} onChange={ (event)=> this.setState({searchText: event?.target?.value})} />
                    <button onClick={this.handleSearch}>Search</button>
                </div>

                <div>
                    <table border={2}>
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Emmployee Designation</th>
                                <th>Employee Location</th>
                                <th> Action </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                list && list.length !=0 ?
                                (
                                    list.map( (value,index)=>{
                                        const { empid, emp_name, designation, workLocation} = value;

                                        return <Fragment key={index}>
                                            <tr>
                                                <td> {index+1} </td>
                                                <td> {empid} </td>
                                                <td> {emp_name} </td>
                                                <td> {designation} </td>
                                                <td> {workLocation} </td>
                                                <td>
                                                    <button onClick={() => this.handleUpdate(index)}>
                                                    Update
                                                    </button>
                                                    <button onClick={() => this.handleDelete(index)}>
                                                    Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </Fragment>
                                    })
                                )
                                :
                                (
                                    <tr>
                                        <td colSpan={6}>No data found</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    }
}