import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';
export const Usuarios = () => {
    const {
        usuarios,
        backPage,
        nextPage
    } =useUsers()

    const renderItem = (user: User) => {
        const { id, first_name, last_name, email, avatar } = user

        return (
            <tr key={ id.toString() }>
                <td>
                    <img
                        src={ avatar }
                        alt={ first_name }
                        style={{ 
                            width: 50,
                            borderRadius: 100
                            
                        }}
                    />
                </td>
                <td>{ first_name } { last_name }</td>
                <td>{ email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios: </h3>   
            <table className="table">
                <thead></thead>
                    <tr>
                        <th>Avatar</th>
                        <th>{  }</th>
                        <th>email</th>
                    </tr>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={ backPage }
            >
                Back
            </button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ nextPage }
            >
                Next
            </button>
        </>
    )
}
