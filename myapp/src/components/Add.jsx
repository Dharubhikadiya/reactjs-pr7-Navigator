import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        desc: '',
    });
    const [record, setRecord] = useState([]);
    const change = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        });
    }

    const submit = () => {
        const { name, desc } = input;
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            desc: desc,
        }
        let data = [...record, obj];
        localStorage.setItem('crud', JSON.stringify(data));
        setRecord(data);
        setInput({
            name: '',
            desc: '',
        });
        alert('record succefully add');
        navigate('/view');
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
        <>
             <center><br /><br /><br /><br />
                <div className="search">
                <h1 className="text-light"> To Do List</h1><br /><br />
                    <input type="text" name="name" onChange={change} value={input.name} placeholder="Add name..." />
                    <input type="text" className="ms-4" name="desc" onChange={change} value={input.desc} placeholder="Descripition" />
                    <button className="ms-4" onClick={submit}>Add</button>
                </div><br /><br />
               
            <Link to='/view' className="text-light fs-5 outline-none">View</Link> 
            </center>
             </>
    )
}
export default Add;