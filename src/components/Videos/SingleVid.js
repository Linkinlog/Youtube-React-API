import React, { Component, Fragment } from 'react'
import { MultiVid } from './MultiVid'
import { RelatedVids } from './RelatedVids'
import Spinner from '../Spinner'
export class SingleVid extends Component {
    render() {
        const {vid, relatedData, getVid, loading} = this.props
        if (loading || relatedData < 1){
            return(
                <Spinner />
            )
        }
        return (
            <Fragment>
                <div className="col-md-3 offset-1">
                    <iframe title="vid" src={`https://youtube.com/embed/${vid[0].id}`} id="" frameBorder="0"></iframe>
                </div>
                <div className="col">
                    <MultiVid data={relatedData}/>
                </div>
            </Fragment>
        )
    }
}

export default SingleVid

