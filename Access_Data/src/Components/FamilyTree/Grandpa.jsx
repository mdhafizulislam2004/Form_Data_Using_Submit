import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = () => {
    return (
        <div>
            <h1>Grandpa Section</h1>
            <section className="flex">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;