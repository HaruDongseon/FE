import React, { useEffect, useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "@/components/Avatar/Avatar";
import Colors from "@/styles/Color";
import Icon from "@/components/icon/Common";
import { SNSType } from "@/components/Button/LoginButton";
import { IconType } from "@/components/icon/Common";
import {
    ParamListBase,
    RouteProp,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { getUserProfile, updateUserProfile } from "@/apis/member";
import { AxiosError } from "axios";
import { validNicknameRegex } from "@/utils/authUtils";
import { RouteName, Tab } from "@/types/route";

const Mypage: Tab<RouteName.Mypage> = ({ route }) => {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [avatar, setAvatar] = useState("");
    const [error, setError] = useState("");
    const snsType = route.params?.snsType;

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getUserProfile();
                setAvatar(profile.profileImageUrl);
                setNickname(profile.nickname);
                setEmail(profile.email);
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
            }
        };
        fetchUserProfile();
    }, []);

    useEffect(() => {
        setError("");
    }, [nickname]);

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const getIconType = (type: SNSType): IconType | null => {
        switch (type) {
            case SNSType.KAKAO:
                return "SNSKakaoR" as IconType;
            case SNSType.NAVER:
                return "SNSNaverR" as IconType;
            case SNSType.GOOGLE:
                return "SNSGoogleR" as IconType;
            default:
                return null;
        }
    };

    const iconType = getIconType(snsType);

    const handleUpdateUserProfile = async () => {
        if (!validNicknameRegex.test(nickname)) {
            setError("한글, 영문, 숫자, 띄어쓰기 포함 3~10자로 입력하세요.");
            return;
        }

        try {
            await updateUserProfile({
                nickname,
                profileImageUrl: avatar,
            });
            navigation.navigate("Mainpage");
        } catch (error) {
            const { response } = error as unknown as AxiosError;
            if (response && response.status === 400) {
                setError("중복된 닉네임입니다. 다른 닉네임을 사용해주세요.");
            } else {
                setError(
                    "예상치 못한 오류가 발생했습니다. 나중에 다시 시도해 주세요.",
                );
            }
        }
    };

    return (
        <Pressable
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Avatar avatarUrl={avatar} setAvatar={setAvatar} />
                </View>
                <View style={styles.accountContainer}>
                    <Text style={styles.accountText}>연결한 계정</Text>
                    <View style={styles.emailContainer}>
                        {iconType && <Icon type={iconType} />}
                        <Text style={styles.emailText}>{email}</Text>
                    </View>
                </View>
                <View style={styles.nicknameContainer}>
                    <Text style={styles.nicknameText}>닉네임</Text>
                    <Text style={styles.nicknameCount}>
                        {nickname.length}/10
                    </Text>
                </View>
                <Input
                    onChangeText={(newNickname) => setNickname(newNickname)}
                    size="M"
                    maxLength={10}
                    defaultValue={nickname}
                    placeholder="사용할 닉네임을 입력해주세요"
                    inputState={error ? "error" : "default"}
                    errorMessage={error}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title={"확인"}
                        onPress={handleUpdateUserProfile}
                        disabled={nickname.length === 0}
                        type={"filled"}
                        size={"l"}
                        color={"Primary"}
                    />
                </View>
            </View>
        </Pressable>
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
