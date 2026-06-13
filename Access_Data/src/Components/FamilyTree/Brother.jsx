import { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {

    const[money,setMoney]=use(MoneyContext)

    return (
        <div>
            <h4>Brother Section</h4>
            <button style={{padding:"10px",borderRadius:"30px"}} onClick={()=>setMoney(money+1000)}>1000k</button>
        </div>
    );
};

export default Brother;