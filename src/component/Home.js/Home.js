import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import {Button} from 'react-bootstrap';
import prideImg from '../../assets/pride.png';
import ingredients from '../../assets/ingredients.png';
const Home = ()=>{
    return(
        <Fragment>
        <Header/>
        {/* start section number */}
        <section className="numbers">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>1525+</h2>
                    <h6>saving</h6>
                </div>
                <div className="col-md-3">
                    <h2>2588+</h2>
                    <h6>photos</h6>
                </div>
                <div className="col-md-3">
                    <h2>1525+</h2>
                    <h6>rockets</h6>
                </div>
                <div className="col-md-3">
                    <h2>1525+</h2>
                    <h6>globes</h6>
                </div>
            </div>
        </div>
        </section>
        {/* End Section numbers */}
        {/* start section pride */}
        <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={prideImg} alt="pride"/>
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <Button variant="primary">order now</Button>{' '}
                    </div>
                </div>
            </div>
        </section>
        {/* end section pride */}
        {/* start section ingredients */}
        <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <Button variant="primary">learn more</Button>{' '}
                    </div>
                    <div className="col-md-6">
                        <img src={ingredients} alt="ingredients"/>
                    </div>
                </div>
            </div>
        </section>
        {/* end section ingredients */}
        {/* start section paralex */}
        <section className="paralex">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes no<br/> difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <Button variant="link">Watch Our Story</Button>
                    </div>
                </div>
            </div>
        </section>
        {/* end section paralex */}
        
        </Fragment>
    )
}

export default Home;