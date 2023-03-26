const products = [
    {
        id: '1',
        name: 'Alfajor de chocolate',
        price: 750,
        category: 'Alfajores',
        img:'https://www.paulinacocina.net/wp-content/uploads/2022/06/receta-de-alfajor-artesanal.jpg',
        stock: 20,
        description: 'Descripcion de Alfajor de chocolate' 
    },

    {id:'2', name:'Alfajor de maicena', price:800, category:'Alfajores', img:'https://www.elmundoeats.com/wp-content/uploads/2021/07/FP2-Argentine-alfajores-on-a-rack.jpg', stock:15, description:'Descripcion de Alfajor de maicena'},
    {id:'3', name:'Chocotorta', price:1500, category:'Tartas', img:'https://cocinaabuenashoras.com/files/chocotorta-tarta-de-galletas-y-dulce-de-leche-1024x575.jpg', stock:10, description:'Descripcion de Chocotorta'},
    {id:'4', name:'Pastafrola', price:1200, category:'Tartas', img:'https://imag.bonviveur.com/prensentacion-de-la-pasta-frola.jpg', stock:10, description:'Descripcion de Pastafrola'},
    {id:'5', name:'Lemonpie', price:1700, category:'Tartas', img:'https://i.pinimg.com/736x/b2/75/49/b27549f1915a0f3d845c22090e0fc294.jpg', stock:10, description:'Descripcion de LemonPie'},
    {id:'6', name:'Cheesecake', price:1700, category:'Torta', img:'http://assets.kraftfoods.com/recipe_images/opendeploy/74140_640x428.jpg', stock:10, description:'Descripcion de Cheesecake'},
    {id:'7', name:'Oreocake', price:1900, category:'Torta', img:'https://media.mykaramelli.com/galeria/recetas/tarta-oreo_340_1.jpg', stock:10, description:'Descripcion de Oreocake'},
    {id:'8', name:'Galletitas pepas', price:500, category:'Galletas', img:'https://www.soyceliaconoextraterrestre.com/wp-content/uploads/2020/01/galletas-pepas-sin-tacc.jpg', stock:100, description:'Descripcion de Gallletas Pepas'},
    
]


export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve (products)
        }, 1000)
    })
}


