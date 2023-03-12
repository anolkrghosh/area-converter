"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
class Converter {
    constructor() {
        this.units = [
            "Cent",
            "Bigha",
            "Katha",
            "Decimal",
            "Satak",
            "Chatak",
            "Square Meter",
            "Gaj",
            "Murabba",
            "Jerib",
            "Killa",
            "Biswa",
            "Ankanam",
            "Guntha",
            "Square Link",
            "Square Gaj",
            "Gajam",
            "Dismil",
            "Are",
            "Kanal",
            "Marla",
            "Square Kilometre",
            "Square Metre",
            "Square Mile",
            "Square Yard",
            "Square Feet",
            "Square Inch",
            "Hectare",
            "Acre",
            "Ground",
            "Gunta",
            "Vigha",
            "Dunam",
            "Feddan",
            "Township",
            "Section",
            "Centiare",
            "Rood",
            "Pole",
            "Square Centimeter",
        ];
        this.unitValues = {
            Cent: "435.6",
            Bigha: "14400",
            Katha: "720",
            Decimal: "435.6",
            Satak: "435.6",
            Chatak: "45",
            "Square Meter": "10.7639",
            Gaj: "9",
            Murabba: "1089000",
            Jerib: "21760",
            Killa: "43560",
            Biswa: "1350",
            Ankanam: "72",
            Guntha: "1089",
            "Square Link": "0.434873",
            "Square Gaj": "9",
            Gajam: "9",
            Dismil: "435.6",
            Are: "1076.39",
            Kanal: "5445",
            Marla: "272.251",
            "Square Kilometre": "10760000",
            "Square Metre": "10.7639",
            "Square Mile": "27880000",
            "Square Yard": "9",
            "Square Feet": "1",
            "Square Inch": "0.00694444",
            Hectare: "107639",
            Acre: "43560",
            Ground: "2400",
            Gunta: "1089",
            Vigha: "14400",
            Dunam: "10763.9",
            Feddan: "45208.42",
            Township: "1003626756",
            Section: "27878400",
            Centiare: "10.76391041671",
            Rood: "10890",
            Pole: "10890",
            "Square Centimeter": "0.00107639",
        };
    }
    convert(value, fromUnit, toUnit) {
        const fromValue = parseFloat(this.unitValues[fromUnit]);
        const toValue = parseFloat(this.unitValues[toUnit]);
        return (value * fromValue) / toValue;
    }
    getUnits() {
        return this.units;
    }
}
exports.Converter = Converter;
