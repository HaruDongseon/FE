import { PlaceDetail, getGooglePlaceDetail } from "@/apis/google";
import Icon from "@/components/icon/Common";
import Colors from "@/styles/Color";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Linking } from "react-native";

export type PlaceDetailpageParams = {
    PlaceDetailpage: {
        id: string;
    };
};

const PlaceDetailpage = () => {
    const route =
        useRoute<RouteProp<PlaceDetailpageParams, "PlaceDetailpage">>();
    const id = route.params?.id;

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
        <View style={styles.container}>
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
        </View>
    );
};

export default PlaceDetailpage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    titleContainer: {
        flexDirection: "column",
        marginTop: 8,
        backgroundColor: "#F3F5F5",
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
        marginTop: 24,
        paddingHorizontal: 20,
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
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    weekdayContainer: {
        flexDirection: "column",
    },
});
