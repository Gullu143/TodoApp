import { MainScreen } from "@/assets/images";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView>
      <View>
        <View>
          <Image source={MainScreen} className="w-full h-[500]" />
        </View>
        <View className="mb-8 px-6">
          <Text className="font-lexenda-semiBold text-4xl mb-[20] text-center">
            Task Management
          </Text>
          <Text className="font-lexenda-regular text-xl mb-[40] text-gray-400 text-center w-full">
            This productive tool is designed to help you better manage your task
            project-wise conveniently!
          </Text>
          <Button
            title="Let’s Start"
            onPress={() => router.push("/dashboard")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
