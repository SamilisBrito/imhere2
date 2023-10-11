import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemover: () => void;
};

export function Participant({ name, onRemover }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text> 

      <TouchableOpacity style={styles.botao} onPress={onRemover}>
        <Text style={styles.textoBotao}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
