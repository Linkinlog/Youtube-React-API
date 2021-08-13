import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
// import SingleVid from './SingleVid'
import { MultiVid } from './MultiVid'
import Spinner from '../Spinner'


export const RelatedVids = ({relatedData, getVid, loading}) => {
    if (loading || relatedData < 1){
        return(
            <Spinner />
        )
    }
    
    console.log(relatedData)
    // for(const item of relatedData){
    //     let idd = item.id.videoId
    //     console.log(idd)
    //     item.id = idd
    // }
    console.log(relatedData)
    // const relatedData2 = relatedData.map(e => e.id = e.id.videoId)
    // console.log(relatedData2)
    return (
        <Fragment>
            <MultiVid data={relatedData} />
        </Fragment>
    )
}