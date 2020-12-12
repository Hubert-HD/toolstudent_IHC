import React from "react"
import "../../styles/curriculum.scss"

import {Bar, Line, Pie, Radar, Polar} from 'react-chartjs-2';

const ChartsPage = () => (
    <div className="curriculum-container">
        
        {/* BAR */}
        <div className="marco">
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

        {/* LINE */}
        <div className="marco">
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

        {/* PIE */}
        <div className="marco">
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

        {/* RADAR */}
        <div className="marco">
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

        {/* POLAR */}
        <div className="marco">
            <Polar 
                data = {{
                    labels: ['IHC', 'EMAT', 'MIR', 'ADA', 'EE', 'AC'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
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




    </div>
)

export default ChartsPage