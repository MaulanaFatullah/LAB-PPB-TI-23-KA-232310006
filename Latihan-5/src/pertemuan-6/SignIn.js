import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [messageType, setMessageType] = useState("Error"); // "Error", "Warning", "Alert"

  // Kredensial yang valid
  const validCredentials = {
    email: "212310016@student.ibik.ac.id",
    password: "BESTstudent_2023",
  };

  const handlerValidMail = (value) => {
    setEmail(value);
    setErrorMessage(""); // Clear error on input change
    setModalVisible(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      setValidEmail("");
    } else {
      setValidEmail("Invalid email");
    }
  };

  const showMessage = (message, type = "Error") => {
    setErrorMessage(message);
    setMessageType(type);
    setModalVisible(true);
  };

  const handleSignIn = () => {
    // Validasi email kosong
    if (!email) {
      showMessage("Email must be filled", "Error");
      return;
    }

    // Validasi password kosong
    if (!password) {
      showMessage("Password must be filled", "Error");
      return;
    }

    // Validasi format email 
    if (validEmail) {
      showMessage("Invalid email format", "Error");
      return;
    }
    const alphaNumericSymbol = /^[a-zA-Z0-9]+$/;

    // Validasi kredensial
    if (email === validCredentials.email && password === validCredentials.password) {
      // Login berhasil, langsung navigasi ke Home
      if (alphaNumericSymbol.test(password)) {
        showMessage("Value must contain alphabet, number and symbol", "Warning");
        return;
      }
      setErrorMessage(""); // Clear error on success
      setModalVisible(false);
      if (navigation) {
        navigation.replace("Home"); // Gunakan replace agar tidak bisa back ke login
      } else {
        showMessage("Unable to navigate to Home", "Error");
      }
    } else if (password.length <= 3) {
      // Validasi panjang password
      showMessage("Type minimum 3 character", "Warning");
    } else {
      // Login gagal
      showMessage("Email/Password is not match", "Error");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/icons/LOGO_IBIK.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>IBI Kesatuan</Text>
        <Text style={styles.subtitle}>Bogor Indonesia</Text>
      </View>

      {/* Background image with students */}
      <Image
        source={require("../../assets/icons/images.jpeg")}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="npm@student.ibik.ac.id"
          value={email}
          onChangeText={handlerValidMail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {validEmail ? <Text style={styles.errorText}>{validEmail}</Text> : null}

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrorMessage(""); // Clear error on input change
              setModalVisible(false);
            }}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for messages */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setErrorMessage("");
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={[styles.modalTitle, messageType === "Error" ? styles.errorTitle : messageType === "Warning" ? styles.warningTitle : styles.alertTitle]}>
              {messageType}
            </Text>
            <Text style={styles.modalText}>{errorMessage}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => {setModalVisible(false); setErrorMessage(""); }} >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#800080",
  },
  subtitle: {
    fontSize: 14,
    color: "#800080",
  },
  banner: {
    width: "100%",
    height: 180,
    marginTop: 15,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -35,
    marginRight: 10,
    bottom: 10,
  },
  signInButton: {
    backgroundColor: "#800080",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  errorTitle: {
    color: "#ff0000",
  },
  warningTitle: {
    color: "#ff9900",
  },
  alertTitle: {
    color: "#007bff",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  closeButton: {
    backgroundColor: "#800080",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignIn;
