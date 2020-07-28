import Dexie from 'dexie';

const restaurantdb = (dbname, table) => {
    const db = new Dexie(dbname);
    db.version(1).stores(table);
    db.open();

    return db;
}

export default restaurantdb;