import axios from "axios";

export const  getData = async (id) => {
  const users = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = users.data;

  console.log(data);
}



