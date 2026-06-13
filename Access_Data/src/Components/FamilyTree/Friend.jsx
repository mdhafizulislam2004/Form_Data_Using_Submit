import { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {

    const[money,setMoney]=use(MoneyContext)

    return (
        <div>
            <h1>Friend Section</h1>
            <button onClick={()=>setMoney(money+200)}>Add 200</button>            
        </div>
    );
};

export default Friend;