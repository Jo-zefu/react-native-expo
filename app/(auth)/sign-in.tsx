import { Image, Text, View, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useState } from "react";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { getCurrentUser, signIn } from "@/lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields!");
    }
    setIsSubmitting(true);
    try {
      await signIn(form);
      const result = await getCurrentUser();
      setUser(result);
      setLoggedIn(true);
      Alert.alert("Success", "User signed in successfully");
      router.push("/home");
    } catch (err: any) {
      Alert.alert("Error", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <ScrollView>
        <View className="w-full min-h-[83px] justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold font-psemibold text-white mt-10">
            Sign in
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChange={(e: string) => {
              setForm({ ...form, email: e });
            }}
            otherStyle="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChange={(e: string) => {
              setForm({ ...form, password: e });
            }}
            otherStyle="mt-10"
          />
          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg font-pregular text-gray-100">
              Don’t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-lg font-psemibold text-secondary"
              >
                Signup
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
