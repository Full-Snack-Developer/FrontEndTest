import Sidebar from "../component/Sidebar";
import Body from "../component/Body";
import './Dashboard.css';
import Card1 from "../component/Card1";
import Card2 from "../component/Card2";
import Card3 from "../component/Card3";
import Footer from "../component/Footer";

function Dashboard() {
    return (
        <div className='Main'>
            <div className='Left-content'>
                <Sidebar/>
            </div>
            <div className="Right-content">
                <div className="Body">
                    <Body/>
                </div>
                <div className="Card">
                    <div className="Card-1">
                        <Card1/>
                    </div>
                    <div className="Card-2">
                        <Card2/>
                    </div>
                    <div className="Card-3">
                        <Card3/>
                    </div>
                </div>
            </div>
            <div className="Bottom">
                <div className="Footer">
                    <Footer/>
                </div>
            </div>
        </div>
    );
  }
  export default Dashboard;