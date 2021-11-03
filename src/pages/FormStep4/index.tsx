import { useEffect } from 'react'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from './styles'
import { useHistory } from 'react-router'

export const FormStep4 = () => {
    let history = useHistory()
    const {state,dispatch} = useForm()

    useEffect(()=>{
        if(state.name === '' || state.email === '' || state.github === ''){
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    },[])

    return(
        <Theme>
            <C.Container>
                <h2> 😁  Cadastro finalizado!  🤗 </h2>
                <h1>Agora é só aguardar seu emprego!</h1>
                <hr /><br />
                <p>Nome Completo:</p> {state.name}
                <hr />
                <p>Seu nível profissional:</p> {state.level === 0 ? 'Sou iniciante' : 'Sou programador a mais de 2 anos'}
                <hr />
                <p>Seu e-mail:</p> {state.email}
                <hr />
                <p>Seu GitHub:</p> {state.github}
            </C.Container>
        </Theme>
    )
}