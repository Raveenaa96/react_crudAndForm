import { Component } from "react";

export class ClassSimpleForm extends Component {
    constructor() {
        super();
        this.state = {
            employeeName : '',
            designation : ''
        };  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
            const {name, value} = event.target;
            this.setState({
                [name]:value,   
            });
        };
         handleSubmit = (event)  =>{
            event.preventDefault();
            console.log(this.state);
        } 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1>Employee Form using Class Component</h1>
                    </div>
                    <div>
                        <input type="text" name="employeeName" value={this.state.employeeName} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="text" name="designation" value={this.state.designation} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}