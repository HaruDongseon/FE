import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "@/components/Avatar/Avatar";
import Colors from "@/styles/Color";
import Icon from "@/components/icon/Common";
import { SNSType } from "@/components/Button/LoginButton";
import { IconType } from "@/components/icon/Common";
import { RouteProp } from "@react-navigation/native";
import Input from "@/components/Input";
import Button from "@/components/Button";

type MypageParams = {
    Mypage: {
        snsType: SNSType;
    };
};

type MypageProps = {
    route: RouteProp<MypageParams, "Mypage">;
};

const Mypage: React.FC<MypageProps> = ({ route }) => {
    const { snsType } = route.params;

    const getIconType = (type: SNSType): IconType | null => {
        switch (type) {
            case SNSType.KAKAO:
                return "R" as IconType;
            case SNSType.NAVER:
                return "SNSNaverR" as IconType;
            case SNSType.GOOGLE:
                return "SNSGoogleR" as IconType;
            default:
                return null;
        }
    };

    const iconType = getIconType(snsType);

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar />
            </View>
            <View style={styles.accountContainer}>
                <Text style={styles.accountText}>연결한 계정</Text>
                <View style={styles.emailContainer}>
                    {iconType && <Icon type={iconType} />}
                    <Text style={styles.emailText}>abcdef@gmail.com</Text>
                </View>
            </View>
            <View style={styles.nicknameContainer}>
                <Text style={styles.nicknameText}>닉네임</Text>
                <Text style={styles.nicknameCount}>0/10</Text>
            </View>
            <Input size="M" placeholder="사용할 닉네임을 입력해주세요" />
            <View style={styles.buttonContainer}>
                <Button
                    title={"확인"}
                    onPress={() => console.log(1)}
                    type={"filled"}
                    size={"l"}
                    color={"Primary"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    avatarContainer: {
        marginTop: 40,
    },
    accountContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 72,
        width: "100%",
    },
    accountText: {},
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    emailText: {
        marginLeft: 2,
    },
    nicknameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 8,
        width: "100%",
    },
    buttonContainer: {
        width: "100%",
        position: "absolute",
        bottom: 34,
    },
    nicknameText: {},
    nicknameCount: {},
});

export default Mypage;
