import IconPhoneBlack from "@/assets/images/icons/phoneBlack";
import { HeaderArrowLargeTitle } from "@/components/Headers/headerArrowBackLargeTitle";
import { colors, typographyStyles } from "@/constants/theme";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ThemeErequest";


export default function ERequest() {
    const [selected, setSelected] = useState(1);
    const options = [
        { id: 1, label: "I have a flat tire" },
        { id: 2, label: "Problems with the keys" },
        { id: 3, label: "The car ran out of fuel" },
        { id: 4, label: "Other" }];
    return (
        <View>
            <HeaderArrowLargeTitle title="Request assistance" />
            <View style={styles.bodyContainer}>
                <View style={styles.reasonContainer}>
                    <View><Text style={typographyStyles.titleMedium}>Reason to contact assistance</Text></View>
                    <View>
                        <View style={styles.container}>
                            {options.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.row}
                                    onPress={() => setSelected(item.id)}>
                                    <View style={selected === item.id && styles.radioCheck || styles.radio}>
                                        {selected === item.id && <View style={styles.radioSelected} />}
                                    </View>
                                    <Text style={[styles.labelButton, typographyStyles.labelLarge]}>{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.NextButton}>
                            <Pressable><Text style={[typographyStyles.labelLarge, {color: colors.white}]}>Next</Text></Pressable>
                        </View>
                        <View style={styles.callCenterButton}>
                            <IconPhoneBlack size="16"/>
                            <Pressable><Text style={typographyStyles.titleMedium}>Call Center</Text></Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}