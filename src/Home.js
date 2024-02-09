import './Home.css';
import './Body.css';


function Cards(){
  return(
    <div className='cardContainer'>
      <h2>Our Services</h2>
      <div className="cardContainer-card">
      <div className='cHeader'/>
        <h3>Service 1</h3>
        <p>Service 1 Description</p>
      </div>
      <div className="cardContainer-card">
      <div className='cHeader'/>
        <h3>Service 2</h3>
        <p>Service 2 Description</p>
      </div>
      <div className="cardContainer-card">
      <div className='cHeader'/>
        <h3>Service 3</h3>
        <p>Service 3 Description</p>
      </div>

    </div>
  );

}

function HomeProjects(){
  return(
   <div className='projectsContainer'>

   </div>
  );


}

function Home() {
  return (
    <div className="homeContainer">
      <div className="imageSlider"></div>
      <div className="textContent">
        <h1>Welcome to the home page!</h1>
        <p>Click on the links above to learn more about us.</p>
        <Cards />
        <HomeProjects />
      </div>
    </div>
  );
}


export default Home;