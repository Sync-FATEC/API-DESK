import { Header } from '../../components/Header';
import banner from '../../assets/img/faq.jpg';
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
                const response = await axios.get('http://localhost:5555/mensagens/visualizar', {
                    params: {
                        tipoMensagem: 'F'
                    }
                });
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
        <>
            <Header />
            <div className="banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="containerFAQ">
                <div className="title">
                    <div className="formTitle">Perguntas Frequentes</div>
                </div>
                {loading ? (
                    <div>Carregando...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    faqs.map((faq, index) => (
                        <div className="faq" key={index}>
                            <details>
                                <summary>{faq.titulo}</summary>
                                <p>{faq.mensagem}</p>
                            </details>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};
export default FAQ;