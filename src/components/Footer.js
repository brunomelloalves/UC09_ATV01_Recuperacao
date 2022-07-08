import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, useState} from 'react-native'

export default function Footer() {
  return( 
  <View style={styles.container}>
    <Image source={require('../Image/FooterImage.png')} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    
  }
})