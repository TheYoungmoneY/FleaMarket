import React, { useState, Component, useContext} from 'react';
import DeleteButton from './DeleteButton';
import { TodoListContext } from '~/Context/TodoListContext';

import {Button, StyleSheet, Text, View} from 'react-native';

import Modal from 'react-native-modal';

const styles = StyleSheet.create({
    content: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
      fontSize: 20,
      marginBottom: 12,
    },
  });

interface Props {}

const DeleteAll = ({  }: Props) => {
    const { deleteTodoList } = useContext<ITodoListContext>(
        TodoListContext
    );

    // State를 이용하여 Modal을 제어함
    const [modalVisible, setModalVisible] = useState<boolean>(false);

 return (
      <View style={{flex:1}}>
        <DeleteButton title="전체 삭제하기" onPress={() => setModalVisible(true)} />
        <Modal 
            isVisible={modalVisible} 
            coverScreen={true} 
            onBackdropPress={() => setModalVisible(false)}>
          <View style={styles.content}>
            <Text style={styles.contentTitle} >정말로 삭제하시겠습니까? 🤪</Text>
            <Button title="삭제" onPress={() => {deleteTodoList(); setModalVisible(false);}} />
            <Button title="취소" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
  );
};
export default DeleteAll;
