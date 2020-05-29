import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import keys from "./keys.json";
// import data from "./data.json";
import ActivityIndicator from "./components/ActivityIndicator";
import Image from "./components/Image";

export default function App() {
  const getRandomPhotoUrl = `https://api.unsplash.com/photos/random/?count=20`;
  const header = { Authorization: `Client-ID ${keys.Access_key}` };
  // const imageCount = 5;

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const flatListRef = useRef();
  const fetchImages = async () => {
    try {
      await fetch(getRandomPhotoUrl, { headers: header })
        .then((res) => res.json())
        .then((data) => {
          setImages(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageClick = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    fetchImages();
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={images}
          ref={flatListRef}
          horizontal
          pagingEnabled
          renderItem={(data) => (
            <Image data={data} handleImageClick={handleImageClick} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
