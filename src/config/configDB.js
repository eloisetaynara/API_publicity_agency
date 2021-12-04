import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
    let ponteAberta = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });
    return ponteAberta
};