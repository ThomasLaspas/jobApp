import React from "react";
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { PropsHeader } from "@/assets/types";
import styles from "./screenheader.style";
import { SIZES } from "@/constants";
interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: number;
  handlePress?: () => void;
}
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: ScreenHeaderBtnProps) => {
  const btnImgStyle = {
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25
  };

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={btnImgStyle} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
