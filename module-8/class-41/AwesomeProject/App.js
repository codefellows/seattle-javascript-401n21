import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function App() {
  const { height, width } = useWindowDimensions();
  const [[x, y], setXY] = useState([100, 200]);
  const [[vx, vy], setV] = useState([5, 8]);
  const [log, setLog] = useState("Log");

  const _onPress = useCallback(
    (e) => {
      let pageX = e.nativeEvent.pageX ?? e.pageX;
      let pageY = e.nativeEvent.pageY ?? e.pageY;

      let dx = pageX - x;
      let dy = pageY - y;

      setV([dx / 60, dy / 60]);

      setLog(log + "\n" + JSON.stringify({ pageX, pageY }));
    },
    [x, y]
  );

  useEffect(() => {
    let running = true;
    let _x = x;
    let _y = y;
    let _vx = vx;
    let _vy = vy;

    const update = () => {
      _x += vx;
      _y += vy;
      if (_x > width - 25 || _x < 25) {
        _vx = -_vx;
        setV([_vx, _vy]);
      }
      if (_y > height - 25 || _y < 25) {
        _vy = -_vy;
        setV([_vx, _vy]);
      }
      setXY([_x, _y]);
      if (running) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
    return () => {
      running = false;
    };
  }, [width, height, vx, vy]);

  return (
    <TouchableWithoutFeedback onPress={_onPress}>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            top: y,
            left: x,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            backgroundColor: "red",
            borderRadius: 25,
          }}
        />
        <Text>{log}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
