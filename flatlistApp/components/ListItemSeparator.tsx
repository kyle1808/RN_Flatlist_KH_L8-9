import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import colors from "../styles/colors";

type propType = {
  color?: string;
}

const ListItemSeparator: React.FC<propType> = ({color}) => {
  return (
    <View
      style = {[
        styles.separator,
        { backgroundColor: color || colors.theme.light.text },
      ]}
    />
  )
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: "100%",
  } as ViewStyle, // Style can only be used on <View> components
});
