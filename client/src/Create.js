import React, {Component} from 'react';
import axios from 'axios'

class Create extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            value: null,
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        this.state.value = (String(this.state.value).toLowerCase() == "true")
        axios.post('http://localhost:3000/profile', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {id, value} = this.state
        return (
            <div>
                <h2>Edit vaccination status</h2>
                <p>if vaccinated, input value as true</p>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="id" value ={id} placeholder="NRIC number" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="value" value={value} placeholder="New value" onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Create;