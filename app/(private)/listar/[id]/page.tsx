'use client'

import * as React from 'react';
import Link from 'next/link';

import IAnimal from '@/interfaces/animal';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { Camera } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function Content() {
    const animal: IAnimal = {
        id: 1,
        name: 'Pipa',
        type: 'Cachorro',
        employee: 'Daniele',
        cadasterDate: '06/08/2017',
        vaccinationDate: null,
        dewormingDate: null,
        checkoutDate: null,
    }

    return (
        <Paper sx={{ maxWidth: 1000, margin: 'auto', overflow: 'hidden' }}>
            <Box
                color="default"
                sx={{
                    width: '100%',
                    minHeight: '600px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6
                }}
            >
                <Typography variant='h5' fontSize={24}>Ficha do Animal</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 8,
                    padding: '0 32px'
                }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', gap: 2 }}>
                            <Typography variant='h2' fontSize={24}><strong>Nome:</strong> {animal.name} (#{animal.id})</Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
                            <Typography variant='h4' fontSize={16}><strong>Tipo:</strong> {animal.type}</Typography>
                            <Typography variant='h4' fontSize={16}><strong>Cadastro em:</strong> {animal.cadasterDate}</Typography>
                            <Typography variant='h4' fontSize={16}><strong>Cadastro por:</strong> {animal.employee}</Typography>
                        </Box>

                        <Divider />

                        <Typography variant='h5' fontSize={18}>Alterar dados:</Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button variant='contained' sx={{ width: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>Data Vacinação</span>
                            </Button>
                            <Button variant='contained' sx={{ width: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>Data Vermifugação</span>
                            </Button>
                            <Button variant='contained' sx={{ width: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>Data Saída</span>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}>
                        <img
                            src={`https://i.pinimg.com/474x/90/17/c1/9017c173452f0900436774d5cb037a5e.jpg`}
                            alt={`Foto do animal: ${animal.name}`}
                            style={{ border: '1px solid rgba(0,0,0,0.3)', borderRadius: '12px' }}
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
        </Paper >
    )
}