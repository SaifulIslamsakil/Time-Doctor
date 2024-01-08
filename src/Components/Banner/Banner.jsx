const Banner = () => {
    return (
        <div className=" bg-gradient-to-r from-orange-300 to-gray-200 ">
            <div className="  flex justify-center items-center pt-20 px-5">
                <div className=" space-y-5 text-center">
                    <h1 className=" text-5xl font-bold">Powerful and frictionless time tracking <br /> for the entire team</h1>
                    <p className=" text-xl">The trusted time tracking software that allows you to boost <br /> team performance and ensure accurate billing for every minute of their work.</p>
                    <div className=" md:w-4/5 h-14 bg-white rounded-full mx-auto flex items-center ">
                        <input className=" h-full w-full rounded-full border-none outline-none p-5" placeholder="Search For Topice...." type="search" name="" id="" />
                        <span className=" text-2xl m-3 text-purple-600"></span>
                    </div>
                    <div>
                        <div className="md:w-2/3  mx-auto flex justify-between gap-2  ">
                            <img className=" w-20 h-20 rounded-full border-4 border-white " src="https://i.ibb.co/4wLMNHR/bn1.jpg" alt="" />
                            <img className=" w-32 h-32 rounded-full border-4 border-white " src="https://i.ibb.co/4MTP6Pb/bn4.jpg" alt="" />
                            <img className=" w-16 h-16 rounded-full border-4 border-white " src="https://i.ibb.co/QFP0Khh/bn2.jpg" alt="" />
                        </div>
                        <div className=" w-3/4  gap-5   mx-auto flex justify-between  ">
                            <img className=" w-24 h-24 rounded-full border-4 border-white " src="https://i.ibb.co/prS6bjk/bn3.jpg" alt="" />
                            <img className=" w-28 h-28 rounded-full border-4 border-white " src="https://i.ibb.co/7Cz4bBF/bn5.jpg" alt="" />
                        </div>
                        <div className="  mx-auto flex justify-between gap-3 ">
                            <img className=" w-14 h-14 rounded-full border-4 border-white " src="https://i.ibb.co/kBzD0CT/bn6.jpg" alt="" />
                            <img className=" w-24 hidden md:block h-24 rounded-full border-4 border-white " src="https://i.ibb.co/3r2f6MV/bn7.jpg" alt="" />
                            <img className="  w-16 h-16 rounded-full border-4 border-white " src="https://i.ibb.co/mRYR4wG/bn9.jpg" alt="" />
                            <img className=" w-20 h-20 rounded-full border-4 border-white " src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                        </div></div>
                </div>
            </div>
            <img src="https://i.ibb.co/hCM3S4v/banner-bottom-shape.png" alt="" />
        </div>
    );
};

export default Banner;