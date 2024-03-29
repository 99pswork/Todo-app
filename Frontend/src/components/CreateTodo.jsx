import { useState } from 'react'
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input class="to-do-add" type="text" placeholder="Title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br/>
        <input class="to-do-add" type="text" placeholder="Description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input><br/>
        <button class="to-do-add" onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function(res) {
                const json = await res.json();
                console.log(res.status)
                if(res.status==201){
                    alert("Todo added");
                }
                else{
                    alert(json.msg);
                }
            }).catch((e) => {
                console.log("error recevied");
            })
        }}> Add a todo</button>
    </div>
}