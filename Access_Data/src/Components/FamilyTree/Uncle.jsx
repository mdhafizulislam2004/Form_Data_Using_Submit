import Cousin from "./Cousin";

const Uncle = () => {
    return (
        <div>
            <h4>Uncle Section</h4>
            <section className="flex">
                <Cousin name='Rakib'></Cousin>
                <Cousin name='Rana'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;