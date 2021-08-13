import React from 'react'
import { Link } from 'react-router-dom';

export const SingleVid = ({data, liftState}) => {
    return (
        <div className="container">
            <div className="row gap-5">
                {data.map(item => (
                    <div key={item.id} className="card" style={{width: "18rem"}}>
                    <img src={item.snippet.thumbnails.high.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.snippet.title}</h5>
                        <p className="card-text">{item.snippet.description.substr(0,100)}...</p>
                        <a href={`https://www.youtube.com/watch?v=${item.id}`} className="btn btn-primary">Watch on Youtube</a>
                        <Link to={`/video/${item.id}`} onClick={liftState} className="btn btn-primary">Watch here</Link>
                    </div>
                    </div>
                ))}
                </div>
            </div>
    )
}
