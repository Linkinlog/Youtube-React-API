import React, { Fragment, Component } from 'react'
import Search from './Search'
import axios from 'axios'
// import { SearchRes } from './SearchRes'
import { SingleVid } from './SingleVid'
import { MultiVid } from './MultiVid'
import Spinner from '../Spinner'
export class Videos extends Component {
    state = {
        searchTerm : '',
        searchUrl: '',
        searchedVid : '',
        data: null,
        loading: true,
        relatedData: '',
        singleVid: false
    }
    async componentDidMount() {
        const mostPopular = await axios.get(`https://www.googleapis.com/youtube/v3/videos/?key=${process.env.REACT_APP_API_KEY}&chart=mostPopular&maxResults=20&part=snippet`)
        this.setState({data: mostPopular.data.items})
        this.setState({loading: false})
    }
    render() {
        const { data, relatedData, loading} = this.state;
        const {setAlert} = this.props;
        const searchVideos = async (searchTerm) => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`)
            this.setState({data: res.data.items})
        }
        const getVid = async item => {
            const data = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${item}&key=${process.env.REACT_APP_API_KEY}`)
            const relatedData = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${item}&type=video&key=${process.env.REACT_APP_API_KEY}`)
            relatedData.data.items.forEach(item => {
                item.id = item.id.videoId
            })
            this.setState({data : data.data.items, singleVid : true, relatedData:relatedData.data.items})

        }
        if (this.state.loading){
            return(
                <Spinner />
            )
        }
        return (
            <Fragment>
                <Search setAlert={setAlert} searchVideos={searchVideos}/>
                {!this.state.singleVid && <MultiVid data={data} getVid={getVid} />}
                <SingleVid vid={data} relatedData={relatedData} loading={loading} getVid={getVid}/>
            </Fragment>
        )
    }
}

export default Videos
