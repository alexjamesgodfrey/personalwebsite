import React from 'react'
import Card from 'react-bootstrap/Card'
import studyflow from "../images/studyflow.png"

export default function Website() {
    return (
        <div>
            <h3>Studyflow.ai</h3>
            <img style={{width: '200px'}} src={studyflow} />
        </div>
    )
}
