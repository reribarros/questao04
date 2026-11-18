
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';

export default function App() {

  const [temperatura, setTemperatura] = useState('');
  const [sentido, setSentido] = useState('Celsius');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  // Função para realizar a conversão
  function converter() {

    if (temperatura.trim() === '') {
      setErro('Digite uma temperatura.');
      setResultado('');
      return;
    }

    const valor = Number(temperatura.replace(',', '.'));

    if (!Number.isFinite(valor)) {
      setErro('Digite uma temperatura válida.');
      setResultado('');
      return;
    }

    let conversao;

    if (sentido === 'Celsius') {

      // Celsius para Fahrenheit
      conversao = (valor * 9 / 5) + 32;

      setResultado(
        `${conversao.toFixed(2).replace('.', ',')} °F`
      );

    } else {

      // Fahrenheit para Celsius
      conversao = (valor - 32) * 5 / 9;

      setResultado(
        `${conversao.toFixed(2).replace('.', ',')} °C`
      );

    }

    setErro('');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Conversor de Temperatura
      </Text>

      <Text style={styles.label}>
        Escolha o sentido da conversão:
      </Text>

      <View style={styles.opcoes}>

        <Pressable
          style={[
            styles.botaoOpcao,
            sentido === 'Celsius' && styles.selecionado
          ]}
          onPress={() => {
            setSentido('Celsius');
            setResultado('');
            setErro('');
          }}
        >
          <Text style={styles.textoBotao}>
            °C para °F
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.botaoOpcao,
            sentido === 'Fahrenheit' && styles.selecionado
          ]}
          onPress={() => {
            setSentido('Fahrenheit');
            setResultado('');
            setErro('');
          }}
        >
          <Text style={styles.textoBotao}>
            °F para °C
          </Text>
        </Pressable>

      </View>

      <Text style={styles.label}>
        Digite a temperatura:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemplo: 30"
        keyboardType="decimal-pad"
        value={temperatura}
        onChangeText={setTemperatura}
      />

      <Pressable
        style={styles.botaoConverter}
        onPress={converter}
      >
        <Text style={styles.textoConverter}>
          Converter
        </Text>
      </Pressable>

      {erro !== '' && (

        <Text style={styles.erro}>
          {erro}
        </Text>

      )}

      {resultado !== '' && (

        <View style={styles.cardResultado}>

          <Text style={styles.textoResultado}>
            Resultado da conversão:
          </Text>

          <Text style={styles.valorResultado}>
            {resultado}
          </Text>

        </View>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#EAF2F8',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#21618C',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },

  opcoes: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  botaoOpcao: {
    flex: 1,
    backgroundColor: '#D6EAF8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#85C1E9',
  },

  selecionado: {
    backgroundColor: '#2874A6',
    borderColor: '#21618C',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 17,
  },

  botaoConverter: {
    backgroundColor: '#21618C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoConverter: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  cardResultado: {
    backgroundColor: '#D5F5E3',
    padding: 20,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },

  textoResultado: {
    fontSize: 16,
    color: '#333',
  },

  valorResultado: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#196F3D',
    marginTop: 10,
  },

  erro: {
    color: '#C0392B',
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },

});
