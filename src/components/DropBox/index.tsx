import { RouteTag } from "@/apis/routeTags";
import Colors from "@/styles/Color";
import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";

type DropBoxProps = {
    hashtags: RouteTag[];
};

const DropBox: React.FC<DropBoxProps> = ({ hashtags }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const isScrollEnabled = hashtags.length >= 5;

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={isScrollEnabled}
                scrollEnabled={isScrollEnabled}
            >
                {hashtags.map((hashtag, index) => (
                    <Pressable
                        key={hashtag.id}
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
                        <Text style={styles.hashtagText}># {hashtag.name}</Text>
                        <Text style={styles.hashtagCount}>
                            {hashtag.selectCount}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        borderRadius: 4,
        backgroundColor: Colors.white,
        position: "absolute",
        top: 40,
        shadowColor: "#042826",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },

    hashtag: {
        width: "100%",
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EBEDED",
        flexDirection: "row",
    },
    hashtagText: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.grayScale800,
        marginRight: 8,
    },
    hashtagCount: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.grayScale300,
    },
    selected: {
        backgroundColor: Colors.primary25,
    },
    lastHashtag: {
        borderBottomWidth: 0,
    },
});

export default DropBox;
