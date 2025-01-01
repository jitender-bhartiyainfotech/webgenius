import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FeatureImage(props) {

    const [url, setUrl] = useState('')

    useEffect(() => {
        // console.log(props.id)
        axios.get(`${process.env.REACT_APP_API_URL}/media/${props.id}`).then((resd) => {
            setUrl(resd.data.guid.rendered);
        })
    });

  return (
    <img src={url} alt={props.id} />
  )
}

export default FeatureImage