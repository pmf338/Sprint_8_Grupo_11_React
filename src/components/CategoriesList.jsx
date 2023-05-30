import {useParams} from 'react-router-dom';

const productsByCategory = [
        {"id":1,
        "description":"Ropa",
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z"
        },
        {"id":2,
        "sku":65112,
        "name":"Indio Solari Gorra Trucker Indio Patricio Rey",
        "price":"4500.00",
        "quantity":12,
        "description":"Decile adiós a las gorras de cotillón, nuestras gorras son geniales por donde las mires, trabajamos únicamente gorras de primera calidad, gorras de vestir, con excelente calce y terminación",
        "artist_id":5,
        "size":null,
        "color":"blanco/negro",
        "format":null,
        "is_active":1,"createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-17T00:06:36.000Z",
        "imagePrimary":"product-1684281850544.jpg",
        "imageSecond":"avatar.jpeg",
        "imageThird":"avatar.jpeg",
        "categories_id":1
        },
        {"id":3,
        "sku":65851,
        "name":"Gorra Bzrp Bizarrap Logo Dorado",
        "price":"7000.00",
        "quantity":10,"description":"Gorra BZRP Trap - Logo Dorado - Cierre Ajustale/Regulable - Doble broche plástico",
        "artist_id":4,
        "size":null,
        "color":null,
        "format":null,
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"bizarrap_gorra-1.webp",
        "imageSecond":"bizarrap_gorra-2.webp",
        "imageThird":null,"categories_id":1
        },
        {"id":4,
        "sku":65016,
        "name":"Remera The Killers",
        "price":"3600.00",
        "quantity":50,
        "description":"Remera tour Sams town",
        "artist_id":3,
        "size":"L",
        "color":"Blanco",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"the-killers_tour-Sams-town.webp",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":5,
        "sku":65954,
        "name":"Remera The Killers Modelo 3",
        "price":"3600.00",
        "quantity":50,
        "description":"Remera Imploding The Mirage Tour 2022",
        "artist_id":3,
        "size":"M",
        "color":"Blanco",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"the-killers_imploding_mirage.webp",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":9,
        "sku":65165,
        "name":"Remera Bad Bunny",
        "price":"4000.00",
        "quantity":25,
        "description":"Remera de Bad Bunny del album Un Verano Sin Ti",
        "artist_id":1,
        "size":"M",
        "color":"Blanco",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"bad-bunny_remera-verano-sin-ti.webp",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":10,
        "sku":65101,
        "name":"Buzo Bad Bunny",
        "price":"8000.00",
        "quantity":40,
        "description":"Buzo de Bad Bunny del album Un Verano Sin Ti",
        "artist_id":1,
        "size":"L",
        "color":"Marron",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"bad-bunny_buzo.jpg",
        "imageSecond":null,"imageThird":null,
        "categories_id":1
        },
        {"id":11,
        "sku":65816,
        "name":"Gorro Bad Bunny",
        "price":"3000.00",
        "quantity":10,
        "description":"Gorro estilo piluso de color blanco - 59cm de circunferencia - Material Gabardina - Alta durabilidad",
        "artist_id":1,
        "size":null,
        "color":"Blanco",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"bad-bunny_gorro.jpg",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":12,
        "sku":65010,
        "name":"Gorra Imagine Dragons",
        "price":"2000.00",
        "quantity":5,
        "description":"Gorra de Imagine Dragons - talle único",
        "artist_id":2,
        "size":null,
        "color":"Negro",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"imagine-dragons_gorra.jpg",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":13,
        "sku":65349,
        "name":"Remera Bzrp Dorado",
        "price":"4500.00",
        "quantity":100,
        "description":"Remera Bizarrap con Bzrp logo - 100% Algodon",
        "artist_id":4,
        "size":"S",
        "color":"Negro",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"bizarrap_remera-dorado.webp",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":15,
        "sku":65803,
        "name":"Remera de Rata Blanca",
        "price":"3600.00",
        "quantity":25,
        "description":"Remera de algodón Rata Blanca",
        "artist_id":7,
        "size":"S",
        "color":"Negro",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"rata-blanca_remera_1.jpg",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":16,
        "sku":65778,
        "name":"Remera de Rata Blanca modelo 2",
        "price":"3600.00",
        "quantity":12,
        "description":"Remera de algodón Rata Blanca",
        "artist_id":7,
        "size":"M",
        "color":"Blanco",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"rata-blanca_remera_2.webp",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":18,
        "sku":65703,
        "name":"Remera de Serú Girán modelo 2",
        "price":"3600.00",
        "quantity":18,
        "description":"Remera azul marino de Serú Girán",
        "artist_id":8,
        "size":"L",
        "color":"Azul Marino",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"seru-giran_remera_2.jpg",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1
        },
        {"id":19,
        "sku":65282,
        "name":"Remera de Serú Girán",
        "price":"3600.00",
        "quantity":8,
        "description":"Remera gris de Serú Girán",
        "artist_id":8,
        "size":"M",
        "color":"Gris",
        "format":"format",
        "is_active":1,
        "createdAt":"2023-05-06T18:09:02.000Z",
        "updatedAt":"2023-05-06T18:09:02.000Z",
        "imagePrimary":"seru-giran_remera_1.jpg",
        "imageSecond":null,
        "imageThird":null,
        "categories_id":1}];
     
const CategoriesList = () => {

    const {id} = useParams();

     const product = productsByCategory.find(category => category.id == id)

     return(
        <>
            <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.description}</td>
            
            
        </tr>
        </>
    )
}
    


export default CategoriesList;