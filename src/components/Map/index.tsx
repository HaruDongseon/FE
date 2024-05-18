import NaverMapView from "react-native-nmap";

const Map = () => {
    const P0 = { latitude: 37.564362, longitude: 126.977011 };
    const P1 = { latitude: 37.565051, longitude: 126.978567 };
    const P2 = { latitude: 37.565383, longitude: 126.976292 };

    return (
        <NaverMapView
            style={{ width: "100%", height: "100%" }}
            showsMyLocationButton={true}
            center={{ ...P0, zoom: 16 }}
        ></NaverMapView>
    );
};

export default Map;
