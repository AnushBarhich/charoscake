const products = [
    {
        id: '1',
        name: 'Alfajor de chocolate',
        price: 750,
        category: 'alfajores',
        img:'https://www.paulinacocina.net/wp-content/uploads/2022/06/receta-de-alfajor-artesanal.jpg',
        stock: 20,
        description: 'Alfajor de chocolate relleno de dulce de leche' 
    },

    {id:'2', name:'Alfajor de maicena', price:800, category:'alfajores', img:'https://www.elmundoeats.com/wp-content/uploads/2021/07/FP2-Argentine-alfajores-on-a-rack.jpg', stock:15, description:'Alfajor de maicena relleno de dulce de leche y coco'},
    {id:'3', name:'Chocotorta', price:1500, category:'tartas', img:'https://cocinaabuenashoras.com/files/chocotorta-tarta-de-galletas-y-dulce-de-leche-1024x575.jpg', stock:10, description:'Chocotorta de 30cm x 35cm'},
    {id:'4', name:'Pastafrola', price:1200, category:'tartas', img:'https://imag.bonviveur.com/prensentacion-de-la-pasta-frola.jpg', stock:10, description:'Pastafrola clasica Argentina de dulce de membrillo'},
    {id:'5', name:'Lemonpie', price:1700, category:'tartas', img:'https://i.pinimg.com/736x/b2/75/49/b27549f1915a0f3d845c22090e0fc294.jpg', stock:10, description:'LemonPie con merengue italiano'},
    {id:'6', name:'Cheesecake', price:1700, category:'tortas', img:'http://assets.kraftfoods.com/recipe_images/opendeploy/74140_640x428.jpg', stock:10, description:'Cheesecake de frutos rojos'},
    {id:'7', name:'Oreocake', price:1900, category:'tortas', img:'https://media.mykaramelli.com/galeria/recetas/tarta-oreo_340_1.jpg', stock:10, description:'Oreocake rellena de galletas oreos y dulce de leche'},
    {id:'8', name:'Galletitas pepas', price:500, category:'galletas', img:'https://www.soyceliaconoextraterrestre.com/wp-content/uploads/2020/01/galletas-pepas-sin-tacc.jpg', stock:100, description:'Gallletas Pepas de dulce de membrillo'},
    
]


export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve (products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}
