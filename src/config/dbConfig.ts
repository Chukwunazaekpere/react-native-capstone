import SQLite from "react-native-sqlite-storage";

const dbSuccess = async() => {
    try {
        // console.info("\n\t DB connection was successful");
        const db = await dbConfig();
        db.executeSql(`
        CREATE TABLE IF NOT EXIST Menu (
            menu_id INT PRIMARY KEY,
            item_name VARCHAR(30),
            category VARCHAR(30),
            price DECIMAL
        )
        `, 
        []
        );
        // console.info("\n\t DB connection was successful.");
        return true
    } catch (error) {
        console.log("\n\t Error: ", error)
        return false
    }
}

interface InsertInterface {
    menu_id: string
    category: string
    price: number
    item_name: string
}
export const dbInsertMenu = async(props: InsertInterface) => {
    const db = await dbConfig()
    db.transaction(tx => {
        tx.executeSql(`
        INSERT INTO Menu VALUES(menu_id, item_name, category, price)
        VALUES(?, ?, ?, ?)
        `),
        [props.menu_id, props.item_name, props.category, props.price],
        (trans:any, result:any) => {
            console.log("\n\t Result: ", result)
            console.log("\n\t trans: ", trans)
        }
    })
};

function openCB() {
    console.log('open!')
}
function errorCB(err: any) {
    console.log(err)
}
const dbConfig = async() => {
    const db = await SQLite.openDatabase({
        name:  "little_lemon_db",
    },dbSuccess, errorCB)
    return db;
};
export default dbConfig