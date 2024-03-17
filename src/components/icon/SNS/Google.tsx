import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Google = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            fill="#4285F4"
            d="M20.8 12.208c0-.65-.058-1.275-.167-1.875H12v3.55h4.933a4.227 4.227 0 0 1-1.841 2.759v2.308h2.975C19.8 17.35 20.8 15 20.8 12.208Z"
        />
        <Path
            fill="#34A853"
            d="M12 21.167c2.475 0 4.55-.817 6.067-2.217l-2.975-2.308c-.817.55-1.859.883-3.092.883-2.383 0-4.408-1.608-5.133-3.775h-3.05v2.367c1.508 2.992 4.6 5.05 8.183 5.05Z"
        />
        <Path
            fill="#FBBC05"
            d="M6.867 13.742A5.493 5.493 0 0 1 6.575 12c0-.608.108-1.192.292-1.742V7.892h-3.05A9.053 9.053 0 0 0 2.833 12c0 1.483.359 2.875.984 4.108l2.375-1.85.675-.516Z"
        />
        <Path
            fill="#EA4335"
            d="M12 6.483c1.35 0 2.55.467 3.508 1.367l2.625-2.625C16.542 3.742 14.475 2.833 12 2.833c-3.583 0-6.675 2.059-8.183 5.059l3.05 2.366C7.592 8.092 9.617 6.483 12 6.483Z"
        />
    </Svg>
);
export default Google;
