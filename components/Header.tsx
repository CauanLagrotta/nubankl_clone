import { Text, View, SafeAreaView } from "react-native";
import { ProfileIcon } from "./ProfileIcon";
import { ButtonIcon } from "./Button-icon";

export const Header = () => {
  return (
    <SafeAreaView className="bg-nubank text-white">
      <View className="flex-row justify-between px-4 py-10">
        <ProfileIcon />
        <View className="flex-row justify-between">
          <ButtonIcon icon="eye-slash" onPress={() => alert("User pressed")} />
          <ButtonIcon icon="circle-question" onPress={() => alert("User pressed")} />
          <ButtonIcon icon="message" onPress={() => alert("User pressed")} />

        </View>
      </View>
      <View className="px-4 py-5">
        <Text className="text-white font-bold text-2xl">Hello Dava</Text>
      </View>
    </SafeAreaView>
  );
};
