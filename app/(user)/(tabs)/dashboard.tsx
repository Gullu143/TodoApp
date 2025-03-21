import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { MainScreen, NotificationIcon } from "@/assets/images";
import { Button } from "@/components/Button";
import { CircularProgress } from "@/components/CircularProgress";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
const data = [
  { id: "1", title: "App Design", group: "Office" },
  { id: "1", title: "App Design", group: "Home" },
  { id: "1", title: "App Design", group: "Daily Study" },
  { id: "1", title: "App Design", group: "Personal" },
];

export default function DashboardScreen() {
  return (
    <ScrollView className="p-3">
      <View className="flex-row gap-2 justify-between items-center">
        <View className="flex-row gap-3  items-center">
          <Image
            source={MainScreen}
            className="w-[45] h-[45] rounded-full border"
          />
          <View>
            <Text className="font-lexenda-regular text-[14px]">Hello!</Text>
            <Text className="text-[18px] font-lexenda-medium">
              Haroon Ahmed
            </Text>
          </View>
        </View>
        <NotificationIcon width={24} height={24} />
      </View>
      <View className="bg-blue-800 rounded-[12px] p-4 mt-4">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-white font-lexenda-regular">
              Your task almost done
            </Text>
            <Button title="View Task" customClass="mt-4" />
          </View>

          <CircularProgress
            size={80}
            percentage={75}
            textColor="text-white"
            textSize="text-lg"
          />
        </View>
      </View>
      <View>
        <Text className="my-4 font-lexenda-semiBold text-[14px]">
          In Progress
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="bg-blue-200 p-4 rounded-2xl me-2 w-[220]">
              <View className="flex-row justify-between items-start">
                <Text className="text-[12px] font-lexenda-regular">
                  {item.group}
                </Text>
                <View className="h-[25px] w-[25px] bg-pink-500 rounded-md justify-center items-center">
                  <Feather name="briefcase" color="#fff" size={16} />
                </View>
              </View>
              <Text className="text-[15px] font-lexenda-regular">
                {item.title}
              </Text>
              <View className="w-full bg-gray-200 rounded-full h-3 mt-5">
                <View
                  className="bg-blue-500 h-full rounded-full"
                  style={{ width: `30%` }}
                />
              </View>
            </View>
          )}
        />
      </View>
      <Text className="my-4 font-lexenda-semiBold text-[14px]">
        Task Groups
      </Text>
      <View className="p-4 bg-white rounded-lg shadow-lg mb-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4">
            <View className="h-[40px] w-[40px] bg-pink-500 rounded-md justify-center items-center">
              <Feather name="briefcase" color="#fff" size={20} />
            </View>
            <View>
              <Text className="text-[14px] font-lexenda-regular mb-1">
                Office
              </Text>
              <Text className="text-[12px] font-lexenda-regular text-gray-500">
                22 Tasks
              </Text>
            </View>
          </View>
          <View>
            <CircularProgress
              percentage={60}
              size={40}
              textColor="text-black"
              textSize="text-[12px]"
            />
          </View>
        </View>
      </View>
      <View className="p-4 bg-white rounded-lg shadow-lg mb-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4">
            <View className="h-[40px] w-[40px] bg-pink-500 rounded-md justify-center items-center">
              <Feather name="briefcase" color="#fff" size={20} />
            </View>
            <View>
              <Text className="text-[14px] font-lexenda-regular mb-1">
                Office
              </Text>
              <Text className="text-[12px] font-lexenda-regular text-gray-500">
                22 Tasks
              </Text>
            </View>
          </View>
          <View>
            <CircularProgress
              percentage={60}
              size={40}
              textColor="text-black"
              textSize="text-[12px]"
            />
          </View>
        </View>
      </View>
      <View className="p-4 bg-white rounded-lg shadow-lg mb-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4">
            <View className="h-[40px] w-[40px] bg-pink-500 rounded-md justify-center items-center">
              <Feather name="briefcase" color="#fff" size={20} />
            </View>
            <View>
              <Text className="text-[14px] font-lexenda-regular mb-1">
                Office
              </Text>
              <Text className="text-[12px] font-lexenda-regular text-gray-500">
                22 Tasks
              </Text>
            </View>
          </View>
          <View>
            <CircularProgress
              percentage={60}
              size={40}
              textColor="text-black"
              textSize="text-[12px]"
            />
          </View>
        </View>
      </View>
      <View className="p-4 bg-white rounded-lg shadow-lg mb-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4">
            <View className="h-[40px] w-[40px] bg-pink-500 rounded-md justify-center items-center">
              <Feather name="briefcase" color="#fff" size={20} />
            </View>
            <View>
              <Text className="text-[14px] font-lexenda-regular mb-1">
                Office
              </Text>
              <Text className="text-[12px] font-lexenda-regular text-gray-500">
                22 Tasks
              </Text>
            </View>
          </View>
          <View>
            <CircularProgress
              percentage={60}
              size={40}
              textColor="text-black"
              textSize="text-[12px]"
            />
          </View>
        </View>
      </View>
      <View className="p-4 bg-white rounded-lg shadow-lg mb-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4">
            <View className="h-[40px] w-[40px] bg-pink-500 rounded-md justify-center items-center">
              <Feather name="briefcase" color="#fff" size={20} />
            </View>
            <View>
              <Text className="text-[14px] font-lexenda-regular mb-1">
                Office
              </Text>
              <Text className="text-[12px] font-lexenda-regular text-gray-500">
                22 Tasks
              </Text>
            </View>
          </View>
          <View>
            <CircularProgress
              percentage={60}
              size={40}
              textColor="text-black"
              textSize="text-[12px]"
            />
          </View>
        </View>
      </View>
      <View className="p-4 bg-white rounded-lg shadow-lg mb-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4">
            <View className="h-[40px] w-[40px] bg-pink-500 rounded-md justify-center items-center">
              <Feather name="briefcase" color="#fff" size={20} />
            </View>
            <View>
              <Text className="text-[14px] font-lexenda-regular mb-1">
                Office
              </Text>
              <Text className="text-[12px] font-lexenda-regular text-gray-500">
                22 Tasks
              </Text>
            </View>
          </View>
          <View>
            <CircularProgress
              percentage={60}
              size={40}
              textColor="text-black"
              textSize="text-[12px]"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
