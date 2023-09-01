import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const getRecord = () => {
        let all = JSON.parse(localStorage.getItem('crud'));
        if (all === null) {
            return [];
        } else {
            return all;
        }
    }
    const [record, setRecord] = useState(getRecord);
    const [input, setInput] = useState({
        name: '',
        phone: '',
    })
    const change = (e) => {
        const {name,value} = e.target;
        setInput({
            ...input, [name]: value
        })
    }
    const submit = () => {
        const {name,desc    } = input;
        let ans = record.map((item) => {
            if (item.id == parseInt(id)) {
                return {
                    ...item,
                    name: name,
                    desc: desc,
                }
            }
            return item
        })
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans));
        alert("Record successfully update");
        navigate('/View')
        setInput({
            name: '',
            phone: ''
        })
    }
    useEffect(() => {
        let ans = record.filter((item) => {
            return item.id == id;
        })
        setInput(ans[0]);
    }, [])


    return (
        <>
         
            <center><br /><br /><br /><br />
                <div className="search">
                    <table>
                        <tr>
                            <td><h3 className="text-light mb-5">name :</h3></td>
                            <td>    <input type="text" className="mb-5" name="name" onChange={change} value={input.name}  /></td>
                        </tr>
                        <tr>
                            <td><h3 className="text-light">Descripition :</h3></td>
                            <td>    <input type="text" name="desc" onChange={change} value={input.desc}  /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button className="ms-4 mt-5 text-light" onClick={submit}>Edit</button></td>
                        </tr>
                    </table>
                        
                </div><br /><br />
                        </center>
        </>
    )
}

export default Edit;