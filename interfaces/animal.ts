export default interface IAnimal {
    id: number;
    dataCadastro: string;
    nome: string;
    especie: string;
    sexo: string;
    idade: number | null;
    raca: string | null;
    pelagem: string | null;
    sinaisMarcas: string | null;
    porte: string | null;
    peso: number | null;
    dataCastracao: string | null;
    dataVermifugacao: string | null;
    dataVacinacao: string | null;
    dataLeishmaniose: string | null;
    dataReagenteLeishmaniose: string | null;
    dataCarrapaticida: string | null;
    dataAntirrabica: string | null;
    dataSaida: string | null;
    dataObito: string | null;
    anamnese: string | null;
    funcionario: string;
}