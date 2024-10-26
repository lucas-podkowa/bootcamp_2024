
//----------------------------------------------------------------
//---------------   COMMON JS ------------------------------------
//----------------------------------------------------------------


// function saludar(name) {
//     return 'hola ' + name;
// }

// function despedir(name) {
//     return 'chau ' + name;
// }

// function chiflar(name) {
//     return 'fiu fiu' + name;
// }


// module.exports = { saludar, despedir }; // si me exporto a los demas, entonces todo aquel que me requiera puede utilizarme



//----------------------------------------------------------------
//---------------   ES Modules -----------------------------------
//----------------------------------------------------------------

export function saludar(name) {
    return 'hola ' + name;
}

export function despedir(name) {
    return 'adios ' + name;
}

