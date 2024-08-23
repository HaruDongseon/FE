import React from "react";
import Svg, {
    SvgProps,
    Path,
    Circle,
    G,
    Defs,
    ClipPath,
    Rect,
} from "react-native-svg";

export type IconType =
    | "Before1LineM"
    | "Next1LineM"
    | "Next1LineR"
    | "Before1LineR"
    | "Up1LineR"
    | "Down1LineR"
    | "Before2LineL"
    | "Next2LineL"
    | "BeforeFilledR"
    | "NextFilledR"
    | "UpFilledR"
    | "DownFilledR"
    | "SearchR"
    | "SearchM"
    | "CheckR"
    | "CancelS"
    | "CancelR"
    | "CancelM"
    | "TextCancelR"
    | "LocationR"
    | "LocationM"
    | "PickOnR"
    | "PickOnM"
    | "PickOnL"
    | "PickOffR"
    | "PickOffM"
    | "PickOffL"
    | "CalendarL"
    | "AddL"
    | "SharingL"
    | "TimeR"
    | "CallR"
    | "ReservationR"
    | "DeleteL"
    | "SwitchL"
    | "Global"
    | "CameraR"
    | "CameraM"
    | "NVMypageM"
    | "NVBoxM"
    | "NVSearchM"
    | "NVCurationM"
    | "NVHaruM"
    | "SNSKakaoR"
    | "SNSKakaoM"
    | "SNSNaverR"
    | "SNSNaverM"
    | "SNSGoogleR"
    | "SNSGoogleM"
    | "MessageErrorR"
    | "MessageSuccessR"
    | "MessageInfoR"
    | "Sad"
    | "Lock";

interface IconProps extends SvgProps {
    type: IconType;
}

