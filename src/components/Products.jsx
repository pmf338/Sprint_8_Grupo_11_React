function Products(props) {
    return (
        <tr>
            <td>{props.sku}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
            <td>{props.artist_id}</td>
        </tr>
    )
}
export default Products;