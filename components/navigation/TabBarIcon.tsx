// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import { View, Image, Text } from "react-native";
import { type ImageSourcePropType } from "react-native";

interface TabBarIconType {
  icon: ImageSourcePropType;
  name: string;
  color: string;
  focused: boolean;
}

export function TabBarIcon({
  icon,
  name,
  color,
  focused,
  ...rest
}: TabBarIconType) {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
}
