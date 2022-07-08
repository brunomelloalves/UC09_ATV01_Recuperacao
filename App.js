import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView } from "react-native";
import Produtos from './src/components/produtos'
import Produto1 from './src/components/produto1'
import Produto2 from './src/components/produto2'
import Produto3 from './src/components/produto3'
import Header from './src/components/Header'
import Promocoes from './src/components/Promocoes'
import Footer from './src/components/Footer'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Promocoes />
      <View style={styles.imagens}>
      <Produtos />
      <Produto1 />
      </View>
      <View style={styles.imagens}>
      <Produto2 />      
      <Produto3 />
      </View>
      <Footer />

      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  imagens: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },

  texto: {
    marginTop: 20,
    fontWeight: 'bold', 
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
  },
})
