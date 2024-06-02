import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "@/styles/Color";
import Input from "@/components/Input";
import { SearchedPlace, getRecentSearchedPlaces } from "@/apis/searchedPlaces";
import { GooglePlace, getGooglePlaces } from "@/apis/google";
import Place from "@/components/Place";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@/components/icon/Common";

const Searchpage: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [recentSearchedPlaces, setRecentSearchedPlaces] = useState<
        SearchedPlace[]
    >([]);
    const [places, setPlaces] = useState<GooglePlace[]>([]);

    const insets = useSafeAreaInsets();

    useEffect(() => {
        async function fetchRecentSearchedPlaces() {
            try {
                const places = await getRecentSearchedPlaces();
                setRecentSearchedPlaces(places);
            } catch (error) {
                console.error("Failed to fetch recent searched places:", error);
            }
        }

        fetchRecentSearchedPlaces();
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchInput.trim().length > 0) {
                searchPlaces(searchInput);
            }
        }, 300);

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

    const renderPlace = ({ item }: { item: GooglePlace }) => (
        <Place
            name={item.displayName.text}
            address={item.formattedAddress}
            primaryType={item?.primaryTypeDisplayName?.text}
            id={item.id}
        />
    );
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
                        <Text style={styles.headerText}>최근 검색 장소</Text>
                        {recentSearchedPlaces.length > 0 ? (
                            recentSearchedPlaces.map((place) => (
                                <Text key={place.id} style={styles.subText}>
                                    {place.keyword}
                                </Text>
                            ))
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

export default Searchpage;

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
        marginBottom: 16,
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
});
