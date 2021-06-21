import './Map.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = props => {
    const { latitude, longitude, zoom, pinText } = props

    return (
        <MapContainer className="map-container" center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[latitude, longitude]}>
                <Popup>{pinText}</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map