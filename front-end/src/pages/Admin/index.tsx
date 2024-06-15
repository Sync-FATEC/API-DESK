import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Header } from "../../components/Header";
import './admin.css';

export const Admin = () => {
    const [countSLA, setCountSLA] = useState<[string, number][]>([]);
    const [countTicketsCategoria, setCountTicketsCategoria] = useState<[string, number][]>([]);
    const [countTicketsTecnico, setCountTicketsTecnico] = useState<[string, number][]>([]);
    const [countTicketsPrioridade, setCountTicketsPrioridade] = useState<[string, number][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5555/tickets/countSLA');
            const data = await response.json();
            setCountSLA([['No Prazo', parseInt(data[0].totalNoPrazo, 10)], ['Atrasados', parseInt(data[0].totalAtrasados, 10)]]);


            const response2 = await fetch('http://localhost:5555/tickets/countTicketsCategoria');
            const data2 = await response2.json();
            setCountTicketsCategoria(data2.map((item: any) => [item.categoria, parseInt(item.totalTickets, 10)]) as [string, number][]);

            const response3 = await fetch('http://localhost:5555/tickets/countTicketsTecnico');
            const data3 = await response3.json();
            setCountTicketsTecnico(data3.map((item: any) => [item.nome, parseInt(item.totalTickets, 10)]) as [string, number][]);


            const response4 = await fetch('http://localhost:5555/tickets/countTicketsPrioridade');
            const data4 = await response4.json();

            setCountTicketsPrioridade(data4.map((item: any) => [item.prioridade, parseInt(item.totalTickets, 10)]) as [string, number][]);

        };

        fetchData();
    }, []);

    return (
        <div className="containerDash">
            <Header />
           
                <div className="titleDashoard">Dashboard</div>
                <div className="containerGraficos">

                   
                        <Chart
                            width={'500px'}
                            height={'300px'}

                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[['SLA', 'Tickets'], ...countSLA]}
                            options={{
                                title: 'Tickets SLA',

                                titleTextStyle: {
                                    fontSize: 22,
                                    color: '#2F2E41',
                                },
                                colors: ['#28C94C', '#FF0000'], // Cores para as fatias do gráfico
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    

                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[['Prioridade', 'Tickets'], ...countTicketsPrioridade]}
                        options={{
                            title: 'Tickets por Prioridade',
                            titleTextStyle: {
                                fontSize: 22,
                                color: '#2F2E41',

                            },
                            colors: ['#FF0000', '#FF9D00', '#28C94C'], // Cores para as fatias do gráfico
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
                <div className="containerGraficos">

                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[['Técnico', 'Tickets'], ...countTicketsTecnico]}
                        options={{
                            title: 'Tickets por Técnico',
                            titleTextStyle: {
                                fontSize: 22,
                                color: '#2F2E41',
                            },
                            colors: ['#044066', '#0D86D3', '#000000', '#1A5678', '#1565A0', '#283A5B', '#072A40', '#0A4A72', '#122E4D'],
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />

                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[['Categoria', 'Tickets'], ...countTicketsCategoria]}
                        options={{
                            title: 'Tickets por Categoria',

                            borderRadius: 20,
                            titleTextStyle: {
                                fontSize: 22,
                                color: '#2F2E41',
                            },
                            colors: ['#044066', '#0D86D3', '#000000', '#1A5678', '#1565A0', '#283A5B', '#072A40', '#0A4A72', '#122E4D'],
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            </div>
        
    );
}