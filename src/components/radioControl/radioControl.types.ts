export interface IRadioControl<Value> {
    label: string;
    value: Value;
    checked?: boolean;
    name?: string;
    onChoose: (value: Value) => void
}