import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import UserShow from './UserShow'

export const LandingContainer = (props) => (
<div>
  <div className="titlelogo">
    <img
      id="logo-full" 
      src="https://i.imgur.com/jKyP4DG.png"
      alt="train logo with parrots"
      />
    </div>
  <div className="welcome">
    <h2>Your Own Personal HypeTrain!</h2>
    <h3 className="app-description">
    Choo-Choo is a pro-social, empathetic engagement app 
    based on the science of the relationship between generosity 
    and happiness, and seeks to foster a cycle of positive community engagement 
    and corresponding charitable donations.
    </h3>
  </div>
  <div className="callout large primary">
    <div className="media-object stack-for-small">
      <div className="media-object-section">
        <h3 className="getstarted">...What's A HypeTrain?</h3>
        <p className="howitworks" >
          A HypeTrain is a public accolade, superlative, or message of 
          praise that you can send out to members of your community! When 
          you send someone a HypeTrain, your positive community engagement 
          is rewarded by the recipient of your HypeTrain when they make a 
          corresponding donation to charity in your name as a thank you!
          <br></br><br></br>
          When a HypeTrain is sent your way, it will have two destinations:
          <ol>
          <li> Your text inbox, where you can read your accolade immediately, 
          get all those warm and fuzzy feelings from it, and then follow the 
          included link to your charity's website so you can make good on your pledge.</li>
          <li>Your profile page, where you can show off all your HypeTrains over 
          time, along with information about your chosen charity.</li>
          </ol>
        </p>
        <h3 className="getstarted">Feeling the Hype Yet? Let's Get Started!</h3>
      </div>
    </div>
  </div>
    <SearchBar/>
  <div className="grid-container science">
    <div className="cell">
      <div className="card">
      <h3 className="text-center">Believe the Hype:<br></br> The Science Behind Choo-Choo</h3></div></div>
    <div className="grid-x grid-margin-x medium-up-2 large-up-2">
      <div className="cell">
        <div className="card">
          <div className="card-section">
            <h5 className="science">
              <a href="https://doi.org/10.1177/0963721413512503">
              Prosocial Spending 
              and Happiness: Using Money to Benefit Others Pays Off
              </a> 
            </h5>
            <h6>Abstract:</h6>
            <p className="science">
              Although a great deal of research has shown that people 
              with more money are somewhat happier than are people with less money, 
              our research demonstrates that how people spend their money also matters 
              for their happiness. In particular, both correlational and experimental 
              studies have shown that people who spend money on others report more happiness. 
              The benefits of such prosocial spending emerge among adults around the world, 
              and the warm glow of giving can be detected even in toddlers. These benefits 
              are most likely to emerge when giving satisfies one or more core human needs 
              (relatedness, competence, and autonomy). The rewards of prosocial spending are 
              observable in both the brain and the body and can potentially be harnessed by 
              organizations and governments.
              <br></br><br></br>
              Citation:   Dunn, E. W., 
              Aknin, L. B., & Norton, M. I. (2014). 
              Prosocial Spending and Happiness: Using Money to Benefit 
              Others Pays Off. Current Directions in Psychological Science, 
              23(1), 41–47.
            </p>
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="card">
          <div className="card-section">
            <h5 className="science">
              <a href="https://doi.org/10.1037/h0032317">
              Effect of feeling good on helping: Cookies and kindness.
              </a>
            </h5>
            &nbsp;
            <h6>Abstract:</h6>
            <p className="science">
            Investigated the effects of a person's positive affective state on his or her 
            subsequent helpfulness to others. "Feeling good" was induced (a) in 52 male 
            undergraduates by having received cookies while studying in a library (Study I), 
            and (b) in 24 female and 17 male adults by having found a dime in the coin return 
            of a public telephone (Study II). In Study I, where the dependent measure involved 
            volunteering in reply to a student's request, a distinction was made between specific
            willingness to help and general willingness to engage in any subsequent activity. In Study II, 
            the dependent measure was whether Ss spontaneously helped to pick up papers that were
            dropped in front of them. On the basis of previous research, it was predicted that 
            Ss who were thus made to "feel good" would be more helpful than control Ss. Results 
            support the predictions. (PsycInfo Database Record (c) 2020 APA, all rights reserved)
            <br></br><br></br>
            Citation:   Isen, A. M., & Levin, P. F. (1972). Effect of feeling good on helping: 
            Cookies and kindness. Journal of Personality and Social Psychology, 21(3), 384–388.
            </p>
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="card">
          <div className="card-section">
          <h5 className="science">
            <a href="https://content.apa.org/doi/10.1037/h0029610">
            Success, failure, attention and reaction to others: 
            The warm glow of success.</a> 
          </h5>
            <h6>Abstract:</h6>
            <p className="science">
            Three experiments with adult Ss investigated the effects of the experience of success 
            or failure on subsequent generosity, helpfulness, and attention to the social environment. 
            On the basis of an intuitive formulation, designated the "warm glow of success" hypothesis, 
            it was expected that Ss who had succeeded on a task would subsequently behave more generously 
            and more helpfully toward a stranger than would Ss who had not succeeded. It was predicted 
            that Ss who had failed would be less attentive to the social environment than those who had 
            succeeded. In the success and failure groups, Ss performed a series of tasks and were then 
            informed that they had scored either well above the norm or well below it. In Study I, the dependent measure was amount of money 
            contributed to a charity collection can which the confederate placed on the table. 
            In both Studies II and III, the dependent variables were helpfulness and attentiveness to 
            the confederate. Results support the predictions. 
            (PsycINFO Database Record (c) 2016 APA, all rights reserved)
            <br></br><br></br>
            Citation:   Isen, A. M. (1970). Success, failure, attention, and reaction to others: 
            The warm glow of success. Journal of Personality and Social Psychology, 15(4), 294–301. 
            </p>
         </div>
        </div>
      </div>
      <div className="cell">
        <div className="card">
          <div className="card-section">
          <h5 className="science">
            <a href="https://doi.org/10.1007/s10902-011-9267-5">
            Happiness Runs in a Circular Motion: Evidence for a Positive 
            Feedback Loop between Prosocial Spending and Happiness</a> 
          </h5>
            <h6>Abstract:</h6>
            <p className="science">
            We examine whether a positive feedback loop exists between spending 
            money on others (i.e. prosocial spending) and happiness. Participants 
            recalled a previous purchase made for either themselves or someone else 
            and then reported their happiness. Afterward, participants chose whether 
            to spend a monetary windfall on themselves or someone else. Participants 
            assigned to recall a purchase made for someone else reported feeling 
            significantly happier immediately after this recollection; most importantly, 
            the happier participants felt, the more likely they were to choose to spend a 
            windfall on someone else in the near future. Thus, by providing initial evidence 
            for a positive feedback loop between prosocial spending and well-being, these data offer 
            one potential path to sustainable happiness: prosocial spending increases 
            happiness which in turn encourages prosocial spending.
            <br></br><br></br><br></br>
            Citation: Aknin, L.B., Dunn, E.W. & Norton, M.I. Happiness Runs 
            in a Circular Motion: Evidence for a Positive Feedback Loop between Prosocial 
            Spending and Happiness. J Happiness Stud 13, 347–355 (2012).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default LandingContainer