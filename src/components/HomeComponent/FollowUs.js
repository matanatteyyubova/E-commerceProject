import React, { Component } from 'react';
import insta1 from '../../assets/img/insta1.jpg';
import insta2 from '../../assets/img/insta2.jpg';
import insta3 from '../../assets/img/insta3.jpg';
import insta4 from '../../assets/img/insta4.jpg';
import insta5 from '../../assets/img/insta5.jpg';
import insta6 from '../../assets/img/insta6.jpg';

class FollowUs extends Component {
    render() {
        return (
            <div>
                <section className='sec_end'>
                    <div className="text">
                    <h3 >FOLLOW US INSTAGRAM</h3>
                    <div className="line"></div>
                    </div>
                <div className="container_end">
                    <div className="row ms-1 me-4 mt-3 gt-0">
                        <div className="col col-lg-2 col-md-3 col-sm-4 "> <img src={insta1} alt="" /> <i class="fab fa-instagram"></i> </div>
                        <div className="col col-lg-2 col-md-3 col-sm-4"><img src={insta4} alt="" /><i class="fab fa-instagram"></i></div>
                        <div className="col col-lg-2 col-md-3 col-sm-4"><img src={insta3} alt="" /><i class="fab fa-instagram"></i></div>
                        <div className="col col-lg-2 col-md-3 col-sm-4"><img src={insta2} alt="" /><i class="fab fa-instagram"></i></div>
                        <div className="col col-lg-2 col-md-3 col-sm-4"><img src={insta5} alt="" /><i class="fab fa-instagram"></i></div>
                        <div className="col col-lg-2 col-md-3 col-sm-4"><img src={insta6} alt="" /><i class="fab fa-instagram"></i></div>
                    </div>
                    </div>
                </section>







             
            </div>
        );
    }
}


export default FollowUs;

