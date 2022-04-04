import { Button } from 'native-base';
import React from 'react'
import { Color } from '../../Utils/color';

const FlotingButton = ({ btnString, onPress,m,mx,my }) => {
    return (
        <Button
            backgroundColor={Color.orange}
            onPress={onPress}
            rounded="xl"
            m={m}
            mx={mx}
            my={my}
        >{btnString}</Button>
    )
}

export default FlotingButton;