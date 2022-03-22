import { Button } from 'native-base';
import React from 'react'
import { Color } from '../../Utils/color';

const FlotingButton = ({ btnString, onPress }) => {
    return (
        <Button
            backgroundColor={Color.orange}
            onPress={onPress}
            rounded="xl"
        >{btnString}</Button>
    )
}

export default FlotingButton;