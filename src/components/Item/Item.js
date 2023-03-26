const Item = ({ name, img, price }) => {
    return (
        <div style={{margin:10}}>
            <h3>{name}</h3>
            <img src={img} alt={name} style={{width: 300}}/>
            <p>Precio: ${price}</p>
        </div>
    )
}

export default Item
