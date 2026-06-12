import Cousin from "./Cousin";

const Aunt = () => {
    return (
        <div>
            <h4>Aunt Section</h4>
            <section className="flex">
                <Cousin name="Hafizul"></Cousin>
                <Cousin name="Habib"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;