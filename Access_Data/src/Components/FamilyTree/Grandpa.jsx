import Aunt from "./Aunt";
import Dad from "./Dad";
import Friend from "./Friend";
import Uncle from "./Uncle";

const Grandpa = () => {
    return (
        <div>
            <h1>Grandpa Section</h1>
            <section className="flex">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Grandpa;