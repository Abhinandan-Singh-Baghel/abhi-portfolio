import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme_wrapper" id="aboutme_wrapper">
            <div className="about_heading text-center">
                About Me
            </div>
            <div className="about_cards">
                <div class="card cards m-3">
                    <div class="card-body">
                        <div className="card-heading">
                            Proficient With <hr />
                        </div>
                        <div className="card-content">
                            <p>
                                Development <br />
                                Node.js , Express , Postgres , Mongo , Typescript , Tailwind , Docker , Next.js , React
                            </p>
                            <p>
                                Devops <br />
                                Docker , Nginx , Advanced Backend , System Design 
                            </p>
                            <p>
                                Advanced Devops, System Design <br />
                                Kubernetes , CI?CD  , Promhetheus , Grafana , AWS Constructs (EC2, S2, CDNs, LB, EKS), 
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div class="card cards m-3">
                    <div class="card-body">
                        <div className="card-heading">
                            Education <hr />
                        </div>
                        <div className="card-content">
                            <p>
                                2025 <br />
                                Indian Institute of Technology, Kanpur <br />
                                
                                Computer Science Engineering(Cybersecurity).
                            </p>
                            
                            
                        </div>
                    </div>
                </div>
                <div class="card cards m-3">
                    <div class="card-body">
                        <div className="card-heading">
                            When i'm not doing dev things, I like to... <hr />
                        </div>
                        <div className="card-content">
                            <ul>
                                <li>play cricket (It's a family thing!)</li>
                                <li>play chess (Not good, getting better though!)</li>
                                <li>play video games </li>
                                <li>spend time in nature</li>
                                <li>watch anime</li>
                                <li>go to the gym</li>
                                <li>listen music (I like many different genres of music!)</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card cards bottom_text text-center">
                <p>
                    "The difference between a successful person and others is not a lack of strength, 
                    not a lack of knowledge, but rather a lack of will." <br /> -Vince Lombardi
                </p>
            </div>
        </div>
    );
};

export default AboutMe;