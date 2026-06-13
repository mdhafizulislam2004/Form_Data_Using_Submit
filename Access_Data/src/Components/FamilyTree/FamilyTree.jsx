import Grandpa from "./Grandpa";
import './FamilyTree.css'
import { createContext } from "react";

export const assestContext=createContext('')

const FamilyTree = () => {

    const newAssest="Diamond";

    return (
        <div className="family-tree">
            <h1>Family Tree</h1>
            <assestContext.Provider value={newAssest}>
                <Grandpa></Grandpa>
            </assestContext.Provider>
        </div>
    );
};

export default FamilyTree;