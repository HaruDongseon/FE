import { AnimatePresence, MotiView } from "moti";
import { FC, PropsWithChildren, memo } from "react";
import { Pressable, StyleSheet } from "react-native";

interface ModalProps {
    isOpen: boolean;
    onPressBackdrop?: () => void;
    onPressClose?: () => void;
    variant?: "default" | "bottomSheet";
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
    isOpen,
    onPressBackdrop,
    onPressClose,
    children,
    variant = "default",
}) => {
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
                    style={styles.content}
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
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
    content: {
        padding: 16,
        paddingTop: 32,
    },
});

export default memo(Modal);
