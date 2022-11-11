/*
* TODO
*   Systemstart
*   System Konfiguration
*   System auf Richtigkeit Überprüfen
* */

/* TODO REMOVE IT */ console.info("DEBUG: init.js Loaded");

let computer = {
    ram: 0,
    cpu: "",
    motherboard: "",

}

const availableSettings = {
    RAM: ["8 GB", "16 GB", "32 GB"],
    CPU: ["AMD", "ARM", "INTEL"],
    MOTHERBOARD: ["MSI-mATX", "Gigabyte-ATX"],
}

function config(setting) {
    let typ = setting.toUpperCase();
    let arr = "";
    if(typ === "RAM") {
         arr = availableSettings.RAM;
    }

    if(typ === "CPU") {
        arr = availableSettings.CPU;
    }

    if(typ === "MOTHERBOARD") {
        arr = availableSettings.MOTHERBOARD;
    }

    for(let i = 0; i < arr.length; i++) {
        document.write(`<option>${arr[i]}</option>`);
    }

}

function setupSystem() {
    /*
    * TODO
    *   FILL IT localstorage and Variables from User-inputs
    * */
}