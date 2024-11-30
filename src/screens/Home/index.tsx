import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function aoPrecionar() {
    if (participantName === "") {
      return Alert.alert(
        "Sem nome do participante",
        "Necessário adicionar o nome do participante"
      );
    }

    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existente",
        "Esse participante já existe no sistema"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function removeParticipante(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.conteiner}>
      {/* textos */}
      <Text style={styles.titulo}>Evento X - Tecnologia</Text>
      <Text style={styles.subtitulo}>Terça, 5 de Setembro de 2023</Text>
      <View style={styles.dataEvento}>
        {/* input */}
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setParticipantName}
          value={participantName}
        />
        {/* botao */}
        <TouchableOpacity style={styles.botao} onPress={aoPrecionar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemover={() => removeParticipante(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.lista}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* {
        participants.map(participant => (
          <Participant 
          key={participant} 
          name={participant} 
          onRemover={removeParticipante} />
        ))
      } */}
      {/* </ScrollView> */}
    </View>
  );
}
