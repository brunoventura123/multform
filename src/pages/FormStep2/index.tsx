import { ChangeEvent, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { SelectOption } from '../../components/SelectOption'
import * as C from './styles'
import { Link } from 'react-router-dom'

export const FormStep2 = () => {
    const history = useHistory()
    const {state,dispatch} = useForm()

    const handleNextStep = () => {
        if(state.name !== ''){
            history.push('/step3')
        } else {
            alert('Preencha seu dados.')
        }
        
    }

    useEffect(()=>{
        if(state.name === ''){
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload:2
            })
        }
       
    },[])

    const setLevel = (level:number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a melhor opção que condiz com seu estado atual, profissionalmente.</p>
                <hr />
                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar a menos de dois anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />
                <SelectOption
                    title="Sou Programador"
                    description="Já programo há dois anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />
                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}