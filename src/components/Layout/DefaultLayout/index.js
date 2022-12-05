import Header from '../components/Header';
import Sidebar from './Sidebar';
import './index.scss';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper-DefaultLayout">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
