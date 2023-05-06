import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axiosHelper from "../helper/axiosHelper";
import dbConfig, { dbInsertMenu } from "../config/dbConfig";
import colors from "../assets/colors";

export const dimension = Dimensions.get("screen");

const MenuScreen = () => {
    const [menuState, setMenuState] =useState({
        menu: []as any[],
        menuSections: []as any[]
    })
    useEffect(() => {
        (async() => {
            const menu = await axiosHelper({
                action: "get",
                routename: "/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json",
            });
            if(menu && menu.status === 200){
                console.log("\n\t menu: ", menu.data.menu)
                const menuData = menu.data.menu as any[];
                const menuSections = []as string[]
                menuData.forEach(async(menu:any) => {
                    !menuSections.includes(menu.category.title) && menuSections.push(menu.category.title);
                    await dbInsertMenu({
                        category: menu.category.title,
                        item_name: menu.title,
                        menu_id: menu.id,
                        price: menu.price
                    })
                });
                setMenuState({
                    ...menuState,
                    menu: menuData,
                    menuSections
                })
            }
        })();
    }, []);
    const renderItem = (data: any) => {
        // console.log("\n\t Data: ", data)
        return(
            <TouchableOpacity>
                <Text style={styles.sectionHeaderText}>{data.item.title}</Text>
            </TouchableOpacity>
        )
    };
    return(
        <View style={styles.container}>
            {
                menuState.menu.length > 0 ?
                <FlatList 
                    data={menuState.menu}
                    renderItem={data => renderItem(data)}
                    keyExtractor={data => data.title}
                />
                :
                <Text>No Menu Items</Text>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        flex: 1
        // height: dimension.height/12
    },
    subjectListContainer:{
        backgroundColor: colors.black,
        flex: 1,
        marginTop: 15,
        alignItems: "flex-start",
        paddingHorizontal: 10
        // height: dimension.height/12
    },
    content: {
        paddingVertical: 20,
        borderBottomColor: colors.green,
        borderBottomWidth: 2,
        elevation: 12,
        borderRadius: 2,
        flexDirection: "row",
        width: dimension.width
    },
    headerText: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.white,
        // borderRadius: 20,
        paddingHorizontal: 5
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.black,
        backgroundColor: colors.green,
        // borderRadius: 20,
        paddingHorizontal: 5,
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 10
    },
    headerTextForActionButtons: {
        fontSize: 23,
        fontWeight: "700",
        color: colors.green,
        paddingVertical: 20,
        borderBottomColor: colors.white,
        borderBottomWidth: 2,
        paddingHorizontal: dimension.width/4,
        elevation: 12,
        borderRadius: 20,
    },
    contentContainer: {
        borderWidth: 2,
        borderRadius: 10,
        // borderColor: colors.green,
        // justifyContent: "center",
        alignItems: "flex-start",
        // height: dimension.height/3,
        // marginHorizontal: 12,
        // width: dimension.width
    },
    opacityContainer: {
        width: dimension.width,
        shadowColor: colors.black
    },
    actionContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default MenuScreen;