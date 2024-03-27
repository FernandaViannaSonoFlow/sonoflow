import './Home.css'
import { useEffect, useRef, useState } from 'react'
import sonoflow_icon from '../../assets/svgs/sonoflow-icon.svg'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import helpIcon from '../../assets/svgs/icon-help.svg'
import nane1 from '../../assets/svgs/nane-1.svg'
import nane2 from '../../assets/svgs/nane-2.svg'
import { InputModel_1, InputModel_2, InputModel_3, InputModel_4 } from '../../components/Inputs/Inputs'


export default function Home() {
    const [layer, setLayer] = useState(1)
    const [progress, setProgress] = useState('100%')
    const [sliderValue, setSliderValue] = useState(50)
    const [nane_1] = useState(nane1)
    const [nane_2] = useState(nane2)
    const [nome, setNome] = useState('')

    const [buttonTrue, setButtonTrue] = useState(false)

    // -- useState para as perguntas --
    const [pergunta_0, setPergunta_0] = useState('')
    const [pergunta_1, setPergunta_1] = useState('')
    const [pergunta_2, setPergunta_2] = useState('')
    const [pergunta_3, setPergunta_3] = useState('Menos de 5 minutos')
    const [pergunta_4, setPergunta_4] = useState('0')
    const [pergunta_5, setPergunta_5] = useState('Menos de 5 minutos')
    const [pergunta_6, setPergunta_6] = useState('')
    const [pergunta_7, setPergunta_7] = useState('')
    const [pergunta_8, setPergunta_8] = useState('50')
    const [pergunta_9, setPergunta_9] = useState([])
    const [pergunta_10, setPergunta_10] = useState([])
    const [pergunta_11, setPergunta_11] = useState([])
    const [pergunta_12, setPergunta_12] = useState('')
    const [pergunta_13, setPergunta_13] = useState('50')

    useEffect(() => {
        if (pergunta_0 && pergunta_1 && pergunta_2 && pergunta_3 && pergunta_4 && pergunta_5 && pergunta_6 && pergunta_7 && pergunta_8 && pergunta_9 && pergunta_10 && pergunta_11 !== '' && pergunta_13) {
            setButtonTrue(true)
        } else {
            setButtonTrue(false)
        }
    }, [pergunta_0, pergunta_1, pergunta_2, pergunta_3, pergunta_4, pergunta_5, pergunta_6, pergunta_7, pergunta_8, pergunta_9, pergunta_10, pergunta_11, pergunta_13])


    // -- Inputs para as perguntas --

    // Data do sono
    const InputPergunta_0 = (e) => {
        const inputValue = e.target.value
        setPergunta_0(inputValue)
    }

    // A que horas você foi para a cama?
    const InputPergunta_1 = (e) => {
        const inputValue = e.target.value
        setPergunta_1(inputValue)

    }

    // Depois de ir para a cama, qual foi o horário que você decidiu tentar dormir?
    const InputPergunta_2 = (e) => {
        const inputValue = e.target.value
        setPergunta_2(inputValue)
    }

    // Quanto tempo você acha que demorou até pegar no sono?
    const InputPergunta_3 = (e) => {
        const inputValue = e.target.value
        setPergunta_3(inputValue)
    }

    // Quantas vezes você acordou durante a noite (e voltou a dormir depois)?
    const InputPergunta_4 = (e) => {
        const inputValue = e.target.value
        setPergunta_4(inputValue)
    }

    // Quanto tempo você acha que demorou até pegar no sono novamente?
    const InputPergunta_5 = (e) => {
        const inputValue = e.target.value
        setPergunta_5(inputValue)
    }

    // A que horas você acordou pela última vez (e não voltou a dormir depois)?
    const InputPergunta_6 = (e) => {
        const inputValue = e.target.value
        setPergunta_6(inputValue)
    }

    // A que horas você levantou da cama?
    const InputPergunta_7 = (e) => {
        const inputValue = e.target.value
        setPergunta_7(inputValue)
    }

    // Como você se sente ao acordar?
    const InputPergunta_8 = (e) => {
        const inputValue = e.target.value
        setPergunta_8(inputValue)
    }

    // Selecione os fatores que estiveram presentes antes de você ir dormir:
    const InputPergunta_9 = (e, text) => {
        // Verifique se o item já está no array pergunta_9
        if (!pergunta_9.some(item => item.id === e)) {
            // Se não estiver, adicione ao array
            setPergunta_9([...pergunta_9, { id: e, text: text }]);
            console.log(pergunta_9);
        } else {
            // Se estiver, remova do array
            setPergunta_9(pergunta_9.filter(item => item.id !== e));
        }


    };

    // Selecione os fatores presentes durante o período de sono:
    const InputPergunta_10 = (e, text) => {
        // Verifique se o item já está no array pergunta_9
        if (!pergunta_10.some(item => item.id === e)) {
            // Se não estiver, adicione ao array
            setPergunta_10([...pergunta_10, { id: e, text: text }]);
            console.log(pergunta_10);
        } else {
            // Se estiver, remova do array
            setPergunta_10(pergunta_10.filter(item => item.id !== e));
        }
    }

    // Você fez uso de algum medicamento ontem?
    const InputPergunta_11 = (e, text) => {
        console.log(e);
        // Verifique se o item já está no array pergunta_9
        if (!pergunta_11.some(item => item.id === e)) {
            // Se não estiver, adicione ao array
            setPergunta_11([{ id: e, text: text }]);
            console.log(pergunta_11);
            // Remova qualquer item com id diferente
            setPergunta_11(prevState => prevState.filter(item => item.id === e));
        } else {
            // Se estiver, remova do array
            setPergunta_11([]);
        }
    }

    // Algum comentário a mais? (opcional)
    const InputPergunta_12 = (e) => {
        const inputValue = e.target.value
        setPergunta_12(inputValue)
    }

    // O quanto você se dedicou hoje ao programa sono Flow
    const InputPergunta_13 = (e) => {
        const inputValue = e.target.value
        setPergunta_13(inputValue)
    }


    // Listas
    const lista_1 = [
        { id: 1, text: 'Menos de 5 minutos' },
        { id: 2, text: 'De 5 a 10 minutos' },
        { id: 3, text: 'De 10 a 15 minutos' },
        { id: 4, text: 'De 15 a 20 minutos' },
        { id: 5, text: 'De 20 a 25 minutos' },
        { id: 2, text: 'De 25 a 30 minutos' },
        { id: 2, text: 'De 30 a 45 minutos' },
        { id: 2, text: 'De 45 a 60 minutos' },
        { id: 2, text: 'De 1h a 1h30' },
        { id: 2, text: 'De 1h30 a 2h' },
        { id: 2, text: 'De 2h a 2h30' },
        { id: 2, text: 'De 3h a 4h' },
        { id: 2, text: 'De 4h a 5h' },
        { id: 2, text: 'De 5h a 6h' },
        { id: 2, text: 'De 6h a 7h' },
        { id: 2, text: 'De 7h a 8h' },
        { id: 2, text: 'De 8h ou mais' },
    ]
    const lista_2 = [
        { id: 1, text: '0' },
        { id: 2, text: '1' },
        { id: 3, text: '2' },
        { id: 4, text: '3' },
        { id: 5, text: '4' },
        { id: 6, text: '5+' },
    ]
    const sleepHabitTopics = [
        { id: 1, text: '💤 Técnica Emi-sleep-1', isChecked: false },
        { id: 2, text: '💤 Técnica Emi-sleep-2', isChecked: false },
        { id: 3, text: '💤 Técnica Emi-sleep-3', isChecked: false },
        { id: 4, text: '💤 Técnica Emi-ton', isChecked: false },
        { id: 5, text: '💤 Técnica Emi-ansi', isChecked: false },
        { id: 6, text: '💤 Outros Protocolos', isChecked: false },
        { id: 7, text: '💻 Eletrônicos (TV, computador, celular)', isChecked: false },
        { id: 8, text: '💡 Luzes Brancas', isChecked: false },
        { id: 9, text: '🍺 Álcool', isChecked: false },
        { id: 10, text: '☕ Cafeína', isChecked: false },
        { id: 11, text: '😴 Cochilo (qualquer horário)', isChecked: false },
        { id: 12, text: '🚬 Nicotina', isChecked: false },
        { id: 13, text: '🍔 Refeição pesada', isChecked: false },
        { id: 14, text: '🏋️ Exercício (qualquer horário)', isChecked: false },
        { id: 15, text: '💧 Beber água (2L ou mais)', isChecked: false },
        { id: 16, text: '☀️ Expôr ao Sol (30min ou mais)', isChecked: false },
    ]
    const sleepFactorsTopics = [
        { id: 1, text: '🚽 Acordou para ir ao banheiro' },
        { id: 2, text: '🔊 Barulho' },
        { id: 3, text: '😣 Dor' },
        { id: 4, text: '💡 Luz/Claridade' },
        { id: 5, text: '🛌 Parceiro na cama' },
        { id: 6, text: '🌡️ Temperatura' },
        { id: 7, text: '💤 Sonho/Pesadelo' },
        { id: 8, text: '⏰ Olhou as horas durante a insônia' },
        { id: 9, text: '🏠 Continuou no quarto mesmo tendo insônia' },
    ];
    const answerOptions = [
        { id: 1, text: 'Sim' },
        { id: 2, text: 'Não' }
    ]

    // -- useEffect para a Barra de Progresso --
    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        if (layer === 1) { setProgress(0) }
        else if (layer === 2) { setProgress(25) }
        else if (layer === 3) { setProgress(50) }
        else if (layer === 4) { setProgress(80) }
        else { setProgress(100) }
    }, [layer])

    // -- Botao para trocar as layers --
    const continueButton = (voltar) => {
        if (voltar !== 'voltar') {
            setLayer(layer + 1)

        } else {
            setLayer(layer - 1)
        }

    }

    const EnviarResposta = () => {
        if (buttonTrue) {
            fetch('https://api.sheetmonkey.io/form/n5vQouNnPSWhocC9kq8g2z', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'Nome': nome,
                    'Data': pergunta_0,
                    'A que horas você foi para a cama?': pergunta_1,
                    'Depois de ir para a cama, qual foi o horário que você decidiu tentar dormir?': pergunta_2,
                    'Quanto tempo você acha que demorou até pegar no sono?': pergunta_3,
                    'Quantas vezes você acordou durante a noite (e voltou a dormir depois)?': pergunta_4,
                    'Quanto tempo você acha que demorou até pegar no sono novamente?': pergunta_5,
                    'A que horas você acordou pela última vez (e não voltou a dormir depois)?': pergunta_6,
                    'A que horas você levantou da cama?': pergunta_7,
                    'Como você se sente ao acorda?': pergunta_8,
                    'Selecione os fatores que estiveram presentes antes de você ir dormir:': pergunta_9.map(item => item.text),
                    'Selecione os fatores presentes durante o período de sono:': pergunta_10.map(item => item.text),
                    'Você fez uso de algum medicamento ontem?': pergunta_11.map(item => item.text),
                    'Algum comentário a mais? (opcional)': pergunta_12,
                    'O quanto você se dedicou hoje ao programa sono Flow?': pergunta_13
                })

            });
            alert('Dados Enviados!')
        }
    }

    // -- Area (se clicada) avança a layer --
    const area = () => {
        return (
            <>
                <span className='area-continue' onClick={() => continueButton()}>

                </span>
            </>
        )
    }


    const InputName = (e) => {
        const inputValue = e.target.value
        setNome(inputValue)
    }





    return (
        <>
            {layer === 1 ?
                <>
                    <main id="main-Home">
                        <img src={sonoflow_icon} alt="" className='sonoflow-icon-layer-1' />
                        <CustomButton text='Comece agora' onClick={() => continueButton()} />
                        {area()}
                    </main>

                </> :
                layer === 2 ?
                    <>
                        <main id="main-Home">
                            <img src={nane_1} alt="" className='img-layer-2' />
                            <CustomButton text='Olá, me chamo Nane ' />
                            <p className='aviso'>Clique em qualquer lugar para continuar</p>
                            {area()}
                        </main>

                    </> :
                    layer === 3 ?
                        <>
                            <main id="main-Home">
                                <CustomButton text='Sou a inteligência artificial do Sonoflow. Minha missão é te ajudar a ter um sono revigorante.' position='absolute' top='200px' />
                                <img src={nane_2} alt="" className='img-layer-3' />
                                <p className='aviso'>Clique em qualquer lugar para continuar</p>
                                {area()}
                            </main>

                        </> :
                        layer === 4 ?
                            <>
                                <main id="main-Home">
                                    <CustomButton text='Vamos começar? Como posso te chamar?' />
                                    {/* <img src={nane_2} alt="" className='img-layer-3' /> */}
                                    <CustomInput text='Nome' onClick={() => continueButton()} value={nome} onChange={InputName} />


                                </main>

                            </> :
                            <>
                                <main id="main-Home-1">
                                    <h1>Diário do sono</h1>
                                    <p>Olá {nome}</p>
                                    <p>
                                        Preencha abaixo como foi seu sono.<br />
                                        Lembre-se: Os valores podem ser aproximados,
                                        não se preocupe em ser preciso. Uma estimativa
                                        boa é o suficiente. É o que precisamos aqui.
                                    </p>

                                    <span></span>
                                    <InputModel_1
                                        title='Data do sono'
                                        type='date'
                                        value={pergunta_0}
                                        onChange={InputPergunta_0}
                                    />

                                    <InputModel_1
                                        title='🛏️ A que horas você foi para a cama?'
                                        info='Coloque o horário que você foi para cama, mesmo se for para ler, usar celular, assistir TV, comer ou qualquer outra atividade na cama.'
                                        type='time'
                                        onChange={InputPergunta_1}
                                        value={pergunta_1}
                                    />

                                    <InputModel_1
                                        title='💤 Depois de ir para a cama, qual foi o horário que você decidiu tentar dormir?'
                                        info='Esse horário pode ser diferente do anterior se você vai para cama e fica fazendo outras atividades que não seja dormir. Por exemplo, assistir TV'
                                        type='time'
                                        onChange={InputPergunta_2}
                                        value={pergunta_2}
                                    />

                                    <InputModel_2
                                        title='🕖 Quanto tempo você acha que demorou até pegar no sono?'
                                        info='Como em todos os campos, tudo bem se esse tempo for aproximado.'
                                        lista={lista_1}
                                        value={pergunta_3}
                                        onChange={InputPergunta_3}

                                    />

                                    <InputModel_2
                                        title='🙄 Quantas vezes você acordou durante a noite (e voltou a dormir depois)?'
                                        info='Acordar durante a noite algumas vezes é comum. Principalmente se você acorda e volta a dormir rapidamente em minutos. É assim que o sono funciona.'
                                        lista={lista_2}
                                        value={pergunta_4}
                                        onChange={InputPergunta_4}
                                    />

                                    <InputModel_2
                                        title='🕖 Quanto tempo você acha que demorou até pegar no sono novamente?'
                                        lista={lista_1}
                                        value={pergunta_5}
                                        onChange={InputPergunta_5}
                                    />

                                    <InputModel_1
                                        title='🛏️ A que horas você acordou pela última vez (e não  voltou a dormir depois)?'
                                        type='time'
                                        onChange={InputPergunta_6}
                                        value={pergunta_6}
                                    />

                                    <InputModel_1
                                        title='🛏️ A que horas você levantou da cama?'
                                        type='time'
                                        onChange={InputPergunta_7}
                                        value={pergunta_7}
                                    />

                                    <InputModel_3
                                        title='Como você se sente ao acordar?'
                                        p1='😞Cansado'
                                        p2='🙂Descansado'
                                        value={pergunta_8}
                                        onChange={InputPergunta_8}
                                    />


                                    <InputModel_4
                                        title='Selecione os fatores que estiveram presentes durante o seu dia e antes de você ir dormir:'
                                        lista={sleepHabitTopics}
                                        onChange={InputPergunta_9}
                                        checked={pergunta_9}
                                    // ssss

                                    />

                                    <InputModel_4
                                        title='Selecione os fatores presentes durante o período de sono:'
                                        lista={sleepFactorsTopics}
                                        onChange={InputPergunta_10}
                                        checked={pergunta_10}
                                    />

                                    <InputModel_4
                                        title='💊 Você fez uso de algum medicamento ontem?'
                                        lista={answerOptions}
                                        onChange={InputPergunta_11}
                                        checked={pergunta_11} />

                                    <InputModel_1
                                        title='Algum comentário a mais? (opcional)'
                                        onChange={InputPergunta_12}
                                        value={pergunta_12} />

                                    <InputModel_3
                                        title='O quanto você se dedicou hoje ao programa sono Flow '
                                        p1='🔴 Pouca'
                                        p2='🟢 Muita'
                                        onChange={InputPergunta_13}
                                        value={pergunta_13} />
                                    <CustomButton text='Enviar resposta' margin show={buttonTrue} onClick={EnviarResposta} position={'static'} bottom={'20px'}/>
                                    <span className='teste'></span>
                                </main>
                            </>}
            {/* <h1 style={{ position: 'fixed', top: 0 }}>{layer}</h1> */}
            <ProgressBar width={progress} />
        </>
    )
}


// Pergunta 13 - Dedicao 