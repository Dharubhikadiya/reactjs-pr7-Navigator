import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = () => {

    const [record, setRecord] = useState([]);

    const deletdata = (id) => {
        let ans = record.filter((item) => {
            return item.id !== id;
        });
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans))
        alert('record successfully delet');
    }
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('crud'));
        if (data === null) {
            setRecord([]);
        } else {
            setRecord(data);
        }
    }, []);
    return (
        <center>
            <br /><br />
            <div className="todos">
                <table>
                   
                    <tbody>
                        {
                            record.map((val) => {
                                const { id, name, desc } = val;
                                return (
                                   
                                    <div className="todo-list d-flex">

                                       <ul>
                                       <li>
                                            <td className="text-light text-center fs-5">{id}</td>
                                        </li>
                                        </ul>
                                        <ul>
                                        <li> <td className="text-light text-center fs-5">{name}</td></li>
                                        </ul>
                                      
                                           
                                      
                                        <ul>
                                            <li> <td className="text-light text-center fs-5">{desc}</td></li>
                                        </ul>
                                        <ul>
                                            <li><button className="text-light fs-5 p-0 m-0" onClick={() => deletdata(id)}><i className="bi bi-trash3-fill"></i></button></li>
                                        </ul>
                                        <ul>
                                            <li><button className="p-0 m-0"><Link className="text-light fs-5 p-0 m-0" to={`/edit/${id}`}><i class="bi bi-pencil-fill"></i></Link></button></li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div><br />

            <Link className="text-light" to="/">Add</Link>
        </center>
    )
}
export default View;