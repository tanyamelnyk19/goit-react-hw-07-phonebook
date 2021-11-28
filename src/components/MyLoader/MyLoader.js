import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './MyLoader.css';

export default function MyLoader() {
  return (
    <div className="myLoader">
      <Loader type="ThreeDots" color="rgba(105, 132, 253, 0.897)" height={80} width={80} />
    </div>
  );
}
