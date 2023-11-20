import Sidebar from "./sidebar";

const Home = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex p-5">
            <Sidebar/>
            <div>
                Home
            </div>
        </div>
       
      </div>
    );
  };
  
  export default Home;
  