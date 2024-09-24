import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface searchInputType {
  value: string;
  handleSearch: (value: string) => void;
  placeholder?: string;
  otherStyle?: string;
  keyboardType?: string;
}
const SearchInput = ({
  value,
  handleSearch,
  placeholder,
  otherStyle,
  ...others
}: searchInputType) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl items-centers flex-row space-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleSearch}
      />
      <Pressable onPress={() => {}} className="py-5">
        <Image
          source={icons.search}
          className="w-5 h-5 "
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default SearchInput;
