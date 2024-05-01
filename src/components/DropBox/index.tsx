import Colors from "@/styles/Color";
import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

type DropBoxProps = {
    hashtags: string[];
};

const DropBox: React.FC<DropBoxProps> = ({ hashtags }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const isScrollEnabled = hashtags.length >= 5;

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={isScrollEnabled}
                scrollEnabled={isScrollEnabled}
            >
                {hashtags.map((hashtag, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.hashtag,
                            selected === index && styles.selected,
                            index === hashtags.length - 1 && styles.lastHashtag, // 마지막 요소 스타일 조정
                        ]}
                        onPressIn={() => setSelected(index)}
                        onPressOut={() => {
                            setTimeout(() => setSelected(null), 100);
                        }}
                    >
                        <Text style={styles.hashtagText}>{hashtag}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 208,
        borderRadius: 4,
        backgroundColor: Colors.white,
        overflow: "hidden",
        position: "absolute",
        zIndex: 9999,
        top: 40,
    },
    scrollView: {
        paddingVertical: 8,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    hashtag: {
        width: "100%",
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EBEDED",
        justifyContent: "center",
    },
    hashtagText: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.grayScale800,
    },
    selected: {
        backgroundColor: Colors.primary25,
    },
    lastHashtag: {
        borderBottomWidth: 0,
    },
});

export default DropBox;
