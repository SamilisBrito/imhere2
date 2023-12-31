import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  titulo: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  subtitulo: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 24,
  },
  botao: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },

  dataEvento: {
    width: "100%",
    flexDirection: "row",
    marginTop:36,
    marginBottom: 42,
  },
  lista: {
    color: '#FFF',
    fontSize: 14,
    textAlign: "center",
  }
});
