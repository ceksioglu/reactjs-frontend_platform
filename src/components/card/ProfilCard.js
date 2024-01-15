import React from 'react'
import "./ProfilCard.css"

function ProfilCard(props) {
    return (
        <div className="col-md-4 col-lg-3">
            <div className="our-team">
                <div className="picture">
                    <img
                        className="img-fluid"
                        src={props.image}//"{https://picsum.photos/130/130?image=1027}"
                    />
                </div>
                <div className="team-content">
                    <h3 className="name">{props.teacher} </h3>
                    <h4 className="title">{props.title}</h4>
                </div>
                <ul className="social text-white">
                    <li>
                        <a
                            href=""
                            className="fab fa-linkedin me-1 "
                            aria-hidden="true"
                        />
                    </li>
                    <li>
                        <a
                            href=""
                            className="fab fa-facebook me-1 "
                            aria-hidden="true"
                        />
                    </li>
                    <li>
                        <a
                            href=""
                            className="fab fa-github me-1 "
                            aria-hidden="true"
                        />
                    </li>
                    <li>
                        <a
                            href=""
                            className="fab fa-instagram me-1 "
                            aria-hidden="true"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfilCard