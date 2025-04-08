import { ButtonAction } from "components/Button-action";
import { ButtonCard } from "components/Button-card";
import { ButtonGeneral } from "components/Button-general";
import { Header } from "components/Header";
import { ScrollView, Text, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

export default function Screen() {
  return (
    <ScrollView className="h-screen bg-white">
      <Header />

      <ButtonCard title="Conta" onPress={() => {}}>
        <Text className="text-2xl font-semibold">R$ 9999,99+</Text>
      </ButtonCard>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 12 }}
      >
        <ButtonAction icon="pix" label="Pix" onPress={() => {}} />
        <ButtonAction icon="barcode" label="Pagar" onPress={() => {}} />
        <ButtonAction
          icon="hand-holding-dollar"
          label="Pegar emprestado"
          onPress={() => {}}
          badge="Novo"
        />
        <ButtonAction
          icon="money-bill-transfer"
          label="Transferir"
          onPress={() => {}}
        />
        <ButtonAction
          icon="circle-dollar-to-slot"
          label="Depositar"
          onPress={() => {}}
        />
        <ButtonAction icon="money-bill" label="Sacar" onPress={() => {}} />
        <ButtonAction icon="credit-card" label="Cartão" onPress={() => {}} />
        <ButtonAction icon="chart-line" label="Investir" onPress={() => {}} />
        <ButtonAction icon="piggy-bank" label="Guardar" onPress={() => {}} />
      </ScrollView>

      <View className="p-4">
        <ButtonGeneral onPress={() => {}}>
          <View className="flex-row items-center">
            <Icon name="credit-card" size={30} />
            <Text style={{ marginLeft: 16 }} className="text-2xl font-semibold">
              Meus cartões
            </Text>
          </View>
        </ButtonGeneral>
      </View>

      {/* ==================================== */}

      <ScrollView horizontal className="px-4" style={{ marginRight: 14 }}>
        <View className="w-64" style={{ marginRight: 16, width: 288 }}>
          <ButtonGeneral onPress={() => {}}>
            <View className="flex-row flex-wrap">
              <Text className="text-2xl font-semibold">
                Voce tem em emprestimo
              </Text>
              <Text className="text-2xl font-semibold">12.300,00</Text>
              <Text className="text-2xl font-semibold">em emprestimo</Text>
            </View>
          </ButtonGeneral>
        </View>

        <View className="w-64" style={{ marginRight: 16, width: 288 }}>
          <ButtonGeneral onPress={() => {}}>
            <View className="flex-row flex-wrap">
              <Text className="text-2xl font-semibold">
                Voce tem em emprestimo
              </Text>
              <Text className="text-2xl font-semibold">12.300,00</Text>
              <Text className="text-2xl font-semibold">em emprestimo</Text>
            </View>
          </ButtonGeneral>
        </View>
      </ScrollView>

      <ButtonCard title="Cartão de credito" onPress={() => {}}>
        <Text className="text-2xl font-semibold">Fatura atual</Text>
        <Text className="text-2xl font-semibold">R$ 9999,99+</Text>
        <Text className="text-2xl font-semibold">
          Limite disponivel R$ 9999,99+
        </Text>
      </ButtonCard>
    </ScrollView>
  );
}
