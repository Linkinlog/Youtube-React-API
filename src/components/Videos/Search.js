import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:  ''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something', 'dark')
        }else {
            this.props.searchVideos(this.state.text);
            this.setState({text: ''})
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="input-group mb-3">
                    <input type="text" className="form-control" name='text' onChange={this.onChange} placeholder="Video" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                </form>
            </div>
        )
    }
}

export default Search
