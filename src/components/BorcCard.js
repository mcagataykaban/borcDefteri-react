import React from 'react'

const BorcCard = (props) => {
    return (
        <div className="card m-1">
          <div className="card-header">{props.title}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
    )
}

export default BorcCard
