import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, Button } from 'react-native';
import Slider from 'react-native-slider';

export default function App() {
    // const handleAnimation = () => {
    //     console.log('we initiate animation here.')
    // }

    const [upanimation, setAnimation] = useState(new Animated.Value(0))
    const [lowanimation, setlowAnimation] = useState(new Animated.Value(1))

    const [givenValue, setValue] = useState(0.1);
    const [isStart, setStart] = useState(false);

    const [upBoxColor, setupBoxColor] = useState("red");
    const [lowBoxColor, setLowBoxColor] = useState("blue");

    const uphandleAnimation = () => {



            Animated.sequence([
                Animated.timing(upanimation, {
                    toValue:1,
                    duration: 100
                }),
                Animated.timing(upanimation, {
                    toValue:0,
                    duration: 100
                })
            ]).start(() => {
                uphandleAnimation()

            });




        // Animated.sequence([
        //     Animated.timing(upanimation, {
        //         toValue:1,
        //         duration: 1000
        //     }),
        //     Animated.timing(upanimation, {
        //         toValue:0,
        //         duration: 1000
        //     })
        // ]).start();

        // if(true){
        //     uphandleAnimation()
        // }





    }
    const lowhandleAnimation = () => {


        Animated.sequence([
            Animated.timing(lowanimation, {
                toValue:0,
                duration: 100
            }),
            Animated.timing(lowanimation, {
                toValue:1,
                duration: 100
            })
        ]).start(() => lowhandleAnimation());

    }

    const upboxInterpolation =  upanimation.interpolate({
        inputRange: [0, 1],
        outputRange:[upBoxColor === "red" ? "red": upBoxColor === "blue" ?"blue": upBoxColor === "yellow" ?"yellow": upBoxColor === "green" ?"green":"white"  , "black"]
    })
    const upanimatedStyle = {
        backgroundColor: upboxInterpolation
    }


    const lowboxInterpolation =  lowanimation.interpolate({
        inputRange: [0, 1],
        outputRange:[lowBoxColor === "red" ? "red": lowBoxColor === "blue" ?"blue": lowBoxColor === "yellow" ?"yellow": lowBoxColor === "green" ?"green":"white" , "black"]
    })
    const lowanimatedStyle = {
        backgroundColor: lowboxInterpolation
    }


    return (
        <View style={styles.container}>


            <TouchableWithoutFeedback
                onPress={uphandleAnimation}
            >


                <Animated.View style={{...styles.box, ...upanimatedStyle}} >
                    {/*<View>*/}
                    {/*    <Slider*/}
                    {/*        value={givenValue}*/}
                    {/*        maximumValue={1}*/}
                    {/*        onValueChange={(value) => {setValue(value)}} />*/}
                    {/*    /!*<Text>Value: {value}</Text>*!/*/}
                    {/*</View>*/}
                    <View style={{flexDirection:"row"}}>


                        {/*<Button title="Start" color="black"*/}
                        {/*        disabled={isStart}*/}
                        {/*        onPress={() => {*/}
                        {/*            setStart(true)*/}
                        {/*            uphandleAnimation();*/}

                        {/*            // setupBoxColor("blue")*/}

                        {/*        }}/>*/}

                        {/*<Button title="Stop" color="black"*/}
                        {/*        onPress={() => {*/}
                        {/*            setStart(false)*/}
                        {/*            uphandleAnimation()*/}
                        {/*            // setupBoxColor("blue")*/}

                        {/*        }}/>*/}

                        <Button title="Blue" color="blue"
                                onPress={() => {
                                    setupBoxColor("blue")

                                }}/>
                        <Button title="Red" color="red"
                                onPress={() => {
                                    setupBoxColor("red")

                                }}/>
                        <Button title="Green" color="green"
                                onPress={() => {
                                    setupBoxColor("green")

                                }}/>
                        <Button title="Yellow" color="yellow"
                                onPress={() => {
                                    setupBoxColor("yellow")

                                }}/>
                        <Button title="White" color="white"
                                onPress={() => {
                                    setupBoxColor("white")

                                }}/>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={lowhandleAnimation}>
                <Animated.View style={{...styles.box, ...lowanimatedStyle}} >
                    <View style={{flexDirection:"row"}}>
                        <Button title="Blue" color="blue"
                                onPress={() => {
                                    setLowBoxColor("blue")

                                }}/>
                        <Button title="Red" color="red"
                                onPress={() => {
                                    setLowBoxColor("red")

                                }}/>
                        <Button title="Green" color="green"
                                onPress={() => {
                                    setLowBoxColor("green")

                                }}/>
                        <Button title="Yellow" color="yellow"
                                onPress={() => {
                                    setLowBoxColor("yellow")

                                }}/>
                        <Button title="White" color="white"
                                onPress={() => {
                                    setLowBoxColor("white")

                                }}/>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        width: "100%",
        height: "50%",
        // backgroundColor: '#5AD2F4'
    }
});
