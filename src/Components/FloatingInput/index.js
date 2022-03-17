import { Input, NativeBaseProvider } from 'native-base'
import React from 'react'
import { Color } from '../../Utils/color'

const FloatingInput = ({ placeholder, w, h, keyboardType, onChangeText }) => {
    return (
        <Input
            placeholder={placeholder}
            w={w}
            h={h}
            variant="outline"
            borderColor={Color.blue}
            borderWidth={3}
            borderRadius={10}        
            onChangeText={onChangeText}
            keyboardType={keyboardType}
        />
    )
}
export default FloatingInput;

{/* <Input placeholder='Phone number' w={300} variant="outline" borderColor={Color.blue} borderWidth={2} /> */ }
