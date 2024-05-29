import React from 'react';
import './body.css';
import useIntersectionObserver from './useIntersectionObserver'; // Import the hook
import { logo1, logo2, logo3, logo4, logo5, logo6 } from '../imex';
import { unlock, ricon1, ricon2, ricon3, ricon4, tesla, c1, c2, c3 } from '../imex';

const Body = () => {
  useIntersectionObserver('.animated-section-left', { threshold: 0.1 });
  useIntersectionObserver('.animated-section-right', { threshold: 0.1 });


  return (
    <div>
      <div className="unlock">
        <div className="unlockImg animated-section-left">
          <img src={unlock} alt="Unlock" />
        </div>
        <div className="unlockContent animated-section-right">
          <div className="unlockDescription">
            <h3>The Unseen of spending three<br />years at Pixelgrade</h3><br/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eum error earum nesciunt iste aperiam est animi impedit, aut deserunt quisquam quasi ipsam distinctio. Fuga sit aperiam iusto totam, possimus quam voluptas numquam beatae adipisci ab ducimus officia voluptatem repudiandae architecto animi dolorem vero! Sint maiores nulla odio commodi, recusandae vero. Natus quae fugiat itaque enim molestiae laboriosam consequuntur labore?</p>
          </div><br/>
          <div className="unlockBtn">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="sectionHeading animated-section-left">
          <h3>Helping a local<br /><span>business reinvent itself</span></h3>
          <p>We reached here with Our hard work and dedicaiton</p>
        </div>
        <div className="counts animated-section-right">
          <div className="row">
            <div className="r1">
              <div className="Icon">
                <img src={ricon1} alt="" />
              </div>
              <div className="details"><h3>2,245,341</h3></div>
            </div>
            <div className="r2">
              <div className="Icon">
                <img src={ricon2} alt="" />
              </div>
              <div className="details"><h3>46,328</h3></div>
            </div>
          </div>
          <div className="row">
            <div className="r1">
              <div className="Icon">
                <img src={ricon3} alt="" />
              </div>
              <div className="details"><h3>828,867</h3></div>
            </div>
            <div className="r2">
              <div className="Icon">
                <img src={ricon4} alt="" />
              </div>
              <div className="details"><h3>1,926,436</h3></div>
            </div>
          </div>
        </div>
      </div>
      <div className="calender">
        <div className="lock animated-section-left">
          <img src={unlock} alt="" />
        </div>
        <div className="lockContent animated-section-right">
          <div className="lockDescription">
            <h2>How to design your site footer like<br />we did</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, est debitis cupiditate architecto non earum consequatur harum expedita molestias optio dolor beatae temporibus quidem. Optio natus vel iusto modi? Eius! Labore deleniti nobis sint vitae ullam, fuga eos quisquam soluta delectus rem, natus modi dolores sequi error optio! At illo iusto voluptatum amet deleniti minus impedit distinctio! Ipsa, possimus alias.</p>
          </div>
          <div className="lockbtn">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="customers">
        <div className="customerImg animated-section-left">
          <img src={tesla} alt="" />
        </div>
        <div className="customerContent animated-section-right">
          <div className="customerDescription">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ab aut, ipsa dignissimos adipisci nulla reiciendis aliquid velit. Accusantium odit pariatur aliquid magnam itaque debitis? Ratione explicabo delectus ipsam voluptatum. Minus ullam temporibus neque qui eaque? Velit, itaque totam voluptas nobis repudiandae sit quos aliquid a, distinctio perferendis dolorum magnam ducimus cupiditate qui doloribus nesciunt eligendi neque, dolore accusamus nostrum.</p>
            <h5>Tim Smith</h5>
            <p>British Dragon Boat Racing Association</p>
          </div>
          <div className="customerLogo">
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
            <img src={logo5} alt="logo" />
            <img src={logo6} alt="logo" />
            <a href="#allCustomers">Meet all customers</a>
          </div>
        </div>
      </div>
      <div className="communityUpdate">
        <div className="communitybdy animated-section-left">
          <h3>Caring is the new marketing</h3>
          <p>The Nextcent blog is the best place to read about the latest membership insights,<br/> trends and more. See who's joining the community, read about how our community<br/> are increasing their membership income and lot's more.​</p>
        </div>
        <div className="ctyframe animated-section-right">
          <div className="f">
            <div className="img"><img src={c1} alt="" /></div>
            <div className="contentcard">
              <p>Creating Streamlined Safegurding Processes with Oneren</p>
              <a href="#readMore">Read More</a>
            </div>
          </div>
          <div className="f">
            <div className="img"><img src={c2} alt="" /></div>
            <div className="contentcard">
              <p>What are your safeguarding responsibilities and how can you manage them?</p>
              <a href="#readMore">Read More</a>
            </div>
          </div>
          <div className="f">
            <div className="img"><img src={c3} alt="" /></div>
            <div className="contentcard">
              <p>Revamping the Membership Model with the Triathlon Australia</p>
              <a href="#readMore">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
