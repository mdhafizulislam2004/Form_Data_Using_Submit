import { useContext } from "react";
import { assestContext } from "./FamilyTree";

const Special = () => {

    const newAssest=useContext(assestContext)

    return (
        <div>
            <h3>Special Section</h3>
            <h5>Assests:{newAssest}</h5>
        </div>
    );
};

export default Special;