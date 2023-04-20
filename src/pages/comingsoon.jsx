import logo from "./FeaturesPage/assets/logo.png"
function ComingSoon() {
    return ( <div>
         <img src={logo} alt="Game Library" className="w-[20%] mx-[1rem] lg:w-[10%]"/>
        <h1 className="flex flex-col items-center justify-center text-[2rem] w-[100vw] h-[80vh]">
        COMING SOON...
    </h1>
    </div> );
}

export default ComingSoon;