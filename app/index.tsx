import { ButtonAction } from "components/Button-action";
import { ButtonCard } from "components/Button-card";
import { Header } from "components/Header";
import { ScrollView, Text } from "react-native";

export default function Screen() {
  return (
    <ScrollView className="h-screen bg-white">
      <Header />

      <ButtonCard title="Conta" onPress={() => {}}>
        <Text className="text-2xl font-semibold">R$ 9999,99+</Text>
      </ButtonCard>

      <ScrollView
        horizontal
        
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 12}}
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
    </ScrollView>
  );
}
