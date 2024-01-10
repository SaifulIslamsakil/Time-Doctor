import "./abc.css"
const Reports = () => {
    const progress = 75
    const radius = 50; // radius of the circle
    const circumference = 2 * Math.PI * radius; // circumference of the circle
    const offset = circumference - (progress / 100) * circumference; // calculate the stroke-dashoffset

    return (
        <div className="progress-circle">
            <svg width="200" height="200">
                <circle
                    className="progress-circle-bg"
                    cx="100"
                    cy="100"
                    r={radius}
                />
                <circle
                    className="progress-circle-bar"
                    cx="100"
                    cy="100"
                    r={radius}
                    style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
                />
            </svg>
            <div className="progress-text">{`${progress}%`}</div>
        </div>
    );
};

export default Reports;