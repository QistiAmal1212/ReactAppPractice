import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { TextInput, Button, Card  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 

const FourthScreen = () => {
  const navigation = useNavigation();

  const [form1, setForm1] = useState('');
  const [form2, setForm2] = useState('');
  const [form3, setForm3] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');

  const handleFormChange = (text, setForm, setError) => {
    setForm(text);

    if (!text.trim()) {
      setError('Input is required');
    } else if (!/^[a-zA-Z0-9]+$/.test(text)) {
      setError('Input should contain only letters and numbers');
    } else {
      setError('');
    }
  };

  const handleForm1Change = (text) => {
    handleFormChange(text, setForm1, setError1);
  };

  const handleForm2Change = (text) => {
    handleFormChange(text, setForm2, setError2);
  };

  const handleForm3Change = (text) => {
    handleFormChange(text, setForm3, setError3);
  };

  const handleFormSubmit = () => {
    // Validate input for form1
    if (!form1.trim()) {
      setError1('Input is required');
      return;
    } else if (!/^[a-zA-Z0-9]+$/.test(form1)) {
      setError1('Input should contain only letters and numbers');
      return;
    } else {
      setError1('');
    }

    // Validate input for form2
    if (!form2.trim()) {
      setError2('Input is required');
      return;
    } else if (!/^[a-zA-Z0-9]+$/.test(form2)) {
      setError2('Input should contain only letters and numbers');
      return;
    } else {
      setError2('');
    }

    // Validate input for form3
    if (!form3.trim()) {
      setError3('Input is required');
      return;
    } else if (!/^[a-zA-Z0-9]+$/.test(form3)) {
      setError3('Input should contain only letters and numbers');
      return;
    } else {
      setError3('');
    }

    // Continue with your form submission logic here
    console.log('Form 1:', form1);
    console.log('Form 2:', form2);
    console.log('Form 3:', form3);

    // If there are no errors, navigate to the third screen
    if (!error1 && !error2 && !error3) {
     

    }
  };

  return (
    <ImageBackground
    source={require('../img/bck3.jpg')}
    style={styles.background}
  >
    
    <View style={styles.container}>
    <View style={styles.container2}>
    <Card>
    
      <TextInput
        label="Form 1"
        value={form1}
        onChangeText={handleForm1Change}
        style={styles.input}
      />
  {error1 ? <Text style={styles.error}>{error1}</Text> : null}
    
      <TextInput
        label="Form 2"
        value={form2}
        onChangeText={handleForm2Change}
        style={styles.input}
      />
  {error2 ? <Text style={styles.error}>{error2}</Text> : null}
     
      <TextInput
        label="Form 3"
        value={form3}
        onChangeText={handleForm3Change}
        style={styles.input}
      />
 {error3 ? <Text style={styles.error}>{error3}</Text> : null}
      <Button mode="contained" onPress={handleFormSubmit} style={styles.button}>
        Submit
      </Button>
      </Card>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    // backgroundColor: '#ffff',
    // backgroundColor: '#fffff0',
    alignItems: 'center',
    // marginTop: 100,
    padding: 16,
  },
  container2:{
    width: '100%',
    marginTop: 30,
  },
  input: {
    marginTop:20,
    marginBottom: 10,
    width: '90%',
    marginLeft:'5%',
    height:50,
    backgroundColor: '#fff',
    borderRadius:10,
     
    
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
    width: '50%',
    marginLeft:'45%',
    backgroundColor: '#3498db',
  },
  error: {
    color: 'red',
    marginLeft:'5%',
  },
});


export default FourthScreen;
