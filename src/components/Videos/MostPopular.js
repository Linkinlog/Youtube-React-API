import React, { Component } from 'react'
import axios from 'axios'
import { SingleVid } from './SingleVid'
// import PropTypes from 'prop-types'


export class MostPopular extends Component {
    state = {
        data : []
    }
    
    async componentDidMount() {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos/?key=${process.env.REACT_APP_API_KEY}&chart=mostPopular&maxResults=20&part=snippet`)
        this.setState({data: res.data.items})

    }
    render() {
    const { data } = this.state;
        return (
            <div className="container-md-3 offset-1">
                <SingleVid data={data}/>
            </div>
        )
    }
}
export default MostPopular

