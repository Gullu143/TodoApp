import { NotificationIcon } from "@/assets/images";
import Feather from "@expo/vector-icons/Feather";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function AddProjectScreen() {
  const [selected, setSelected] = useState("option1");
  return (
    <View className="p-3">
      <View className="flex-row gap-2 justify-between items-center">
        <View>
          <Feather name="arrow-left" size={25} />
        </View>
        <View>
          <Text className="font-lexenda-medium text-[16px]">Add Project</Text>
        </View>
        <View>
          <NotificationIcon width={20} height={20} />
        </View>
      </View>
      <View className="flex-row justify-around p-4">
        {["Home", "Office", "Other"].map((option) => (
          <TouchableOpacity
            key={option}
            className={`w-24 h-24 items-center justify-center rounded-lg border-2 ${
              selected === option
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300 bg-gray-100"
            }`}
            onPress={() => setSelected(option)}
          >
            <Text
              className={`text-lg font-semibold ${
                selected === option ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="p-4 bg-white rounded-lg shadow-lg mt-4">
        <TextInput placeholder="Type task here ..." />
      </View>
      <View className="p-4 bg-white rounded-lg shadow-lg mt-4">
        <TextInput
          placeholder="Enter description..."
          multiline
          numberOfLines={12}
        />
      </View>
    </View>
  );
}
