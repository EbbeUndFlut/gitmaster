
const os = require("os");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const messages = [
    "Berechne die Temperatur eines digitalen Steins...",
    "Frage Hamster nach Admin-Rechten...",
    "Lade unnötige Pixel herunter...",
    "Optimiere die Optimierung...",
    "Suche nach dem Sinn des Internets...",
    "Entferne imaginäre Viren...",
    "Starte Windows XP in deinem Kühlschrank...",
    "Kalibriere den RGB-Wert der Luft...",
    "Verhandle mit localhost...",
    "Berechne 0 / 0 ...",
    "Bitte warten, denke nach...",
    "Installiere mehr RAM in der Cloud..."
];

const colors = [
    "\x1b[31m",
    "\x1b[32m",
    "\x1b[33m",
    "\x1b[34m",
    "\x1b[35m",
    "\x1b[36m"
];

const reset = "\x1b[0m";

async function uselessCore() {
    console.clear();

    console.log(`
╔══════════════════════════════════════╗
║           USELESS CORE v9.0          ║
║       Advanced Nothing Engine        ║
╚══════════════════════════════════════╝
`);

    console.log("System:", os.platform());
    console.log("CPU:", os.cpus()[0].model);
    console.log("RAM:", (os.totalmem() / 1024 ** 3).toFixed(2), "GB");

    console.log("\nInitialisiere Nutzlosigkeit...\n");

    let progress = 0;

    while (true) {
        const color = random(colors);

        progress = Math.min(100, progress + Math.random() * 15);

        const bar = "█".repeat(Math.floor(progress / 5))
            + "░".repeat(20 - Math.floor(progress / 5));

        process.stdout.write(
            `\r${color}[${bar}] ${progress.toFixed(1)}%${reset}`
        );

        if (progress >= 100) {
            await sleep(500);

            console.log("\n\n[ SUCCESS ] 100% NICHTS ERREICHT.");

            progress = 0;

            await sleep(1000);
        }

        if (Math.random() < 0.3) {
            console.log("\n" + random(messages));
        }

        await sleep(200);
    }
}

uselessCore();
