import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = () => {
    return (
        <div>
           <h2> Dad Section</h2>
           <section className="flex">
            <Myself></Myself>
           <Sister></Sister>
           <Brother></Brother>
           </section>
        </div>
    );
};

export default Dad;