import React from "react";
import { Image } from "react-native";

interface TabBarIconProps {
  name: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, size }) => {
  return <Image source={require(name)} style={{ width: size, height: size }} />;
};

export default TabBarIcon;
