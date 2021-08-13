import React, { Fragment, Component } from 'react'
import Search from './Search'
import MostPopular from './MostPopular'
import axios from 'axios'
import { SearchRes } from './SearchRes'
export class Videos extends Component {
    state = {
        searchTerm : '',
        searchUrl: '',
    }
    render() {
    const {setAlert} = this.props;
    const searchVideos = async (searchTerm) => {
        this.setState({searchTerm})
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`)
        this.setState({searchUrl: res})
    }
        return (
            <Fragment>
                <Search setAlert={setAlert} searchVideos={searchVideos}/>
                {this.state.searchTerm === '' && <MostPopular />}
                <SearchRes searchUrl={this.state.searchUrl}/>
            </Fragment>
        )
    }
}

export default Videos
