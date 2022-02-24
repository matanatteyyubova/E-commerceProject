import React from 'react';

const News = () => {
    return (
        <div className='news-sec' data-aos="fade-up" data-aos-duration="3000">
            <div className="row  g-2 ">
                <div className="col col-lg-4  col-sm-12 ">
                  <div className="content">
                  <div className="icon-box">
                    <i class="fa-solid fa-truck"></i>
                    </div>
                    <div className="news-text">
                        <h4>FREE SHIPPING</h4>
                        <p>Free shipping on all UK oders</p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-sm-12 ">
               <div className="content">
               <div className="icon-box">
                <i class="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div className="news-text">
                        <h4>MONEY GUARANTEE</h4>
                        <p>30 days Money back</p>
                    </div>
               </div>
                </div>
                <div className="col col-lg-4 col-sm-12  ">
              <div className="content">
              <div className="icon-box">
                <i class="fa-solid fa-gears"></i>
                    </div>
                    <div className="news-text">
                        <h4>ONLINE SUPPORT</h4>
                        <p>We support online 24/24</p>
                    </div>
              </div>
                </div>
            </div>
        </div>
    );
};

export default News;