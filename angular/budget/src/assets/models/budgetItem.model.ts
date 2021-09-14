export class BudgetItem {
    public amount: number;
    public description: string;

    constructor(amount?: number, description?: string) {
        this.amount = amount;
        this.description = description;
    }
}