import training from '../img/tr2.jpg'
const Ittraning = () => {
    return(
<>
  <div className="training-main1"> 

        <h3 className="training-title">IT TRAINING</h3> 
  </div> 
  
<div className="training-main3">
    <div className="training-col1">
       <div className="training-content1">
          <h4>Learn and build your skills with IT Profession</h4>
       </div> <br></br> 
       <div className="training-content2">
                  <i class="fa fa-star"></i>
                  <pr><b>   Online IT programs</b></pr><br></br><br></br>
                  <p>Our flexible, online programs fits with your need.
                    Providing skills that are Essential to every IT professional.</p>
       </div><br></br>
       <div className="training-content3">
                  <i class="fa fa-star"></i>
                  <pr><b>   Free Courses </b></pr><br></br><br></br>
                  <p>There are many variations of free online courses.
                     Pre-Paid courses with projects</p>
       </div><br></br>
    </div>
    <div className="training-col2">
                
                  <img className="training-img" height="500px" width="680px" src={training} alt="training-img"></img>
    </div>       
</div>



</>
    ) 
  };

  
  export default Ittraning;