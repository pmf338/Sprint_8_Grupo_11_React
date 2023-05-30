function User(props){
    return(
        <>
            <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.userName}</td>
            <td>{props.email}</td>
            <td>{props.address}</td>
        </tr>
        </>
    )
}

export default User;