const Icon: React.FC<IconProps> = ({ type, color = "#1D1F1F", ...props }) => {
    switch (type) {
        case "Before1LineM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M15.025 5.025 8.05 12l6.975 6.975"
                    />
                </Svg>
            );
        case "Next1LineM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M8.975 5.025 15.95 12l-6.975 6.975"
                    />
                </Svg>
            );
        case "Next1LineR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6.387 3.613 10.774 8l-4.387 4.387"
                    />
                </Svg>
            );
        case "Before1LineR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.617 3.617 5.233 8l4.384 4.383"
                    />
                </Svg>
            );
        case "Up1LineR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m3.599 9.598 4.384-4.384 4.384 4.384"
                    />
                </Svg>
            );
        case "Down1LineR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m12.4 6.4-4.384 4.384L3.632 6.4"
                    />
                </Svg>
            );
        case "Before2LineL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        stroke="#BBC3C3"
                        strokeLinecap="round"
                        strokeWidth={2}
                        d="M8.418 16.001h16.378"
                    />
                    <Path
                        stroke="#BBC3C3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m14.903 8.3-7.7 7.7 7.7 7.7"
                    />
                </Svg>
            );
        case "Next2LineL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        stroke="#BBC3C3"
                        strokeLinecap="round"
                        strokeWidth={2}
                        d="M23.582 16.001H7.204"
                    />
                    <Path
                        stroke="#BBC3C3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m17.097 8.3 7.7 7.7-7.7 7.7"
                    />
                </Svg>
            );
        case "BeforeFilledR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <G clipPath="url(#a)">
                        <Path
                            fill="#676D6D"
                            d="M9.35 2.49 4.193 7.646a.5.5 0 0 0 0 .708L9.35 13.51a.5.5 0 0 0 .854-.353V2.843a.5.5 0 0 0-.854-.353Z"
                        />
                    </G>
                    <Defs>
                        <ClipPath id="a">
                            <Path fill="#fff" d="M16 0v16H0V0z" />
                        </ClipPath>
                    </Defs>
                </Svg>
            );
        case "NextFilledR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <G clipPath="url(#a)">
                        <Path
                            fill="#575E5E"
                            d="m6.65 2.49 5.157 5.156a.5.5 0 0 1 0 .708L6.65 13.51a.5.5 0 0 1-.854-.353V2.843a.5.5 0 0 1 .854-.353Z"
                        />
                    </G>
                    <Defs>
                        <ClipPath id="a">
                            <Path fill="#fff" d="M16 0v16H0V0z" />
                        </ClipPath>
                    </Defs>
                </Svg>
            );
        case "UpFilledR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <G clipPath="url(#a)">
                        <Path
                            fill="#575E5E"
                            d="M13.51 6.782 8.354 11.94a.5.5 0 0 1-.708 0L2.49 6.782a.5.5 0 0 1 .353-.853h10.314a.5.5 0 0 1 .353.853Z"
                        />
                    </G>
                    <Defs>
                        <ClipPath id="a">
                            <Path fill="#fff" d="M16 0v16H0V0z" />
                        </ClipPath>
                    </Defs>
                </Svg>
            );
        case "DownFilledR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <G clipPath="url(#a)">
                        <Path
                            fill="#676D6D"
                            d="M13.51 9.74 8.354 4.581a.5.5 0 0 0-.708 0L2.49 9.74a.5.5 0 0 0 .353.854h10.314a.5.5 0 0 0 .353-.854Z"
                        />
                    </G>
                    <Defs>
                        <ClipPath id="a">
                            <Path fill="#fff" d="M16 0v16H0V0z" />
                        </ClipPath>
                    </Defs>
                </Svg>
            );
        case "SearchR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Circle
                        cx={7.667}
                        cy={7.667}
                        r={4.967}
                        stroke="#838A8A"
                        strokeWidth={1.4}
                    />
                    <Path
                        fill="#838A8A"
                        d="M13.338 14.328a.7.7 0 0 0 .99-.99l-.99.99Zm-2.5-2.5 2.5 2.5.99-.99-2.5-2.5-.99.99Z"
                    />
                </Svg>
            );
        case "SearchM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Circle
                        cx={11.658}
                        cy={11.658}
                        r={6.842}
                        stroke="#838A8A"
                        strokeWidth={1.8}
                    />
                    <Path
                        fill="#838A8A"
                        d="M19.447 20.72a.9.9 0 0 0 1.272-1.273l-1.273 1.273Zm-3.416-3.416 3.416 3.416 1.272-1.273-3.415-3.416-1.273 1.273Z"
                    />
                </Svg>
            );
        case "CheckR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.6}
                        d="M4 7.663 6.896 10.5 12 5.5"
                    />
                </Svg>
            );
        case "CancelS":
            return (
                <Svg width={12} height={12} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        d="m10 2-8 8M2 2l8 8"
                    />
                </Svg>
            );
        case "CancelR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeWidth={1.4}
                        d="M13 3 3 13M3 3l10 10"
                    />
                </Svg>
            );
        case "CancelM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        stroke="#1D1F1F"
                        strokeLinecap="round"
                        strokeWidth={2}
                        d="M19 5 5 19M5 5l14 14"
                    />
                </Svg>
            );
        case "TextCancelR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Circle cx={8} cy={8} r={7} fill="#D6DADA" />
                    <Path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="m11 5-6 6M5 5l6 6"
                    />
                </Svg>
            );
        case "LocationR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#B0B8B8"
                        fillRule="evenodd"
                        d="M12.57 6.94c0 2.246-2.486 5.045-3.79 6.359a1.087 1.087 0 0 1-1.556 0c-1.305-1.314-3.79-4.113-3.79-6.36a4.568 4.568 0 0 1 9.136 0ZM8.002 8.673a1.824 1.824 0 1 0 0-3.649 1.824 1.824 0 0 0 0 3.649Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "LocationM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#A2A9A9"
                        fillRule="evenodd"
                        d="M6.824 13.881c.05.071.103.141.156.21l3.419 4.567a2 2 0 0 0 3.202 0l3.437-4.59.12-.162.031-.041h-.001a6.365 6.365 0 1 0-10.376 0l.012.016ZM14.554 10a2.555 2.555 0 1 1-5.109 0 2.555 2.555 0 0 1 5.11 0Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "PickOnR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#00C3B6"
                        d="M7.996 14a3.582 3.582 0 0 0 3.437-2.564A3.58 3.58 0 0 0 14 8.004a3.582 3.582 0 0 0-2.56-3.44A3.582 3.582 0 0 0 8.004 2a3.582 3.582 0 0 0-3.437 2.564 3.58 3.58 0 0 0 0 6.865 3.582 3.582 0 0 0 3.437 2.564L7.996 14Z"
                    />
                </Svg>
            );
        case "PickOnM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#00C3B6"
                        d="M11.995 20a4.776 4.776 0 0 0 4.583-3.419A4.772 4.772 0 0 0 20 12.005a4.775 4.775 0 0 0-3.413-4.587A4.776 4.776 0 0 0 12.005 4a4.776 4.776 0 0 0-4.582 3.418 4.772 4.772 0 0 0 0 9.154 4.777 4.777 0 0 0 4.582 3.419l-.01.009Z"
                    />
                </Svg>
            );
        case "PickOnL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        fill="#00C3B6"
                        d="M15.993 28a7.165 7.165 0 0 0 6.873-5.128A7.159 7.159 0 0 0 28 16.007a7.163 7.163 0 0 0-5.12-6.88A7.165 7.165 0 0 0 16.007 4a7.165 7.165 0 0 0-6.873 5.128A7.159 7.159 0 0 0 4 15.993a7.159 7.159 0 0 0 5.134 6.865 7.165 7.165 0 0 0 6.873 5.128l-.014.014Z"
                    />
                </Svg>
            );
        case "PickOffR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        stroke="#838A8A"
                        strokeWidth={1.2}
                        d="M10.858 11.266a2.982 2.982 0 0 1-2.654 2.127h-.2a2.982 2.982 0 0 1-2.862-2.134l-.092-.313-.313-.092a2.98 2.98 0 0 1 0-5.715l.313-.092.092-.313A2.982 2.982 0 0 1 8.004 2.6c1.353 0 2.496.9 2.86 2.134l.093.313.313.092a2.982 2.982 0 0 1 2.13 2.865c0 1.35-.9 2.492-2.137 2.857l-.313.092-.092.313Z"
                    />
                </Svg>
            );
        case "PickOffM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        stroke="#838A8A"
                        strokeWidth={1.8}
                        d="M15.714 16.326a3.877 3.877 0 0 1-3.446 2.765h-.263a3.876 3.876 0 0 1-3.72-2.774l-.138-.47-.47-.138a3.872 3.872 0 0 1 0-7.427l.47-.139.139-.47A3.876 3.876 0 0 1 12.005 4.9a3.876 3.876 0 0 1 3.719 2.774l.139.47.47.138a3.876 3.876 0 0 1 2.767 3.723 3.872 3.872 0 0 1-2.777 3.713l-.47.139-.139.47Z"
                    />
                </Svg>
            );
        case "PickOffL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        stroke="#838A8A"
                        strokeWidth={2}
                        d="M21.907 22.589a6.166 6.166 0 0 1-5.493 4.397h-.407a6.165 6.165 0 0 1-5.914-4.411l-.154-.522-.522-.154a6.159 6.159 0 0 1 0-11.812l.522-.154.154-.522A6.165 6.165 0 0 1 16.007 5a6.165 6.165 0 0 1 5.914 4.411l.155.522.521.154A6.163 6.163 0 0 1 27 16.007a6.159 6.159 0 0 1-4.417 5.906l-.521.154-.155.522Z"
                    />
                </Svg>
            );
        case "CalendarL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        fill="#838A8A"
                        fillRule="evenodd"
                        d="M11.84 7.322c.485 0 .88.329.88.734v.868h-1.761v-.868c0-.405.394-.734.88-.734Zm-4.682 3.525c0-1.061.86-1.922 1.921-1.922h13.842c1.06 0 1.92.86 1.92 1.922v1.297H7.159v-1.297Zm0 3.09v9.138c0 1.061.86 1.921 1.921 1.921h13.842c1.06 0 1.92-.86 1.92-1.92v-9.139H7.159Zm13.883-5.88c0-.406-.394-.735-.88-.735s-.88.329-.88.734v.868h1.76v-.868ZM12.64 18.811a.921.921 0 1 1-1.843 0 .921.921 0 0 1 1.843 0Zm3.36.921a.921.921 0 1 0 0-1.842.921.921 0 0 0 0 1.842Zm5.205-.92a.921.921 0 1 1-1.843-.001.921.921 0 0 1 1.843 0Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "AddL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Rect
                        width={17.994}
                        height={2.699}
                        x={7.003}
                        y={14.65}
                        fill="#838A8A"
                        rx={1.35}
                    />
                    <Rect
                        width={17.994}
                        height={2.699}
                        x={17.35}
                        y={7.003}
                        fill="#838A8A"
                        rx={1.35}
                        transform="rotate(90 17.35 7.003)"
                    />
                </Svg>
            );
        case "SharingL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        fill="#A2A9A9"
                        d="M22.742 19C25.098 19 27 21.01 27 23.5S25.098 28 22.742 28s-4.258-2.01-4.258-4.5c0-.36.042-.69.128-1.035l-6.217-3.45c-.78.915-1.888 1.485-3.137 1.485C6.902 20.5 5 18.49 5 16s1.902-4.5 4.258-4.5c1.25 0 2.356.585 3.137 1.485l6.217-3.45a4.217 4.217 0 0 1-.128-1.035c0-2.49 1.902-4.5 4.258-4.5S27 6.01 27 8.5 25.098 13 22.742 13c-1.25 0-2.356-.585-3.137-1.485l-6.217 3.45a4.219 4.219 0 0 1 0 2.07l6.217 3.45c.78-.915 1.888-1.485 3.137-1.485Z"
                    />
                </Svg>
            );
        case "TimeR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#B0B8B8"
                        fillRule="evenodd"
                        d="M8 13.29A5.287 5.287 0 1 0 8 2.714a5.287 5.287 0 0 0 0 10.574Zm.598-8.3a.536.536 0 1 0-1.073 0v3.224c0 .18.091.349.242.448L9.57 9.845a.536.536 0 1 0 .588-.896l-1.56-1.025V4.99Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "CallR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#B0B8B8"
                        d="M4.808 3.069a1.4 1.4 0 0 1 1.725.34l.07.093.65.924a1.748 1.748 0 0 1 .058 1.927l-.074.108-.713.863c-.105.148.083.603.707 1.322.561.647 1.164 1.08 1.336 1.067l.03-.006.035-.014 1.255-.919a1.05 1.05 0 0 1 1.134.096l.078.067 1.182 1.112a1.4 1.4 0 0 1 .245 1.733l-.067.103-.304.425c-.223.277-.454.48-.89.654-.314.125-.78.09-1.24 0-1.434-.28-2.879-1.27-4.344-2.96C4.213 8.31 3.436 6.737 3.365 5.275c-.021-.442-.029-.803.153-1.143.229-.428.372-.512.701-.75l.124-.07.465-.243Z"
                    />
                </Svg>
            );
        case "ReservationR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#B0B8B8"
                        fillRule="evenodd"
                        d="M5.666 2.951c.273 0 .494.221.494.494v.584h-.988v-.584c0-.273.221-.494.494-.494ZM3.039 5.11c0-.596.483-1.079 1.079-1.079h7.77c.595 0 1.078.483 1.078 1.079v.808a.38.38 0 0 0-.017 0H3.137a.368.368 0 0 0-.098.013V5.11Zm9.91 1.599h.017v5.266c0 .595-.483 1.078-1.078 1.078h-7.77a1.078 1.078 0 0 1-1.079-1.078v-5.28a.368.368 0 0 0 .098.014h9.812Zm-2.117-3.264a.494.494 0 0 0-.988 0v.584h.988v-.584Zm-.469 5.662a.476.476 0 1 0-.653-.692L7.76 10.257 6.583 8.985a.476.476 0 1 0-.699.646l1.502 1.625a.476.476 0 0 0 .676.023l2.301-2.172Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "DeleteL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        fill="#BBC3C3"
                        d="M21.533 9.206H19.59l-.689-.69a.98.98 0 0 0-.68-.28h-4.445a.98.98 0 0 0-.68.28l-.688.69h-1.942a.974.974 0 0 0-.97.97c0 .534.436.971.97.971h11.066c.534 0 .97-.437.97-.97a.974.974 0 0 0-.97-.971Z"
                    />
                    <Path
                        fill="#BBC3C3"
                        fillRule="evenodd"
                        d="M13.182 23.765a1.947 1.947 0 0 1-1.942-1.942l-.776-9.706h11.065l-.776 9.706a1.947 1.947 0 0 1-1.942 1.942h-5.63Zm.967-8.93c0-.214.174-.388.389-.388h.388c.214 0 .388.174.388.389v5.435a.388.388 0 0 1-.388.388h-.388a.388.388 0 0 1-.389-.388v-5.436Zm2.92-.388a.388.388 0 0 0-.388.389v5.435c0 .215.174.388.388.388h.389a.388.388 0 0 0 .388-.388v-5.436a.388.388 0 0 0-.389-.388h-.388Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "SwitchL":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Rect
                        width={21}
                        height={1.5}
                        x={5.5}
                        y={9.238}
                        fill="#BBC3C3"
                        rx={0.75}
                    />
                    <Rect
                        width={21}
                        height={1.5}
                        x={5.5}
                        y={15.25}
                        fill="#BBC3C3"
                        rx={0.75}
                    />
                    <Rect
                        width={21}
                        height={1.5}
                        x={5.5}
                        y={21.262}
                        fill="#BBC3C3"
                        rx={0.75}
                    />
                </Svg>
            );
        case "Global":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#BBC3C3"
                        fillRule="evenodd"
                        d="M2.699 7.588c.1-1.333.703-2.58 1.686-3.49A5.325 5.325 0 0 1 8 2.685c-.441 0-.835.193-1.16.488-.32.294-.593.704-.813 1.189a7.419 7.419 0 0 0-.51 1.677c-.095.512-.151 1.03-.169 1.55H2.7Zm0 .796h2.65c.02.53.076 1.054.17 1.55.116.619.288 1.19.51 1.677.22.485.491.895.813 1.189.324.295.718.488 1.159.488a5.311 5.311 0 0 1-5.302-4.904Z"
                        clipRule="evenodd"
                    />
                    <Path
                        fill="#BBC3C3"
                        d="M8 3.423c-.146 0-.335.062-.555.263-.22.202-.442.518-.638.95a6.717 6.717 0 0 0-.461 1.523 9.917 9.917 0 0 0-.158 1.43h3.624a9.785 9.785 0 0 0-.158-1.43 6.69 6.69 0 0 0-.46-1.524c-.196-.43-.418-.747-.639-.949-.22-.2-.409-.263-.555-.263Zm-1.654 6.39c.108.578.266 1.095.46 1.524.197.43.418.747.639.949.22.2.41.263.555.263.146 0 .335-.062.555-.263.221-.202.443-.518.638-.95.195-.428.353-.945.461-1.523.086-.455.139-.937.158-1.43H6.188c.02.493.072.975.158 1.43Z"
                    />
                    <Path
                        fill="#BBC3C3"
                        d="M8 2.684c.442 0 .835.193 1.16.488.32.294.593.704.813 1.189.221.488.393 1.058.51 1.677.093.496.15 1.019.169 1.55h2.65a5.296 5.296 0 0 0-1.686-3.49A5.325 5.325 0 0 0 8 2.684Zm2.483 7.25a7.396 7.396 0 0 1-.51 1.677c-.22.485-.492.895-.814 1.189-.324.295-.717.488-1.159.488a5.311 5.311 0 0 0 5.302-4.904h-2.65c-.018.52-.074 1.038-.17 1.55Z"
                    />
                </Svg>
            );
        case "CameraR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#BBC3C3"
                        fillRule="evenodd"
                        d="M5.344 3.458a1.818 1.818 0 0 1 1.498-.792h2.316c.296 0 .588.073.85.211.26.138.483.338.648.581l.487.723a.597.597 0 0 0 .499.264h.558c.477 0 .935.187 1.273.52.337.334.527.786.527 1.257v5.334c0 .471-.19.923-.527 1.257-.338.333-.796.52-1.273.52H3.8c-.477 0-.935-.187-1.273-.52A1.767 1.767 0 0 1 2 11.556V6.222c0-.471.19-.923.527-1.257.338-.333.796-.52 1.273-.52h.558a.606.606 0 0 0 .5-.264l.486-.723ZM6.8 8.593c0-.315.126-.616.351-.838a1.208 1.208 0 0 1 1.698 0 1.178 1.178 0 0 1 0 1.676 1.208 1.208 0 0 1-1.698 0 1.178 1.178 0 0 1-.351-.838ZM8 6.223c-.637 0-1.247.249-1.697.694A2.356 2.356 0 0 0 5.6 8.593c0 .628.253 1.231.703 1.676.45.444 1.06.694 1.697.694s1.247-.25 1.697-.694c.45-.445.703-1.048.703-1.676 0-.629-.253-1.232-.703-1.676A2.415 2.415 0 0 0 8 6.222Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "CameraM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#BBC3C3"
                        fillRule="evenodd"
                        d="M8.017 5.188c.246-.366.58-.665.972-.872.392-.208.83-.316 1.274-.316h3.474c.444 0 .882.108 1.274.316.392.207.726.506.972.872l.731 1.083a.896.896 0 0 0 .749.396h.837c.716 0 1.403.28 1.91.78.505.5.79 1.18.79 1.886v8a2.65 2.65 0 0 1-.79 1.886c-.507.5-1.194.781-1.91.781H5.7a2.718 2.718 0 0 1-1.91-.781A2.65 2.65 0 0 1 3 17.333v-8c0-.707.284-1.385.79-1.885a2.717 2.717 0 0 1 1.91-.781h.837a.909.909 0 0 0 .749-.396l.73-1.083Zm2.183 7.7c0-.47.19-.923.527-1.256.338-.334.796-.52 1.273-.52.477 0 .935.186 1.273.52a1.767 1.767 0 0 1 0 2.514c-.338.333-.796.52-1.273.52-.477 0-.935-.187-1.273-.52a1.767 1.767 0 0 1-.527-1.257ZM12 9.334c-.955 0-1.87.375-2.546 1.042A3.534 3.534 0 0 0 8.4 12.889c0 .943.38 1.847 1.054 2.514A3.623 3.623 0 0 0 12 16.444c.955 0 1.87-.374 2.546-1.041a3.533 3.533 0 0 0 1.054-2.514c0-.943-.38-1.848-1.054-2.514A3.623 3.623 0 0 0 12 9.333Z"
                        clipRule="evenodd"
                    />
                </Svg>
            );
        case "NVMypageM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#BBC3C3"
                        d="M12 12c-4.34 0-7.873 2.842-8 5.137a.484.484 0 0 0 .047.242C4.304 17.901 5.729 20 12 20c6.27 0 7.696-2.099 7.953-2.62a.485.485 0 0 0 .046-.243C19.873 14.842 16.34 12 12 12Z"
                    />
                    <Circle cx={12} cy={7.556} r={3.556} fill="#BBC3C3" />
                </Svg>
            );
        case "NVBoxM":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect
                        x="3"
                        y="4"
                        width="18"
                        height="3.6"
                        rx="0.9"
                        fill="#BBC3C3"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.7999 8.5C4.30285 8.5 3.8999 8.90294 3.8999 9.4V18.4C3.8999 19.3941 4.70579 20.2 5.6999 20.2H18.2999C19.294 20.2 20.0999 19.3941 20.0999 18.4V9.4C20.0999 8.90294 19.697 8.5 19.1999 8.5H4.7999ZM9.2999 11.2C8.80285 11.2 8.3999 11.6029 8.3999 12.1C8.3999 12.5971 8.80285 13 9.2999 13H14.6999C15.197 13 15.5999 12.5971 15.5999 12.1C15.5999 11.6029 15.197 11.2 14.6999 11.2H9.2999Z"
                        fill="#BBC3C3"
                    />
                </svg>
            );
        case "NVSearchM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Circle cx={11.556} cy={10.556} r={7.556} fill="#BBC3C3" />
                    <Path
                        fill="#BBC3C3"
                        d="M19.363 19.636a.9.9 0 1 0 1.273-1.273l-1.273 1.273Zm-3.555-3.555 3.555 3.555 1.273-1.273-3.555-3.555-1.273 1.273Z"
                    />
                </Svg>
            );
        case "NVCurationM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#BBC3C3"
                        d="M11.25 3.094a.91.91 0 0 1 1.5 0l2.594 3.785a.909.909 0 0 0 .493.358l4.401 1.298a.91.91 0 0 1 .464 1.426l-2.799 3.637a.91.91 0 0 0-.188.58l.126 4.586a.91.91 0 0 1-1.213.882l-4.323-1.538a.91.91 0 0 0-.61 0l-4.323 1.538a.91.91 0 0 1-1.213-.882l.126-4.587a.909.909 0 0 0-.188-.58L3.298 9.962a.91.91 0 0 1 .464-1.426l4.401-1.298a.91.91 0 0 0 .493-.358l2.594-3.785Z"
                    />
                </Svg>
            );
        case "NVHaruM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#00C3B6"
                        d="M12.012 22c-2.934 0-5.565-1.967-6.403-4.785a1.74 1.74 0 0 1 .442-1.734l4.191-4.191a1.735 1.735 0 0 1 2.468 0 1.735 1.735 0 0 1 0 2.468L9.37 17.099A3.2 3.2 0 0 0 12 18.508a3.207 3.207 0 0 0 3.05-2.282 1.729 1.729 0 0 1 1.176-1.176A3.207 3.207 0 0 0 18.508 12a3.207 3.207 0 0 0-2.282-3.05 1.729 1.729 0 0 1-1.176-1.176A3.207 3.207 0 0 0 12 5.492a3.206 3.206 0 0 0-3.05 2.282A1.73 1.73 0 0 1 7.774 8.95 3.206 3.206 0 0 0 5.492 12c0 .35.059.698.175 1.024a1.755 1.755 0 0 1-1.083 2.224 1.75 1.75 0 0 1-2.223-1.083A6.813 6.813 0 0 1 2 12c0-2.631 1.572-5.006 3.923-6.077C6.994 3.572 9.381 2 12 2c2.62 0 5.006 1.572 6.077 3.923C20.428 6.994 22 9.381 22 12c0 2.62-1.572 5.006-3.923 6.077C17.006 20.428 14.619 22 12 22h.012Z"
                    />
                    <Path
                        fill="#FFC700"
                        d="M11.476 14.282a1.746 1.746 0 1 0 0-3.493 1.746 1.746 0 0 0 0 3.493Z"
                    />
                </Svg>
            );
        case "SNSKakaoM":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Circle cx={8} cy={8} r={7} fill="#FFE812" />
                    <Path
                        fill="#000"
                        d="M8 4.464c-2.226 0-4.03 1.423-4.03 3.178 0 1.135.754 2.13 1.888 2.693a56.05 56.05 0 0 0-.41 1.46s-.008.069.037.095c.044.026.096.005.096.005.127-.017 1.47-.961 1.703-1.125.232.033.471.05.716.05 2.226 0 4.03-1.423 4.03-3.178S10.226 4.464 8 4.464Z"
                    />
                </Svg>
            );
        case "SNSKakaoR":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#000"
                        d="M11.753 3C6.366 3 2 6.443 2 10.69c0 2.745 1.825 5.155 4.571 6.515-.149.515-.96 3.315-.992 3.535 0 0-.02.165.088.228.107.063.233.014.233.014.306-.043 3.558-2.327 4.12-2.723.563.08 1.142.12 1.733.12 5.386 0 9.753-3.442 9.753-7.69C21.506 6.444 17.139 3 11.753 3Z"
                    />
                    <Path
                        fill="#FFE812"
                        d="M6.36 13.374a.551.551 0 0 1-.562-.537V9.494H4.92a.552.552 0 0 1 0-1.102h2.882a.552.552 0 0 1 0 1.102h-.878v3.343a.551.551 0 0 1-.563.537Zm4.935-.007c-.235 0-.414-.095-.469-.249l-.278-.73H8.832l-.279.73c-.054.154-.233.249-.468.249a.857.857 0 0 1-.357-.078c-.155-.071-.304-.268-.134-.799L8.94 8.948c.095-.27.383-.547.75-.556.367.009.655.286.75.556l1.345 3.541c.172.532.023.729-.133.8a.86.86 0 0 1-.357.078Zm-1.043-1.975L9.69 9.796l-.562 1.596h1.124Zm2.439 1.9a.529.529 0 0 1-.54-.516V8.955a.57.57 0 0 1 .575-.563.57.57 0 0 1 .574.563v3.306h1.196c.297 0 .54.231.54.515a.529.529 0 0 1-.54.516h-1.805Zm3.126.075a.563.563 0 0 1-.563-.563v-3.85a.563.563 0 0 1 1.126 0v1.21l1.57-1.57a.437.437 0 0 1 .312-.125c.14 0 .281.06.387.166a.555.555 0 0 1 .165.357.439.439 0 0 1-.124.343l-1.282 1.282 1.385 1.835a.557.557 0 0 1 .036.624.557.557 0 0 1-.485.277.56.56 0 0 1-.45-.224l-1.319-1.748-.195.195v1.228a.563.563 0 0 1-.563.563Z"
                    />
                </Svg>
            );
        case "SNSNaverR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#03CF5D"
                        d="m10.305 8.454-4.8-6.896H1.528v12.883h4.168V7.546l4.8 6.895h3.978V1.558h-4.168v6.896Z"
                    />
                </Svg>
            );
        case "SNSNaverM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#03CF5D"
                        d="M14.849 12.517 8.917 3.995H4v15.922h5.151v-8.522l5.932 8.522H20V3.995h-5.151v8.522Z"
                    />
                </Svg>
            );
        case "SNSGoogleR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Path
                        fill="#4285F4"
                        d="M13.28 8.125c0-.39-.035-.765-.1-1.125H8v2.13h2.96a2.536 2.536 0 0 1-1.105 1.655v1.385h1.785c1.04-.96 1.64-2.37 1.64-4.045Z"
                    />
                    <Path
                        fill="#34A853"
                        d="M8 13.5c1.485 0 2.73-.49 3.64-1.33l-1.785-1.385c-.49.33-1.115.53-1.855.53-1.43 0-2.645-.965-3.08-2.265H3.09v1.42A5.495 5.495 0 0 0 8 13.5Z"
                    />
                    <Path
                        fill="#FBBC05"
                        d="M4.92 9.045c-.11-.33-.175-.68-.175-1.045 0-.365.065-.715.175-1.045v-1.42H3.09A5.432 5.432 0 0 0 2.5 8c0 .89.215 1.725.59 2.465l1.425-1.11.405-.31Z"
                    />
                    <Path
                        fill="#EA4335"
                        d="M8 4.69a3 3 0 0 1 2.105.82l1.575-1.575C10.725 3.045 9.485 2.5 8 2.5a5.49 5.49 0 0 0-4.91 3.035l1.83 1.42C5.355 5.655 6.57 4.69 8 4.69Z"
                    />
                </Svg>
            );
        case "SNSGoogleM":
            return (
                <Svg width={24} height={24} fill="none" {...props}>
                    <Path
                        fill="#4285F4"
                        d="M20.8 12.208c0-.65-.058-1.275-.167-1.875H12v3.55h4.933a4.227 4.227 0 0 1-1.841 2.759v2.308h2.975C19.8 17.35 20.8 15 20.8 12.208Z"
                    />
                    <Path
                        fill="#34A853"
                        d="M12 21.167c2.475 0 4.55-.817 6.067-2.217l-2.975-2.308c-.817.55-1.858.883-3.092.883-2.383 0-4.408-1.608-5.133-3.775h-3.05v2.367c1.508 2.992 4.6 5.05 8.183 5.05Z"
                    />
                    <Path
                        fill="#FBBC05"
                        d="M6.867 13.742A5.493 5.493 0 0 1 6.575 12c0-.608.109-1.192.292-1.742V7.892h-3.05A9.053 9.053 0 0 0 2.833 12c0 1.483.359 2.875.984 4.108l2.375-1.85.675-.516Z"
                    />
                    <Path
                        fill="#EA4335"
                        d="M12 6.483c1.35 0 2.55.467 3.509 1.367l2.625-2.625C16.542 3.742 14.475 2.833 12 2.833c-3.583 0-6.675 2.059-8.183 5.059l3.05 2.366C7.592 8.092 9.617 6.483 12 6.483Z"
                    />
                </Svg>
            );
        case "MessageErrorR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Circle cx={8} cy={8} r={7} fill="#FF5454" />
                    <Rect
                        width={1.667}
                        height={5}
                        x={7.167}
                        y={3.833}
                        fill="#fff"
                        rx={0.833}
                    />
                    <Circle cx={8} cy={11.334} r={0.833} fill="#fff" />
                </Svg>
            );
        case "MessageSuccessR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Circle cx={8} cy={8} r={7} fill="#01B300" />
                    <Path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m5.14 7.76 2.07 2.028 3.65-3.575"
                    />
                </Svg>
            );
        case "MessageInfoR":
            return (
                <Svg width={16} height={16} fill="none" {...props}>
                    <Circle cx={8} cy={8} r={7} fill="#2E99FF" />
                    <Rect
                        width={1.667}
                        height={5}
                        x={8.833}
                        y={12.167}
                        fill="#fff"
                        rx={0.833}
                        transform="rotate(-180 8.833 12.167)"
                    />
                    <Circle
                        cx={8}
                        cy={4.667}
                        r={0.833}
                        fill="#fff"
                        transform="rotate(-180 8 4.667)"
                    />
                </Svg>
            );
        case "Sad":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Circle cx={16} cy={16} r={12} fill="#FFC700" />
                    <Circle cx={12.25} cy={15} r={1} fill="#1D1F1F" />
                    <Circle cx={19.75} cy={15} r={1} fill="#1D1F1F" />
                    <Path
                        fill="#FF8600"
                        d="M18.003 19.359h-3.992c-.185 0-.288-.21-.16-.343.532-.549 1.163-.766 2.163-.766.921 0 1.657.315 2.14.78.132.127.032.329-.15.329Z"
                    />
                    <Path
                        fill="#E4F2FF"
                        d="M14.126 19.539a1.876 1.876 0 0 1-3.752 0c0-1.001.643-1.657 1.758-2.996a.151.151 0 0 1 .234.002c1.02 1.26 1.76 1.995 1.76 2.994Z"
                    />
                </Svg>
            );
        case "Lock":
            return (
                <Svg width={32} height={32} fill="none" {...props}>
                    <Path
                        stroke="#838A8A"
                        strokeWidth={2}
                        d="M20.735 10.695V9.013a4 4 0 0 0-4-4h-1.47a4 4 0 0 0-4 4v1.682"
                    />
                    <Path
                        fill="#72E0D8"
                        d="M7.126 11.355a2 2 0 0 1 1.997-1.892h13.754a2 2 0 0 1 1.997 1.892l.73 13.524a2 2 0 0 1-1.996 2.108H8.392a2 2 0 0 1-1.997-2.107l.731-13.525Z"
                    />
                </Svg>
            );
        default:
            return null; // 아이콘 타입이 지정되지 않은 경우 null 반환
    }
};

export default Icon;
