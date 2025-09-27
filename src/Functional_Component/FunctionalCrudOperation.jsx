import { useState } from "react";
import EmployeeList from "../assets/data/employeeList.json"

export function FunctionalCrudOperation() {
    const [list, setList] = useState(EmployeeList);
    const [searchText, setSearchText] = useState();

    const handleSearch = ()=> {
        const afterSearchNewList = list.filter((value)=>{
            return value.empid == searchText ||
            value.emp_name == searchText ||
            value.designation == searchText ||
            value.workLocation == searchText
            ? value
            : null;
        });
        setList(afterSearchNewList);
    }
    const handleUpdate = (profileIndex)=> {
        const updatedList = list.map((value,index)=> {
            if(profileIndex == index) {
                (value.empid = '2345'),
                (value.emp_name = 'Mahi'),
                (value.designation = 'Manager'),
                (value.workLocation = 'Chennai')
            }
            return value;
        })
        setList(updatedList);
    }
    const handleDelete = (profileIndex) => {
        const afterDeletedList = list.filter((value,index)=> {
            return profileIndex != index;
        })
        setList(afterDeletedList);
    }

 return(
    <div>
        <div>
            <h1>Employee List Management(Functional Component)</h1>
        </div>
        <div>
            <input type="text" onChange={(event)=>setSearchText(event?.target?.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>designation</th>
                        <th>Employee Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.length !=0 ? (
                        list.map((value,index)=> {
                            const {empid,emp_name,designation,workLocation} = value;
                            return (
                                <tr>
                                    <td> {index + 1} </td>
                                    <td> {empid} </td>
                                    <td> {emp_name} </td>
                                    <td> {designation} </td>
                                    <td> {workLocation} </td>
                                    <td> 
                                        <button onClick={()=>handleUpdate(index)}>Update</button>
                                        <button onClick={()=>handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan={6}>
                                No Data Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
 )
}