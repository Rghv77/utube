import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";

const App=()=>{
  return <>
  <Provider store={store}>
  <div>
    
  <Navbar/>
  <div className="flex mt-1">
  <Sidebar/>
  <Feed/>
  </div>
  </div>
  </Provider>
  </>
}
export default App;