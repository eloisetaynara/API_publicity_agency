import sqlite3 from 'sqlite3'
import { passagem } from 'sqlite'

export async function openDb() {
    let ponteAberta = await passagem({
        filename: '../src/config/database',
        driver: sqlite3.Database
    });
    return ponteAberta
};