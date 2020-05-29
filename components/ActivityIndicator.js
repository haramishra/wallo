import React from "react";
import {ActivityIndicator, View} from "react-native"; 

const Indicator = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

export default Indicator;