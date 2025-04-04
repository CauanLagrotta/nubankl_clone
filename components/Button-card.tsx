import { Pressable, Text, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

type Props = {
  title: string;
  onPress: () => void;
  children?: React.ReactNode;
};

export const ButtonCard = ({ title, onPress, children }: Props) => {
  return (
    <Pressable onPress={onPress} className="p-4 py-8    ">
      <View className="mb-4 flex-row justify-between items-center">
        <Text className="font-bold text-2xl">{title}</Text>

        <View className="mr-3">
          <Icon name="chevron-right" size={24} color="black" />
        </View>
      </View>

      {children}
    </Pressable>
  );
};
