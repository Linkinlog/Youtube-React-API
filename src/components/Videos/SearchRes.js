import React, { Fragment } from 'react'
import { SingleVid } from './SingleVid'

export const SearchRes = ({searchUrl}) => {
    return (
        searchUrl &&(
            <Fragment>
                <SingleVid data={searchUrl.data.items}/>
            </Fragment>
    ))
}
