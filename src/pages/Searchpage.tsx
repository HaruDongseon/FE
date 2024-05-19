import React, { useState, useEffect } from "react";
import {
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Colors from "@/styles/Color";
import Input from "@/components/Input";
import { SearchedPlace, getRecentSearchedPlaces } from "@/apis/searchedPlaces";

const Searchpage: React.FC = () => {
    const [searchInput, setSearchInput] = useState("");
    const [recentSearchedPlaces, setRecentSearchedPlaces] = useState<
        SearchedPlace[]
    >([]);

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

    return (
        <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={setSearchInput}
                        size={"M"}
                        value={searchInput}
                        placeholder={"장소를 검색하세요"}
                        iconPosition={"both"}
                    />
                </View>
                <View style={styles.firstSection}>
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
                <View style={styles.secondSection}>
                    <Text style={styles.headerText}>보관 장소</Text>
                    <Text style={styles.subText}>보관 장소가 없습니다.</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    firstSection: {
        marginTop: 8,
    },
    secondSection: {
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
});
