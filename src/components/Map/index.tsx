import NaverMapView from "react-native-nmap";

const P0 = { latitude: 37.564362, longitude: 126.977011 };
const Map = () => {
    return (
        <NaverMapView
            style={{ width: "100%", height: "100%" }}
            showsMyLocationButton={true}
            center={{ ...P0, zoom: 16 }}
            scaleBar={false}
            zoomControl={false}
        />
    );
};

export default Map;
