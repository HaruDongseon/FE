import React from 'react';
import NaverMapView, { Marker } from 'react-native-nmap';
import { ViewStyle, DimensionValue, StyleProp } from 'react-native';

const P0 = { latitude: 37.564362, longitude: 126.977011 };

interface MapProps {
  latitude: number;
  longitude: number;
  width: DimensionValue;
  height: DimensionValue;
  style: StyleProp<ViewStyle>;
}

const Map: React.FC<Partial<MapProps>> = ({
  latitude = P0.latitude,
  longitude = P0.longitude,
  width = '100%',
  height = '100%',
  style,
}) => {
  const mapStyle: ViewStyle = {
    width,
    height,
    ...(style as object),
  };

  return (
    <NaverMapView
      style={[mapStyle, style]}
      showsMyLocationButton={false}
      center={{ latitude, longitude, zoom: 16 }}
      scaleBar={false}
      zoomControl={false}
    >
      <Marker coordinate={{ latitude, longitude }} />
    </NaverMapView>
  );
};

export default Map;
