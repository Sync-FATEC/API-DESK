import { Header } from '../../components/Header';
import baner from '../../assets/img/faq.jpg';
import './faq.css';
import IMensagens from '../../types/IMensagens';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Faq = () => {
    const [faqs, setFaqs] = useState<IMensagens[]>([]);

    useEffect(() => {
        const fetchSalas = async () => {
          try {
            const response = await axios.get('http://localhost:5555/mensagens/visualizar', {
                params: {
                    tipoMensagem: 'F'
                }
            });
            setFaqs(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSalas();
      }, []);
     
    return(
        <><Header />
        <div className="baner">
                <img src={baner} alt="baner" />
            </div>
        <div className="faqContainer">
            <div className="titulo">
                <div className="formTitle">Perguntas Frequentes</div>
            </div> 
                {faqs.map((faq, index) => (
                    <div className="faq" key={index}>
                        <details>
                            <summary>{faq.titulo}</summary>
                            <p>{faq.mensagem}</p>
                        </details>
                    </div>
                ))}
            </div>
        </> 
    )
}

export default Faq;