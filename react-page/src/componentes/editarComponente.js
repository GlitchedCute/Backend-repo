import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')    
    const [content, setContent] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content,
            cantidad: cantidad,
            precio: precio,
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
        setCantidad(res.data.cantidad)
        setPrecio(res.data.precio)
    }

    return (
        <div className="border border-4 border-black rounded-3 bor bg-secondary bg-gradient m-3 p-3">
        <h3>Editar Producto</h3>
        <form onSubmit={update}>
            <div className="mb-3 ms-5 me-5 fw-bold">
                <label className="form-label">Producto</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control border-3 border-black text-center "                        
                />
            </div>
            <div className="mb-3 ms-5 me-5 fw-bold">
                <label className="form-label">Marca</label>
                <input
                    value={content}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="text"
                    className="form-control border-3 border-black text-center "                        
                />
            </div>
            <div className="mb-3 ms-5 me-5 fw-bold">
                <label className="form-label">Precio</label>
                <input
                    value={precio}
                    onChange={ (e)=> setPrecio(e.target.value)}
                    type="number"
                    className="form-control border-3 border-black text-center "                        
                />
            </div>
            <div className="mb-3 ms-5 me-5 fw-bold">
                <label className="form-label">Cantidad</label>
                <input
                    value={cantidad}
                    onChange={ (e)=> setCantidad(e.target.value)}
                    type="Number"
                    className="form-control border-3 border-black text-center"                        
                />
            </div>
            <button type="submit" className="btn btn-success border border-black border-2 text-light fw-bold">Actualizar</button>
        </form>
    </div>
    )

}

export default CompEditBlog