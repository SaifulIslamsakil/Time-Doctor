import "./Card.css"
const TimeIlne = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <div className=" border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                        <p>Total time tracked</p>
                        <h6 className=" text-lg font-semibold">8h 51m</h6>
                        <p>This week: 9h 34m</p>
                        <p>This month: 97h 52m</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TimeIlne;