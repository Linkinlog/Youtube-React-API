import React, { Fragment, Component } from 'react'
import Search from './Search'
import axios from 'axios'
// import { SearchRes } from './SearchRes'
import { SearchedVid } from './SearchedVid'
import { SingleVid } from './SingleVid'
import Spinner from '../Spinner'
export class Videos extends Component {
    state = {
        searchTerm : '',
        searchUrl: '',
        searchedVid : '',
        data: null,
        loading: true,
    }
    async componentDidMount() {
        const mostPopular = await axios.get(`https://www.googleapis.com/youtube/v3/videos/?key=${process.env.REACT_APP_API_KEY}&chart=mostPopular&maxResults=20&part=snippet`)
        this.setState({data: mostPopular.data.items})
        this.setState({loading: false})
    }
    render() {
        const { data} = this.state;
        const {setAlert} = this.props;
        const searchVideos = async (searchTerm) => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`)
            this.setState({data: res.data.items})
        }
        const liftState = item => {
            this.setState({data:item})
            console.log(item)
        }
        if (this.state.loading){
            return(
                <Spinner />
            )
        }
        return (
            <Fragment>
                <Search setAlert={setAlert} searchVideos={searchVideos}/>
                <SingleVid data={data} liftState={liftState} />
                <SearchedVid />
            </Fragment>
        )
    }
}

export default Videos
