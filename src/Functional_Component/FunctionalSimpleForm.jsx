import { useState } from "react";

export function FunctionalSimpleForm() {
    const [formData, setFormData] = useState({
        employeeName :"",
        designation: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]:value})
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        console.log(formData);
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Employee Form using Functional Component</h1>
                </div>
                <div>
                    <input type="text" name="employeeName" onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" name="designation" onChange={handleChange}/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
}
