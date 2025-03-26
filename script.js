const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const options = [
    { text: "MULA_T2", img: "https://render.albiononline.com/v1/item/T2_MOUNT_MULE.png" },
    { text: "CABALLO_T3", img: "https://render.albiononline.com/v1/item/T3_MOUNT_HORSE.png" },
    { text: "CABALLO_T4", img: "https://render.albiononline.com/v1/item/T4_MOUNT_HORSE.png" },
    { text: "CABALLO_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_HORSE.png" },
    { text: "CABALLO_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_HORSE.png" },
    { text: "CABALLO_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_HORSE.png" },
    { text: "CABALLO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_HORSE.png" },
    { text: "BUEY_T3", img: "https://render.albiononline.com/v1/item/T3_MOUNT_OX.png" },
    { text: "BUEY_T4", img: "https://render.albiononline.com/v1/item/T4_MOUNT_OX.png" },
    { text: "BUEY_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_OX.png" },
    { text: "BUEY_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_OX.png" },
    { text: "BUEY_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_OX.png" },
    { text: "BUEY_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_OX.png" },
    { text: "CIERVO_T4", img: "https://render.albiononline.com/v1/item/T4_MOUNT_GIANTSTAG.png" },
    { text: "CABALLO GUERRA_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_ARMORED_HORSE_SKIN_01.png" },
    { text: "CABALLO GUERRA_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_ARMORED_HORSE_SKIN_01.png" },
    { text: "CABALLO GUERRA_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_ARMORED_HORSE_SKIN_01.png" },
    { text: "CABALLO GUERRA_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_ARMORED_HORSE_SKIN_01.png" },
    { text: "GARRAPRESTA_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_COUGAR_KEEPER@1.png" },
    { text: "GARRAFURIA_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_COUGAR_KEEPER@1.png" },
    { text: "OSO INVIERNO_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_DIREBEAR_FW_FORTSTERLING.png" },
    { text: "JABALI_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_DIREBOAR_FW_LYMHURST.png" },
    { text: "LOBO_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_GREYWOLF_FW_CAERLEON.png" },
    { text: "AVE_MOA_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_MOABIRD_FW_BRIDGEWATCH.png" },
    { text: "BUHO_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_OWL_FW_BRECILIEN.png" },
    { text: "CARNERO_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_RAM_FW_MARTLOCK.png" },
    { text: "SALAMANDRA_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_SWAMPDRAGON_FW_THETFORD.png" },
    { text: "CABALLO_BLINDADO_T5", img: "https://render.albiononline.com/v1/item/T5_MOUNT_ARMORED_HORSE.png" },
    { text: "CABALLO_BLINDADO_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_ARMORED_HORSE.png" },
    { text: "CABALLO_BLINDADO_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_ARMORED_HORSE.png" },
    { text: "CABALLO_BLINDADO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_ARMORED_HORSE.png" },
    { text: "HUARGO_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_DIREWOLF.png" },
    { text: "CARNERO_HIELO_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_FROSTRAM_ADC.png" },
    { text: "ALCE_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_GIANTSTAG_MOOSE.png" },
    { text: "BALISTA_T6", img: "https://render.albiononline.com/v1/item/T6_MOUNT_SIEGE_BALLISTA.png" },
    { text: "BASILISCO_VENENOSO_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_ARMORED_SWAMPDRAGON_BATTLE.png" },
    { text: "JABALI_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_DIREBOAR.png" },
    { text: "HUSKY_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_HUSKY_ADC.png" },
    { text: "LAGARTIJA_PLAGA_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_MONITORLIZARD_ADC.png" },
    { text: "DRAGON_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_SWAMPDRAGON.png" },
    { text: "BASILISCO_AVALONIANO_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_SWAMPDRAGON_AVALON_BASILISK.png" },
    { text: "BASILISCO_FUEGO_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_SWAMPDRAGON_BATTLE.png" },
    { text: "AVE_TERROR_T7", img: "https://render.albiononline.com/v1/item/T7_MOUNT_TERRORBIRD_ADC.png" },
    { text: "PESADILLA_MORGANA_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_ARMORED_HORSE_MORGANA@1.png" },
    { text: "OSO_GIGANTE_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_DIREBEAR.png" },
    { text: "OSO_INVIERNO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_DIREBEAR_FW_FORTSTERLING_ELITE.png" },
    { text: "JABALI_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_DIREBOAR_FW_LYMHURST_ELITE.png" },
    { text: "LOBO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_GREYWOLF_FW_CAERLEON_ELITE.png" },
    { text: "CABALLO_HUESUDO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_HORSE_UNDEAD@1.png" },
    { text: "MAMUT_COMANDO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_MAMMOTH_BATTLE@1.png" },
    { text: "MAMUT_TRANSPORTE_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_MAMMOTH_TRANSPORT.png" },
    { text: "AVE_TERROR_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_MOABIRD_FW_BRIDGEWATCH_ELITE.png" },
    { text: "BUHO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_OWL_FW_BRECILIEN_ELITE.png" },
    { text: "CARNERO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_RAM_FW_MARTLOCK_ELITE.png" },
    { text: "SALAMANDRA_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_SWAMPDRAGON_FW_THETFORD_ELITE.png" },
    { text: "AGUILA_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_ARMORED_EAGLE_CRYSTAL.png" },
    { text: "AGUILA_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_ARMORED_EAGLE_GOLD.png" },
    { text: "AGUILA_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_ARMORED_EAGLE_SILVER.png" },
    { text: "BASTION_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BASTION_CRYSTAL.png" },
    { text: "BASTION_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BASTION_GOLD.png" },
    { text: "BASTION_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BASTION_SILVER.png" },
    { text: "MURCIELAGO_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BAT_PERSONAL.png" },
    { text: "MUERCIELAGO_T3", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BAT_TELLAFRIEND.png" },
    { text: "GOLIAT_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BATTLESPIDER_CRYSTAL.png" },
    { text: "GOLIAT_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BATTLESPIDER_GOLD.png" },
    { text: "GOLIAT_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BATTLESPIDER_SILVER.png" },
    { text: "OSO_GRIZZLY_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BEAR_KEEPER_ADC.png" },
    { text: "ESCARABAJO_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BEETLE_CRYSTAL.png" },
    { text: "ESCARABAJO_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BEETLE_GOLD.png" },
    { text: "ESCARABAJO_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BEETLE_SILVER.png" },
    { text: "BEHEMOTH_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BEHEMOTH_CRYSTAL.png" },
    { text: "BEHEMOTH_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BEHEMOTH_GOLD.png" },
    { text: "BEHEMOTH_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BEHEMOTH_SILVER.png" },
    { text: "PANTERA_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_BLACK_PANTHER_ADC.png" },
    { text: "BUHO_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_DIVINE_OWL_ADC.png" },
    { text: "ENT_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_ENT_CRYSTAL.png" },
    { text: "ENT_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_ENT_GOLD.png" },
    { text: "ENT_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_ENT_SILVER.png" },
    { text: "CABALLO_GALLARDO_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_GIANT_HORSE_ADC.png" },
    { text: "SAPO_GIGANTE_T3", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_GIANTTOAD_02_TELLAFRIEND.png" },
    { text: "SAPO_T3", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_GIANTTOAD_TELLAFRIEND.png" },
    { text: "MULA_HEREJE_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_HERETIC_MULE_ADC.png" },
    { text: "JUGGERNAUT_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_JUGGERNAUT_CRYSTAL.png" },
    { text: "JUGGERNAUT_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_JUGGERNAUT_GOLD.png" },
    { text: "JUGGERNAUT_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_JUGGERNAUT_SILVER.png" },
    { text: "AVE_MOA_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_MOABIRD_TELLAFRIEND.png" },
    { text: "CUERVO_MORGANA_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_MORGANA_RAVEN_ADC.png" },
    { text: "CARNERO_T3", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_RAM_TELLAFRIEND.png" },
    { text: "ARIETE_YULE_T3", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_RAM_XMAS.png" },
    { text: "RINOCERONTE_T5", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_RHINO_SEASON_BRONZE.png" },
    { text: "RINOCERONTE_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_RHINO_SEASON_CRYSTAL.png" },
    { text: "RINOCERONTE_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_RHINO_SEASON_GOLD.png" },
    { text: "RINOCERONTE_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_RHINO_SEASON_SILVER.png" },
    { text: "ESCARABAJO_FALANGE_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_TANKBEETLE_CRYSTAL.png" },
    { text: "ESCARABAJO_FALANGE_T7", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_TANKBEETLE_GOLD.png" },
    { text: "ESCARABAJO_FALANGE_T6", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_TANKBEETLE_SILVER.png" },
    { text: "TORRE_MOVIL_T8", img: "https://render.albiononline.com/v1/item/UNIQUE_MOUNT_TOWER_CHARIOT_CRYSTAL.png" },
    { text: "CONEJO_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_RABBIT_EASTER.png" },
    { text: "CONEJO_CARLEON_T8", img: "https://render.albiononline.com/v1/item/T8_MOUNT_RABBIT_EASTER_DARK@1.png" }
];

let angle = 0;

// Añadir opciones a la ruleta (hasta 100 opciones)
function addOption(text, imgSrc) {
    if (options.length >= 100) return;
    const img = new Image();
    img.src = imgSrc;
    options.push({ text, img });
}

// Dibujar la ruleta
function drawWheel() {
    const numOptions = options.length;
    if (numOptions === 0) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    const anglePerSlice = (2 * Math.PI) / numOptions;
    
    options.forEach((option, index) => {
        const startAngle = angle + index * anglePerSlice;
        const endAngle = startAngle + anglePerSlice;
        
        // Dibujar sector
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = index % 2 === 0 ? "#FFD700" : "#FF4500";
        ctx.fill();
        ctx.stroke();
        
        // Dibujar texto
        const textAngle = startAngle + anglePerSlice / 2;
        const textX = centerX + Math.cos(textAngle) * (radius * 0.7);
        const textY = centerY + Math.sin(textAngle) * (radius * 0.7);
        ctx.fillStyle = "black";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(option.text, textX, textY);
        
        // Dibujar imagen
        option.img.onload = function() {
            const imgX = centerX + Math.cos(textAngle) * (radius * 0.5) - 15;
            const imgY = centerY + Math.sin(textAngle) * (radius * 0.5) - 15;
            ctx.drawImage(option.img, imgX, imgY, 30, 30);
        };
    });
}

// Girar la ruleta
function spinWheel() {
    let spinAngle = Math.random() * 360 + 720; // Al menos 2 vueltas completas
    let spinSpeed = 10;

    function animateSpin() {
        if (spinSpeed > 0.1) {
            angle += spinSpeed;
            spinSpeed *= 0.98;
            drawWheel();
            requestAnimationFrame(animateSpin);
        } else {
            // Determinar el ganador
            const index = Math.floor(((angle % 360) / 360) * options.length);
            console.log("Ganador: ", options[index].text);
        }
    }
    animateSpin();
}

// Ejemplo de uso
addOption("Opción 1", "https://via.placeholder.com/30");
addOption("Opción 2", "https://via.placeholder.com/30");
drawWheel();