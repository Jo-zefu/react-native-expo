import { View, Text, FlatList } from "react-native";
import React from "react";

interface TrendingItem {
  id: number;
}

interface TrendingType {
  post: TrendingItem[];
}
const Trending = ({ post }: TrendingType) => {
  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text className="text-3xl">{item.id}</Text>}
      horizontal
    />
  );
};

export default Trending;
