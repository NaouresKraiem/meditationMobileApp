import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

const Splash = () => {
  const navigation = useNavigation<any>();
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    const fadeInAnimation = Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });
    const navigateToTabNavigator = () => {
      navigation.navigate("TabNavigator");
    };

    fadeInAnimation.start(() => {
      navigateToTabNavigator();
    });
  }, [navigation, opacity]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/splash.png")}
        style={[styles.image, { opacity }]}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Splash;
