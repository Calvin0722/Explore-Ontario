import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import TitleText from "../TitleText";

const SettingHeader = props => (
    <View style={styles.header}>
        <View style={styles.backView}>
            <Button title={"back"} onPress={() => {}}/>
        </View>
        <View style={styles.TitleView}>
            <TitleText>{props.title}</TitleText>
        </View>
    </View>
)

const styles = StyleSheet.create({
    backView:{
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 10
    },

    TitleView: {
        paddingLeft: 10,
        flexGrow: 2,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    header: {
        width: "100%",
        flexDirection: "row",
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: "center",
    }
})
export default SettingHeader