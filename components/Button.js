import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlPress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				position: "absolute",
				width: 40,
				height: 40,
				backgroundColor: COLORS.white,
				borderRadius: SIZES.extraLarge,
				alignItems: "center",
				justifyContent: "center",
				...SHADOWS.light,
				...props,
			}}
			onPress={handlPress}
		>
			<Image
				source={imgUrl}
				resizeMode="contain"
				style={{ width: 24, height: 24 }}
			/>
		</TouchableOpacity>
	);
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.primary,
				borderRadius: SIZES.extraLarge,
				minWidth: minWidth,
				padding: SIZES.small,
				...props,
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: fontSize,
					color: COLORS.white,
					textAlign: "center",
				}}
			>
				Place a bid
			</Text>
		</TouchableOpacity>
	);
};
