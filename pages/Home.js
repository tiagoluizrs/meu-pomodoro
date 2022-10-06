import { View, Text } from "react-native"
import { useState, useEffect } from "react";
import {
  Button,
} from "@react-native-material/core";

const Home = () =>{
    const [minute, setMinute] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [startPomodoro, setStartPomodoro] = useState(false)

    const stopPomodoro = () => {
        // TODO: Alterar o interval para parar dentro desse método
        setMinute(25);
        setSeconds(0);
    }
    const initPomodoro = () => {
        setMinute(24);
        setSeconds(59);
        setStartPomodoro(true);

        let countMinute = 24;
        let intervalMinute = setInterval(() => {
            setMinute(--countMinute);
            if(countMinute === 0){
                clearInterval(intervalMinute);
                clearInterval(intervalSeconds);
            }
        }, 1000 * 60)
        
        let countSecond = 60
        let intervalSeconds = setInterval(() => {
            if (countSecond === 0) {
              setSeconds(59);
              countSecond = 59;
            } else {
              setSeconds(--countSecond);
            }
        }, 1000)
    }

    useEffect(() => {
      
    }, []);

    return (
      <View
        style={{
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: 20,
        }}
      >
        <Text
          variant="h1"
          style={{
            marginBottom: 32,
            fontSize: 48,
          }}
        >
          {`0${minute}`.slice(-2)}:{`0${seconds}`.slice(-2)}
        </Text>
        {/* {startPomodoro ? (
          <Button title="Parar Pomodoro" onPress={stopPomodoro} />
        ) : ( */}
          <Button title="Iniciar Pomodoro" onPress={initPomodoro} />
        {/* )} */}
      </View>
    );
}

export default Home;