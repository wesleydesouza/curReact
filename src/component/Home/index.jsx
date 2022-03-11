import { useEffect, useState } from "react";

import GlobalStyle, {Main,Section,Card,CorDiferenca} from "./style.js";

import api from "../../services/api";

function Home () {

    const [moedas, setMoedas] = useState([]);
    const [valoresAnteriores, setValoresAnteriores] = useState([]);
    const [filtroMoeda, setFiltroMoeda] = useState("");

    const handleExibirDiferenca = (moeda) => {

        const resultado = (moedas[moeda] - valoresAnteriores[moeda]).toFixed(6);

        if(moedas[moeda]>valoresAnteriores[moeda]){
            return(
                <CorDiferenca green>Diferença: {resultado}</CorDiferenca>
            )
        }else if(moedas[moeda]<valoresAnteriores[moeda]){
            return(
                <CorDiferenca red>Diferença: {resultado}</CorDiferenca>
            )
        }else{
            return(
                <CorDiferenca grey>Diferença: {resultado}</CorDiferenca>
            )
        }
    }

    useEffect(() => {
        async function loadMoedas(){

            const key ="a55601de88e4fd0089ecf1073ab8d49d";
            const response =  await api.get(`live?access_key=${key}`);
            const ultimosValores = await api.get(`/historical?date=2022-03-01&&access_key=${key}`)
            setMoedas(response.data.quotes);
            setValoresAnteriores(ultimosValores.data.quotes)
            
        }

        loadMoedas()
        
    }, [])
    
    return (
        <Main>
            <GlobalStyle/>
            <Section>
                <input type="text" placeholder="Pesquise uma moeda..." onChange={event => setFiltroMoeda(event.target.value)}/>
            </Section>
            <Section>
                {Object.keys(moedas,valoresAnteriores).filter(moeda =>{
                    if(filtroMoeda === ""){
                        return moeda;
                    }else if(moeda.toLowerCase().includes(filtroMoeda.toLocaleLowerCase())){
                        return moeda;
                    }
                }).map((moeda, key) => 
                <Card key={key}>
                    <h1>{moeda}</h1>
                    <h3>Valor: {moedas[moeda]}</h3>
                    <p>Ontem: { valoresAnteriores[moeda]}</p>
                    {handleExibirDiferenca(moeda)}
                </Card>)}
            </Section>
        </Main>
        
    )
}

export default Home;