import {readFile, writeFile} from 'node:fs/promises'
import {getDate, monSecret} from "./divers.js";
import {NotFoundError} from "./errors.js";
import {createHash} from 'node:crypto'
import { resolve } from 'node:path';
import { v4 as uuidv4 } from 'uuid';



/* Chemin de stockage des blocks */
const path = './data/blockchain.json'

/**
 * Mes définitions
 * @typedef { id: string, nom: string, don: number, date: string,hash: string} Block
 * @property {string} id
 * @property {string} nom
 * @property {number} don
 * @property {string} date
 * @property {string} string
 *
 */

/**
 * Renvoie un tableau json de tous les blocks
 * @return {Promise<any>}
 */
export async function findBlocks() {
    try {
        const filePath = resolve(path);
        const contents = await readFile(filePath, { encoding: 'utf8' }, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });

        const blockchain = JSON.parse(contents)
        console.log(contents);
        return blockchain;
    } catch (err) {
        console.error(err.message);
    }
}

/**
 * Trouve un block à partir de son id
 * @param partialBlock
 * @return {Promise<Block[]>}
 */

export async function findBlock(partialBlock) {

}
/**
 * Trouve le dernier block de la chaine
 * @return {Promise<Block|null>}
 */
export async function findLastBlock() {
    // A coder

}

/**
 * Creation d'un block depuis le contenu json
 * @param contenu
 * @return {Promise<{hello: string}>}
 */
export async function createBlock(contenu) {
    // A coder
    console.log(uuidv4())
    console.log(getDate())
    console.log(contenu.nom)
    console.log(contenu.somme)

    const blockchain = await findBlocks();
    const newId = uuidv4();
    const currentDate = getDate();
    const newBlock = {
        id: newId,
        nom: contenu.nom,
        don: contenu.don,
        date: currentDate,
        hash: '',
    };

    console.log(newBlock)
    blockchain.push(newBlock);
    await writeFile(path, JSON.stringify(blockchain, null, 2), 'utf-8');
    return blockchain;
}

