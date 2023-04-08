/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';
import Advice from './Advice';

function App(): JSX.Element {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');
  const [thinking, setThinking] = useState(true)

  const handleGetAdvice = async () => {
    setThinking(true)
    setTimeout(() => {
      console.log('fetching random advice...')
      fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setAdviceId(data.slip.id)
          setAdvice(data.slip.advice)
          setThinking(false)
        }).catch(error => {
          setThinking(false)
          console.error(error);
          Alert.alert('Error', error.message, [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            { text: 'OK' }
          ]);
        });
    }, 3000)
  }

  useEffect(() => {
    handleGetAdvice();
  }, [])

  return (

    <SafeAreaView style={styles.container}>
      {thinking && <ActivityIndicator size="large" color="white" />}
      {!thinking && <View
        style={styles.view}>
        <Advice advice={advice} adviceId={adviceId} handleGetAdvice={handleGetAdvice} />
      </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#323a49',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10.24,
    elevation: 13
  },

  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1f2632' }
})




export default App;
