import React, { useState, useEffect } from "react";
import {
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Colors from "@/styles/Color";
import Input from "@/components/Input";
import {
    SearchedPlace,
    addSearchedPlace,
    getRecentSearchedPlaces,
    removeSearchedPlaceAll,
} from "@/apis/searchedPlaces";
import { GooglePlace, getGooglePlaces } from "@/apis/google";
import Place from "@/components/Place";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@/components/icon/Common";
import PlaceNameButton from "@/components/PlaceNameButton";
import Button from "@/components/Button";
import PlaceDetail from "./PlaceDetail";

interface PlaceSearchProps {
    handleEvent: () => void;
}

const PlaceSearch: React.FC<PlaceSearchProps> = ({ handleEvent }) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [recentSearchedPlaces, setRecentSearchedPlaces] = useState<
        SearchedPlace[]
    >([]);
    const [places, setPlaces] = useState<GooglePlace[]>([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

    const insets = useSafeAreaInsets();

    const fetchRecentSearchedPlaces = async () => {
        try {
            const places = await getRecentSearchedPlaces();
            setRecentSearchedPlaces(places);
        } catch (error) {
            console.error("Failed to fetch recent searched places:", error);
        }
    };

    useEffect(() => {
        fetchRecentSearchedPlaces();
    }, [searchInput]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchInput.trim().length > 0) {
                searchPlaces(searchInput);
            }
        }, 200);

        return () => clearTimeout(delayDebounceFn);
    }, [searchInput]);

    const searchPlaces = async (query: string) => {
        try {
            const data = await getGooglePlaces(query);
            if (data && data.length > 0) {
                setPlaces(data);
            } else {
                setPlaces([]);
            }
        } catch (error) {
            console.error("Error fetching places:", error);
            setPlaces([]);
        }
    };

    const handleRemoveAll = async () => {
        try {
            await removeSearchedPlaceAll();
            fetchRecentSearchedPlaces();
        } catch (error) {
            console.error("Failed to remove all searched places:", error);
        }
    };

    const renderPlace = ({ item }: { item: GooglePlace }) => {
        const handlePress = async () => {
            try {
                await addSearchedPlace(item.displayName.text);
                setSelectedPlaceId(item.id);
            } catch (error) {
                console.error("Failed to add searched place:", error);
            }
        };

        return (
            <Pressable onPress={handlePress}>
                <Place
                    name={item.displayName.text}
                    address={item.formattedAddress}
                    primaryType={item?.primaryTypeDisplayName?.text}
                    id={item.id}
                />
            </Pressable>
        );
    };

    if (selectedPlaceId) {
        return (
            <PlaceDetail
                goBack={() => {
                    setSelectedPlaceId(null);
                }}
                handleEvent={handleEvent}
                id={selectedPlaceId}
            />
        );
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.inputContainer}>
                <Input
                    onChangeText={setSearchInput}
                    size={"M"}
                    value={searchInput}
                    placeholder={"장소를 검색하세요"}
                    iconPosition={"both"}
                />
            </View>
            {searchInput ? (
                <View style={styles.resultContainer}>
                    <Text style={styles.headerText}>검색결과</Text>
                    {places.length > 0 ? (
                        <FlatList
                            data={places}
                            renderItem={renderPlace}
                            keyExtractor={(item) => item.id}
                        />
                    ) : (
                        <View style={styles.noResultContainer}>
                            <Icon type="Sad" />
                            <Text style={styles.noResultsText}>
                                검색 결과가 없어요.
                            </Text>
                        </View>
                    )}
                </View>
            ) : (
                <>
                    <View style={styles.recentPlacesContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>
                                최근 검색 장소
                            </Text>
                            <Button
                                title={"전체 삭제"}
                                onPress={handleRemoveAll}
                                type={"text"}
                                size={"s"}
                                color={"Gray"}
                            />
                        </View>
                        {recentSearchedPlaces.length > 0 ? (
                            <ScrollView
                                style={styles.placeButtonContainer}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                {recentSearchedPlaces.map((place) => (
                                    <PlaceNameButton
                                        key={place.id}
                                        onPress={(name) => setSearchInput(name)}
                                        id={place.id}
                                        name={place.keyword}
                                        onRemove={fetchRecentSearchedPlaces}
                                    />
                                ))}
                            </ScrollView>
                        ) : (
                            <Text style={styles.subText}>
                                최근 검색어가 없습니다.
                            </Text>
                        )}
                    </View>
                    <View style={styles.storedPlacesContainer}>
                        <Text style={styles.headerText}>보관 장소</Text>
                        <Text style={styles.subText}>
                            보관 장소가 없습니다.
                        </Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default PlaceSearch;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    inputContainer: {
        paddingVertical: 16,
    },
    recentPlacesContainer: {
        marginTop: 8,
    },
    storedPlacesContainer: {
        marginTop: 44,
    },
    headerText: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: Colors.grayScale800,
    },
    subText: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 20,
        color: Colors.grayScale300,
    },
    resultContainer: {
        width: "100%",
        flex: 1,
    },
    noResultsText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: Colors.grayScale300,
    },
    noResultContainer: {
        alignItems: "center",
        marginTop: 156,
    },
    placeButtonContainer: {
        flexDirection: "row",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },
});
