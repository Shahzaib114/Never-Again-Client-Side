import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header';
import { COLORS } from '../../utility/colors/LightColors';
import styles from './style';


const Boycott = () => {
    return (
        <View style={styles.mainview}>
            <ScrollView>
                <View style={styles.headerview}>
                    <Header
                        isBack={true}
                    />
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text1}>How & Why Proof it Works</Text>
                    <View style={{ marginTop: "2%" }}>
                        <Text style={styles.text2}>Intro</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.text4}>
                        "Never Again" stands as an innovative application designed{'\n'}to empower individuals in making informed consumer{'\n'}choices by boycotting Israeli companies. It provides{'\n'} a platform for conscientious consumers to align their{'\n'} purchasing decisions with their ethical beliefs,{'\n'} aiming to affect change through economic influence.
                    </Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>Real Impact in Numbers</Text>
                </View>
                <View>
                    <Text style={styles.text3}>In a bold move echoing the sentiments of ethical{'\n'} responsibility, the founder of Myprotein made a{'\n'} groundbreaking decision to divest from Israeli{'\n'} businesses within their portfolio, alongside a{'\n'} stance against supporting arms companies.{'\n'}{'\n'} This decision, representing a divestment of approximately{'\n'} £500m, transcends financial gains, emphasizing{'\n'} the importance of integrity over profit margins.{'\n'}{'\n'}

                        More than a symbolic gesture, this divestment{'\n'} is poised to have tangible consequences, potentially{'\n'} leading to a collective divestment effort by a consortium{'\n'} of family offices representing a combined AUM{'\n'} of over €4 billion. These actions illustrate a growing{'\n'} trend among investors and businesses, highlighting{'\n'} the prioritization of ethical alignment within{'\n'} investment strategies.{'\n'}{'\n'}

                        Reports indicate that this conscientious stance{'\n'} is not without its financial consequences. Israeli{'\n'} companies are reportedly facing a loss of{'\n'} approximately 10% in revenue due to such{'\n'} divestment decisions. This figure underscores {'\n'}the substantial influence that ethical consumer{'\n'} and investment choices can wield, prompting{'\n'} companies to reassess their policies in{'\n'} response to societal concerns.</Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>A Movement in Progress</Text>
                </View>
                <View>
                    <Text style={styles.text3}>
                    The divestment by the Myprotein founder isn’t{'\n'} merely an isolated event. It signifies a broader{'\n'} movement toward ethical investing and conscientious{'\n'} consumerism. Discussions with a consortium{'\n'} of family offices, with a combined AUM{'\n'} of over €4 billion, to follow suit highlight{'\n'} a growing sentiment among investors to{'\n'} prioritize ethical alignment in their portfolios.
                    </Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>Economic Impact</Text>
                </View>
                <View style={{marginBottom:"5%"}}>
                    <Text style={styles.text3}>
                    "Never Again" serves as a catalyst for ethical change.{'\n'} It echoes the sentiments of individuals and businesses{'\n'} alike, urging for a reevaluation of practices and{'\n'} policies that conflict with ethical principles. The impact{'\n'} isn’t just theoretical; it's in the actions of individuals and{'\n'} the decisions of responsible investors, driving a shift{'\n'} towards a more ethically conscious global landscape.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Boycott;