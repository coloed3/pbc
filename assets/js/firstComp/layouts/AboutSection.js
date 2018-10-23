import React from 'react';
import AboutHero from '../hero/AboutHero';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const AboutSection = () => {
  return (
    <div>
      <AboutHero />
      <section id="AboutUs">
        <div className="container">
          <div className="row">
            <div className="s12 m2">
              <p className="flow-text">
                Pastor Brian E. Griffin grew up in Pocatello. Although, he did
                not get saved until December of 1992, while he was a youth
                living on his own in Las Vegas,Nevada. Shortly after getting
                saved, the Lord moved Brian back to Pocatello, where he began
                working for KRTK Radio and started teaching the Word as a youth
                minister at a local church.
              </p>
              <p className="flow-text">
                In 1994, Brian met his future bride and ministry partner,
                Chandra. The two were wed in April of 1995. Brian and Chandra
                served in various ministries in the churches they were involved
                with; Brian mostly in teaching roles. Brian and Chandra were
                blessed by the Lord in 2001 with the birth of their only child,
                Jadon. In January of 2007, the Griffins began attending
                Pocatello Baptist Church. Shortly thereafter, they begin serving
                under Pastor Colan Deatherage. For 7 years Brian served as the
                Youth minister, and a Deacon for many of those years.
              </p>
              <p className="flow-text">
                Pocatello Baptist Church called Brian to be their Pastor in
                August of 2014. Brian and Chandra say: “It is a great blessing
                and privilege to minister to and with the amazing church family
                of Pocatello Baptist Church.”
              </p>
              <p className="flow-text">
                Pastor Brian is know for his passion for the Word of God, and
                his love of teaching through clear and challenging exposition of
                the scriptures while helping other to apply the Lord’s
                instructions for godly living,
              </p>
              <p className="flow-text">
                Romans 12:1-2 “I beseech you therefore, brethren, by the mercies
                of God, that ye present your bodies a living sacrifice, holy,
                acceptable unto God, which is your reasonable service. (2) And
                be not conformed to this world: but be ye transformed by the
                renewing of your mind, that ye may prove what is that good, and
                acceptable, and perfect, will of God.”
              </p>

              <blockquote>
                Pastor Brian Griffin
                <p>Pocatello Baptist Church</p>
                <p> 208-237-4915</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutSection;
