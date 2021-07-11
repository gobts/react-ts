import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { IReqResList, User } from "../interfaces/reqRes"

export const useUsers = () => {
    const [usuarios, setUsuarios] = useState<User[]>([])

    const pageRef = useRef(1)
    useEffect(() => {
        // llamadod e la api
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<IReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        })
        console.log(resp.data)

        if( resp.data.data.length) {
            setUsuarios(resp.data.data)
        } else {
            pageRef.current --
            alert('No hay mas registros.')
        }
    }

    const nextPage = () => {
        pageRef.current ++
        cargarUsuarios()
    }

    const backPage = () => {
        if( pageRef.current > 1) {
            pageRef.current --
            cargarUsuarios()
        } 
    }
    
    return {
        usuarios,
        nextPage,
        backPage,
    }
}
