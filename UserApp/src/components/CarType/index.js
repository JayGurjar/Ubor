import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import UberTypeRow from '../CarTypeRowRender';

import typesData from '../../assets/data/types';

const UberTypes = ({typeState,onSubmit}) => {
  const [selectedType,setselectedType] = typeState;
  // const confirm = () => {
  //   console.warn('confirm');
  // };
  
  return (
    <View>
      {typesData.map((type,key) => (
        <UberTypeRow type={type} key={key}
        isSelected={type.id=== selectedType}
        onPress={()=> setselectedType(type.id)} />
      ))}

      <Pressable onPress={onSubmit} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 5,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;