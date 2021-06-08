import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import UserComponentStyles from './userComponentStyles';
const UserComponent = (props) => {
    user = props.user;
    return (
        <View style={UserComponentStyles.container}>
            <Image source={{ uri: user.avatar }}
                style={{ width: 280, height: 200 }} />
            <Text>{user.nombre}</Text>
            <Text>{user.pais } - {user.ciudad}</Text>
            <Text>Valor: {user.precio}</Text>
        </View>
    );
}
export default UserComponent;