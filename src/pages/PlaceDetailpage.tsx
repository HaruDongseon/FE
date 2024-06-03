import { PlaceDetail, getGooglePlaceDetail } from "@/apis/google";
import Button from "@/components/Button";
import Map from "@/components/Map";
import Icon from "@/components/icon/Common";
import Colors from "@/styles/Color";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Pressable,
    Linking,
    GestureResponderEvent,
    ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type PlaceDetailpageParams = {
    PlaceDetailpage: {
        id: string;
    };
};

const PlaceDetailpage = () => {
    const route =
        useRoute<RouteProp<PlaceDetailpageParams, "PlaceDetailpage">>();
    const id = route.params?.id;
    const insets = useSafeAreaInsets();

    const [placeDetail, setPlaceDetail] = useState<PlaceDetail | null>(null);

    useEffect(() => {
        const fetchPlaceDetail = async () => {
            try {
                const data = await getGooglePlaceDetail(id);
                setPlaceDetail(data);
            } catch (error) {
                console.error("Failed to fetch place detail:", error);
            }
        };

        fetchPlaceDetail();
    }, [id]);

    const handleOpenURL = (url: string | undefined) => {
        if (url) {
            Linking.openURL(url).catch((err) =>
                console.error("Failed to open URL:", err),
            );
        }
    };

    const renderReservableParking = () => {
        if (placeDetail?.reservable && placeDetail?.parkingOptions) {
            return "주차 가능, 예약 가능";
        } else if (placeDetail?.reservable) {
            return "예약 가능";
        } else if (placeDetail?.parkingOptions) {
            return "주차 가능";
        }
        return null;
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                {placeDetail?.primaryTypeDisplayName && (
                    <Text style={styles.primaryType}>
                        {placeDetail.primaryTypeDisplayName?.text}
                    </Text>
                )}
                <Text style={styles.displayName}>
                    {placeDetail?.displayName.text}
                </Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.detailFrame}>
                    <Icon type="LocationR" />
                    <Text
                        style={styles.detailText}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {placeDetail?.formattedAddress}
                    </Text>
                </View>
                {placeDetail?.currentOpeningHours && (
                    <View
                        style={[
                            styles.detailFrame,
                            { alignItems: "flex-start" },
                        ]}
                    >
                        <Icon type="TimeR" />
                        <View style={styles.weekdayContainer}>
                            {placeDetail.currentOpeningHours.weekdayDescriptions.map(
                                (description) => (
                                    <Text
                                        key={description}
                                        style={[
                                            styles.detailText,
                                            { marginBottom: 6 },
                                        ]}
                                    >
                                        {description}
                                    </Text>
                                ),
                            )}
                        </View>
                    </View>
                )}
                {placeDetail?.nationalPhoneNumber && (
                    <View style={styles.detailFrame}>
                        <Icon type="CallR" />
                        <Text style={styles.detailText}>
                            {placeDetail.nationalPhoneNumber}
                        </Text>
                    </View>
                )}
                {placeDetail?.websiteUri && (
                    <Pressable
                        onPress={() => handleOpenURL(placeDetail.websiteUri)}
                        style={styles.detailFrame}
                    >
                        <Icon type="Global" />
                        <Text style={styles.uriText}>
                            {placeDetail.websiteUri}
                        </Text>
                    </Pressable>
                )}
                {renderReservableParking() && (
                    <View style={styles.detailFrame}>
                        <Icon type="TimeR" />
                        <Text style={styles.detailText}>
                            {renderReservableParking()}
                        </Text>
                    </View>
                )}
            </View>
            <View
                style={[
                    styles.mapContainer,
                    { paddingBottom: 8 + insets.bottom },
                ]}
            >
                <Text style={styles.mapText}>지도</Text>
                <Map
                    latitude={placeDetail?.location.latitude}
                    longitude={placeDetail?.location.longitude}
                    height={200}
                    style={{ marginBottom: 32, borderRadius: 12 }}
                />
                <Button
                    title={"동선 추가"}
                    onPress={() => {}}
                    type={"outline"}
                    size={"l"}
                    color={"Primary"}
                />
            </View>
        </ScrollView>
    );
};

export default PlaceDetailpage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.grayScale25,
        flex: 1,
    },
    titleContainer: {
        flexDirection: "column",
        marginTop: 8,
        padding: 20,
    },
    primaryType: {
        color: Colors.grayScale400,
        fontSize: 12,
        lineHeight: 18,
    },
    displayName: {
        color: Colors.grayScale800,
        fontSize: 20,
        lineHeight: 28,
        fontWeight: "500",
    },
    detailContainer: {
        backgroundColor: Colors.white,
        paddingVertical: 24,
        paddingHorizontal: 20,
        marginBottom: 8,
        gap: 12,
    },
    detailText: {
        color: Colors.grayScale700,
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 12,
    },
    uriText: {
        color: Colors.primary300,
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 12,
        textDecorationLine: "underline",
    },
    detailFrame: {
        flexDirection: "row",
        alignItems: "center",
    },
    weekdayContainer: {
        flexDirection: "column",
    },
    mapContainer: {
        backgroundColor: Colors.white,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    mapText: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: Colors.grayScale800,
        marginBottom: 8,
    },
});
