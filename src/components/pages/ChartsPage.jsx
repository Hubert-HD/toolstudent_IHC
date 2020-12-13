import React from "react"
import "../../styles/curriculum.scss"

// Nuevos estilos
import "../../styles/curriculum.css"

import {Bar, Line, Pie, Radar, Polar} from 'react-chartjs-2';

const ChartsPage = () => (
    <div className="curriculum-container">
        
        {/* POLAR */}
        <div className="marco">
            <h1>Gráfico Polar</h1>
            <Polar 
                data = {{
                    labels: ['IHC', 'EMAT', 'MIR', 'ADA', 'EE', 'AC'],
                    datasets: [{
                        label: '# of Votes',
                        data: [14, 17, 13, 18, 11, 16],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }],
                    
                }}
                height={410}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scale: {
                        angleLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 20
                        }
                    }
                }}
            />
        </div>

        {/* BAR */}
        <div className="marco">
        <h1>Gráfico de Barras</h1>
            <Bar 
                data = {{
                    labels: ['IHC', 'EMAT', 'ADA', 'MIR', 'AC', 'EE'],
                    datasets: [{
                        label: 'Notas finales del semestre 2020 B',
                        data: [14, 17, 13, 20, 11, 16],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }],
                    
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>

        {/* PIE */}
        <div className="marco">
            <h1>Gráfico de Tipo Torta</h1>
            <Pie 
                data = {{
                    labels: ['MIR','IHC', 'EE', 'EMAT', 'ADA', 'AC'],
                    datasets: [{
                        data: [1, 3, 1, 2, 4, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }],
                    
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>

        {/* LINE */}
        <div className="marco">
            <h1>Gráfico Lineal</h1>
            <Line 
                data = {{
                    labels: ['Entrada ', 'Examen 1', 'Examen 2', 'Subsanación', 'Examen 3'],
                    datasets: [{
                        label: 'Notas de EMAT',
                        data: [13, 10, 14, 12, 11],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Notas de IHC',
                        data: [10, 12, 8, 15, 19],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }
                ],
                    
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>


        {/* RADAR */}
        <div className="marco">
            <h1>Gráfico de Tipo Radar</h1>
            <Radar 
                data = {{
                    labels: ['IHC', 'EMAT', 'MIR', 'ADA', 'EE', 'AC'],
                    datasets: [{
                        label: 'Notas finales del semestre 2020 B',
                        data: [15, 17, 19, 13, 16, 11],
                        backgroundColor: [
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }],
                    
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scale: {
                        angleLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 20
                        }
                    }
                }}
            />
        </div>

        
    </div>
)

export default ChartsPage