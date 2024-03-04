import axios from "axios";

//синтаксис axios

axios.get("'https://jsonplaceholder.typicode.com/todos/1").then ((response) =>{
    console.log(response.data);
} );

