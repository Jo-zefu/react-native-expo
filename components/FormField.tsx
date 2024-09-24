import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface FormFieldType {
  title: string;
  value: string;
  handleChange: (value: string) => void;
  placeholder?: string;
  otherStyle?: string;
  keyboardType?: string;
}
const FormField = ({
  title,
  value,
  handleChange,
  placeholder,
  otherStyle,
  ...others
}: FormFieldType) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-centers flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChange}
          secureTextEntry={title === "Password" && hidePassword}
        />
        {title === "Password" && (
          <Pressable
            onPress={() => {
              setHidePassword((pre) => !pre);
            }}
            className="py-5"
          >
            <Image
              source={!hidePassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;
