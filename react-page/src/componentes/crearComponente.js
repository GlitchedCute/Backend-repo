import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content: content, precio: precio, cantidad: cantidad})
        navigate('/')
    }

    return(
        <div className="border border-4 border-black rounded-3 bor bg-success bg-gradient m-3 p-3">
            <h3>Agregar Nuevo Producto</h3>
            <form onSubmit={store}>
                <div className="mb-3 ms-5 me-5 fw-bold">
                    <label className="form-label">Producto</label>
                    <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control border-3 border-black text-center"
                    />
                </div>
                <div className="mb-3 ms-5 me-5 fw-bold">
                    <label className="form-label">Marca</label>
                    <input 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className="form-control border-3 border-black text-center"
                    />
                </div>
                <div className="mb-3 ms-5 me-5 fw-bold">
                    <label className="form-label">Precio</label>
                    <input 
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="number"
                        className="form-control border-3 border-black text-center"
                    />
                </div>
                <div className="mb-3 ms-5 me-5 fw-bold">
                    <label className="form-label">Cantidad</label>
                    <input 
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        type="number"
                        className="form-control border-3 border-black text-center"
                    />
                </div>
                <button type="submit" className="btn btn-primary border border-2 border-black text-light fw-bold">Crear</button>
            </form>
        </div>
    )
}

export default CompCreateBlog