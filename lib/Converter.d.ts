export declare class Converter {
    private units;
    private unitValues;
    convert(value: number, fromUnit: string, toUnit: string): number;
    getUnits(): string[];
}
