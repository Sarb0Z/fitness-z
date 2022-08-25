import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const Exercise = (props: any) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(new Date());

  const addActivity = () => {
    console.log("activity");
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Exercise Name</Text>
        <TextInput
          placeholder={"Exercise Name"}
          style={styles.input_placeholder}
          value={name + ""}
          onChangeText={(input) => {
            setName(input);
          }}
        />
      </View>
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Duration</Text>
        <TextInput
          placeholder={"0"}
          style={styles.input_placeholder}
          value={duration + ""}
          onChangeText={(input) => {
            setDuration(input);
          }}
        />
      </View>
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Calories</Text>
        <TextInput
          style={styles.input_placeholder}
          value={calories + ""}
          placeholder={"0"}
          onChangeText={(input) => {
            setCalories(input);
          }}
        />
      </View>
      <View style={[styles.input_box, { height: 55 }]}>
        <Text style={styles.input_title}>Date</Text>
        <View style={styles.input_placeholder}>
          <DateTimePicker
            style={{ width: "100%" }}
            mode="date"
            value={date}
            onChange={(event, input) => {
              setDate(input);
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => addActivity()} style={styles.btn_shape}>
        <Text style={styles.btn_text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={[styles.btn_shape, { backgroundColor: "red" }]}
      >
        <Text style={styles.btn_text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input_box: {
    width: "75%",
    height: 40,
    marginBottom: 25,
  },
  input_title: {
    color: "#121212",
    marginTop: -20,
  },
  input_placeholder: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    color: "#121212",
    backgroundColor: "rgba(230,230,230,1)",
  },
  btn_shape: {
    backgroundColor: "rgba(99,206,237,1)",
    borderRadius: 10,
    width: "40%",
    height: 40,
    marginBottom: 15,
    justifyContent: "center",
  },
  btn_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Exercise;
