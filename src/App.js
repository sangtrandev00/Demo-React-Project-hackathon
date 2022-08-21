import './assets/css/common.css';
import './assets/css/column.css';
// import "./assets/css/font-awesome.min.css"; --> error when import font
import './assets/css/grid.css';
import './assets/css/grid-donggop.css';
import './assets/css/modal.css';
import './assets/css/progressbar.css';
import './assets/css/reponsive-nav.css';
import './assets/css/responsive.css';

import './assets/css/search-page.css';
import './assets/css/style-chuongtrinh.css';
import './assets/css/style-index.css';
import './assets/css/style-ctrchitiet.css';
import './assets/css/style-baocaotaichinh.css';
import './assets/css/style-gioithieu.css';
import './assets/css/style-donggop.css';
import './assets/css/style.css';
import Banner from './components/Banner';
import HeaderContact from './components/HeaderContact';
import ImportantDonation from './components/ImportantDonation';
import LastestNews from './components/LastestNews';
import HomePage from './Pages/HomePage';
import { Link, Route, Switch } from 'react-router-dom';
import IntroPage from './Pages/IntroPage';
import ProgramsfundPage from './Pages/FundProgramsPage';
import DonationPage from './Pages/DonationPage';
import SearchPage from './Pages/SearchPage';
import NotFound from './components/NotFound';

// import "./assets/css/style.css";
// import "./assets/css/style.css";
// import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route path="/introduction-page" component={IntroPage} />
          <Route path="/programs-fund-page" component={ProgramsfundPage} />
          <Route path="/donation-page" component={DonationPage} />
          <Route path="/search-page" component={SearchPage} />
          <Route path="/" component={HomePage} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
