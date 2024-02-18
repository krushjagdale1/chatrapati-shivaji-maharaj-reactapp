import React from 'react'
import { Link } from 'react-router-dom';

export default function English() {

  document.title = "Chatrapati Shivaji Maharaj";

  document.querySelector('meta[name="description"]').setAttribute("content", "Chatrapati Shivaji Maharaj was an amazing Maratha king, and this tribute page lets you step into his incredible world. Learn about his bravery and leadership in Indian history. Explore how he built the Maratha Empire and used smart military tactics. This page looks at his smart strategies and how well he ran things. Find out about his strong spirit that affected the 16th century and still inspires people today. This page talk about his skills at sea and his commitment to fair rule. Join me in honoring this important historical figure, and learn why what he did is so important. Discover the stories of Chatrapati Shivaji Maharaj's extraordinary life and why he matters to our history.");

  return (
    <>
      <nav>
          <span id="translate-lang">Translate: </span>
          <div class="lang">
              <span><Link to="/hindi">हिन्दी</Link></span>
              <span><Link to="/marathi">मराठी</Link></span>
              <span><Link to="/telugu">తెలుగు</Link></span>
              <span><Link to="/kannada">ಕನ್ನಡ</Link></span>
              <span><Link to="/sanskrit">संस्कृत</Link></span>
          </div>
      </nav>

      <main>
          <section id="introduction">
              <div class="p">
                  <h1>Chatrapati Shivaji Maharaj</h1>
                  <div class="intro">
                      <img src="imgs/chatrapati-shivaji-maharaj.webp" alt="chatrapati-shivaji-maharaj-portrait" height="600px" />
                      <p>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Chatrapati Shivaji Maharaj</strong> was an Indian ruler hailing from the Bhonsle Maratha clan. He established his own kingdom, emerging from the weakening Adilshahi Sultanate of Bijapur, which laid the foundation for the Maratha Empire. In 1674, Shivaji was officially crowned as the Chatrapati of his domain at Raigad Fort. <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout his life, Shivaji navigated alliances and conflicts with various powers including the Mughal Empire, the Sultanate of Golkonda, the Sultanate of Bijapur, and European colonial forces. His military campaigns expanded Maratha influence, involving the capture and construction of forts, and the development of a Maratha navy. Shivaji instituted an efficient and forward-thinking civil administration with structured administrative systems. He revived ancient Hindu political customs, court traditions, and advocated for the use of Marathi and Sanskrit languages, replacing Persian in court and administration.
                      </p>
                  </div>
                  <div className="info-pic">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji was admired for his respectful treatment of women and his inclusive approach, employing individuals from diverse castes and religions, including Muslims and Europeans, in his administration and military. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji Maharaj's legacy varied depending on the perspective and era, but nearly two centuries after his passing, he gained increased significance during the Indian independence movement. Many Indian nationalists regarded him as a precursor to nationalism and a hero among Hindus.
                    </p>
                  </div>
              </div>
          </section>
  <hr />
          <section id="early-life">
              <h2>Early Life</h2>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Chatrapati Shivaji Maharaj</strong> was born in Shivneri hill-fort, close to Junnar, now part of Pune district. His birth anniversary, 19 February, is celebrated as Shiv Jayanti. He was named after the local goddess Shivai Devi. Shivaji belonged to the Bhonsle clan of Marathas. His father, Shahaji Bhonsle, served the Deccan Sultanates as a general. His mother, Jijabai, was the daughter of Lakhuji Jadhavrao of Sindhkhed, aligned with the Mughals. Shivaji's paternal grandfather, Maloji, was a prominent general of Ahmadnagar Sultanate, granted the title of "Raja". He received rights over Pune, Supe, Chakan, and Indapur for military expenses and Fort Shivneri for residence. During Shivaji's birth, power in the Deccan was divided among the Sultanates of Bijapur, Ahmednagar, and Golkonda. Shahaji maintained his loyalty to various rulers while retaining his jagir at Pune and a small army.
                  </p>
                  <img src="imgs/shivaji_childhood.webp" alt="shivaji_childhood" height="500" />
              </div>
          </section>
  <hr />
          <section id="bijapur_conflict">
              <h2>Conflict with Bijapur Sultanate</h2>
              <ul><h3><li>Background and context:</li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1636, the Adil Shahi sultanate of Bijapur launched an invasion into the southern kingdoms, having recently become a vassal state of the Mughal empire. Shahaji, then a chieftain in the Maratha uplands of western India, supported the sultanate in hopes of gaining jagir land in the conquered territories, allowing him to collect taxes as an annuity. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shahaji, previously in brief Mughal service, rebelled against them. His campaigns against the Mughals, backed by Bijapur, largely failed. Constantly pursued by the Mughal army, Shivaji and his mother Jijabai had to continually relocate from fort to fort. <br />
                  </p>
                  <img src="imgs/shivneri.webp" alt="shivneri" height="400px" />
              </div>
              <div className="info-pic">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1636, Shahaji switched allegiance to Bijapur and was granted Poona. While Shahaji was stationed in Bangalore by Adilshah of Bijapur, he appointed Dadoji Kondadeo as the administrator of Poona. Shivaji and Jijabai settled in Poona. When Kondadeo passed away in 1647, Shivaji assumed administration. One of his initial actions directly challenged the authority of the Bijapuri government.
                </p>
              </div>

  <hr class="inside" />
              <ul><h3><li>Independent Generalship: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1646, at the age of 16, Shivaji seized the Torna Fort, capitalizing on the turmoil within the Bijapur court due to Sultan Mohammed Adil Shah's illness, and confiscated a significant treasure. Over the next two years, he captured several key forts near Pune, including Purandar, Kondhana, and Chakan, extending his direct control over areas east of Pune, such as Supa, Baramati, and Indapur. Using the treasure from Torna, he constructed a new fort called Rajgad, which became the center of his administration for more than ten years. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subsequently, Shivaji shifted his focus westward to the Konkan region, acquiring the important town of Kalyan. The Bijapur government took notice of these developments and moved to counteract them. On 25 July 1648, Shahaji was imprisoned by fellow Maratha leader Baji Ghorpade, acting under Bijapur's orders, in an attempt to curb Shivaji's growing influence.
                  </p>
                  <img src="imgs/south_india_in_1605.webp" alt="shivneri" height="400px" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shahaji regained freedom in 1649, following the capture of Jinji, which secured Adilshah's authority in Karnataka. Between 1649 and 1655, Shivaji paused his military campaigns to consolidate his gains. After his father's release, he resumed his raids, and in 1656, controversially killed Chandrarao More, another Maratha feudatory of Bijapur, seizing control of the Javali valley near present-day Mahabaleshwar. This conquest enabled Shivaji to extend his raids into south and southwest Maharashtra. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apart from the Bhonsle and More families, numerous others, including the Sawant of Sawantwadi, Ghorpade of Mudhol, Nimbalkar of Phaltan, and Shirke, Mane, and Mohite families, served the Adilshahi of Bijapur, many holding Deshmukhi rights. Shivaji employed various strategies to subdue these influential families, including forming alliances, engaging directly with village Patils to bypass the Deshmukhs, or employing force. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In his later years, Shahaji displayed mixed feelings toward his son, disavowing his rebellious activities and leaving Shivaji's fate to the Bijapur authorities. Shahaji passed away around 1664–1665 in a hunting accident.
                  </p>
              </div>

  <hr class="inside" />
              <ul><h3><li>Combat with Afzal Khan: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Bijapur sultanate grew increasingly displeased with the losses suffered against Shivaji's forces, particularly with their vassal Shahaji disavowing his son's actions. With a peace treaty established with the Mughals and the ascension of the young Ali Adil Shah II as sultan, Bijapur stabilized, directing its focus towards Shivaji. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1657, the sultan, likely influenced by his mother and regent, dispatched Afzal Khan, a seasoned general, to apprehend Shivaji. Before their confrontation, the Bijapuri forces defiled the Tulja Bhavani Temple, sacred to Shivaji's family, and the Vithoba temple at Pandharpur, a significant Hindu pilgrimage site. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hunted by Bijapuri troops, Shivaji sought refuge in Pratapgad fort. Despite pressure from his associates to surrender, Shivaji and his forces remained entrenched. Both sides reached a deadlock, with Shivaji unable to break the siege, and Afzal Khan lacking the necessary siege equipment to capture the fort. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After two months, Afzal Khan proposed a private meeting with Shivaji outside the fort to negotiate terms, sending an envoy to initiate discussions.
                  </p>
                  <img src="imgs/afzal_khan.webp" alt="shivneri" height="450px" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On November 10, 1659, Shivaji and Afzal Khan met in a hut at the foothills of Pratapgad fort. The terms of the meeting stipulated that each would be armed only with a sword and accompanied by one follower. Shivaji, suspicious of Afzal Khan's intentions, wore armor beneath his clothes, concealed a Vagh Nakh (metal "tiger claw") on his left arm, and held a dagger in his right hand. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The exact events of the encounter remain unclear, as they are primarily recounted through Maratha legends. However, it is generally believed that a physical altercation ensued between the two, resulting in Khan's demise. While Khan's dagger failed to penetrate Shivaji's armor, Shivaji fatally wounded him, subsequently signaling his hidden troops with a cannon blast to attack the Bijapuri army.
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the ensuing Battle of Pratapgarh, Shivaji's forces achieved a decisive victory over the Bijapur Sultanate's army. Over 3,000 soldiers from the Bijapur army perished, with one high-ranking sardar, two of Afzal Khan's sons, and two Maratha chiefs taken captive. Following the triumph, Shivaji conducted a grand review below Pratapgarh. The captured enemies, both officers and soldiers, were released and escorted back to their homes with provisions and gifts. The Marathas were duly rewarded for their valor and loyalty.
                  </p>
              </div>

  <hr class="inside" />
              <ul><h3><li>Siege of Panhala: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following his victory over the Bijapuri forces, Shivaji and his army advanced towards the Konkan coast and Kolhapur. They captured the Panhala fort and defeated Bijapuri forces led by Rustam Zaman and Fazl Khan in 1659. In 1660, Adilshah dispatched his general Siddi Jauhar to attack Shivaji's southern border, while the Mughals planned a simultaneous attack from the north. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During this period, Shivaji was stationed at Panhala fort with his troops. In mid-1660, Siddi Jauhar's army besieged Panhala, cutting off supply routes to the fort. To intensify the bombardment of Panhala, Siddi Jauhar acquired grenades from the English at Rajapur and hired English artillerymen, visibly displaying an English flag. Shivaji perceived this act as treachery, leading him to retaliate in December by raiding the English factory at Rajapur and capturing four owners, who remained imprisoned until mid-1663.
                  </p>
                  <img src="imgs/panhala-fort.webp" alt="panhala-fort" height="400px" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After enduring months of siege, Shivaji entered negotiations with Siddi Jauhar, eventually surrendering the fort on 22 September 1660. Following the surrender, Shivaji withdrew to Vishalgad. It's noteworthy that Shivaji would later reclaim Panhala in 1673.
                  </p>
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Battle of Pavan Khind: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji made a daring escape from Panhala under the cover of night. As enemy cavalry pursued him, his loyal Maratha sardar Baji Prabhu Deshpande of Bandal Deshmukh, along with 300 soldiers, bravely volunteered to engage the enemy at Ghod Khind ("horse ravine"). Their sacrifice aimed to delay the enemy forces and allow Shivaji and the rest of the army to reach the safety of Vishalgad fort. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the ensuing Battle of Pavan Khind, the outnumbered Maratha force valiantly held back the larger enemy, buying crucial time for Shivaji's escape. Despite being wounded, Baji Prabhu Deshpande continued to fight until he heard the sound of cannon fire from Vishalgad, signaling Shivaji's successful arrival at the fort on the evening of 13 July 1660. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In recognition of their valor and sacrifice, Ghod Khind was later renamed Paavan Khind ("sacred pass") in honor of Baji Prabhu Deshpande, Shibosingh Jadhav, Fuloji, and all the other soldiers who fought there.
                  </p>
                  <img src="imgs/pavan-khind.webp" alt="pavan-khind" height="450px" />
              </div>
          </section>
  <hr />
          <section id="mughal_combat">
              <h2>Combat With Mughals</h2>
              <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Until 1657, Shivaji maintained peaceful relations with the Mughal Empire. He offered his support to Aurangzeb, the Mughal Emperor's son and viceroy of the Deccan, in conquering Bijapur. In return, Shivaji sought formal recognition of his rights to the Bijapuri forts and villages under his control. However, dissatisfied with the Mughal response and receiving a better offer from Bijapur, Shivaji launched a raid into Mughal territory in the Deccan. <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji's conflicts with the Mughals escalated in March 1657, when two of his officers raided Mughal territory near Ahmednagar. Subsequent raids in Junnar saw Shivaji seize 300,000 hun in cash and 200 horses. In response, Aurangzeb dispatched Nasiri Khan, who defeated Shivaji's forces at Ahmednagar. However, Aurangzeb's actions against Shivaji were disrupted by the rainy season and his struggles with his brothers for succession following Emperor Shah Jahan's illness.
              </p>

              <ul><h3><li>Attacks on Shaista Khan and Surat: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upon the request of Badi Begum of Bijapur, Aurangzeb, now the Mughal emperor, dispatched his maternal uncle Shaista Khan with a formidable army of over 150,000 soldiers, along with a powerful artillery division, in January 1660. The objective was to confront Shivaji in coordination with Bijapur's army led by Siddi Jauhar. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shaista Khan, commanding an army of 80,000 troops, launched a successful campaign and captured Pune. He also seized the nearby fort of Chakan after a siege lasting a month and a half, breaching its walls. Shaista Khan then made his residence at Shivaji's palace, known as Lal Mahal.
                  </p>
                  <img src="imgs/shaista_khan.webp" alt="shaista_khan" height="320" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On the night of April 5, 1663, Shivaji orchestrated a bold nocturnal assault on Shaista Khan's encampment. Accompanied by 400 men, Shivaji launched an attack on Khan's mansion, penetrating Khan's bedroom and inflicting wounds upon him, causing the loss of three fingers. In the ensuing chaos, Shaista Khan's son, along with several wives, servants, and soldiers, lost their lives. Seeking refuge with the Mughal forces outside Pune, Khan faced punishment from Aurangzeb for the humiliating incident, resulting in his transfer to Bengal. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In response to Shaista Khan's aggression and to replenish his depleted treasury, Shivaji sacked the prosperous port city of Surat, a major Mughal trading hub, in 1664. Additionally, on February 13, 1665, he conducted a naval raid on the Portuguese-held Basrur, situated in present-day Karnataka, securing substantial plunder.
                  </p>
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Treaty of Purandar: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The assaults on Shaista Khan and Surat deeply angered Aurangzeb, prompting him to dispatch the Rajput general Jai Singh I with an army numbering around 15,000 soldiers to subdue Shivaji. Throughout 1665, Jai Singh's forces relentlessly pursued Shivaji, with their cavalry ravaging the countryside and besieging his forts. The Mughal commander successfully enticed several of Shivaji's key commanders and many of his cavalrymen to join Mughal service. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By mid-1665, with the fortress at Purandar on the brink of falling, Shivaji was compelled to negotiate with Jai Singh. In the Treaty of Purandar signed on June 11, 1665, Shivaji agreed to surrender 23 of his forts, retaining only 12 for himself. Additionally, he agreed to pay compensation of 400,000 gold hun to the Mughals. Shivaji also consented to become a vassal of the Mughal empire and to dispatch his son Sambhaji, along with 5,000 horsemen, to serve as a mansabdar and fight for the Mughals in the Deccan.
                      
                  </p>
                  <img src="imgs/treaty-of-purandar.webp" alt="treaty-of-purandar" height="400" />
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Arrest in Agra and Escape: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1666, Aurangzeb summoned Shivaji to Agra (although some sources suggest Delhi) along with his nine-year-old son Sambhaji. Aurangzeb intended to send Shivaji to Kandahar, today dated in Afghanistan, to strengthen the Mughal empire's northwestern frontier. However, on May 12, 1666, Shivaji was compelled to stand at court among relatively minor nobles, individuals he had previously defeated in battle. Shivaji felt slighted, left abruptly, and was immediately placed under house arrest. Ram Singh, the son of Jai Singh, assured custody of Shivaji and his son.
                  </p>
                  <img src="imgs/agra-escape.webp" alt="agra-escape" height="300" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji's position under house arrest was perilous, as Aurangzeb's court debated whether to kill him or continue to employ him. Jai Singh, having assured Shivaji of his personal safety, tried to influence Aurangzeb's decision. Meanwhile, Shivaji hatched a plan to free himself. He sent most of his men back home and asked Ram Singh to withdraw his guarantees to the emperor for the safe custody of himself and his son. He surrendered to Mughal forces. Shivaji then pretended to be ill and began sending out large baskets packed with sweets to be given to the Brahmins and poor as penance. On 17 August 1666, by putting himself in one of the large baskets and his son Sambhaji in another, Shivaji escaped and left Agra.
                  </p>
              </div>
          </section>
  
  <hr />
          <section id="reconquest">
              <h2>Reconquest</h2>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The peace between Shivaji and the Mughals endured until 1670 when Aurangzeb grew suspicious of the close relationship between Shivaji and Mu'azzam. Aurangzeb feared Mu'azzam might challenge his throne and suspected him of receiving bribes from Shivaji. Around the same time, Aurangzeb, engaged in battles against the Afghans, significantly reduced his army in the Deccan. Many discharged soldiers joined Maratha service. The Mughals revoked Shivaji's jagir of Berar to recover the money lent to him years earlier. In response, Shivaji launched an offensive against the Mughals, reclaiming a substantial portion of the surrendered territories within four months. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1670, Shivaji sacked Surat for the second time. While the English and Dutch factories successfully defended against his attack, Shivaji looted the city, including the possessions of a Muslim prince returning from Mecca. Enraged by these assaults, the Mughals resumed hostilities, dispatching Daud Khan's force to intercept Shivaji on his return from Surat. However, Shivaji emerged victorious in the Battle of Vani-Dindori near Nashik.
                  </p>
                  <img src="imgs/reconquest.webp" alt="reconquest" height="450" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In October 1670, Shivaji directed his forces to harass the English at Bombay, who had declined to sell him war supplies. His forces obstructed English woodcutting parties from departing Bombay. In September 1671, Shivaji sent an ambassador to Bombay seeking materiel for the conflict against Danda-Rajpuri. Despite concerns about Shivaji's gains from this conquest, the English hesitated to forgo the chance of receiving compensation for his raids on their factories at Rajapur. Negotiations between Shivaji and the English ensued, but failed over the Rajapur indemnity issue. Despite subsequent envoy exchanges, Shivaji never paid the Rajapur indemnity before his demise, leading to the dissolution of the factory there by the end of 1682.
                  </p>
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Battles of Umrani and Nesari: </li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1674, Prataprao Gujar, the sarnaubat (commander-in-chief of the Maratha forces), was dispatched to repel the invading Bijapuri forces under General Bahlol Khan. Prataprao's troops achieved victory by capturing Bahlol Khan after strategically encircling a crucial lake, depriving the enemy of water and compelling them to seek peace terms. Despite Shivaji's explicit warnings, Prataprao released Bahlol Khan, who began preparations for a renewed assault. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upon learning of Prataprao's actions, Shivaji expressed his disappointment in a letter to him, denying him an audience until Bahlol Khan was recaptured. Disheartened by Shivaji's rebuke, Prataprao confronted Bahlol Khan with only six horsemen, leaving his main force behind, and perished in the ensuing battle. Shivaji mourned deeply upon hearing of Prataprao's demise and arranged the marriage of his second son, Rajaram, to Prataprao's daughter. Following Prataprao's death, Hambirrao Mohite assumed the role of the new sarnaubat. Raigad Fort, constructed by Hiroji Indulkar, emerged as the new capital of the burgeoning Maratha kingdom.
                  </p>
                  <img src="imgs/umrani.webp" alt="umrani" height="400" />
              </div>
          </section>
  
  <hr />
          <section id="coronation">
              <h2>Coronation</h2>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji amassed significant lands and wealth through his campaigns, yet lacking an official title, he remained technically a Mughal zamindar or the son of a Bijapuri jagirdar, without a legal basis to govern his de facto domain. A royal designation could resolve this and deter challenges from other Maratha leaders, who were his equals. Moreover, such a title would offer Hindu Marathas a Hindu sovereign in a region predominantly governed by Muslims.
                  </p>
                  <img src="imgs/coronation.webp" alt="coronation" height="300" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Preparations for a proposed coronation commenced in 1673. However, some controversies prolonged the coronation by nearly a year. One dispute erupted among the Brahmins of Shivaji's court: they refused to crown Shivaji as a king because that status was traditionally reserved for those of the kshatriya (warrior) varna in Hindu society. Categorized as a Maratha due to his lineage of headmen of farming villages, Shivaji had never undergone a sacred thread ceremony or worn the thread as a kshatriya would. Shivaji sought validation from Gaga Bhatt, a pandit of Varanasi, who claimed to have discovered evidence proving Shivaji's descent from the Sisodias, thereby affirming him as a kshatriya in need of the ceremonies befitting his rank. To assert this status, Shivaji underwent a sacred thread ceremony and remarried his spouses under the Vedic rites expected of a kshatriya. However, historical evidence suggests that Shivaji's claim to Rajput, specifically Sisodial ancestry, may be viewed as tenuous or purely inventive.
                  </p>
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On 28 May, Shivaji performed penance for his and his ancestors' failure to observe Kshatriya rites. Gaga Bhatt then invested Shivaji with the sacred thread. Following the insistence of other Brahmins, Gaga Bhatt omitted the Vedic chant and initiated Shivaji into a modified form of the life of the twice-born, rather than placing him on par with the Brahmins. The next day, Shivaji made atonement for the sins committed in his lifetime. He was weighed separately against seven metals, including gold, silver, and various other items, and these articles, along with a lakh of hun, were distributed among the Brahmins. However, this failed to satisfy their greed, prompting two Brahmins to point out that Shivaji, during his raids, had killed Brahmins, cows, women, and children. He could be absolved of these sins for a fee of Rs. 8,000, which Shivaji paid. The total expenditure for the gathering, almsgiving, throne, and ornaments amounted to around 1.5 million Rupees.
                  </p>
                  <img src="imgs/coronation-2.webp" alt="coronation-2" height="400" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On 6 June 1674, Shivaji was anointed king of the Maratha Empire (Hindavi Swaraj) in a grand ceremony at Raigad fort. According to the Hindu calendar, it was the 13th day (trayodashi) of the first fortnight of the month of Jyeshtha in the year 1596. Gaga Bhatt conducted the ceremony, pouring water from a gold vessel filled with the waters of the seven sacred rivers—Yamuna, Indus, Ganges, Godavari, Narmada, Krishna, and Kaveri—over Shivaji's head and reciting the Vedic coronation mantras. After the ablution, Shivaji bowed before his mother, Jijabai, and touched her feet. Nearly fifty thousand people assembled at Raigad for the ceremonies. Shivaji was hailed as Shakakarta ("founder of an era") and Chhatrapati ("sovereign"). He also assumed the title of Haindava Dharmodhhaarak (protector of the Hindu faith) and Kshatriya Kulavantas: Kshatriya being the varna of Hinduism, and kulavantas meaning the 'head of the kula, or race'. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jijabai passed away on 18 June 1674. The Marathas summoned Nischal Puri Goswami, a tantric priest, who proclaimed that the initial coronation had occurred under inauspicious stars, necessitating a second coronation. This second coronation, on 24 September 1674, pacified those who still believed that Shivaji was unqualified for the Vedic rites of his first coronation, as it was a less contentious ceremony.
                  </p>
              </div>
          </section>
  
  <hr />
          <section id="south-india">
              <h2>Conquest in Southern India</h2>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starting in 1674, the Marathas launched an assertive campaign, raiding Khandesh in October, seizing Bijapuri Ponda in April 1675, capturing Karwar in the middle of the year, and securing Kolhapur in July. In November, the Maratha navy engaged in skirmishes with the Siddis of Janjira but failed to dislodge them. After recovering from an illness and exploiting a civil war between the Deccanis and the Afghans at Bijapur, Shivaji raided Athani in April 1676. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before his expedition, Shivaji appealed to a sense of Deccani patriotism, emphasizing Southern India as a homeland to be protected from outsiders. His appeal found some success, leading Shivaji to visit Hyderabad for a month in 1677, where he forged a treaty with the Qutubshah of the Golkonda sultanate. Under the treaty, the Qutubshah agreed to end his alliance with Bijapur and jointly oppose the Mughals. In 1677, Shivaji invaded Karnataka with 30,000 cavalry and 40,000 infantry, supported by Golkonda artillery and funding. Advancing southward, Shivaji captured the forts of Vellore and Gingee; the latter would later become a capital of the Marathas during the reign of his son Rajaram I.
                  </p>
                  <img src="imgs/tanjore.webp" alt="tanjore" height="480" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji sought to reconcile with his half-brother Venkoji (Ekoji I), Shahaji's son from his second wife, Tukabai (née Mohite), who ruled Thanjavur (Tanjore) after Shahaji. Although negotiations initially seemed promising, they ultimately failed. Upon returning to Raigad, Shivaji defeated his half-brother's army on 26 November 1677 and seized most of his possessions on the Mysore plateau. Venkoji's wife, Dipa Bai, whom Shivaji greatly respected, initiated new negotiations with him and persuaded her husband to distance himself from his Muslim advisors. Eventually, Shivaji agreed to return many of the seized properties to Dipa Bai and her female descendants. In return, Venkoji accepted certain conditions for the proper administration of the territories and the maintenance of Shahji's memorial (samadhi).
                  </p>
              </div>
          </section>
  
  <hr />
          <section id="death-succession">
              <h2>Death & Succession</h2>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The issue of Shivaji's heir-apparent was complex. In 1678, Shivaji confined his son to Panhala, only to have the prince escape with his wife and defect to the Mughals for a year. Sambhaji later returned home, unrepentant, and was again confined to Panhala. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chatrapati Shivaji Maharaj passed away around 3–5 April 1680, at the age of 50, on the eve of Hanuman Jayanti. The cause of his death remains disputed. According to British records, Shivaji Maharaj died of bloody flux after being ill for 12 days. A contemporary Portuguese document from the Biblioteca Nacional de Lisboa records anthrax as the cause of his death. However, Krishnaji Anant Sabhasad, the author of Sabhasad Bakhar, mentioned fever as the cause of death. Putalabai, Shivaji's childless eldest surviving wife, committed sati by jumping into his funeral pyre. Another surviving spouse, Sakwarbai, was unable to follow suit as she had a young daughter. Some allegations, though doubted by later scholars, suggested that Shivaji's second wife Soyarabai poisoned him to put her 10-year-old son Rajaram on the throne.
                  </p>
                  <img src="imgs/chatrapati-sambhaji-maharaj.webp" alt="chatrapati-sambhaji-maharaj" height="480" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following Shivaji's death, Soyarabai conspired with various ministers to crown her son Rajaram instead of her stepson Sambhaji. On 21 April 1680, ten-year-old Rajaram was installed on the throne. However, Sambhaji seized Raigad Fort after killing the commander, and on 18 June, he gained control of Raigad. He formally ascended the throne on 20 July. Rajaram, his mother Soyarabai, and his wife Janki Bai were imprisoned, and Soyarabai was executed on charges of conspiracy that October.
                  </p>
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Aurangzeb's Campaign Against Marathas And Aftermath:</li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following Shivaji's demise in 1681, Aurangzeb initiated a campaign in the South to seize territories held by the Marathas, the Adil Shahi of Bijapur, and Qutb Shahi of Golconda. While he managed to eliminate the Adil Shahi and Qutb Shahi dynasties, the Marathas proved resilient. Known as the Mughal–Maratha Wars, this effort expanded the Mughal Empire nominally but ended in strategic failure, severely weakening the Mughal Empire. Aurangzeb spent 27 years in the Deccan but couldn't conquer the Marathas, draining the Mughal Treasury and significantly weakening the Mughal army. Historical sources estimate that about 2.5 million soldiers of Aurangzeb's army perished during the conflict, with 2 million civilians succumbing to drought, plague, and famine in war-torn regions. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During this period, Sambhaji was captured, tortured, and executed in 1689, sparking strong Maratha resistance under the leadership of his successor, Rajaram, and later his widow Tarabai. Territories frequently changed hands between the Mughals and the Marathas.
                  </p>
                  <img src="imgs/sambhaji-torture.webp" alt="sambhaji-torture" height="400" />
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shahu, Shivaji's grandson and Sambhaji's son, was held captive by Aurangzeb throughout the 27-year struggle. Upon Aurangzeb's death, Shahu was released by his successor. Following a brief power struggle with his aunt Tarabai over succession, Shahu governed the Maratha Empire from 1707 to 1749. In the early years of his reign, he appointed Balaji Vishwanath and his descendants as Peshwas (prime ministers) of the Maratha Empire. Under the leadership of Balaji's son, Peshwa Bajirao I, and grandson Peshwa Balaji Bajirao, the empire expanded significantly. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To manage the vast empire effectively, Shahu and the Peshwas granted semi-autonomy to powerful feudal lords, including the Gaekwads of Baroda, the Holkars of Indore and Malwa, the Scindias of Gwalior, and the Bhonsales of Nagpur, forming the Maratha Confederacy.
                  </p>
              </div>
          </section>
  
  <hr />
          <section id="legacy">
              <h2>Legacy</h2>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji's enduring legacy lies in laying the groundwork for the Maratha Empire, which significantly contributed to weakening the military, economic strength, and prestige of the Mughal Empire. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following Aurangzeb's demise in 1707, the Marathas swiftly began to seize Mughal territories. By 1734, they had firmly established themselves in Malwa. By 1737, Maratha raids extended as far as Bundelkhand, Rajputana, and the Doab, culminating in the defeat of an imperial army outside the walls of Delhi. <br />                    
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1738, facing defeat and starvation of his army, the Nizam of Hyderabad, acting on the Mughal emperor's authority, acknowledged the Marathas as rulers of Malwa and sovereigns of all lands between the Narmada and Chambal rivers. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This northward expansion of the Marathas, as noted by Stewart Gordon, showcased their growing influence and territorial gains, challenging the established order and dominance of the Mughal's army.
                  </p>
              </div>
              <div class="info-pic">
                  <div class="imp">
                      <p class="inner">
                          During the 1750s, the frontier of Maratha influence extended northward to Delhi. At this time, the Mughal government exerted direct control over very little territory beyond fifty miles from the capital. Even within this limited zone, conflicts were rampant. The Jats and Rohillas vied for control over the territory, various factions contended for the throne, and the Afghan king, Ahmad Shah Abdali, made periodic incursions into the capital. <br />
                          ... <br />
                          In the midst of this chaos, two pivotal events unfolded for the Marathas in Delhi. Firstly, a treaty in 1752 designated them as protectors of the Mughal throne, granting them the right to collect chauth in the Punjab. Secondly, the civil war of 1753 resulted in the installment of a Maratha nominee on the Mughal throne, marking significant milestones in the Maratha quest for power and influence in the region.
                      </p>
                  </div>
              </div>
              <div class="info-pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At its zenith, the Maratha empire extended from present-day Maharashtra in the south to the Sutlej river in the north, and to Orissa in the east. However, in 1761, the Maratha army suffered a significant setback in the Third Battle of Panipat against Ahmed Shah Durrani of the Afghan Empire. Despite this defeat, the Marathas managed to recover swiftly. A decade later, during the reign of Madhav Rao II, they regained influence in North India. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the early 19th century, the British East India Company was consolidating its power in India. Charles Metcalfe, a British official who later served as acting governor-general, remarked in 1806 that India was essentially governed by two major powers: the British and the Marathas. He emphasized that any territory ceded by the British would likely be claimed by the Marathas. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Marathas remained a dominant force in India until their defeat by the British in the Second and Third Anglo-Maratha wars (1805–1818). These conflicts resulted in the British East India Company emerging as the dominant power across much of India.
                  </p>
              </div>
          </section>
  
  <hr />
          <section id="governance">
              <h2>Governance</h2>
              <ul><h3><li>Ashta Pradhan Mandal:</li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Council of Eight Ministers, known as the Ashta Pradhan Mandal, was a pivotal administrative and advisory body established by Shivaji. Comprising eight ministers, it served as a crucial forum for offering counsel and guidance to Shivaji on political and administrative affairs. The members of this council were as follows:
                  </p>
              </div>
              <div class="table">
                  <table>
                      <thead>
                          <tr>
                              <td>Minister</td>
                              <td>Duty</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Peshwa or Prime Minister</td>
                              <td>General administration</td>
                          </tr>
                          <tr>
                              <td>Amatya or Finance Minister</td>
                              <td>Maintaining public accounts</td>
                          </tr>
                          <tr>
                              <td>Mantri or Chronicler</td>
                              <td>Maintaining court records</td>
                          </tr>
                          <tr>
                              <td>Summant or Dabir or Foreign Secretary</td>
                              <td>All matters related to relationships with other states</td>
                          </tr>
                          <tr>
                              <td>Sachiv or Shurn Nawis or Home Secretary</td>
                              <td>Managing correspondence of the king</td>
                          </tr>
                          <tr>
                              <td>Panditrao or Ecclesiastical Head</td>
                              <td>Religious matters</td>
                          </tr>
                          <tr>
                              <td>Nyayadhis or Chief Justice</td>
                              <td>Civil and military justice</td>
                          </tr>
                          <tr>
                              <td>Senapati/Sari Naubat or Commander-in-Chief</td>
                              <td>All matters related to army of the king</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Promotion of Marathi and Sanskrit:</li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In his court, Shivaji instituted a significant cultural and linguistic shift by replacing Persian, which was the prevalent courtly language in the region, with Marathi. He also emphasized Hindu political and courtly traditions during his reign. Shivaji's rule played a pivotal role in promoting Marathi as a structured tool for communication and comprehension. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notably, Shivaji's royal seal was crafted in Sanskrit. Additionally, he tasked one of his officials with creating a comprehensive lexicon aimed at replacing Persian and Arabic terms with their Sanskrit counterparts. This initiative resulted in the production of the Rājavyavahārakośa, a thesaurus of state usage, in the year 1677.
                  </p>
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Religious Policy:</li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many contemporary analysts view Shivaji's religious policies as tolerant. While promoting Hinduism, Shivaji not only permitted Muslims to practice their faith without interference but also provided support to their institutions through endowments. <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In response to Aurangzeb's imposition of the Jizya tax on non-Muslims on 3 April 1679, Shivaji penned a critical letter to Aurangzeb condemning his tax policy. He wrote:
                  </p>
                  <img src="imgs/Shivaji's_letter_1.webp" alt="Shivaji's_letter" height="450" />
              </div>
              <div class="info-pic">
                  <div class="imp">
                      <p class="inner">
                          "In strict justice, the Jizya is not at all lawful. If you imagine piety in oppressing and terrorizing the Hindus, you ought to first levy the tax on Raj Singh I, who is the head of Hindus. But to oppress ants and flies is not at all valor nor spirit. If you believe in Quran, God is the lord of all men and not just of Muslims only. Verily, Islam and Hinduism are terms of contrast. They are used by the true Divine Painter for blending the colors and filling in the outlines. If it is a mosque, the call to prayer is chanted in remembrance of God. If it is a temple, the bells are rung in yearning for God alone. To show bigotry to any man's religion and practices is to alter the words of the Holy Book."
                      </p>
                  </div>
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Noting that Shivaji had stemmed the spread of the neighboring Muslim states, his contemporary, the poet Kavi Bhushan, stated:
                  </p>
              </div>
              <div class="info-pic">
                  <div class="imp">
                      <p class="inner">
                          "If not for Shivaji, Kashi would have lost its culture, Mathura would have been turned into a mosque, and all would have been circumcised."
                      </p>
                  </div>
              </div>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gijs Kruijtzer, in his book "Xenophobia in Seventeenth-Century India," argues that the origins of modern communalism, the antagonism between Hindu and Muslim "communities," emerged during the interplay between Shivaji and the Mughal emperor Aurangzeb from 1677 to 1687, despite Shivaji's death in 1680. During the sack of Surat in 1664, Shivaji spared the city's Christians, demonstrating tolerance toward different religions. He even referred to the Capuchin friar Ambrose as "good men." <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shivaji's intention was not to establish universal Hindu rule but to foster religious tolerance and syncretism. He urged Aurangzeb to emulate Akbar's respect for Hindu beliefs and sites. Shivaji also formed alliances with neighboring Muslim nations and included Muslim leaders in his army, such as the formation of the first Pathan unit in 1656 and appointing a Muslim, Darya Sarang, as his naval admiral.
                  </p>
              </div>
  
  <hr class="inside" />
              <ul><h3><li>Seals:</li></h3></ul>
              <div class="info_pic">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seals served as a method to validate official documents. While Shahaji and Jijabai utilized Persian seals, Shivaji opted for Sanskrit from the outset for his seal. The inscription on the seal reads: "This seal of Shiva, son of Shah, illuminates for the welfare of the people and is intended to garner growing reverence from the universe, resembling the waxing crescent moon."
                  </p>
                  <img src="imgs/seals.webp" alt="seals" height="300" />
              </div>
          </section>
  
          <section id="continue-btn">
              <a href="https://en.wikipedia.org/wiki/Shivaji" target="_blank" rel='noreferrer'><button>Continue Reading</button></a>
          </section>
      </main>
    </>
    )
}
