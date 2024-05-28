import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Header } from "../../components/Header";

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
        <>
        <Header/>
        <div>
            <h1>Admin</h1>
            <h2>SLA</h2>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[['SLA', 'Tickets'], ...countSLA]}
                options={{
                    title: 'Tickets no SLA',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
            <h2>Categorias</h2>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[['Categoria', 'Tickets'], ...countTicketsCategoria]}
                options={{
                    title: 'Tickets por Categoria',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
            <h2>Técnicos</h2>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[['Técnico', 'Tickets'], ...countTicketsTecnico]}
                options={{
                    title: 'Tickets por Técnico',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
            <h2>Prioridade</h2>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[['Prioridade', 'Tickets'], ...countTicketsPrioridade]}
                options={{
                    title: 'Tickets por Prioridade',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
        </>
    );
}