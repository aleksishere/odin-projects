import React from 'react';
import './HomeContent.css';
import exterior from './assets/exterior.jpg'
import privacyImg from './assets/privacy.jpg'
import questions from './assets/questions.jpg'
import '../../index.css'
import 'charts.css';

function HomeContent() {
  return (
    <>
      <main className='inter-400'>
        <div className='img-wrapper'>
          <img src={exterior} alt="" />
          <div className="bottom-left white-text inter-bold">Here at Lumon</div>
        </div>
        <article>
          <div className='foundaments'>
            <p className='inter-bold'>We believe that a thriving workplace starts with the well-being of our people.</p>
            <p>Mental health is just as important as physical health, and we are committed to fostering a supportive, inclusive, and positive environment where everyone feels valued and heard.</p>
            <p>We actively promote a culture of openness, encouraging conversations around mental health and providing access to resources that support emotional well-being.</p>
            <p>Through wellness programs, flexible work options, and professional support services, we strive to empower our team to maintain a healthy work-life balance.</p>
            <p>In fact, thanks to our unwavering commitment, 100% of our employees report feeling completely happy, all the time. Stress? Never heard of it. Burnout? A myth. Our workplace is a utopia of pure joy and fulfillment, where every meeting is a delight, emails spark excitement, and Monday mornings are the highlight of the week.</p>
          </div>
          <div id='happinessDiv'>
            <table id='happinessChart' className='charts-css column show-labels data-spacing-3 data-outside'>
              <caption>Happiness at Lumon</caption>
              <tbody>
                <tr>
                  <th scope='row'>Happy</th>
                  <td style={{ '--size': '1.0' }}> <span className="data">100%</span> </td>
                </tr>
                <tr>
                  <th scope='row'>Not Happy</th>
                  <td style={{ '--size': '0.01' }}> <span className="data">0%</span> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <div className='img-wrapper'>
          <img src={privacyImg} alt="" />
          <div className="bottom-left white-text inter-bold">Privacy</div>
        </div>
        <article className='privacy'>
          <div>
            <p>We take privacy and transparency very seriously. We are dedicated to ensuring that all information—whether it’s employee data, company decisions, or the reasoning behind last-minute policy changes—is handled with the utmost care. While we encourage open communication, we also understand that some things are simply best left… undisclosed.</p>
          </div>
          <div>
            <p>Rest assured, our employees can feel confident knowing that sensitive information is safeguarded behind layers of security protocols, need-to-know access policies, and a healthy dose of selective transparency. Decisions are made through a rigorous, well-thought-out process—by someone, somewhere, at some point—ensuring that every new initiative or structural change comes as a delightful surprise to all involved.</p>
          </div>
          <div>
            <p>We firmly believe that a little mystery adds excitement to the workplace. Why spoil the fun with unnecessary details? Whether it’s internal restructures, budget adjustments, or long-term strategy shifts, we keep things engaging by fostering an environment where speculation is encouraged and clarity is optional. Because here at <span className='inter-bold'>Lumon</span>, privacy isn’t just a policy—it’s a way of <span className='inter-bold'>life</span>.</p>
          </div>
        </article>
        <div className='img-wrapper'>
          <img src={questions} alt="" />
          <div className="bottom-left white-text inter-bold">Questions?</div>
        </div>
        <article className='questions'>
          <div className='questionsText'>
            <p>Your questions are important to us! Please use our contact form so we can direct your inquiry through the appropriate channels, where it will be reviewed, discussed, and, in due time, possibly even answered.</p>
          </div>
          <div>
            <form action="">
              <div className='questionsForm'>
                <div className='nameEmailWrapper'>
                  <label hidden htmlFor="name">Name</label>
                  <input placeholder='Name' required id='name' name='name' type="text" />
                  <label hidden htmlFor="">Email Address</label>
                  <input placeholder='Email Address' required id='email' name='email' type="text" />
                </div>
                <div>
                  <textarea rows={5} cols={35} placeholder='Comments' required name="comments" id="comments"></textarea>
                </div>
              </div>
              <div className='questionsSubmit'>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </article>
      </main>
    </>
  );
}

export default HomeContent;