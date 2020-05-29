import React from "react";
import { Image, TouchableWithoutFeedback, Dimensions, View } from "react-native";
import ActivityIndicator from "./ActivityIndicator";

const ImageItem = (props) => {
//   const { url } = props;
const {urls, title} = props.data.item; 
  console.log("this is image data ", props.data.urls);
  const { height, width } = Dimensions.get("screen");

  return (
    <View
      style={{
        // height: height,
        // width: width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator />
      <TouchableWithoutFeedback onPress={props.handleImageClick}>
        <Image
          source={{ uri: urls.regular }}
          resizeMethod={"resize"}
          style={{
            width,
            height,
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ImageItem;
