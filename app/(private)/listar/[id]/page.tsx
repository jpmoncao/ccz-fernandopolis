'use client'

import * as React from 'react';
import Link from 'next/link';

import IAnimal from '@/interfaces/animal';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function Content() {
    const animal: IAnimal = {
        id: 1,
        dataCadastro: '2024-05-08',
        nome: "Rex",
        especie: "Cão",
        sexo: "Macho",
        idade: 5,
        raca: "Labrador",
        pelagem: "Curta e amarela",
        sinaisMarcas: "Nenhum sinal ou marca visível",
        porte: "Médio",
        peso: 25,
        dataCastracao: "2022-03-15",
        dataVermifugacao: "2024-06-20",
        dataVacinacao: "2024-06-20",
        dataLeishmaniose: "2023-07-10",
        dataReagenteLeishmaniose: "2023-07-12",
        dataCarrapaticida: "2024-07-01",
        dataAntirrabica: "2024-05-10",
        dataSaida: null, // Caso o animal ainda não tenha saído
        dataObito: null, // Caso o animal esteja vivo
        anamnese: null,
        funcionario: "João Silva"
    };

    const formatDate = (dateString: string): string => {
        // Cria a data a partir da string sem levar em consideração o fuso horário
        const [year, month, day] = dateString.split('-');
        const dateObject = new Date(Number(year), Number(month) - 1, Number(day));

        // Verificar se a data é válida
        if (isNaN(dateObject.getTime())) {
            return dateString; // Se a data for inválida, retorna a string original
        }

        // Formatar a data no formato dd/mm/yyyy
        const formattedDate = dateObject.toLocaleDateString('pt-BR');

        return formattedDate; // Retorna a data formatada
    };



    return (
        <Paper sx={{ margin: 'auto', overflow: 'hidden' }} >
            <Box
                color="default"
                sx={{
                    width: '100%',
                    minHeight: '600px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
            >
                <Typography variant='h5' fontSize={24}>REGISTRO CCZ <span style={{ paddingLeft: '4rem' }}>Nº {animal.id}</span></Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px',
                    gap: 2
                }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 8,
                    }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            flexGrow: 1
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                width: '60%'
                            }}>
                                <Divider />
                                <Box sx={{ display: 'flex', flexDirection: 'row', padding: '0.5rem 0', alignItems: 'end', gap: 2 }}>
                                    <Typography variant='h2' fontSize={22}><strong>Data:</strong> {formatDate(animal.dataCadastro)}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', padding: '0.5rem 0', alignItems: 'end', gap: 2 }}>
                                    <Typography variant='h2' fontSize={22}><strong>Nome:</strong> {animal.nome}</Typography>
                                </Box>

                                <Divider />
                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '0.5rem 0', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Espécie:</strong> {animal.especie}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Sexo:</strong> {animal.sexo}</Typography>
                                </Box>


                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '0.5rem 0', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Idade:</strong> {animal.idade}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Raça:</strong> {animal.raca}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Pelagem:</strong> {animal.pelagem}</Typography>
                                </Box>


                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '0.5rem 0', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Sinais/Marcas:</strong> {animal.sinaisMarcas}</Typography>
                                </Box>


                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '0.5rem 0', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Porte:</strong> {animal.porte}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Peso:</strong> {animal.peso}kg</Typography>
                                </Box>


                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '0.5rem 0', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Castrado em:</strong> {!animal.dataCastracao ? '' : formatDate(animal.dataCastracao)}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Vermifugado em:</strong> {!animal.dataVermifugacao ? '' : formatDate(animal.dataVermifugacao)}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Vacinado em:</strong> {!animal.dataVacinacao ? '' : formatDate(animal.dataVacinacao)}</Typography>
                                </Box>


                                <Typography variant='h5' fontSize={16} sx={{ padding: '0.5rem 0 0' }}>Exame Leishmaniose D.P.P.:</Typography>
                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '0 0 0.5rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Feito em:</strong> {animal.dataLeishmaniose ? formatDate(animal.dataLeishmaniose) : 'Não Informado'}</Typography>
                                    <Typography variant='h4' fontSize={16}>
                                        {animal.dataReagenteLeishmaniose
                                            ? <><strong>Reagente em:</strong> {formatDate(animal.dataReagenteLeishmaniose)}</>
                                            : 'Não Reagente'}
                                    </Typography>
                                </Box>


                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '1rem 0', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Carrapaticida em:</strong> {!animal.dataCarrapaticida ? '' : formatDate(animal.dataCarrapaticida)}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Antirrábica em:</strong> {!animal.dataAntirrabica ? '' : formatDate(animal.dataAntirrabica)}</Typography>
                                </Box>


                                <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, padding: '1rem 0', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <Typography variant='h4' fontSize={16}><strong>Data Sáida:</strong> {!animal.dataSaida ? '' : formatDate(animal.dataSaida)}</Typography>
                                    <Typography variant='h4' fontSize={16}><strong>Data Óbito:</strong> {!animal.dataObito ? '' : formatDate(animal.dataObito)}</Typography>
                                </Box>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                                width: '40%'
                            }}>
                                <img
                                    src={`https://i.pinimg.com/474x/90/17/c1/9017c173452f0900436774d5cb037a5e.jpg`}
                                    alt={`Foto do animal: ${animal.nome}`}
                                    style={{ border: '1px solid rgba(0,0,0,0.3)', borderRadius: '12px', maxHeight: '400px' }}
                                    loading="lazy"
                                />
                                <Button
                                    variant='contained'
                                    sx={{ width: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    aria-label={`info about foto do animal`}
                                >
                                    <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>Alterar Imagem</span>
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Divider />
                    <Typography variant='h5' fontSize={18}>Anamnese:</Typography>
                    <Box sx={{ display: 'flex', columnGap: 8, rowGap: 3, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                        <Typography variant='h4' fontSize={16}>{animal.anamnese ?? 'Nada informado na anamnese'}</Typography>
                    </Box>
                    <Divider />
                </Box>
            </Box>
        </Paper >
    )
}