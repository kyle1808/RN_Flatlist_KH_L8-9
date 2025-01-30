import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { dataType, DATA } from "@/data/appData"

export default function Index() {

  const handleRowPress = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id); // Changes item's id which causes a re-render
  }

  const [selectedId, setSelectedId] = useState<string>("1");

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
            data = {DATA}
            keyExtractor = {(item: dataType) => item.id}
            extraData = {selectedId}
            ItemSeparatorComponent={() => (
              <ListItemSeparator color="blue"/>
            )}
            renderItem = {({item}) =>(
              <ListItem
              item = {item}
              isSelected = {item.id === selectedId}
              onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
