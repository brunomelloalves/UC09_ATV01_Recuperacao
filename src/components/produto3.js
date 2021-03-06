import React, {useState} from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native'

const Produtos = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              //   style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image
                style={{width: 250, height: 250}}
                source={require('../Image/04.webp')}
              />
              <Text style={styles.texto}>
                {'\n'}O Melhor pelo menor preço {'\n'}
                R$ 250,00
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image
            style={{width: 180, height: 130}}
            source={require('../Image/04.webp')}
          />
          <Text style={styles.texto}>Clique e saiba mais</Text>
        </Pressable>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default Produtos
