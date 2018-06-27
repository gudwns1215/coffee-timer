import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Timer extends Component {
    render (){
        return(
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>Time</Text>
                </View>
                <View style={styles.lower}>
                    <Text>Buttons Here!</Text>
                </View>
            </View>
        );
    }
}


const styles = new StyleSheet.create({
    container:{
        
    },
    upper:{

    },
    lower:{

    },
    time:{

    }
});

export default Timer;
