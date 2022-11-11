/*
* TODO
*   Systemstart
*   System Konfiguration
*   System auf Richtigkeit Überprüfen
* */

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
    *   Localstorage names
    *   RAM = PCSPEC_RAM
    *   CPU = PCSPEC_CPU
    *   motherboard = PCSPEC_MOTHERBOARD
    *   PC = PC here add is "Hardware" valid then is true
    *   errors = Errormessages
    *   SYSTEM = add true if system Valid
    *   Status = display Information if System started / crashed or booting
    * */
}