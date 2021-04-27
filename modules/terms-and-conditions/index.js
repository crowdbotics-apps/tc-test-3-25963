// import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
// import { htmlContent } from './content';
import { styles } from './styles';
import HTML from "react-native-render-html";
// import HTMLView from 'react-native-htmlview';

const TermsAndConditions = ({ navigation }) => {
  const contentWidth = useWindowDimensions().width;

  const [htmlContent, setHtmlContent] = useState('<h1> No Terms Loaded </h1>');
  useEffect(() => {
    // Update the document title using the browser API
    //https://tc-test-3-25963.botics.co/modules/terms/termsandconditions/
    console.log("running effect");
    fetch('https://tc-test-3-25963.botics.co/modules/terms/termsandconditions/')
      .then(response => response.json())
      // .then(data => console.log(data[0]['body']))
      .then(data => setHtmlContent(data[0]['body']))
      .catch(err => alert(err));

  });


  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.heading}>
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => {
            navigation.goBack();
          }}>
       {/*   <Icon
            style={styles.icon}
            name={'arrow-left'}
            size={18}
            color="#FFFFFF"
          />*/}
        </TouchableOpacity>
        <Text style={styles.header}>TERMS AND CONDITIONS</Text>
        <View></View>
      </View>

    {/*  <ScrollView style={styles.scrollview}>
        <Text style={styles.text}>{htmlContent}</Text>
      </ScrollView>*/}

       <ScrollView style={{ flex: 1 }}>
           <HTML source={{ html: htmlContent }} contentWidth={contentWidth} />
      </ScrollView>
 {/*     <ScrollView>
         <HTMLView
          value={htmlContent}

        />
      </ScrollView>*/}


    </View>
  );
};

export default {
  title: "Terms and Conditions",
  navigator: TermsAndConditions
}
