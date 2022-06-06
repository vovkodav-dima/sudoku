export interface ICell {
    value: number | undefined;
    readonly?: boolean;
    error?: boolean;
    onChange: (value: number | undefined) => void
}