import { Header } from '../../components/Header';
import baner from '../../assets/img/faq.jpg';
import './faq.css';


export const Faq = () => {
    const faqs = [
        { titulo: 'Minha impressora não conecta a rede o que fazer?', descricao: 'Verifique a Conexão Física: Certifique-se de que a impressora está ligada e conectada à mesma rede que o dispositivo que você está tentando imprimir. Se for uma conexão com fio, verifique os cabos e o roteador.' },
        { titulo: 'Meu monitor não liga', descricao: 'Verificar a Conexão Física: Certifique-se de que esta ligado na tomada.' },
        { titulo: 'Mouse não funciona', descricao: 'Verificar a Conexão Física: Certifique-se de que esta conectado ao computador na porta usb.' }
    ];
    const handleShow = () => {
        // BackEnd mostrar mais descrição
    };
     
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
                        <div className="faqLinha">
                        <div className="tituloFaq"> {faq.titulo} </div>
                        <button onClick={handleShow}>
                        <span className="material-symbols-outlined">add</span>
                        </button>
                        </div>
                        <div className="textoFaq mostrar">{faq.descricao}</div>
                    </div>
                ))}
            </div>
        </> 
    )
}



