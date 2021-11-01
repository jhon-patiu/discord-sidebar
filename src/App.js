import "./App.css";

import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import ChannelBar from "./components/ChannelBar";

function App() {
    return (
        <div className="flex">
            <ChannelBar />
            <MainContent />
            <SideBar />
        </div>
    );
}

export default App;
