import Colors from "@/styles/Color";
import { AnimatePresence, MotiView } from "moti";
import { FC, PropsWithChildren, memo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import Icon from "../icon/Common";

interface ModalProps {
    isOpen: boolean;
    onPressBackdrop?: () => void;
    onPressClose?: () => void;
    variant?: "default" | "bottomSheet";
    title?: string;
    headerHidden?: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
    isOpen,
    onPressBackdrop,
    onPressClose,
    children,
    variant = "default",
    title,
    headerHidden = false,
}) => {
    const isBottomSheet = variant === "bottomSheet";

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <MotiView
                style={styles.container}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <MotiView
                    style={styles.backdrop}
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Pressable style={{ flex: 1 }} onPress={onPressBackdrop} />
                </MotiView>
                <MotiView
                    style={[
                        styles.content,
                        isBottomSheet && styles.bottomSheet,
                    ]}
                    from={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                >
                    {!headerHidden && (
                        <View style={styles.header}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            {onPressClose && (
                                <Pressable
                                    style={styles.closeButton}
                                    onPress={onPressClose}
                                >
                                    <Icon type="CancelM" />
                                </Pressable>
                            )}
                        </View>
                    )}
                    {children}
                </MotiView>
            </MotiView>
        </AnimatePresence>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        paddingLeft: 24,
        paddingRight: 24,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    backdrop: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        backgroundColor: "#1D1F1F33",
        opacity: 0.2,
    },
    header: {
        position: "relative",
        paddingTop: 14,
        paddingBottom: 14,
        paddingRight: 25,
        paddingLeft: 25,
    },
    titleContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "50%",
        right: "50%",
    },
    title: {
        color: Colors.grayScale600,
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: "center",
    },
    closeButton: {
        position: "absolute",
        right: 25,
        top: 0,
        left: 0,
    },
    content: {
        padding: 16,
        paddingTop: 32,
    },
    bottomSheet: {
        marginTop: "auto",
        width: "100%",
    },
});

export default memo(Modal);
