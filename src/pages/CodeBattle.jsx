import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { DetailsWithoutTitle } from '../components/Details';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderTitleWithList, renderDetails } from '../components/Render';

const CodeBattle = () => {
  const { shortDescription, longDescription } = events['codebattle'];

  // const [pdfUrl, setPdfUrl] = useState('/resources/coding-game-rulebook.pdf');
  const pdfUrl = "/resources/coding-game-rulebook.pdf";

  const mainDescription = (
    <div className='flex flex-col px-4 gap-6'>

      {renderShortDescriptions(shortDescription)}
      {renderLongDescriptions(longDescription)}
      <DetailsWithoutTitle description={{ value: "Calling all CS undergrads! Join us for an adrenaline-pumping <b>Code Battle</b> where Gaming Meets Coding, and Victory is Written in Code!<br/><br/><b>Do you love gaming?</b><br/><b> Do you also love coding?</b><br/> <br/>We have news for you. We will present to you a gaming environment where the power to control lies not in a mere controller but in the elegance of your code. Your digital warriors, crafted with the brilliance of your programming finesse in your favourite programming language, will engage in a fierce showdown against the bots of your adversaries. It's not just a game; it's an epic battle of tactics, a symphony of skill where your code reigns supreme.🎮💻🚀" }} />
      {renderTitleWithList('What to expect', [
        "Intense battle of the programmable bots.",
        "Strategy game that will push your limits and expand your skills.",
        "Networking opportunities with fellow CS enthusiasts.",
        "Prizes and recognition for top performers.",
      ])}
      {renderTitleWithList('🏆 Prizes', [
        "🏆 Champion - 25K BDT",
        "🥈 1st Runners up - 15K BDT",
        "🥉 2nd Runners up - 10K BDT",
        "🏅 4th Prize - 7K BDT",
        "🎖️ 5th Prize - 5K BDT",
        "🎖️ SUST Emerging Player - 5K BDT",
      ])}
      <DetailsWithoutTitle description={{ value: "<b>*SUST Emerging participant</b>: Best Positioned Player from SUST who is not in the top five" }} />
      <DetailsWithoutTitle description={{ value: "This is your chance to shine and demonstrate your coding finesse. Are you up for the challenge? Mark your calendars and join us for an unforgettable <b>Code Battle</b>!" }} />
      {renderDetails({
        title: "For queries, Contact:",
        value: `Faridul Reza(Sagor)<br/>
        Email: faridul.reza.sagor@gmail.com<br/>
        Contact No: 01953737832<br/><br/>
        Remember, the battle awaits—brace yourself for an electrifying coding experience! Don't miss out—Register now and secure your spot in this thrilling event! 💥✨`,
      })}
    </div>
  );
  const announcement = (
    <div className='py-20'>
      No Announcements Yet
    </div>
  );
  const download = (
    <div>
      <div className='flex gap-3'>
        <span>
          To download the rulebook, click
        </span>
        <span>
          <a href={pdfUrl} download="CodeBattle.pdf" target="_blank" rel="noopener noreferrer" className='underline'>
            Download PDF
          </a>
        </span>
        {/* <button 
        className={`rounded-xl bg-field-body text-navbar border border-navbar hover:border-body px-4 py-2 hover:outline-none hover:bg-navbar-button hover:text-body`}>
          </button> */}
      </div>
      <div className='py-8'>
        💥𝗖𝗼𝗱𝗲 𝗕𝗮𝘁𝘁𝗹𝗲 𝗥𝘂𝗹𝗲 𝗕𝗼𝗼𝗸:<br /><br />
        1. The contest will take place on     <a href="https://codingame.com" target="_blank" rel="noopener noreferrer" className="underline">CodingGame</a><br />
        2. Eligibility is limited to undergraduate students from recognized universities in Bangladesh, although a warm welcome is extended to students from schools and colleges.<br />
        3. Participants are expected to compete individually.<br />
        4. Only registered CodinGame usernames will be considered for placement on the leaderboard.<br />
        5. The submitted bots will be pitted against each other, and the public leaderboard will display rankings throughout the contest duration.<br />
        6. Contest details will be officially announced on February 2nd.<br />
        7. Participants have the flexibility to submit code multiple times between February 2 and February 16. However, only the most recent submission will be taken into account.<br />
        8. The submission window closes at 12:00 AM on February 17th.<br />
        9. Rankings are determined by a sequential hierarchy, where the bot ranked first must outperform all others, the second-ranked bot must surpass all others except the first, and so on.<br />
        10. Your newly submitted bot will only fight with the superior bots. In the case of a participant holding the 5th rank and submitting a new bot, the bot will have a rematch with the 4th, 3rd, 2nd, and 1st ranked bots. If the bot loses against the 2nd, it will be placed in the 3rd position.<br />
        11. Solutions will undergo a plagiarism check before finalizing the winners.<br />
        12. Accepted programming languages include C, C++11, Java, JavaScript, and Python 3.<br /><br />
        Relevant practice games can be found at <a href="https://www.codingame.com/multiplayer/bot-programming" target="_blank" rel="noopener noreferrer" className="underline">https://www.codingame.com/multiplayer/bot-programming</a> for practice.<br />
      </div>
    </div>
  )
  return (
    <EventPage id="codebattle" >
      <Tab child1={mainDescription} child2={announcement} child3={download} />
    </EventPage>
  );
};

export default CodeBattle;
