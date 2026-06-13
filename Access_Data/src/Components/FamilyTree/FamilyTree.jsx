import Grandpa from "./Grandpa";
import './FamilyTree.css'
import { createContext, useState } from "react";

export const assestContext = createContext('')
export const MoneyContext = createContext(0)

const FamilyTree = () => {

    const [money,setMoney]=useState(0)

    const newAssest = "Diamond";

    return (
        <div className="family-tree">
            <h1>Family Tree</h1>
            <h4>Total Family Money: {money}</h4>
            <MoneyContext value={[money,setMoney]}>
                <assestContext.Provider value={newAssest}>
                    <Grandpa></Grandpa>
                </assestContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;