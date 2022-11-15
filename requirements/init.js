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

function checkSystemConfiguration() {
    console.info("TEST");
    // TODO WORK IN PROGRESS //
    /*
    * PC AUS && Configuration Nicht abgeschlossen
    * PC AN
    * PC Aus && Configuration Abgeschlossen
    * */
    if(!localStorage.getItem("PC")) {
        window.location.href = "/../";
    } else {

    }
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

    let ram = document.querySelector("#ram");
    let cpu = document.querySelector("#cpu");
    let motherboard = document.querySelector("#motherboard");
    let error = document.querySelector("#error");

    for(let i = 0; i < availableSettings.RAM.length; i++) {
        error.innerHTML = "";

        if(ram.value === availableSettings.RAM[i]) {
            localStorage.setItem("PCSPEC_RAM", ram.value);
            localStorage.setItem("PC", true);
            break;
        }

        if(i >= availableSettings.RAM.length - 1 && ram.value !== availableSettings.RAM[i] || ram.value === "") {
            error.innerHTML += "<p class='error'>RAM ungültig</p>";
            error.setAttribute("style", "display: block");
            localStorage.setItem("PC", false);
            return 0;
        }
    }

    for(let i = 0; i < availableSettings.CPU.length; i++) {
        error.innerHTML = "";

        if(cpu.value === availableSettings.CPU[i]) {
            localStorage.setItem("PCSPEC_CPU", cpu.value);
            localStorage.setItem("PC", true);
            break;
        }

        if(i >= availableSettings.CPU.length - 1 && cpu.value !== availableSettings.CPU[i] || cpu.value === "") {
            error.innerHTML += "<p class='error'>CPU ungültig</p>";
            error.setAttribute("style", "display: block");
            localStorage.setItem("PC", false);
            return 0;
        }
    }

    for(let i = 0; i < availableSettings.MOTHERBOARD.length; i++) {
        error.innerHTML = "";

        if(motherboard.value === availableSettings.MOTHERBOARD[i]) {
            localStorage.setItem("PCSPEC_MOTHERBOARD", motherboard.value);
            localStorage.setItem("PC", true);
            break;
        }

        if(i >= availableSettings.MOTHERBOARD.length - 1 && motherboard.value !== availableSettings.MOTHERBOARD[i] || motherboard.value === "") {
            error.innerHTML += "<p class='error'>MOTHERBOARD ungültig</p>";
            error.setAttribute("style", "display: block");
            localStorage.setItem("PC", false);
            return 0;
        }
    }

    if(localStorage.getItem("PC")) {
        checkSystemConfiguration();
        let configurator = document.querySelector("#configurator");
        let start = document.querySelector("#start");
        localStorage.setItem("System", "OFF");
        configurator.setAttribute("style", "display: none");
        start.setAttribute("style", "display: none");
    }


}

window.setTimeout("checkSystemConfiguration()", 1);