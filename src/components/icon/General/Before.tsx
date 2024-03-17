import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

interface BeforeProps {
    style?: StyleProp<ViewStyle>;
}

const Before: React.FC<BeforeProps> = ({ style }) => (
    <Svg width={24} height={24} fill="none" style={style}>
        <Path
            stroke="#1D1F1F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.2}
            d="M15.828 4.222 8.05 12l7.778 7.778"
        />
    </Svg>
);
export default Before;
