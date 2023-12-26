import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect ( ()=>{
        getBlogs()
    },[])

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    const deleteBlog = async (id) => {
        axios.delete(`${URI}${id}`)
        getBlogs()
    }
    return(
        <div>
            <h1 className='fw-bold'>Bienvenido Empleado!</h1>
            <div className='border border-3 border-black rounded-3 bor bg-info bg-gradient m-3 p-3'>
            <div className='container'>
            <h2 className='mb-3 fw-bold'>Lista de producto</h2>
            <div className='row'>
                <div className='col'>
                    <table className='table table-bordered border-black'>
                        <thead className='table table-dark'>
                            <tr>
                                <th>Producto</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) =>
                            <tr key={blog.id}>
                                <td>{ blog.title }</td>
                                <td>{ blog.content } </td>
                                <td>${ blog.precio }</td>
                                <td>{ blog.cantidad }Uds.</td>
                                <td>
                                    <Link to={`/edit/${blog.id}`} className='border border-1 border-black btn btn-secondary text-light fw-bold'>Editar</Link>
                                    <button onClick={ ()=>deleteBlog(blog.id) } className=' btn btn-danger border border-1 border-black text-light fw-bold' >Borrar</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <Link to='/create' className='btn btn-success border border-2 border-black m-3 text-light fw-bold'>Nuevo producto</Link>
                </div>
            </div>
        </div>
        </div>

        </div>
    )

}

export default CompShowBlogs