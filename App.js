import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
         Text, 
         View, 
         TouchableOpacity, 
         TextInput
         } from 'react-native';
import { theme } from './colors';
import { useState } from 'react';

// TouchableHighlight,TouchableWithoutFeedback,Pressable 

export default function App() {
  const [working, setWorking] = useState(true);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  const[text, setText] = useState("");

  const onChangeText = (payload) => setText(payload)

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>                
          <Text style={{...styles.btnText, color: working ? "white": theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: !working ? "white": theme.grey}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput 
          // keyboardType='number-pad' keyboardType='email-address' keyboardType='phone-pad' 
          // keyboardType='visible-password'

          // returnKeyType="send"
          // returnKeyType='previous'

          // secureTextEntry   비번치는용
          // multiline
          // placeholderTextColor="red"
          onChangeText={onChangeText}
          // autoCorrect
          // autoCapitalize={"words"}
          value={text}
          placeholder={working ? "Add a To Do": "Where do you want to go?"} style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },

  header:{
    justifyContent: "space-between",
    flexDirection:"row",
    marginTop: 100,
    
  },
  btnText:{
    fontSize: 38,
    fontWeight: "600",
  },
  input:{
    backgroundColor:"white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  }
});
