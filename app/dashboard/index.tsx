import { Text, View } from "react-native";
import { NotificationIcon } from "@/assets/images"; // Make sure this imports the correct SVG component

export default function DashboardScreen() {
  return (
    <View>
      <View className="">
        <View>
          <Text>hello</Text>
        </View>
        <View>
          <NotificationIcon width={24} height={24} />
          {/* SVG is now a component */}
        </View>
      </View>
    </View>
  );
}
