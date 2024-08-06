export class Customer {
    private readonly _firstName: string;
    private readonly _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}
