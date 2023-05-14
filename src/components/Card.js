
import Location from "../images/pin_icon.svg";

function Card(props) {
    return (
        <div className="card">

            <div>
                <img className="img" src={process.env.PUBLIC_URL + "/images/" + props.data.coverImg} alt={props.data.title} />
                
            </div>

            <div>
                <div >
                    <img className="location" src={Location} />
                    <h3 className="country-name">{props.data.location}</h3>
                    <a className="link" href={props.data. googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1 className="title">{props.data.title}</h1>
                <h4 className="date">{props.data.startDate}-{props.data.endDate}</h4>
                <p className="description">{props.data.description}</p>
            </div>

        </div>
    )
}

export default Card;