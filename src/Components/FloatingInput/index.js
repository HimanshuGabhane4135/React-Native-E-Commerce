import { Input, NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'
import { Color } from '../../Utils/color'
import Feather from 'react-native-vector-icons/Feather';

const FloatingInput = ({ placeholder, w, h, keyboardType, onChangeText, InputLeftElement, targetName, value, error, iconName }) => {
    return (
        <View>
            <Input
                placeholder={placeholder}
                w={w}
                h={h}
                name={targetName}
                value={value}
                my={2} //margin-top and margin-bottom
                variant="outline"
                borderColor="#C8C8C8"
                borderWidth={1}
                borderRadius={10}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                // InputLeftElement={InputLeftElement}
                InputLeftElement={<Feather name={iconName} size={20} color={Color.gray} style={{ padding: 5 }} />}
                _focus={{
                    borderColor: Color.blue
                }}
            />
            <Text fontSize="xs" pl="2" color={Color.red}>{error}</Text>
        </View>
    )
}
export default FloatingInput;

{/* <Input placeholder='Phone number' w={300} variant="outline" borderColor={Color.blue} borderWidth={2} /> */ }
