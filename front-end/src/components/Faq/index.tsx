import { Header } from '../../components/Header';
import banner from '../../assets/img/Image FAQ.svg';
import './faq.css';
import IMensagens from '../../types/IMensagens';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const FAQ = () => {
    const [faqs, setFaqs] = useState<IMensagens[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get('http://localhost:5555/mensagens/visualizar/F');
                setFaqs(response.data);
            } catch (error) {
                setError('Erro ao buscar as mensagens do FAQ. Por favor, tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    return (
        <div className="ticketContainer">
        <div className="formTicket">
            <Header />
            <div className="banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="containerFAQ">
                <h1>Perguntas Frequentes</h1>
                {loading ? (
                    <div>Carregando...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                faqs.map((faq, index) => (
                    <div className="faq" key={index}>
                        <details className='detalhesFAQ'>
                            <summary className='sumarioFAQ'>{faq.titulo}</summary>
                            <p className='menssagemFAQ'>{faq.mensagem}</p>
                        </details>
                    </div>
                )))}
            </div>
            </div>
        </div>
    );
    
};
export default FAQ;