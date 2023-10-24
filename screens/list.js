import React, { useState } from 'react';
import { FlatList, Image, Text, Modal, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import Separator from '../components/separator';

const datas = [
  // Data Anda di sini
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.view} onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderModal = (selectedItem) => {
    return (
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        transparent={true}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{selectedItem.title}</Text>
            <Button
              block
              info
              style={styles.showAlertButton}
              onPress={showAlert}
            >
              <Text>Lanjut Membaca</Text>
            </Button>
            <Button
              block
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text>Tutup</Text>
            </Button>
          </View>
        </View>
      </Modal>
    );
  };

  const showAlert = () => {
    Alert.alert("Alert", "Maaf, Artikel Belum Tersedia", [
      { text: "OK", onPress: () => console.log("Ok Pressed") }
    ]);
  };

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {selectedItem && renderModal(selectedItem)}
    </View>
  );
};

const styles = {
  view: {
    padding: 15,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: null,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  showAlertButton: {
    marginTop: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#E9B824',
  },
};

export default List;
