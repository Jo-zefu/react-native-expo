import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SafeAreaView className="bg-primary h-full w-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text className="text-3xl">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-center flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="font-psemibold text-2xl text-white">
                  Jozefu
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput
              placeholder="Search for a video topic"
              value={searchValue}
              handleSearch={setSearchValue}
            />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="font-pregular text-lg text-gray-100 mb-3">
                Trending Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
