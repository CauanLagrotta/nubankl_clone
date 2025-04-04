import { Pressable, Text, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

type Props = {
  icon: string;
  label: string;
  onPress: () => void;
  badge?: string;
};

export const ButtonAction = ({ icon, label, onPress, badge }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="items-center mx-2"
    >
      <View className="relative bg-gray-200 size-20 rounded-full justify-center items-center shadow-md active:opacity-70">
        <Icon name={icon} size={24} color="black" />

        {badge && (
          <View className="absolute top-1 right-1 bg-nubank rounded-full px-1.5 py-0.5">
            <Text className="text-white text-xs font-bold">{badge}</Text>
          </View>
        )}
      </View>

      <Text className="mt-3 text-center text-base font-medium text-gray-800">
        {label}
      </Text>
    </Pressable>
  );
};
