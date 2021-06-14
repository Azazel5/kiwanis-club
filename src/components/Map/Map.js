import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = props => {
    const { latitude, longitude, zoom } = props

    return (
        <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={true} style={{height: '60rem'}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[latitude, longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map