export default interface IAnimal {
    id: number;
    name: string;
    type: string;
    employee: string;
    cadasterDate: string;
    vaccinationDate: string | null;
    dewormingDate: string | null;
    checkoutDate: string | null;   
}