/**
 * @description Definie la variable pour le hash du premier bloc
 * @type {string}
 */
export const monSecret = "";

/**
 * @description Retourne un timestamp au format aaaammjj-hh:mm:ss
 * @return {string}
 */
export function getDate() {
    // A coder
    let formattedDate;
    let date = new Date();
    formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    return formattedDate.toISOString();
}