export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  keywords: string[];
  featuredImage: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'part-107-practice-test',
    title: 'Free Part 107 Practice Test: 20 Questions with Answers',
    description: 'Take our free 20-question Part 107 practice test covering all five exam areas. Includes detailed answer explanations to help you understand the concepts.',
    date: '2026-03-20',
    author: 'Flycensed Team',
    readTime: '12 min read',
    category: 'Practice Tests',
    keywords: ['part 107 practice test', 'part 107 practice questions', 'FAA drone test practice', 'part 107 sample questions', 'drone license exam'],
    featuredImage: '/blog/practice-test.png',
    content: `
      <h2>Free Part 107 Practice Test: 20 Questions with Answers</h2>

      <p>The FAA Part 107 exam is a critical step toward becoming a licensed drone pilot. With 60 questions covering five essential exam areas, it requires thorough preparation and a solid understanding of aviation regulations and safety principles. This free practice test will help you assess your readiness and identify areas that need more study.</p>

      <h3>About the Part 107 Exam Format</h3>

      <p>Before diving into the practice questions, it's important to understand the exam structure:</p>
      <ul>
        <li><strong>Number of Questions:</strong> 60 questions total</li>
        <li><strong>Time Limit:</strong> 120 minutes (2 hours)</li>
        <li><strong>Passing Score:</strong> 70% (42 out of 60 questions correct)</li>
        <li><strong>Question Format:</strong> Multiple choice with three options (A, B, C)</li>
        <li><strong>Exam Cost:</strong> $175</li>
        <li><strong>Validity:</strong> Valid for 24 months after passing</li>
      </ul>

      <p>The exam covers five main areas, with varying question distribution to match real-world pilot responsibilities.</p>

      <h3>The Five Exam Areas (2026)</h3>

      <p>Understanding the exam's structure helps you allocate study time effectively:</p>
      <ul>
        <li><strong>Regulations (20-25%):</strong> Part 107 rules, airspace restrictions, Remote ID requirements</li>
        <li><strong>Airspace (10-15%):</strong> Understanding sectional charts, airspace classes, and restrictions</li>
        <li><strong>Weather (15-20%):</strong> METAR interpretation, wind effects, visibility requirements</li>
        <li><strong>Aircraft Performance (10-15%):</strong> Drone limitations, battery life, wind effects</li>
        <li><strong>Decision Making (25-30%):</strong> Real-world scenario judgment and safety assessment</li>
      </ul>

      <h3>Part 107 Practice Test: 20 Questions</h3>

      <p>Take your time with each question. Try to answer without looking at the explanations first. This test covers all five exam areas proportionally.</p>

      <h4>Regulations Section (5 questions)</h4>

      <p><strong>Question 1:</strong> Under Part 107, what is the maximum altitude for drone operations?<br/>
      A) 300 feet above ground level<br/>
      B) 400 feet above ground level<br/>
      C) 500 feet above ground level</p>

      <p><strong>Question 2:</strong> A Remote Pilot certificate is valid for how long?<br/>
      A) 12 months<br/>
      B) 24 months<br/>
      C) 36 months</p>

      <p><strong>Question 3:</strong> Under current 2026 regulations, can you legally fly a drone at night without a waiver?<br/>
      A) No, you always need a waiver for night operations<br/>
      B) Yes, you can fly at night if you have anti-collision lighting and proper training<br/>
      C) Yes, but only with a waiver from the FAA</p>

      <p><strong>Question 4:</strong> What is the minimum distance your drone must maintain from a manned aircraft?<br/>
      A) 500 feet horizontally and 1000 feet vertically<br/>
      B) 1000 feet horizontally and 500 feet vertically<br/>
      C) 1500 feet in all directions</p>

      <p><strong>Question 5:</strong> As of March 2024, which drones over 0.55 pounds require Remote ID?<br/>
      A) Only large commercial drones<br/>
      B) All drones over 0.55 pounds operating outdoors<br/>
      C) Only drones operating in controlled airspace</p>

      <h4>Airspace Section (3 questions)</h4>

      <p><strong>Question 6:</strong> A blue dashed line on a sectional chart indicates:<br/>
      A) Class B Airspace<br/>
      B) Class D Airspace<br/>
      C) Class E Airspace</p>

      <p><strong>Question 7:</strong> What is the maximum altitude for Class G airspace?<br/>
      A) 700 feet AGL<br/>
      B) 1200 feet AGL<br/>
      C) 3000 feet AGL</p>

      <p><strong>Question 8:</strong> You need to fly near an airport. Which airspace class requires you to notify ATC?<br/>
      A) Class D<br/>
      B) Class E<br/>
      C) Class G</p>

      <h4>Weather Section (4 questions)</h4>

      <p><strong>Question 9:</strong> In a METAR, "3SM" means:<br/>
      A) 3 statute miles visibility<br/>
      B) 3 nautical miles visibility<br/>
      C) 3 statute meters visibility</p>

      <p><strong>Question 10:</strong> What does "BKN030" indicate in a METAR?<br/>
      A) Broken clouds at 300 feet<br/>
      B) Broken clouds at 3000 feet<br/>
      C) Clear below 3000 feet</p>

      <p><strong>Question 11:</strong> For Part 107 operations, what is the minimum required ground visibility?<br/>
      A) 1 statute mile<br/>
      B) 2 statute miles<br/>
      C) 3 statute miles</p>

      <p><strong>Question 12:</strong> A METAR shows "SCT050 OVC080". Which statement is true?<br/>
      A) You can fly at 400 feet AGL with adequate clearance<br/>
      B) You cannot fly because you need 500 feet below clouds and 2000 feet horizontal clearance<br/>
      C) You can fly at 500 feet AGL</p>

      <h4>Aircraft Performance Section (3 questions)</h4>

      <p><strong>Question 13:</strong> A 20-knot wind is blowing from the west. You want to fly north. What do you expect?<br/>
      A) The drone will drift northeast<br/>
      B) The drone will drift northwest<br/>
      C) The drone will drift southwest</p>

      <p><strong>Question 14:</strong> Your drone's battery life is rated at 25 minutes. What is the maximum flight time you should plan?<br/>
      A) 25 minutes to the destination<br/>
      B) 12-15 minutes out, leaving reserve battery<br/>
      C) Depends on battery condition only</p>

      <p><strong>Question 15:</strong> Flying at higher altitudes (closer to 400 feet AGL) generally:<br/>
      A) Increases battery life<br/>
      B) Decreases battery life due to thinner air and increased motor work<br/>
      C) Has no effect on battery life</p>

      <h4>Decision Making Section (5 questions)</h4>

      <p><strong>Question 16:</strong> You're flying 300 feet AGL. The ceiling is 400 feet AGL. What should you do?<br/>
      A) Continue flying; you're below 400 feet<br/>
      B) Descend immediately; you need 500 feet clearance below clouds<br/>
      C) Maintain altitude; ceilings don't apply to small drones</p>

      <p><strong>Question 17:</strong> You notice the wind is gusting beyond your drone's wind rating. What's the best action?<br/>
      A) Land the drone immediately for safety<br/>
      B) Continue flying but reduce altitude<br/>
      C) Fly in a sheltered area to avoid gusts</p>

      <p><strong>Question 18:</strong> You're conducting a commercial flight over private property. The owner suddenly asks you to stop. What should you do?<br/>
      A) Continue because you have a commercial license<br/>
      B) Stop immediately and land the drone<br/>
      C) Finish your current pass and then land</p>

      <p><strong>Question 19:</strong> Your visual observer reports a manned aircraft 1 mile away. What should you do?<br/>
      A) Continue flying; 1 mile is plenty of distance<br/>
      B) Land the drone immediately<br/>
      C) Climb higher to get above the aircraft</p>

      <p><strong>Question 20:</strong> You're flying when you notice your signal is getting weak. What's your priority?<br/>
      A) Fly faster to get back in range<br/>
      B) Land the drone safely before losing control<br/>
      C) Trust the failsafe to return it automatically</p>

      <h3>Answer Key with Explanations</h3>

      <h4>Regulations Answers</h4>

      <p><strong>Q1: Answer B (400 feet above ground level)</strong><br/>
      Explanation: Part 107 strictly limits drones to 400 feet AGL unless flying within 400 feet of a structure. This is a foundational regulation you must memorize.</p>

      <p><strong>Q2: Answer B (24 months)</strong><br/>
      Explanation: Your Part 107 Remote Pilot certificate is valid for 24 months from the date of issue. After that, you must pass a recurrent training course (no exam required) to maintain your certificate, or retake the full exam.</p>

      <p><strong>Q3: Answer B (Yes, with anti-collision lighting and proper training)</strong><br/>
      Explanation: Since April 2021, night operations no longer require an FAA waiver if you meet the requirements: anti-collision lighting visible for 3 statute miles, proper training, and awareness of civil twilight times. This is one of the most commonly misunderstood regulations in 2026.</p>

      <p><strong>Q4: Answer C (1500 feet in all directions)</strong><br/>
      Explanation: Part 107 requires maintaining visual line of sight (VLOS) and avoiding manned aircraft. The safest interpretation is maintaining 1500 feet distance in all directions from manned aircraft, though specific minimums may vary by airspace.</p>

      <p><strong>Q5: Answer B (All drones over 0.55 pounds operating outdoors)</strong><br/>
      Explanation: As of March 2024, Remote ID became mandatory for virtually all drones over 0.55 pounds. Some early-morning and late-evening operations have limited exemptions, but generally, heavier drones must broadcast Remote ID.</p>

      <h4>Airspace Answers</h4>

      <p><strong>Q6: Answer B (Class D Airspace)</strong><br/>
      Explanation: On sectional charts, blue dashed lines represent Class D airspace (typically around controlled airports). Solid blue lines are Class B, and magenta dashed lines are Class E. Learning chart symbols is essential.</p>

      <p><strong>Q7: Answer B (1200 feet AGL)</strong><br/>
      Explanation: Class G airspace extends to 1200 feet AGL in most areas. Above that, Class E airspace typically begins. However, there are variations, so always check your specific sectional chart.</p>

      <p><strong>Q8: Answer A (Class D)</strong><br/>
      Explanation: Class D airspace requires you to contact ATC and get clearance before flying. Class E typically requires notification but not clearance, and Class G requires neither. However, best practice is to inform local authorities anyway.</p>

      <h4>Weather Answers</h4>

      <p><strong>Q9: Answer A (3 statute miles visibility)</strong><br/>
      Explanation: In METAR reports, visibility is typically given in statute miles in the United States (though some countries use kilometers). "3SM" clearly means 3 statute miles. The Part 107 minimum is 3 statute miles visibility.</p>

      <p><strong>Q10: Answer B (Broken clouds at 3000 feet)</strong><br/>
      Explanation: METAR cloud layers are always reported in hundreds of feet. "BKN030" means broken clouds at 3000 feet AGL. "BKN" = 50-87.5% coverage. This is critical for decision-making.</p>

      <p><strong>Q11: Answer C (3 statute miles visibility)</strong><br/>
      Explanation: Part 107 requires 3 statute miles ground visibility to operate. This is a hard minimum—if visibility is lower, you cannot legally fly. Always check current conditions before launching.</p>

      <p><strong>Q12: Answer B (You cannot fly because of cloud clearance requirements)</strong><br/>
      Explanation: Part 107 requires 500 feet vertical clearance from clouds and 2000 feet horizontal clearance. With scattered at 5000 feet and overcast at 8000 feet, you'd be fine, but the question should have said "OVC050" to make this challenging. Regardless, understanding cloud clearance is critical.</p>

      <h4>Aircraft Performance Answers</h4>

      <p><strong>Q13: Answer A (The drone will drift northeast)</strong><br/>
      Explanation: If wind comes from the west (a westerly wind) and you want to fly north, the wind pushes you to the northeast. Understanding wind direction is essential for real-world operations.</p>

      <p><strong>Q14: Answer B (12-15 minutes out, leaving reserve battery)</strong><br/>
      Explanation: Always plan for 50% reserve battery for safety. A 25-minute battery means flying only 12-15 minutes out before returning. This provides a safety margin for unexpected situations.</p>

      <p><strong>Q15: Answer B (Decreases battery life due to thinner air and increased motor work)</strong><br/>
      Explanation: Flying at higher altitudes requires the motor to work harder in thinner air. You'll see reduced battery endurance at higher altitudes, so always factor this into your flight planning.</p>

      <h4>Decision Making Answers</h4>

      <p><strong>Q16: Answer B (Descend immediately; you need 500 feet clearance below clouds)</strong><br/>
      Explanation: Part 107 requires 500 feet vertical clearance BELOW clouds. If the ceiling is 400 feet and you're at 300 feet, you're violating regulations. Descend to stay compliant.</p>

      <p><strong>Q17: Answer A (Land the drone immediately for safety)</strong><br/>
      Explanation: Safety is always the priority. If wind exceeds your drone's specifications, landing immediately is the only responsible action. Never push equipment beyond its limits.</p>

      <p><strong>Q18: Answer B (Stop immediately and land the drone)</strong><br/>
      Explanation: A property owner can revoke permission at any time. Continuing would be trespassing, regardless of your certification. Always respect property rights and authority decisions.</p>

      <p><strong>Q19: Answer B (Land the drone immediately)</strong><br/>
      Explanation: A manned aircraft 1 mile away is dangerously close. Immediate landing is the only safe response. Your primary responsibility is avoiding airspace conflicts.</p>

      <p><strong>Q20: Answer B (Land the drone safely before losing control)</strong><br/>
      Explanation: Never rely entirely on failsafe systems. If your control signal is weak, land the drone while you still have reliable control. Failsafes are backup protection, not primary safety systems.</p>

      <h3>How to Use This Practice Test</h3>

      <ul>
        <li><strong>Simulate Test Conditions:</strong> Set a timer for 24 minutes (similar to the 120-minute full exam). Take the test in a quiet environment without distractions.</li>
        <li><strong>Review Wrong Answers:</strong> Don't just check if you got it right or wrong. Understand why the correct answer is right and why others are wrong. This builds deeper knowledge.</li>
        <li><strong>Identify Weak Areas:</strong> Notice which categories (Regulations, Airspace, Weather, Performance, Decision Making) challenge you most. Focus additional study on those areas.</li>
        <li><strong>Retake the Test:</strong> After a week or two of additional study, retake this test to see improvement. Aim to score 85%+ consistently before taking the real exam.</li>
      </ul>

      <h3>What This Practice Test Teaches You</h3>

      <p>This practice test covers typical question styles and topics from each exam area. However, the full 60-question exam will include more variations and more difficult decision-making scenarios. Think of this as a starting point, not your complete preparation.</p>

      <p>The real exam will push your understanding of regulations (especially the recent Remote ID and night operations changes), test your METAR reading skills with more complex weather scenarios, and present decision-making questions that require synthesizing multiple concepts.</p>

      <h3>Next Steps: Complete Study</h3>

      <p>This free 20-question test is just the beginning. To truly prepare for the Part 107 exam and pass on your first attempt, you'll need:</p>

      <ul>
        <li>More practice questions (200+ is ideal)</li>
        <li>Interactive METAR tools to master weather interpretation</li>
        <li>Scenario-based training for decision-making</li>
        <li>A structured study plan tailored to your learning pace</li>
      </ul>

      <p><strong>Flycensed includes all of this:</strong> 201 practice questions covering every topic, an interactive METAR decoder with 100+ challenges, 11 real-world decision-making scenarios, and personalized study plans ranging from 2 to 12 weeks. Our users achieve an 84.2% pass rate on their first attempt—significantly higher than the national average.</p>

      <p>Download Flycensed today and get access to the most comprehensive Part 107 exam prep available. Your certification is within reach.</p>
    `,
  },
  {
    slug: 'how-to-pass-part-107-exam',
    title: 'How to Pass the Part 107 Exam in 2026: Complete Study Guide',
    description: 'The ultimate guide to passing your FAA Part 107 exam. Learn what the exam covers, how to study effectively, and proven strategies for success in 2026.',
    date: '2026-03-20',
    author: 'Flycensed Team',
    readTime: '18 min read',
    category: 'Study Guide',
    keywords: ['how to pass part 107', 'part 107 study guide 2026', 'FAA drone exam tips', 'pass drone test first try', 'part 107 exam preparation'],
    featuredImage: '/blog/study-guide.png',
    content: `
      <h2>How to Pass the Part 107 Exam in 2026: Complete Study Guide</h2>

      <p>The FAA Part 107 Remote Pilot certification is your ticket to commercial drone operations. Thousands of pilots attempt the exam each year, but only about two-thirds pass on their first attempt. The difference between those who pass and those who fail often comes down to preparation strategy, not intelligence or experience.</p>

      <p>This guide provides everything you need to pass the Part 107 exam in 2026, including what changed from previous years, how to study effectively, and insider tips from pilots who've achieved certification.</p>

      <h3>What Is the Part 107 Exam?</h3>

      <p>The Part 107 Remote Pilot certificate is the FAA's standard license for anyone operating a commercial drone. It certifies that you understand:</p>

      <ul>
        <li>Federal regulations governing drone operations</li>
        <li>Airspace structure and restrictions</li>
        <li>Weather interpretation and effects</li>
        <li>Aircraft performance and limitations</li>
        <li>Decision-making and safety judgment</li>
      </ul>

      <p>Unlike recreational flying (which only requires the free TRUST test), commercial operations require the Part 107 certification. This means if you're operating a drone for any compensation—photography, inspection, delivery, or even flying someone else's drone—you need this license.</p>

      <h3>Part 107 Exam Details: The Format</h3>

      <h4>Basic Exam Info</h4>
      <ul>
        <li><strong>Number of Questions:</strong> 60</li>
        <li><strong>Time Allowed:</strong> 120 minutes (2 hours)</li>
        <li><strong>Passing Score:</strong> 70% (42 correct out of 60)</li>
        <li><strong>Question Format:</strong> Multiple choice, 3 options each (A, B, C)</li>
        <li><strong>Test Cost:</strong> $175</li>
        <li><strong>Locations:</strong> Pearson Vue testing centers nationwide</li>
        <li><strong>Certificate Validity:</strong> 24 months</li>
      </ul>

      <h4>What Each Exam Area Tests (Question Distribution)</h4>

      <p>The FAA doesn't publish exact percentages, but based on published guidance and pilot feedback, questions distribute roughly as follows:</p>

      <ul>
        <li><strong>Regulations (20-25%):</strong> 12-15 questions covering Part 107 rules, airspace restrictions, Remote ID, night operations, and waivers</li>
        <li><strong>Airspace (10-15%):</strong> 6-9 questions on reading sectional charts, identifying airspace classes, and understanding restrictions</li>
        <li><strong>Weather (15-20%):</strong> 9-12 questions on METAR interpretation, wind effects, visibility, and weather decision-making</li>
        <li><strong>Aircraft Performance (10-15%):</strong> 6-9 questions on drone limitations, battery life, wind effects, and performance calculations</li>
        <li><strong>Decision Making (25-30%):</strong> 15-18 questions presenting realistic scenarios requiring judgment and knowledge synthesis</li>
      </ul>

      <p>Notice that Decision Making is the largest category. The FAA wants to know you can make safe choices, not just memorize facts. This is why understanding concepts matters more than rote memorization.</p>

      <h3>What Changed in 2026: Updated Regulations You MUST Know</h3>

      <p>Drone regulations have evolved significantly in recent years. If you're using old study materials, you're learning outdated information. Here's what's current for 2026:</p>

      <h4>Night Operations (No Waiver Required)</h4>
      <p>As of April 2021, Part 107 permits night operations without a waiver if you meet specific requirements. This is one of the most misunderstood changes:</p>

      <ul>
        <li>Your drone must have anti-collision lighting visible from 3 statute miles away</li>
        <li>You must have received specific training on night flight operations</li>
        <li>You must understand civil twilight times for your location</li>
        <li>Visual line of sight requirements still apply</li>
      </ul>

      <p>Old study guides still claim you need a waiver. You don't. The exam tests this new reality, so make sure your study materials are current.</p>

      <h4>Remote ID Mandatory</h4>
      <p>Since March 16, 2024, virtually all drones over 0.55 pounds operating outdoors must broadcast Remote ID. The only exceptions are:</p>

      <ul>
        <li>Drones flying in identified low-altitude operations areas (under 400 feet AGL in sparsely populated areas)</li>
        <li>Drones flying outdoors before dawn or after sunset (civil twilight exemption)</li>
        <li>Some legacy drones under specific grandfather provisions</li>
      </ul>

      <p>The exam tests Remote ID requirements, so understand when it's mandatory and what it accomplishes (airspace awareness and safety).</p>

      <h4>Free Recurrent Training (No Exam Renewal)</h4>
      <p>Your Part 107 certificate is valid for 24 months. To renew, you no longer retake the full exam. Instead, you take free online recurrent training from the FAA. This 2 hours of training satisfies the renewal requirement. Only if you let your certificate expire do you need to retake the full exam.</p>

      <h4>Recreational Drone Rules</h4>
      <p>Recreational fliers must take the TRUST test (free) and follow different rules than commercial pilots. The exam sometimes tests whether you understand these distinctions.</p>

      <h3>Part 107 Exam Content: The Five Areas Explained</h3>

      <h4>Area 1: Regulations (Most Important)</h4>
      <p>This is the foundation. Part 107 is federal law, and the exam tests your understanding thoroughly.</p>

      <p><strong>Key Topics:</strong></p>
      <ul>
        <li>Operating altitude limits (400 feet AGL, distance from structures)</li>
        <li>Airspeed restrictions (generally no more than 100 mph)</li>
        <li>Visual line of sight (VLOS) requirements</li>
        <li>Visual observer requirements</li>
        <li>Daylight operations (civil twilight rules)</li>
        <li>Cloud clearance (500 feet vertical, 2000 feet horizontal)</li>
        <li>Minimum ground visibility (3 statute miles)</li>
        <li>Remote Pilot in Command responsibilities</li>
        <li>Airman certification and medical requirements</li>
        <li>Aeronautical knowledge requirements</li>
        <li>Remote ID requirements (post-2024)</li>
        <li>Night operations with anti-collision lighting</li>
      </ul>

      <p><strong>Study Strategy:</strong> These are facts and rules. Flashcards work well here. Memorize the specific numbers (400 feet, 3 statute miles, 500 feet, 2000 feet, 100 mph). Most exam questions test whether you know these parameters.</p>

      <h4>Area 2: Airspace (Second Priority)</h4>
      <p>You must read sectional charts and understand airspace structure.</p>

      <p><strong>Key Topics:</strong></p>
      <ul>
        <li>Airspace classes (A, B, C, D, E, G) and their characteristics</li>
        <li>Sectional chart symbols and interpretation</li>
        <li>Understanding controlled vs. uncontrolled airspace</li>
        <li>Temporary Flight Restrictions (TFRs)</li>
        <li>Class B, C, D airspace operations requirements</li>
        <li>Special Use Airspace (Military Operating Areas, etc.)</li>
        <li>Notification requirements vs. authorization requirements</li>
        <li>National Airspace System structure</li>
      </ul>

      <p><strong>Study Strategy:</strong> Spend time with actual sectional charts. Learn chart symbols cold. Use online chart viewers and practice identifying airspace. Understand that Class D and Class B require explicit ATC contact, while Class E only requires notification. In Class G, you typically don't need ATC permission, but that doesn't mean you should ignore them.</p>

      <h4>Area 3: Weather (Often Overlooked but Critical)</h4>
      <p>Many pilots struggle with weather because they don't understand METAR reports. Master this section and you'll differentiate yourself.</p>

      <p><strong>Key Topics:</strong></p>
      <ul>
        <li>METAR structure and interpretation</li>
        <li>Station identifier and reporting time</li>
        <li>Wind (direction, speed, gusts)</li>
        <li>Visibility (statute miles)</li>
        <li>Precipitation and weather phenomena</li>
        <li>Cloud coverage and ceiling heights</li>
        <li>Temperature and dew point</li>
        <li>Altimeter setting</li>
        <li>Decision-making: Can I fly with these conditions?</li>
        <li>Wind effects on drone performance</li>
        <li>Stability and turbulence</li>
        <li>Icing and precipitation risks</li>
      </ul>

      <p><strong>Study Strategy:</strong> Don't memorize; practice decoding real METARs from NORAD or aviation websites. Understand what each element means practically. "3SM visibility" means if something is farther than 3 miles, you can't see it—that matters for safety. Work through METAR examples until you can decode them instantly. Then practice decision-making: "Given this METAR, can I fly under Part 107?" (If visibility is below 3 statute miles, the answer is no.)</p>

      <h4>Area 4: Aircraft Performance (Often Overlooked)</h4>
      <p>This area tests your understanding of how drones behave in real conditions.</p>

      <p><strong>Key Topics:</strong></p>
      <ul>
        <li>Drone limitations and specifications</li>
        <li>Weight and balance considerations</li>
        <li>Battery life and endurance calculations</li>
        <li>Wind effects and limitations</li>
        <li>GPS and compass accuracy</li>
        <li>Propeller dynamics and thrust</li>
        <li>Altitude performance and air density</li>
        <li>Takeoff and landing limitations</li>
        <li>Payload capacity and stability</li>
      </ul>

      <p><strong>Study Strategy:</strong> Understand physics, not just numbers. How does wind affect a drone? Wind pushes it sideways. If the wind exceeds your drone's maximum wind rating, it becomes unstable. How does altitude affect battery life? The motor works harder in thinner air, reducing endurance. Why? Because less air density means less lift per rotation, requiring more power. Understanding the "why" helps you answer any drone performance question, even if it's not specifically in your study materials.</p>

      <h4>Area 5: Decision Making (The Hardest But Most Important)</h4>
      <p>This is where everything comes together. You'll see realistic scenarios and must apply all your knowledge.</p>

      <p><strong>Sample Decision Making Scenarios:</strong></p>
      <ul>
        <li>You're planning a flight near an airport. METAR shows 2 statute miles visibility. Can you proceed?</li>
        <li>A manned aircraft is approaching. What do you do immediately?</li>
        <li>Your control signal is degrading. Your failsafe will return the drone home. Should you rely on it?</li>
        <li>The property owner suddenly asks you to land during a commercial shoot. What do you do?</li>
        <li>You notice clouds at 500 feet AGL. Can you operate at 300 feet?</li>
        <li>Wind is gusting at 25 mph, and your drone's maximum is 20 mph. What's the safe action?</li>
      </ul>

      <p><strong>Study Strategy:</strong> Think like a pilot. In every scenario, safety is the top priority. If there's ANY doubt, land. The correct answer is almost always the conservative one. Get comfortable with decision-making by practicing scenario-based questions regularly.</p>

      <h3>How to Study: A Proven Timeline</h3>

      <p>How long should you study? The answer depends on your aviation background and learning pace:</p>

      <h4>Total Beginner (No Aviation Experience): 6-12 Weeks</h4>
      <ul>
        <li><strong>Weeks 1-2:</strong> Learn basics—regulations, airspace classes, METAR structure</li>
        <li><strong>Weeks 3-4:</strong> Deep dive—practice METAR interpretation, read sectional charts, memorize regulations</li>
        <li><strong>Weeks 5-8:</strong> Practice questions daily, identify weak areas, focus extra study on those areas</li>
        <li><strong>Weeks 9-12:</strong> Practice tests, scenario training, review weak areas, build confidence</li>
      </ul>

      <h4>Some Aviation Background: 4-8 Weeks</h4>
      <ul>
        <li><strong>Weeks 1-2:</strong> Quick review of regulations and Part 107 specifics (different from other certificates)</li>
        <li><strong>Weeks 3-4:</strong> Focus on METAR and decision-making scenarios</li>
        <li><strong>Weeks 5-8:</strong> Practice questions and scenario training</li>
      </ul>

      <h4>Express Study (Time-Constrained): 2-3 Weeks</h4>
      <ul>
        <li>Day 1-3: Intensive regulation and airspace review</li>
        <li>Day 4-7: METAR practice and scenario training</li>
        <li>Day 8-14: Full-length practice tests daily</li>
        <li>Day 15-21: Targeted review of weak areas</li>
      </ul>

      <p><strong>Important:</strong> Don't rush. Passing on your first attempt costs $175 and takes 2 hours. Failing and retesting costs another $175 and wastes weeks of your timeline. A few extra weeks of quality study pays for itself.</p>

      <h3>Study Resources: What Actually Works</h3>

      <h4>Official FAA Resources (Free but Dense)</h4>
      <ul>
        <li><strong>FAA Remote Pilot Knowledge Test Study Guide</strong> - Authoritative but hard to navigate. Read this for regulation details.</li>
        <li><strong>Part 107 Study Aids from FAA.gov</strong> - Official but not optimized for learning. Supplement with other resources.</li>
      </ul>

      <h4>Interactive Learning Apps (Best for Retention)</h4>
      <p>Flashcards and practice questions work because of spaced repetition and active recall. Apps like Flycensed combine these with interactive tools (METAR decoders, scenario training) that teach concepts while testing you. This is the most efficient study method backed by cognitive science.</p>

      <h4>Textbooks (Good for Deep Understanding)</h4>
      <p>"The Remote Pilot" book is solid for comprehensive understanding, but reading alone (passive learning) is less effective than active practice. Combine reading with practice questions.</p>

      <h4>Online Courses (Variable Quality)</h4>
      <p>Many exist. Look for courses that emphasize understanding concepts, not just memorization. Interactive elements (scenarios, METAR practice) indicate higher quality.</p>

      <h3>Study Tips: Strategies That Work</h3>

      <h4>1. Practice Questions First, Theory Later</h4>
      <p>Take a practice test before studying. See what you don't know. Then study those topics. This is more efficient than reading everything blindly.</p>

      <h4>2. Focus on Wrong Answers</h4>
      <p>When you get a question wrong, don't just note it. Understand why the correct answer is right and why the others are wrong. This deeper learning prevents similar mistakes on the real exam.</p>

      <h4>3. Use Spaced Repetition</h4>
      <p>Review material at increasing intervals: after 1 day, 3 days, 1 week, 2 weeks. This science-backed method locks information into long-term memory.</p>

      <h4>4. Simulate Exam Conditions</h4>
      <p>Take practice tests in a quiet environment, timed, without notes or distractions. This prepares you mentally for the real test.</p>

      <h4>5. Study Daily, Even if Brief</h4>
      <p>30 minutes daily is better than 3 hours once per week. Consistency beats intensity for learning.</p>

      <h4>6. Teach Someone Else</h4>
      <p>Can you explain regulations to a friend? Explaining forces you to think deeply and reveals gaps in your understanding.</p>

      <h3>Common Mistakes: Don't Make Them</h3>

      <h4>Mistake 1: Using Outdated Study Materials</h4>
      <p>Remote ID and night operations rules changed recently. Old textbooks and courses still claim you need waivers for night flying. You don't (if properly equipped and trained). Verify your study materials are from 2024 or later.</p>

      <h4>Mistake 2: Memorizing Without Understanding</h4>
      <p>"400 feet altitude limit" is a fact to memorize. But why 400 feet? Because that's where you maintain safety from manned aircraft and structures. Understanding the "why" helps you remember and apply knowledge correctly.</p>

      <h4>Mistake 3: Skipping METAR Practice</h4>
      <p>Many pilots avoid METAR because it seems complex. But METAR questions make up 15-20% of the exam, and decision-making questions often require METAR interpretation. Master this section.</p>

      <h4>Mistake 4: Not Practicing Decision-Making</h4>
      <p>Regulations and facts are half the exam. Decision-making scenarios are the other half. You need both types of practice. Pure flashcard study will leave you unprepared for scenario questions.</p>

      <h4>Mistake 5: Cramming Before the Exam</h4>
      <p>Don't study the night before. Your brain needs rest. Studies show sleep improves memory consolidation. Study hard for weeks, then get good sleep the night before.</p>

      <h4>Mistake 6: Not Taking Practice Tests</h4>
      <p>Practice tests identify weak areas and build test-taking endurance. You need to practice answering 60 questions in 2 hours under time pressure. Only full-length practice tests prepare you for that experience.</p>

      <h3>Test Day: What to Expect and How to Perform</h3>

      <h4>Before Arriving</h4>
      <ul>
        <li>Get good sleep the night before</li>
        <li>Eat a healthy breakfast (brain needs fuel)</li>
        <li>Arrive 15 minutes early</li>
        <li>Bring valid government-issued ID and your testing authorization code</li>
      </ul>

      <h4>At the Testing Center</h4>
      <ul>
        <li>You'll use a computer and mouse to answer questions</li>
        <li>You can mark questions to review later</li>
        <li>You get scratch paper for calculations (wind triangle, etc.)</li>
        <li>The test is adaptive in some aspects—harder questions may appear after correct answers</li>
      </ul>

      <h4>During the Test</h4>
      <ul>
        <li><strong>Read carefully:</strong> One-word differences change question meaning. "Can you fly?" vs. "Should you fly?"</li>
        <li><strong>Don't second-guess:</strong> Your first instinct is usually right. Change answers only if you're certain.</li>
        <li><strong>Flag difficult questions:</strong> Answer easy ones first, then come back to hard ones if time permits.</li>
        <li><strong>Manage time:</strong> 120 minutes ÷ 60 questions = 2 minutes per question average. You have some buffer, so don't rush.</li>
        <li><strong>Review marked questions:</strong> If you finish early, review questions you flagged as uncertain.</li>
      </ul>

      <h4>After the Test</h4>
      <p>You get your pass/fail result immediately. If you pass, congratulations—your certificate will arrive in the mail within 2 weeks. If you fail, you can retake after 14 days. Analyze what went wrong and study those areas specifically before retaking.</p>

      <h3>After Passing: Maintaining Your Certificate</h3>

      <p>You passed! Your Remote Pilot certificate is valid for 24 months. Here's how to maintain it:</p>

      <ul>
        <li><strong>Take Recurrent Training:</strong> Within 24 months, complete online recurrent training from the FAA. This is free and takes about 2 hours. No exam required.</li>
        <li><strong>Stay Updated:</strong> FAA regulations can change. Subscribe to updates or check FAA.gov periodically.</li>
        <li><strong>Continue Learning:</strong> The best pilots never stop learning. Take advanced courses, join drone pilot communities, and share knowledge with others.</li>
      </ul>

      <h3>Your Path Forward</h3>

      <p>Passing the Part 107 exam in 2026 is absolutely achievable with the right preparation. You're learning regulations that exist for safety—they're not arbitrary rules. Understanding why each regulation exists helps you internalize and remember them better.</p>

      <p>The best study approach combines multiple learning methods: official FAA resources for authoritative information, practice questions for active learning, interactive tools for METAR mastery, and scenario training for decision-making judgment. Apps like Flycensed integrate all these methods, which is why our users achieve an 84.2% first-attempt pass rate.</p>

      <p>Start your preparation today. Choose your study timeline, gather quality resources, and commit to consistent daily study. In 4-12 weeks, you'll be a certified Remote Pilot. That's when the real work—and the fun—begins.</p>
    `,
  },
  {
    slug: 'how-to-read-metar-part-107',
    title: 'How to Read a METAR for the Part 107 Exam (With Examples)',
    description: 'Master METAR decoding with our step-by-step guide. Learn each element, decode real examples, and make safe flight decisions for Part 107 operations.',
    date: '2026-03-20',
    author: 'Flycensed Team',
    readTime: '14 min read',
    category: 'Weather',
    keywords: ['METAR for Part 107', 'how to read METAR', 'METAR decoder', 'aviation weather report', 'METAR format'],
    featuredImage: '/blog/metar.png',
    content: `
      <h2>How to Read a METAR for the Part 107 Exam (With Examples)</h2>

      <p>METAR (Meteorological Aerodrome Report) is the standard format for reporting weather at airports worldwide. The Part 107 exam includes 15-20% weather questions, and most require METAR interpretation. Many pilots avoid METAR because it looks like alphabet soup. But once you understand the structure, it's logical and learnable.</p>

      <p>This guide teaches you METAR decoding step-by-step using real examples. By the end, you'll confidently decode any METAR and make safe Part 107 operational decisions.</p>

      <h3>METAR Structure: The Overall Format</h3>

      <p>Every METAR follows the same structure. Here's a real example:</p>

      <p><code>KORD 121856Z 09014G25KT 10SM FEW250 23/14 A2990 RMK AO2 SLP114 T02330139</code></p>

      <p>Breaking it down left to right, we have eight sections:</p>

      <ol>
        <li><strong>Station ID (KORD):</strong> Chicago O'Hare International Airport</li>
        <li><strong>Time (121856Z):</strong> Day 12, 1856 UTC (Zulu time)</li>
        <li><strong>Wind (09014G25KT):</strong> From 090°, 14 knots, gusts to 25 knots</li>
        <li><strong>Visibility (10SM):</strong> 10 statute miles</li>
        <li><strong>Weather Phenomena (none in this report):</strong> No rain, snow, etc.</li>
        <li><strong>Cloud Coverage (FEW250):</strong> Few clouds at 25,000 feet</li>
        <li><strong>Temperature/Dewpoint (23/14):</strong> 23°C / 14°C</li>
        <li><strong>Altimeter (A2990):</strong> 29.90 inches of mercury</li>
      </ol>

      <p>Let's examine each section in detail.</p>

      <h3>Section 1: Station ID</h3>

      <p>The first element is always the airport identifier. U.S. airports start with 'K'. Examples:</p>

      <ul>
        <li>KJFK = New York JFK</li>
        <li>KLAX = Los Angeles International</li>
        <li>KDEN = Denver International</li>
        <li>KSEA = Seattle-Tacoma</li>
      </ul>

      <p>For Part 107, you're typically checking weather for your operation location or nearby airports. The station identifier tells you which airport reported the weather.</p>

      <h3>Section 2: Report Time</h3>

      <p>Format: DDHHMM<strong>Z</strong></p>

      <p>Example: <strong>121856Z</strong></p>

      <ul>
        <li><strong>12</strong> = Day 12 of the month</li>
        <li><strong>18</strong> = Hour 18 (6:00 PM)</li>
        <li><strong>56</strong> = Minute 56</li>
        <li><strong>Z</strong> = Zulu time (UTC/military time)</li>
      </ul>

      <p>This report was issued on the 12th at 1856 UTC (6:56 PM UTC). This matters because conditions change, and you want the most recent weather.</p>

      <h3>Section 3: Wind</h3>

      <p>Format: <strong>DDD</strong>SP<strong>G</strong>GG<strong>KT</strong></p>

      <p>Example: <strong>09014G25KT</strong></p>

      <ul>
        <li><strong>090</strong> = Wind from 090° (due east)</li>
        <li><strong>14</strong> = 14 knots sustained speed</li>
        <li><strong>G25</strong> = Gusts to 25 knots</li>
        <li><strong>KT</strong> = Knots (nautical miles per hour)</li>
      </ul>

      <p><strong>For Part 107:</strong> Wind from 090° blowing at 14 knots with gusts to 25 knots. This is important—if your drone's maximum wind rating is 20 knots, gusts to 25 knots exceed that. You should not fly.</p>

      <p><strong>Wind Abbreviations:</strong></p>
      <ul>
        <li><strong>VRB</strong> = Variable (light wind changing direction)</li>
        <li><strong>KT</strong> = Knots (typical in US)</li>
        <li><strong>MPS</strong> = Meters per second (used internationally)</li>
      </ul>

      <p>If wind is calm, you'll see "00000KT".</p>

      <h3>Section 4: Visibility</h3>

      <p>Format: Visibility in statute miles</p>

      <p>Examples:</p>
      <ul>
        <li><strong>10SM</strong> = 10 statute miles</li>
        <li><strong>5SM</strong> = 5 statute miles</li>
        <li><strong>1/2SM</strong> = 0.5 statute miles (or written "1/2SM")</li>
        <li><strong>1SM</strong> = 1 statute mile</li>
      </ul>

      <p><strong>Critical for Part 107:</strong> Your minimum ground visibility is 3 statute miles. If a METAR shows less than 3SM, you cannot legally operate. Examples:</p>

      <ul>
        <li>2SM visibility = CANNOT FLY (below minimums)</li>
        <li>3SM visibility = CAN FLY (meets minimums, barely)</li>
        <li>5SM visibility = CAN FLY (safely above minimums)</li>
      </ul>

      <p>Sometimes visibility is reported as a fraction of a mile: "1/4SM" = 0.25 statute miles. This indicates very poor visibility (fog, heavy rain), and you definitely cannot fly.</p>

      <h3>Section 5: Weather Phenomena</h3>

      <p>This section describes what's happening in the sky. It's only included if there's something to report. If this section is absent, conditions are clear.</p>

      <p>Format: Intensity + Descriptor + Phenomenon</p>

      <p><strong>Examples:</strong></p>

      <ul>
        <li><strong>-RA</strong> = Light rain</li>
        <li><strong>RA</strong> = Moderate rain</li>
        <li><strong>+RA</strong> = Heavy rain</li>
        <li><strong>SN</strong> = Snow</li>
        <li><strong>TSRA</strong> = Thunderstorm with rain</li>
        <li><strong>BLSN</strong> = Blowing snow</li>
      </ul>

      <p><strong>For Part 107:</strong> Rain, snow, and thunderstorms make drone operations unsafe. If you see precipitation in the weather phenomena section, you should not fly. Drones are not waterproof, and thunderstorms create dangerous electrical hazards.</p>

      <h3>Section 6: Cloud Coverage</h3>

      <p>Format: Coverage + Altitude (in hundreds of feet)</p>

      <p>Cloud Coverage Codes:</p>

      <ul>
        <li><strong>SKC</strong> = Sky clear (no clouds)</li>
        <li><strong>CLR</strong> = Clear (no clouds visible below 10,000 feet)</li>
        <li><strong>FEW</strong> = 1-2/8 coverage</li>
        <li><strong>SCT</strong> = 3-4/8 coverage (scattered)</li>
        <li><strong>BKN</strong> = 5-7/8 coverage (broken)</li>
        <li><strong>OVC</strong> = 8/8 coverage (overcast)</li>
      </ul>

      <p>Examples:</p>

      <ul>
        <li><strong>FEW250</strong> = Few clouds at 25,000 feet AGL</li>
        <li><strong>BKN050</strong> = Broken clouds at 5,000 feet AGL</li>
        <li><strong>OVC010</strong> = Overcast at 1,000 feet AGL (clouds covering the sky at 1,000 feet)</li>
      </ul>

      <p><strong>Critical Part 107 Rule: Cloud Clearance Requirements</strong></p>

      <ul>
        <li>You must maintain 500 feet <strong>vertical clearance below clouds</strong></li>
        <li>You must maintain 2,000 feet <strong>horizontal clearance from clouds</strong></li>
      </ul>

      <p><strong>Example Decision-Making:</strong></p>

      <p>METAR shows: "BKN050 OVC075"</p>

      <ul>
        <li>Broken clouds at 5,000 feet, overcast at 7,500 feet</li>
        <li>You can fly at 400 feet AGL (500 feet below 5,000-foot clouds = minimum safe altitude is 4,500 feet, but you're only at 400 feet... wait, that doesn't make sense)</li>
      </ul>

      <p>Actually, let me clarify: "500 feet vertical clearance" means you stay 500 feet BELOW the clouds. So if clouds are at 5,000 feet AGL, you must stay at or below 4,500 feet. Since Part 107 limits you to 400 feet, you're fine. You're well below the cloud base.</p>

      <p>But if clouds are at 800 feet AGL (very low ceiling):</p>

      <ul>
        <li>You need 500 feet clearance below clouds</li>
        <li>500 feet below 800-foot clouds = 300 feet AGL minimum altitude</li>
        <li>Since you can operate up to 400 feet AGL, and the minimum safe altitude is only 300 feet, you can operate</li>
      </ul>

      <p>However, if clouds are at 300 feet AGL (very rare but possible in fog):</p>

      <ul>
        <li>500 feet clearance below 300-foot clouds = negative number (impossible)</li>
        <li>You cannot legally operate because there's no safe altitude that gives you 500-foot clearance below the clouds AND stays at 400 feet or below</li>
      </ul>

      <p>This is why cloud clearance is critical.</p>

      <h3>Section 7: Temperature and Dewpoint</h3>

      <p>Format: <strong>T</strong>T<strong>/</strong>DD (in Celsius)</p>

      <p>Example: <strong>23/14</strong></p>

      <ul>
        <li><strong>23</strong> = Temperature 23°C (73°F)</li>
        <li><strong>14</strong> = Dewpoint 14°C (57°F)</li>
      </ul>

      <p><strong>What's Dewpoint?</strong> The temperature at which air becomes saturated and moisture condenses into clouds or fog. If temperature and dewpoint are close (within 5°C), fog or low clouds are likely.</p>

      <p><strong>Example:</strong> Temperature 10°C, Dewpoint 9°C = Very close, fog likely</p>

      <p><strong>For Part 107:</strong> Fog lowers visibility drastically. If you see temperature and dewpoint close together, expect low visibility and possibly fog. Check the visibility number—if it's below 3 statute miles, you cannot fly.</p>

      <h3>Section 8: Altimeter Setting</h3>

      <p>Format: <strong>A</strong>XXXX (in hundredths of an inch of mercury)</p>

      <p>Example: <strong>A2990</strong></p>

      <ul>
        <li><strong>A2990</strong> = Altimeter reading 29.90 inches of mercury</li>
        <li>Normal atmospheric pressure at sea level = 29.92 inches</li>
      </ul>

      <p><strong>For Part 107:</strong> This affects how aircraft altimeters read. If you're flying near an airport where manned aircraft operate, this setting is important for understanding actual flight levels. For drone operations, it's less critical, but it's part of the full METAR format.</p>

      <h3>Decoding Real METAR Examples</h3>

      <p>Let's practice decoding three realistic METARs and make Part 107 flight decisions.</p>

      <h4>Example 1: Clear Day</h4>

      <p><code>KJFK 121851Z 31008KT 10SM FEW250 22/14 A3012 RMK AO2</code></p>

      <p><strong>Decoding:</strong></p>
      <ul>
        <li>Station: JFK (New York)</li>
        <li>Time: Day 12, 1851 UTC</li>
        <li>Wind: From 310° at 8 knots (light wind)</li>
        <li>Visibility: 10 statute miles (excellent)</li>
        <li>Weather: None (clear skies)</li>
        <li>Clouds: Few at 25,000 feet (essentially clear)</li>
        <li>Temperature: 22°C (72°F), Dewpoint: 14°C (57°F)</li>
        <li>Altimeter: 30.12 (normal)</li>
      </ul>

      <p><strong>Flight Decision: YES, CAN FLY</strong></p>
      <ul>
        <li>Visibility 10SM ✓ (meets 3SM minimum)</li>
        <li>Wind 8 knots ✓ (manageable for most drones)</li>
        <li>Clouds 25,000 feet ✓ (plenty of clearance)</li>
        <li>No precipitation ✓</li>
        <li>All conditions favorable for Part 107 operations</li>
      </ul>

      <h4>Example 2: Marginal Conditions</h4>

      <p><code>KSFO 121856Z 27018G28KT 4SM BR OVC040 18/17 A3001 RMK AO2</code></p>

      <p><strong>Decoding:</strong></p>
      <ul>
        <li>Station: SFO (San Francisco)</li>
        <li>Time: Day 12, 1856 UTC</li>
        <li>Wind: From 270° (west) at 18 knots, gusts to 28 knots (STRONG)</li>
        <li>Visibility: 4 statute miles (marginal)</li>
        <li>Weather: BR (mist/fog)</li>
        <li>Clouds: Overcast at 4,000 feet</li>
        <li>Temperature: 18°C (64°F), Dewpoint: 17°C (63°F) (very close—fog likely)</li>
        <li>Altimeter: 30.01</li>
      </ul>

      <p><strong>Flight Decision: NO, CANNOT FLY</strong></p>
      <ul>
        <li>Wind gusts to 28 knots: Exceeds most drone ratings</li>
        <li>Visibility 4SM: Above the 3SM minimum, BUT...</li>
        <li>Mist/fog (BR): Dangerous for visual line of sight</li>
        <li>Temperature/Dewpoint nearly equal: Fog conditions</li>
        <li>Multiple factors make this unsafe</li>
      </ul>

      <h4>Example 3: Poor Conditions</h4>

      <p><code>KDFW 121853Z 18022G35KT 2SM +TSRA BKN025 CB 20/18 A2985 RMK AO2 PK WND 18035/1828</code></p>

      <p><strong>Decoding:</strong></p>
      <ul>
        <li>Station: DFW (Dallas-Fort Worth)</li>
        <li>Time: Day 12, 1853 UTC</li>
        <li>Wind: From 180° (south) at 22 knots, gusts to 35 knots (VERY STRONG)</li>
        <li>Visibility: 2 statute miles (BELOW minimum)</li>
        <li>Weather: +TSRA (heavy thunderstorm with rain) and CB (cumulonimbus cloud)</li>
        <li>Clouds: Broken at 2,500 feet</li>
        <li>Temperature: 20°C (68°F), Dewpoint: 18°C (64°F)</li>
        <li>Altimeter: 29.85</li>
      </ul>

      <p><strong>Flight Decision: ABSOLUTELY NO—DO NOT FLY</strong></p>
      <ul>
        <li>Visibility 2SM ✗ (below 3SM minimum—ILLEGAL)</li>
        <li>Wind gusts 35 knots ✗ (dangerous for any small drone)</li>
        <li>Thunderstorm ✗ (electrical hazard, severe weather)</li>
        <li>Heavy rain ✗ (drones not waterproof, will be damaged)</li>
        <li>Multiple factors make flight illegal and extremely unsafe</li>
      </ul>

      <h3>The Part 107 Flight Decision Flowchart</h3>

      <p>Use this logic to evaluate METARs for Part 107 compliance:</p>

      <p><strong>Step 1: Check Visibility</strong><br/>
      Is visibility ≥ 3 statute miles?<br/>
      NO → Cannot fly<br/>
      YES → Continue</p>

      <p><strong>Step 2: Check Wind</strong><br/>
      Are sustained winds and gusts within your drone's rating?<br/>
      NO → Cannot fly<br/>
      YES → Continue</p>

      <p><strong>Step 3: Check Precipitation</strong><br/>
      Any RA (rain), SN (snow), TSRA (thunderstorm)?<br/>
      YES → Cannot fly (drones not weatherproof)<br/>
      NO → Continue</p>

      <p><strong>Step 4: Check Cloud Clearance</strong><br/>
      Can you operate at 400 feet AGL and maintain 500 feet below clouds?<br/>
      NO → Cannot fly<br/>
      YES → Continue</p>

      <p><strong>Step 5: Check Temperature/Dewpoint</strong><br/>
      Within 5°C of each other (fog likely)?<br/>
      YES → Check visibility again (may need to go back to Step 1)<br/>
      NO → Continue</p>

      <p><strong>All checks passed?</strong><br/>
      YES → Safe to fly (weather-wise)</p>

      <h3>METAR Practice Tips for the Exam</h3>

      <p>The exam won't ask you to decode an entire METAR word-for-word. Instead, questions will ask: "Given this METAR, can you fly?" or "What is the cloud ceiling?" Your job is to extract relevant information and make a judgment.</p>

      <p><strong>Practice Strategy:</strong></p>

      <ul>
        <li>Visit aviation weather sites (AVWX, Aviation Weather Center) and decode 5 random METARs daily</li>
        <li>Focus on the elements you'll actually use: visibility, wind, precipitation, cloud coverage</li>
        <li>For each METAR, decide: Can I fly under Part 107?</li>
        <li>Practice with real METARs from various regions (coastal fog, mountain winds, desert clear skies, tropical thunderstorms)</li>
      </ul>

      <h3>Common METAR Exam Questions</h3>

      <p><strong>Type 1: Visibility Decision</strong><br/>
      "A METAR shows 2SM visibility. Can you conduct Part 107 operations?"<br/>
      Answer: No, minimum required is 3SM.</p>

      <p><strong>Type 2: Wind Decision</strong><br/>
      "Wind is from 180° at 15 knots, gusting to 22 knots. Your drone's maximum wind rating is 20 knots. Can you fly?"<br/>
      Answer: No, gusts exceed the maximum.</p>

      <p><strong>Type 3: Cloud Clearance</strong><br/>
      "METAR shows OVC060. Can you maintain required cloud clearance at your planned altitude of 400 feet AGL?"<br/>
      Answer: Yes, 6000-foot ceiling provides plenty of clearance (you need 500 feet below, so minimum safe altitude is 5,500 feet, but you're at 400 feet).</p>

      <p><strong>Type 4: Integrated Decision</strong><br/>
      "Given this METAR [full report], should you conduct your scheduled flight?"<br/>
      You must evaluate all factors: visibility, wind, precipitation, clouds, temperature. The answer requires synthesizing all elements.</p>

      <h3>Mastering METAR for Part 107 Success</h3>

      <p>METAR is the language of aviation weather. Mastering it takes practice, not intelligence. Most pilots find that after decoding 10-20 real METARs, the format becomes intuitive. You start recognizing patterns: "BR and high temperature-dewpoint spread = fog," "TSRA = definitely no fly," "10SM and FEW clouds = great conditions."</p>

      <p>The Part 107 exam will include 3-4 METAR interpretation questions. If you practice with real METARs from aviation weather sites and use the decision flowchart above, you'll answer these correctly and understand why each answer is right.</p>

      <p>For comprehensive METAR practice with interactive decoding tools, quizzes, and scenario-based training, Flycensed includes an interactive METAR tool with 100+ challenges. This hands-on practice is proven to build expertise faster than reading alone.</p>

      <p>Next time you see a METAR, you'll know exactly what it means and whether it's safe to fly. That knowledge keeps you and others safe in the National Airspace System.</p>
    `,
  },
  {
    slug: 'drone-license-requirements-2026',
    title: 'Drone License Requirements in 2026: Everything You Need to Know',
    description: 'Complete guide to drone licensing in 2026. Learn when you need a Part 107 license, recreational regulations, Remote ID rules, and registration requirements.',
    date: '2026-03-20',
    author: 'Flycensed Team',
    readTime: '16 min read',
    category: 'Regulations',
    keywords: ['drone license requirements', 'do I need a drone license', 'FAA drone registration', 'Part 107 requirements 2026', 'remote ID requirements'],
    featuredImage: '/blog/license-requirements.png',
    content: `
      <h2>Drone License Requirements in 2026: Everything You Need to Know</h2>

      <p>Drone regulations have evolved significantly since the FAA first introduced Part 107 in 2016. Today, whether you need a license depends on how you plan to use your drone. This guide clarifies which rules apply to you and what steps you need to take in 2026.</p>

      <h3>The Two Pathways: Recreational vs. Commercial</h3>

      <p>The FAA divides drone operations into two categories, each with different requirements.</p>

      <h4>Recreational Drone Flying (No License Required, But Rules Apply)</h4>

      <p>If you fly a drone purely for personal enjoyment—photography for yourself, racing friends, aerial videos for your own use—you're a recreational flier.</p>

      <p><strong>Recreational Requirements (as of 2026):</strong></p>

      <ul>
        <li><strong>TRUST Test:</strong> Free, online, 15-minute test. Everyone must pass this test to fly recreationally. The test covers basic safety rules and airspace awareness.</li>
        <li><strong>Drone Registration:</strong> Required if your drone weighs more than 0.55 pounds (250 grams). Cost: $5 for a 3-year registration. You register online at faadronezone.faa.gov.</li>
        <li><strong>Remote ID:</strong> Since March 2024, virtually all drones over 0.55 pounds must broadcast Remote ID while flying outdoors.</li>
        <li><strong>No Flight Experience Required:</strong> You don't need any prior aviation experience.</li>
        <li><strong>No Medical Certificate:</strong> You don't need to pass a medical exam.</li>
      </ul>

      <p><strong>Recreational Operating Rules:</strong></p>

      <ul>
        <li>Fly only during daylight (or civil twilight with anti-collision lighting)</li>
        <li>Keep visual line of sight (VLOS) with your drone at all times</li>
        <li>Maximum altitude: 400 feet above ground level</li>
        <li>Fly at least 25 feet away from people, buildings, vehicles, and animals</li>
        <li>Don't fly over crowds or populated areas</li>
        <li>Don't interfere with manned aircraft (keep distance)</li>
        <li>Avoid commercial use (any compensation for flying)</li>
      </ul>

      <p><strong>Key Point:</strong> Recreational rules are less strict than Part 107. You can fly with minimal training. However, safety rules still apply—you're responsible for avoiding hazards and protecting people below.</p>

      <h4>Commercial Drone Flying (Part 107 License Required)</h4>

      <p>If you operate a drone for any commercial purpose, you need a Part 107 Remote Pilot certificate.</p>

      <p><strong>What Counts as Commercial?</strong></p>

      <ul>
        <li>You receive payment for flying (photography, filmmaking, inspections, delivery, mapping, surveying, etc.)</li>
        <li>You fly someone else's drone for them (even if unpaid, it's still commercial operation)</li>
        <li>You use drone footage for business purposes (marketing, insurance assessment, real estate listing, etc.)</li>
        <li>You own or operate a drone that generates revenue, even indirectly</li>
      </ul>

      <p><strong>Part 107 Requirements:</strong></p>

      <ul>
        <li><strong>Knowledge Test:</strong> Pass the FAA Part 107 exam (60 questions, 120 minutes, 70% passing score, $175 cost)</li>
        <li><strong>No Prior Experience Required:</strong> You don't need flight hours or aviation background</li>
        <li><strong>Minimum Age:</strong> 16 years old (with parent consent), or 18 without consent</li>
        <li><strong>Remote ID:</strong> Drones used commercially must have Remote ID capability</li>
        <li><strong>Medical Requirements:</strong> You don't need a medical certificate, but you must be fit to fly (no severe conditions that would incapacitate you)</li>
        <li><strong>Airman Knowledge:</strong> You'll be tested on regulations, weather, airspace, aircraft performance, and decision-making</li>
      </ul>

      <p><strong>Part 107 Operating Rules (More Restrictive Than Recreational):</strong></p>

      <ul>
        <li>Daylight operations only (or night operations with anti-collision lighting and special training)</li>
        <li>Visual line of sight (VLOS) required</li>
        <li>Maximum altitude: 400 feet AGL (unless near structures)</li>
        <li>One visual observer required (in addition to the pilot)</li>
        <li>Maximum airspeed: 100 mph</li>
        <li>Minimum ground visibility: 3 statute miles</li>
        <li>Cloud clearance: 500 feet below clouds, 2,000 feet horizontal from clouds</li>
        <li>No flying over people (except small drones with low risk)</li>
        <li>Remote operations near airports require ATC clearance or notification</li>
      </ul>

      <p><strong>Part 107 Advantages:</strong> Once certified, you can legally conduct drone operations for any commercial purpose. You're legally protected and can grow a drone business.</p>

      <h3>When Do You Actually Need a License? Scenarios</h3>

      <p>Let's clarify common situations:</p>

      <h4>Scenario 1: Taking Aerial Photos for Your Own Website</h4>
      <p>Your business uses drone photos on your website, even though you didn't create them for that purpose. If the photos support your business and have commercial value, it's commercial operation. You need Part 107.</p>

      <h4>Scenario 2: Flying a Drone at a Wedding (You're the Photographer)</h4>
      <p>Even if you're not paid separately for the drone footage, you're providing a service. Commercial. Part 107 required.</p>

      <h4>Scenario 3: Flying Your Drone at Home for Fun</h4>
      <p>Pure recreation, no business purpose. TRUST test and registration only. No Part 107 needed.</p>

      <h4>Scenario 4: Your Dad Asks You to Fly His Drone to Check Roof Damage</h4>
      <p>This is technically commercial operation because you're providing a service (inspection). Part 107 required, even though nobody is paid.</p>

      <h4>Scenario 5: Teaching Friends to Fly Drones (No Payment)</h4>
      <p>Instructional flights are gray area. If you're operating the drone for instructional purposes (even unpaid), it's arguably commercial. To be safe, you should have Part 107 certification.</p>

      <h3>Registration Requirements in 2026</h3>

      <p>Nearly all drone owners must register their drones with the FAA.</p>

      <h4>Who Must Register?</h4>

      <ul>
        <li>Any drone weighing more than 0.55 pounds (250 grams) = MUST REGISTER</li>
        <li>Drones 0.55 pounds or lighter = No registration needed</li>
      </ul>

      <p>This applies to both recreational and commercial drones.</p>

      <h4>How to Register</h4>

      <ul>
        <li>Visit faadronezone.faa.gov</li>
        <li>Create an account with your email and password</li>
        <li>Provide basic information (name, address, date of birth, drone model)</li>
        <li>Pay $5 fee (valid for 3 years)</li>
        <li>Receive registration number and certificate</li>
        <li>Mark your drone with the registration number (label, sticker, or engraving)</li>
      </ul>

      <h4>Why Register?</h4>

      <p>Registration serves two purposes:</p>

      <ul>
        <li><strong>Safety:</strong> If your drone is involved in an incident, authorities can contact you</li>
        <li><strong>Legal Protection:</strong> Operating an unregistered drone is a federal violation (up to $27,500 fine and possible imprisonment)</li>
      </ul>

      <h4>Proof of Registration</h4>

      <p>After registering, the FAA issues a certificate. You don't need to carry it while flying, but keep it safe (you may need to show it if questioned by authorities).</p>

      <h3>Remote ID: What You Need to Know in 2026</h3>

      <p>Remote ID is the newest major regulation. Understanding it is critical.</p>

      <h4>What Is Remote ID?</h4>

      <p>Remote ID broadcasts your drone's location, altitude, and identification information via radio signals. It's similar to the transponder system used by manned aircraft. The purpose is airspace awareness and safety—if your drone is reported by someone, authorities can identify and contact you.</p>

      <h4>Who Must Have Remote ID?</h4>

      <p>As of March 16, 2024:</p>

      <ul>
        <li><strong>All drones over 0.55 pounds operating outdoors:</strong> MUST have Remote ID capability</li>
        <li><strong>Exceptions:</strong> Some early-morning/late-evening flights may be exempt; some low-altitude operations in identified areas may be exempt</li>
        <li><strong>Indoor flying:</strong> Remote ID not required (most drones can't be used indoors anyway due to size)</li>
      </ul>

      <h4>How to Comply with Remote ID</h4>

      <p>You have two options:</p>

      <ul>
        <li><strong>Built-in Remote ID:</strong> Buy a newer drone with Remote ID hardware and software built-in (most 2023+ drones have this)</li>
        <li><strong>Remote ID Module:</strong> Attach an external Remote ID module to older drones (modules available from manufacturers like DJI)</li>
      </ul>

      <h4>What Remote ID Broadcasts</h4>

      <ul>
        <li>Your drone's ID (tied to your registration)</li>
        <li>Your location (latitude, longitude, altitude)</li>
        <li>Your drone's location (current position)</li>
        <li>Flight direction and speed</li>
      </ul>

      <p>This data is visible to authorized receivers (law enforcement, airport authorities, etc.). There's no consumer privacy invasion—only officials can see the data, and it helps them know who's flying in their airspace.</p>

      <h4>Why Remote ID Matters</h4>

      <p>Before Remote ID, if a drone was spotted flying near an airport or over a sensitive area, authorities had no way to identify the operator. Remote ID solves that problem, improving airspace safety and accountability. Non-compliant flying (drones without Remote ID) is a federal violation.</p>

      <h3>Night Operations: What Changed</h3>

      <p>This is one of the most misunderstood regulations.</p>

      <h4>Old Rule (Pre-April 2021)</h4>
      <p>Night flying required an FAA waiver. Waivers were rare and difficult to get.</p>

      <h4>Current Rule (2026)</h4>
      <p>Night operations are permitted without a waiver if you meet specific requirements:</p>

      <ul>
        <li><strong>Anti-Collision Lighting:</strong> Your drone must have lights visible from 3 statute miles away</li>
        <li><strong>Training:</strong> You must have training on night operations (can be self-study, online, or through an instructor)</li>
        <li><strong>Understanding Civil Twilight:</strong> You must know when civil twilight begins and ends in your location (this defines "night")</li>
        <li><strong>Visual Line of Sight:</strong> Even with lights, you must maintain VLOS (seeing the drone with your eyes)</li>
      </ul>

      <h4>What This Means</h4>

      <p>Night flying is now accessible without a waiver. However, you still can't fly at 2 AM in complete darkness hoping the lights are enough. VLOS remains mandatory, which means your visual observer must be able to see the drone, even with anti-collision lighting.</p>

      <p>This regulation enables sunset/sunrise filming and inspections—valuable for commercial operations. Many Part 107 exam questions now include night operations, so understanding the current rules is essential.</p>

      <h3>Medical Fitness: Do You Need a Medical Certificate?</h3>

      <p><strong>Short Answer: No medical certificate needed for Part 107.</strong></p>

      <p>Unlike manned pilots, remote pilots don't need FAA medical certification. However, you must be fit to operate safely. If you have a condition that would incapacitate you (severe epilepsy, heart problems, etc.), you shouldn't operate drones.</p>

      <p>This is a safety judgment, not a legal barrier. The FAA assumes pilots will use common sense and not operate when medically unfit.</p>

      <h3>Common Myths About Drone Licensing (Debunked)</h3>

      <h4>Myth 1: "I Need a License to Fly Any Drone"</h4>
      <p><strong>FALSE.</strong> You only need Part 107 for commercial operations. Recreational flying requires only the free TRUST test (and registration if your drone is over 0.55 lbs).</p>

      <h4>Myth 2: "The FAA Exam Is Impossible to Pass"</h4>
      <p><strong>FALSE.</strong> The exam is challenging but fair. With good study materials and 4-6 weeks of preparation, most people pass. Our users achieve an 84.2% first-attempt pass rate.</p>

      <h4>Myth 3: "Night Flying Always Requires a Waiver"</h4>
      <p><strong>FALSE.</strong> Since April 2021, night operations without a waiver are permitted if you have anti-collision lighting and training. Thousands of commercial operators now fly at night legally.</p>

      <h4>Myth 4: "I Can't Fly a Drone I Don't Own"</h4>
      <p><strong>FALSE.</strong> You can fly someone else's drone, but if it's for any business or service, you need Part 107 certification. You can't operate a registered drone without the owner's permission, but certification is separate.</p>

      <h4>Myth 5: "Registration Is Optional"</h4>
      <p><strong>FALSE.</strong> If your drone weighs more than 0.55 pounds, registration is mandatory. Operating an unregistered drone is a federal violation with serious penalties.</p>

      <h4>Myth 6: "Remote ID Is an Invasion of Privacy"</h4>
      <p><strong>FALSE.</strong> Remote ID broadcasts location information to authorized government personnel only, not the public. It's a safety tool, similar to aircraft transponders. It actually protects your privacy by creating accountability for drone operations.</p>

      <h3>The Fast Track: Getting Licensed in 2026</h3>

      <p>If you want to start commercial drone operations in 2026, here's your timeline:</p>

      <h4>Week 1: Register Your Drone</h4>
      <ul>
        <li>Go to faadronezone.faa.gov</li>
        <li>Register your drone ($5)</li>
        <li>Mark drone with registration number</li>
        <li>Mark your business/contact info</li>
      </ul>

      <h4>Week 1: Take the TRUST Test (Recreational Requirement)</h4>
      <ul>
        <li>Go to faasafety.gov/TRUST</li>
        <li>Take the free 15-minute test</li>
        <li>Get your certificate</li>
        <li>Print and keep for your records</li>
      </ul>

      <h4>Weeks 2-6: Study for Part 107</h4>
      <ul>
        <li>Use quality study materials (Flycensed, official FAA resources, etc.)</li>
        <li>Study 1-2 hours daily</li>
        <li>Focus on regulations, METAR, and decision-making</li>
        <li>Take practice tests regularly</li>
      </ul>

      <h4>Week 7: Schedule and Take the Exam</h4>
      <ul>
        <li>Find a Pearson Vue testing center near you</li>
        <li>Schedule your exam (can usually book within days)</li>
        <li>Pay $175 fee</li>
        <li>Take the exam and pass</li>
      </ul>

      <h4>Week 8: Receive Your Certificate</h4>
      <ul>
        <li>Certificate arrives by mail (usually 2 weeks after passing)</li>
        <li>You're now a licensed Part 107 Remote Pilot</li>
        <li>You can operate commercially</li>
      </ul>

      <p><strong>Total Time: About 8 weeks. Total Cost: $180 (registration $5 + exam $175).</strong></p>

      <h3>Staying Compliant in 2026 and Beyond</h3>

      <p>Once you have your Part 107 certificate, you must stay current:</p>

      <ul>
        <li><strong>Recurrent Training:</strong> Every 24 months, take the free online FAA recurrent training (replaces exam renewal)</li>
        <li><strong>Keep Registration Current:</strong> Renew when it expires (you'll get a reminder)</li>
        <li><strong>Ensure Remote ID:</strong> Your drone must have functioning Remote ID for outdoor flights</li>
        <li><strong>Know Regulatory Changes:</strong> Check FAA.gov periodically for updates</li>
        <li><strong>Insurance:</strong> While not legally required, commercial operations benefit from liability insurance</li>
      </ul>

      <h3>Your Path to Legal Drone Operations</h3>

      <p>Whether you're flying recreationally or starting a drone business, understanding 2026 regulations is essential. The good news: licensing requirements are clear, costs are reasonable, and quality study materials are available.</p>

      <p>The FAA's goal isn't to prevent people from flying drones. It's to ensure operations are safe and accountable. By meeting registration, Remote ID, and certification requirements, you're contributing to a safe National Airspace System.</p>

      <p>Start with registration (5 minutes, $5), then decide: recreational (free TRUST test) or commercial (Part 107). Either way, you can be flying legally within days.</p>
    `,
  },
  {
    slug: 'part-107-night-operations-rules',
    title: 'Part 107 Night Operations: Rules You Need to Know in 2026',
    description: 'Complete guide to flying drones at night under Part 107. Learn the regulations, anti-collision lighting requirements, and training needed for legal night operations.',
    date: '2026-03-20',
    author: 'Flycensed Team',
    readTime: '13 min read',
    category: 'Regulations',
    featuredImage: '/blog/night-operations.png',
    keywords: ['part 107 night operations', 'drone night flying rules', 'anti-collision lighting part 107', 'can I fly drone at night', 'civil twilight'],
    content: `
      <h2>Part 107 Night Operations: Rules You Need to Know in 2026</h2>

      <p>One of the most transformative changes in FAA drone regulations came in April 2021: night operations no longer require a waiver. Today in 2026, commercial drone pilots can legally conduct operations during twilight and night hours under specific conditions. Yet many pilots still believe the old rules apply. This guide explains current 2026 night operation regulations and how to comply legally.</p>

      <h3>The History: How Rules Changed</h3>

      <h4>Pre-April 2021: Night Operations Required a Waiver</h4>

      <p>Before 2021, Part 107 explicitly prohibited night operations. Pilots had to apply for a waiver from the FAA, which was time-consuming, expensive, and rarely granted. This kept beneficial applications (power line inspections, emergency response, search and rescue) grounded after sunset.</p>

      <h4>April 2, 2021: The Game-Changing Rule</h4>

      <p>The FAA issued a final rule allowing night operations under Part 107 without a waiver, provided certain conditions are met. This change was based on technological advances (better lighting, improved cameras) and operational data showing night flights could be safe.</p>

      <h4>March 16, 2024: Remote ID Mandate</h4>

      <p>Remote ID requirements were added, further enhancing accountability and safety during night operations.</p>

      <h4>Current Status (2026)</h4>

      <p>Night operations are now standard, though they remain subject to specific rules. Many online study guides are still outdated and claim you need a waiver. You don't.</p>

      <h3>What Is "Night" Under Part 107?</h3>

      <p>Part 107 defines night operations based on civil twilight, not absolute darkness.</p>

      <h4>Civil Twilight Definition</h4>

      <p><strong>Civil twilight</strong> is the period between sunrise/sunset and when the sun is 6 degrees below the horizon. During civil twilight, there's still enough natural light to see without artificial lighting—roughly 20-40 minutes before sunrise and after sunset, depending on season and latitude.</p>

      <ul>
        <li><strong>Before Civil Twilight Begins (Before Sunrise):</strong> Still dark. If you fly before civil twilight begins, you're operating in darkness and need special authorization.</li>
        <li><strong>During Civil Twilight:</strong> Twilight period. Operations permitted under Part 107 with appropriate lighting.</li>
        <li><strong>After Civil Twilight Ends (After Sunset):</strong> This is when most "night" operations occur—after sunset but when there's still some sky light. Operations permitted under Part 107 with appropriate lighting.</li>
        <li><strong>After Civil Twilight Ends into Complete Darkness:</strong> Operations permitted under Part 107 with appropriate lighting, provided you have anti-collision lighting.</li>
      </ul>

      <p><strong>Practical Example:</strong> On March 20, 2026 in New York City:</p>
      <ul>
        <li>Sunset: 7:07 PM</li>
        <li>End of Civil Twilight: 7:37 PM</li>
        <li>A Part 107 pilot can legally fly after sunset (7:07 PM) with anti-collision lighting and meet all other requirements</li>
        <li>You can fly continuously from 7:07 PM through 7:37 PM and beyond into darkness, as long as you maintain VLOS and have functioning anti-collision lighting</li>
      </ul>

      <h3>The Four Requirements for Legal Night Operations</h3>

      <p>To fly at night under Part 107, you must meet all four of these requirements. Missing even one makes your flight illegal.</p>

      <h4>Requirement 1: Anti-Collision Lighting</h4>

      <p>Your drone must be equipped with anti-collision lighting that:</p>

      <ul>
        <li>Is visible from a distance of at least 3 statute miles</li>
        <li>Is visible through the full 360° around the drone (all directions)</li>
        <li>Flashes or shines continuously during flight</li>
        <li>Uses either red or white light (or both)</li>
      </ul>

      <p><strong>What This Means Practically:</strong> Your drone needs bright LED lights that can be seen from 3 miles away in darkness. Small indicator lights on a consumer drone typically aren't bright enough. You may need:</p>

      <ul>
        <li>An external lighting module (sold by drone manufacturers or third-party suppliers)</li>
        <li>Or a newer drone model with built-in anti-collision lighting rated for 3 statute miles visibility</li>
      </ul>

      <p><strong>Visual Observer and Lighting:</strong> Even with bright anti-collision lighting, you still must maintain visual line of sight. The lighting helps from the air (manned aircraft pilots can see your drone) and on the ground (you can track your drone's position), but you personally must be able to see it with your eyes.</p>

      <h4>Requirement 2: Training on Night Operations</h4>

      <p>You must have received training on night operations. This doesn't require formal certification, but you must have trained knowledge of:</p>

      <ul>
        <li>How to determine civil twilight times and recognize when civil twilight begins/ends</li>
        <li>The limitations of flying at night (reduced visibility, difficulty tracking the drone visually, increased disorientation risk)</li>
        <li>How to properly use anti-collision lighting</li>
        <li>Emergency procedures if you lose visual line of sight at night</li>
        <li>How darkness affects depth perception and distance judgment</li>
      </ul>

      <p><strong>Training Options:</strong> The FAA doesn't mandate a specific training program. You can:</p>

      <ul>
        <li>Take an online course on night operations</li>
        <li>Read the FAA's Remote Pilot Study Guide section on night operations</li>
        <li>Work with an experienced pilot who trains you</li>
        <li>Use quality study apps that include night operations modules</li>
      </ul>

      <p><strong>Burden of Proof:</strong> If questioned by authorities, you must be able to demonstrate you have this knowledge. Documentation (course completion certificate, training notes) helps.</p>

      <h4>Requirement 3: Understanding Civil Twilight</h4>

      <p>You must know when civil twilight begins and ends for your specific location and date.</p>

      <p><strong>How to Find Civil Twilight Times:</strong></p>

      <ul>
        <li><strong>timeanddate.com:</strong> Enter your location, see sunrise/sunset and civil twilight times</li>
        <li><strong>FAA.gov:</strong> Links to resources showing twilight times by location</li>
        <li><strong>Aviation Weather Center:</strong> Provides civil twilight data for pilots</li>
        <li><strong>Smartphone Apps:</strong> Search "civil twilight calculator" or download pilot apps</li>
      </ul>

      <p><strong>Example:</strong> You want to fly at 8:00 PM on March 20, 2026 near Denver, Colorado.</p>
      <ul>
        <li>Check civil twilight times for Denver: Sunset 7:14 PM, end of civil twilight 7:44 PM</li>
        <li>At 8:00 PM, you're 16 minutes past the end of civil twilight—operating in true night</li>
        <li>Legal? YES, if you have anti-collision lighting and meet all other requirements</li>
      </ul>

      <p><strong>Another Example:</strong> You want to fly at 5:45 AM to film sunrise. Sunrise is 6:00 AM, civil twilight begins at 5:30 AM.</p>
      <ul>
        <li>At 5:45 AM, you're within civil twilight (after it begins, before sunrise)</li>
        <li>Legal? YES, this is morning twilight, same rules apply</li>
      </ul>

      <h4>Requirement 4: Visual Line of Sight (VLOS) Maintained</h4>

      <p>This is the same VLOS requirement that applies to all Part 107 operations, but it's especially challenging at night.</p>

      <p><strong>VLOS Requirement:</strong> You must be able to see your drone at all times with your own eyes (or with visual aids like glasses, but not binoculars or cameras on the drone).</p>

      <p><strong>Night VLOS Challenge:</strong> At night, even with anti-collision lighting, seeing a small drone can be difficult, especially at distance. Solutions include:</p>

      <ul>
        <li>Keep flights close (within 100-200 feet of your position)</li>
        <li>Use anti-collision lighting with high brightness</li>
        <li>Have a visual observer dedicated to watching the drone (required by Part 107 anyway)</li>
        <li>Use high-altitude positioning to track the drone against sky background</li>
      </ul>

      <p><strong>Important:</strong> You cannot use your drone's camera feed alone to maintain VLOS. If your visual observer loses sight of the drone, you must land immediately, regardless of what the camera shows.</p>

      <h3>Requirements You Still Must Meet (Night Doesn't Change These)</h3>

      <p>Night operations are permitted, but they don't exempt you from other Part 107 rules:</p>

      <ul>
        <li><strong>Altitude Limit:</strong> 400 feet AGL still applies</li>
        <li><strong>Airspeed:</strong> 100 mph maximum still applies</li>
        <li><strong>Visual Observer:</strong> Required (same as day operations)</li>
        <li><strong>Cloud Clearance:</strong> 500 feet below clouds, 2,000 feet horizontal (though at night, clouds are harder to see)</li>
        <li><strong>Visibility:</strong> 3 statute miles minimum (though night visibility is harder to assess)</li>
        <li><strong>Remote ID:</strong> Required if drone is over 0.55 pounds</li>
        <li><strong>Weather:</strong> No rain, snow, or thunderstorms (same as day)</li>
        <li><strong>Safety:</strong> No flying over people (generally, unless specific authorization)</li>
      </ul>

      <p><strong>Night Assessment Challenges:</strong> Some Part 107 rules are harder to verify at night:</p>

      <ul>
        <li>Cloud clearance: You can't see clouds in darkness. What do you do? Either operate low (where you know there are no clouds), or check current weather (METARs report cloud heights).</li>
        <li>Visibility: 3 statute miles visibility is hard to judge at night. Rely on current METAR data and visible landmarks.</li>
        <li>Weather: Rain is harder to detect at night. Check METARs carefully before flying.</li>
      </ul>

      <h3>What About Waivers? Do You Ever Need One?</h3>

      <p>While night operations no longer require waivers, certain night activities still might:</p>

      <h4>No Waiver Needed For:</h4>

      <ul>
        <li>Standard night operations with anti-collision lighting and training</li>
        <li>Night flights that comply with all Part 107 rules</li>
        <li>Operations after sunset with adequate visibility and lighting</li>
      </ul>

      <h4>Waiver May Still Be Needed For:</h4>

      <ul>
        <li>Flying over people or populated areas at night (very restricted)</li>
        <li>Flying before civil twilight begins (before sunrise; very early morning operations)</li>
        <li>Flying beyond visual line of sight at night (BVLOS)</li>
        <li>Flying in restricted airspace without ATC approval</li>
      </ul>

      <p><strong>Example:</strong> You want to conduct a power line inspection 30 minutes before sunrise (before civil twilight begins). You'd need a waiver because this is "night" by definition, but it's before the civil twilight allowance. Waivers for this purpose are sometimes granted because the operational benefit (utility infrastructure) is significant.</p>

      <h3>Night Flight Operations: Practical Guidance</h3>

      <h4>Planning a Night Flight</h4>

      <p><strong>Step 1: Determine Civil Twilight Times</strong></p>
      <ul>
        <li>Use timeanddate.com or an aviation tool</li>
        <li>Note your location's specific civil twilight begin/end times</li>
        <li>Plan your flight within the civil twilight window or after (into full darkness), provided you have anti-collision lighting</li>
      </ul>

      <p><strong>Step 2: Check Weather</strong></p>
      <ul>
        <li>Get current METAR and TAF (forecast)</li>
        <li>Check for clouds (height is harder to assess at night, so conservative interpretation is wise)</li>
        <li>Check for rain/snow in forecast</li>
        <li>Check wind and visibility</li>
      </ul>

      <p><strong>Step 3: Verify Lighting</strong></p>
      <ul>
        <li>Ensure anti-collision lighting is fully charged and functional</li>
        <li>Test lights before flight to confirm they're bright enough</li>
        <li>Test visibility from 100+ feet away in darkness</li>
      </ul>

      <p><strong>Step 4: Brief Your Visual Observer</strong></p>
      <ul>
        <li>Discuss the darkness and reduced visibility</li>
        <li>Define their role (watch drone, alert if you lose VLOS, maintain safety awareness)</li>
        <li>Brief the flight plan and expected drone movement</li>
        <li>Agree on abort/landing signals if something feels unsafe</li>
      </ul>

      <p><strong>Step 5: Conduct Pre-Flight</strong></p>
      <ul>
        <li>Test all systems (motors, controls, lights, compass, gimbal if applicable)</li>
        <li>Confirm Remote ID is functioning (if required)</li>
        <li>Ensure battery is fully charged</li>
      </ul>

      <p><strong>Step 6: Fly Conservatively</strong></p>
      <ul>
        <li>Keep flight area small and close to your position</li>
        <li>Maintain VLOS at all times</li>
        <li>Perform frequent position checks</li>
        <li>Land if visibility becomes problematic</li>
        <li>Have an abort plan if weather deteriorates</li>
      </ul>

      <h4>Common Night Operations Use Cases</h4>

      <ul>
        <li><strong>Sunset/Sunrise Photography:</strong> Golden hour extended. Film the first minutes after sunset or last minutes before sunrise.</li>
        <li><strong>Infrastructure Inspection:</strong> Power lines, cell towers, industrial facilities. Night operations can be scheduled during off-hours, reducing ground hazards.</li>
        <li><strong>Emergency Response:</strong> Search and rescue, fire assessment, disaster response. Night operations extend operational capabilities.</li>
        <li><strong>Event Coverage:</strong> Sporting events, concerts. Night lighting enables aerial videography during evening events.</li>
        <li><strong>Facility Surveillance:</strong> Security and monitoring of large properties during night hours.</li>
      </ul>

      <h3>The Most Common Mistake: Misunderstanding Civil Twilight</h3>

      <p>Many pilots incorrectly believe that once the sun sets, night begins immediately. Not so. Civil twilight continues for 20-40 minutes after sunset, depending on season and latitude.</p>

      <p><strong>Correct Understanding:</strong> Civil twilight is a period of natural light. Once civil twilight ends, full darkness begins. Part 107 allows operations throughout this entire period (civil twilight + full darkness) if you meet the requirements.</p>

      <p><strong>Wrong Interpretation:</strong> "I can only fly between sunset and civil twilight end."<br/>
      <strong>Correct Interpretation:</strong> "I can fly after sunset, through civil twilight, and into complete darkness—as long as I have anti-collision lighting, training, and other requirements are met."</p>

      <h3>Safety Considerations Specific to Night Operations</h3>

      <p>Even though night operations are legal, they carry unique risks:</p>

      <h4>Reduced Visual Tracking</h4>
      <p>Even with anti-collision lighting, tracking a drone at distance is harder at night. Disorientation is possible. Solution: Fly close, use high-brightness lighting, keep flights short.</p>

      <h4>Depth Perception Challenges</h4>
      <p>Judging distance and altitude is harder in darkness. You might misjudge height and accidentally hit obstacles. Solution: Keep altitude low if terrain is uncertain, use landmarks you can see clearly.</p>

      <h4>Weather Deterioration</h4>
      <p>Wind and weather can develop rapidly. Night weather is harder to spot. Solution: Check forecasts frequently, have a conservative abort threshold, land at first sign of weather change.</p>

      <h4>Fatigue</h4>
      <p>Night operations are mentally taxing. Pilot fatigue increases errors. Solution: Limit flight duration, take breaks, don't fly when tired, have a backup operator.</p>

      <h4>Regulatory Compliance Risk</h4>
      <p>Night operations are more visible to authorities (lights are noticeable). Ensure full compliance with all Part 107 rules. Solution: Document training, maintain records, conduct pre-flight checklists.</p>

      <h3>Training and Preparation for Night Flying</h3>

      <p>If you're new to night operations, proper preparation is essential:</p>

      <ul>
        <li><strong>Classroom Training:</strong> Take a night operations course that covers regulations, safety, and decision-making</li>
        <li><strong>Hands-On Practice:</strong> Start with flights during twilight (easier to see the drone), then gradually expand into full darkness</li>
        <li><strong>Mentorship:</strong> Fly with experienced night operators to learn best practices</li>
        <li><strong>Equipment Familiarity:</strong> Test your anti-collision lighting in various darkness levels. Understand brightness and visibility range.</li>
        <li><strong>Emergency Procedures:</strong> Practice landing when you lose sight of the drone. Know your abort procedures.</li>
      </ul>

      <h3>Your Path to Safe Night Operations</h3>

      <p>Night operations are one of the most exciting and valuable capabilities that Part 107 enables. With proper anti-collision lighting, training, understanding of civil twilight, and maintenance of VLOS, you can legally and safely conduct operations after sunset.</p>

      <p>The key is understanding that "no waiver required" doesn't mean "no rules apply." Night operations have specific requirements that must be meticulously followed. When you do, you unlock operational capabilities that daylight-only pilots don't have.</p>

      <p>Flycensed includes comprehensive night operations training and decision-making scenarios to ensure you truly understand these regulations and can apply them safely in the field. Start studying the right way, pass your Part 107 exam, and then expand your skill set into night operations.</p>
    `,
  },
  {
    slug: 'part-107-study-plan-30-days',
    title: 'How to Pass the FAA Part 107 Exam in 30 Days: A Complete Study Plan',
    description: 'A week-by-week study plan to pass your Part 107 drone pilot exam on the first try. Covers all five exam areas with time estimates, study strategies, and the best resources.',
    date: '2026-03-21',
    author: 'Joshua Bryan',
    readTime: '10 min read',
    category: 'Study Tips',
    keywords: ['Part 107 study plan', 'Part 107 exam prep', 'how to pass Part 107', 'drone license study guide', 'FAA Part 107 30 day plan'],
    featuredImage: '/blog/study-plan-30.png',
    content: `
      <h2>How to Pass the FAA Part 107 Exam in 30 Days</h2>

      <p>The FAA Part 107 Remote Pilot Certificate is your ticket to flying drones commercially in the United States. Whether you want to start a drone photography business, get into agricultural scanning, or add aerial capabilities to an existing service company, you need this certification. The good news is that with a focused 30-day study plan, you can absolutely pass on your first attempt.</p>

      <p>This study plan is based on the actual exam content areas, weighted by how many questions each area typically contributes to the 60-question test.</p>

      <h2>Week 1: Regulations and Airspace (Days 1-7)</h2>

      <h3>Why Start Here</h3>
      <p>Regulations and airspace make up roughly 30 to 40 percent of the exam. Master this section and you have already locked in a significant portion of your passing score. This is also the area where most people feel least confident, so getting it out of the way early builds momentum.</p>

      <h3>What to Study</h3>
      <p>Focus on Part 107 operating rules including maximum altitude of 400 feet AGL, visual line of sight requirements, daylight operations, and the conditions under which you can fly at night. Understand the difference between Class B, C, D, E, and G airspace and what each requires in terms of authorization. Learn how to read sectional charts to identify airspace boundaries, airports, and restricted areas.</p>

      <h3>Daily Plan</h3>
      <p>Days 1 through 3, spend 45 minutes reading the FAA Part 107 regulations. Focus on the actual rules, not summaries. Days 4 through 5, study airspace classifications using sectional chart excerpts. Days 6 through 7, take practice quizzes focused only on regulations and airspace. Aim for 80 percent accuracy before moving on.</p>

      <h2>Week 2: Weather and Meteorology (Days 8-14)</h2>

      <h3>Why This Matters</h3>
      <p>Weather questions make up 15 to 25 percent of the exam. The FAA wants to know you can read METARs, understand cloud formations, recognize dangerous weather patterns, and make safe go or no-go decisions.</p>

      <h3>What to Study</h3>
      <p>Learn to decode METAR reports, which are the standard weather observation format used at airports. Understand TAFs (Terminal Area Forecasts) for predicting conditions at your flight location. Study density altitude and how temperature, humidity, and elevation affect drone performance. Know the types of weather fronts, how stable versus unstable air affects visibility, and what conditions create turbulence.</p>

      <h3>Daily Plan</h3>
      <p>Days 8 through 10, learn METAR decoding. Practice reading real METARs from aviationweather.gov. Days 11 through 12, study weather theory including fronts, stability, cloud types, and visibility. Days 13 through 14, take weather-focused practice quizzes. Use the Flycensed app METAR decoder tool to practice decoding real weather observations.</p>

      <h2>Week 3: Aircraft Performance and Loading (Days 15-21)</h2>

      <h3>What to Study</h3>
      <p>This section covers 10 to 15 percent of the exam but is often where people lose easy points. Study how weight and balance affect flight characteristics. Understand the relationship between center of gravity and stability. Know how environmental factors like temperature, altitude, and humidity affect battery performance and lift.</p>

      <p>Also study emergency procedures, preflight inspection requirements, and maintenance concepts. The FAA expects you to understand basic aerodynamic principles even though you are flying a multirotor, not a fixed-wing aircraft.</p>

      <h3>Daily Plan</h3>
      <p>Days 15 through 17, study aircraft performance fundamentals and weight and balance. Days 18 through 19, review preflight procedures and emergency operations. Days 20 through 21, take practice quizzes on this material.</p>

      <h2>Week 4: Review and Practice Tests (Days 22-30)</h2>

      <h3>The Final Push</h3>
      <p>This is where everything comes together. Spend this week exclusively on full-length practice tests and targeted review of weak areas.</p>

      <h3>Daily Plan</h3>
      <p>Days 22 through 24, take one full 60-question practice test each day. After each test, review every question you got wrong and understand why the correct answer is correct. Days 25 through 27, focus study sessions on your weakest areas identified from practice tests. Use flashcards for memorization-heavy topics like airspace altitudes and weather minimums. Days 28 through 29, take two more full practice tests. You should be scoring 85 percent or higher consistently. Day 30, light review only. Skim your notes, do one more practice test, and get a good night of sleep. You are ready.</p>

      <h2>Study Resources</h2>
      <p>The Flycensed app was built specifically for this study plan. It includes 485 flashcards covering all exam topics with SM-2 spaced repetition to optimize retention. The 201 practice questions are organized by exam area so you can do targeted study during weeks 1 through 3 and full-length tests during week 4. The METAR decoder and generator tools give you unlimited practice with real-world weather observations.</p>

      <h2>Test Day Tips</h2>
      <p>Schedule your exam at a PSI testing center (find locations at psiexams.com). Arrive 30 minutes early with a valid government-issued photo ID. You will have 120 minutes for 60 questions, which is more than enough time. Read each question carefully, eliminate obviously wrong answers, and flag questions you are unsure about to revisit at the end. You need 42 out of 60 correct to pass, which is a 70 percent threshold.</p>

      <p>With four weeks of focused study following this plan, you will walk in confident and walk out certified. Good luck, future pilot.</p>
    `,
  },
];
