
import Slideshow from '../components/homepageslider';
// import Footer from '../components/footer';

const Home = () => {
  return (
    <>
    <Slideshow />
    <div className="row_flex">

    <div className="col_2">
    <p>
    HaHu Inc. is a well experienced IT Consulting Company that will enable your business to increase efficiency. We understand your business needs can be unique. So we closely work with you to analyze your needs, and develop an affordable, custom solution that will be delivered on time. Our well experienced professionals will provide you with the right business solution you are looking for whenever you have a need to better solution to your existing system or upgrading to the latest technology in the market..
    </p>
    </div>
    <div className="col_2">
      <img height="100%" width="100%" src="http://hahuinc.com/assets/img/new/consulting.jpg" alt="consulting img"/>
    </div>

    </div>
{/* <Footer /> */}
    </>
    
  );
};

export default Home;
