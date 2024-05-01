import { RouteProp, useRoute } from "@react-navigation/native";
import { Text } from "react-native";

export type MypageParams = {
    Makingpage: {
        date: string;
    };
};

const Makingpage: React.FC = () => {
    const route = useRoute<RouteProp<MypageParams, "Makingpage">>();
    const date = route.params?.date;

    return (
        <>
            <Text>{date}</Text>
        </>
    );
};

export default Makingpage;
