function update(){
    const base = document.getElementById("base").value;
    const multi = document.getElementById("multiplier").value;
    const chance = document.getElementById("chance").value;

    document.getElementById("currentBase").innerHTML = base;
    document.getElementById("currentBonus").innerHTML = multi;
    document.getElementById("currentChance").innerHTML = `${Math.round(chance*10000)/100}%`;

    const effRaw = Math.round(base * ((multi - 1) * chance + 1))

    document.getElementById("effectiveRaw").innerHTML = effRaw;

    console.log(base, multi, chance);
}