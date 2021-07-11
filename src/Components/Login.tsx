import { useEffect, useReducer } from "react"

interface IAuthState {
    validando: boolean
    token: string | null
    username: string
    nombre: string
}

type TLoginPayload = {
    username: string
    nombre: string
}

type TAuthAction = { type: 'logout' } 
    | { type: 'login', payload: TLoginPayload} 

const initialState: IAuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

const authReducer = (state: IAuthState, action: TAuthAction): IAuthState  => {
     switch (action.type) {
         case "logout":
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
         case "login": 
            return {
                validando: false,
                token: 'ABCDE',
                nombre: action.payload.nombre,
                username: action.payload.username
            }   
     
         default:
             return state
     }
}

export const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "logout" })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({ 
            type: "login",
            payload: {
                username: 'Strident',
                nombre: 'Rodolfo'
            } 
        })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    if( validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando ...
                </div>
                </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {
                (token)
                    ? <div className="alert alert-success">Autenticado como: { nombre } .</div>
                    : <div className="alert alert-danger">No Autenticado.</div>
            }
            
            {
                (token) 
                    ? (
                        <button
                            className="btn btn-danger"
                            onClick={ logout }
                        >
                            Logout
                        </button>
                    )
                    : (
                        <button 
                            className="btn btn-primary"
                            onClick={ login }
                        >
                            Login
                        </button>
                    )
            }
        </>
    )
}
