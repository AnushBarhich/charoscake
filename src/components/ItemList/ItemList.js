import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
            <div style= {{display:'flex'}}> 
                {products.map(products => <Item key={products.id} {...products}/>)}
            </div>
    )
}

export default ItemList