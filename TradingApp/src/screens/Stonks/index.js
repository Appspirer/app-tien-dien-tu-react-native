import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, FlatList, SafeAreaView, StatusBar } from 'react-native'
import Color from "../../themes/Color";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import convert from "../../assets/util/convert";

const data = [
    {
        id: 0,
        avatar: Images.Bitmap,
        name: "Gazprom",
        pcs: 24,
        price: 23.22,
        status: 1,
        price_change: 12,
        percent_change: 0.2
    },
    {
        id: 1,
        avatar: Images.Bitmap1,
        name: "Marq English",
        pcs: 13467,
        price: 1346322,
        status: 1,
        price_change: 8356,
        percent_change: 95.5
    },
    {
        id: 2,
        avatar: Images.Bitmap2,
        name: "Tesla, Inc.",
        pcs: 24,
        price: 2322,
        status: 0,
        price_change: 568,
        percent_change: 0.2
    },
    {
        id: 3,
        avatar: Images.Bitmap3,
        name: "Facebook, Inc.",
        pcs: 180,
        price: 1232,
        status: 0,
        price_change: 568,
        percent_change: 0.2
    },
    {
        id: 4,
        avatar: Images.Bitmap4,
        name: "Google, Inc.",
        pcs: 24,
        price: 2322,
        status: 1,
        price_change: 1245,
        percent_change: 0.6
    }
]

export default function Stonks() {

    const [chart, changeChart] = useState(true)

    const renderPrice = (item) => {
        if (chart) {
            return (
                <View style={styles.right_item}>
                    <Text style={styles.text_price}>${convert.convertPriceString(item.price)}</Text>
                    <View style={styles.price_change_container}>
                        {Icons.Icons({ name: item.status === 1 ? "arrow_up_green" : "arrow_down_red", height: 7, width: 7 })}
                        <Text style={[styles.price_change, {
                            color: item.status === 1 ? Color.green : Color.red
                        }]}>${convert.convertPriceString(item.price_change)} <Text style={styles.price_change}>({item.status === 0 ? "-" : ""}{convert.formatPercent(item.percent_change)}%)</Text></Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.right_item_2}>
                    {Icons.Icons({ name: item.status === 1 ? "chart_green" : "chart_red", height: 38, width: 65 })}
                    <Text style={[styles.text_price_2, {
                        color: item.status === 1 ? Color.green : Color.red
                    }]}>{item.status === 1 ? "+" : "-"}{convert.formatPercent(item.percent_change)}%</Text>
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={Images.bg} style={styles.bg}>
                <StatusBar
                    barStyle='light-content'
                />
                <SafeAreaView>
                    <View style={styles.top_container}>
                        <View>
                            <Text style={styles.text_account}>Investment account</Text>
                            <View style={styles.total_money_container}>
                                <Text style={styles.total_money}>$21,478<Text style={styles.cent}>.77</Text></Text>
                                <TouchableOpacity style={styles.dropdown}>
                                    {Icons.Icons({ name: 'arrow_down', height: 6, width: 6 })}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.status_price}>
                                {Icons.Icons({ name: "arrow_up_green", height: 6, width: 6 })}
                                <Text style={styles.text_status_price}>$1,245 (0,6%)</Text>
                            </View>
                        </View>
                        <View style={styles.flag_container}>
                            <Image source={Images.flag} style={styles.flag} />
                        </View>
                    </View>
                    <View style={styles.action_container}>
                        <TouchableOpacity style={styles.add_money}>
                            {Icons.Icons({ name: 'plus', height: 10, width: 10 })}
                            <Text style={styles.text_add_money}>Add money</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.with_draw}>
                            {Icons.Icons({ name: 'arrow_up_right', height: 10, width: 10 })}
                            <Text style={styles.text_with_draw}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more_horizontal}>
                            {Icons.Icons({ name: "more_horizontal", height: 3.75, width: 16 })}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.share_container}>
                        <Text style={styles.share}>My shares</Text>
                        <TouchableOpacity style={styles.chart} onPress={() => changeChart(!chart)}>
                            {Icons.Icons({ name: chart ? "chart_content" : "ic_price", height: 10.14, width: 20.46 })}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.line, { marginTop: 20 }]} />
                    <View style={styles.content_container}>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={styles.item_container}>
                                        {index === 0 ? <View style={{ paddingTop: 20 }} /> : <View style={[styles.line, { margin: 16, alignSelf: 'center' }]} />}
                                        <View style={styles.item}>
                                            <View style={styles.left_item}>
                                                <Image source={item.avatar} style={styles.avatar} />
                                                <View style={styles.left_item_content}>
                                                    <Text style={styles.name}>{item.name}</Text>
                                                    <Text style={styles.pcs}>{item.pcs} pcs</Text>
                                                </View>
                                            </View>
                                            {renderPrice(item)}
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}