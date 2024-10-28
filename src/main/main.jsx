import React from 'react'
import './main.css'
import Img1 from '../images/final-banner.jpeg'
import Img2 from '../images/nav-logo-2.webp'
import Img3 from '../images/home2.jpg'
import Img4 from '../images/home9.jpg'
import Img5 from '../images/why1.jpg'
import Img6 from '../images/why2.jpg'
import Img7 from '../images/why3.jpg'
import Img8 from '../images/why4.jpg'
import Img9 from '../images/why5.jpg'
import Img10 from '../images/why6.jpg'
import Img11 from '../images/why7.jpg'
import Video1 from '../videos/two.mp4'



export default function main() {
  return (
   <>
   <div className="con1">
    <h1>Home page</h1>
   </div>
   <div className="cont2">
    <img src={Img1} alt="" />
   </div>
   <div className="content11">
    <img src={Img2} alt="" />
    <h1 id='h1'><marquee>A True Carrer Path-Ways are Here....</marquee></h1>
   </div>
   <hr />
   {/* // ! second main div start */}
   <div className="container-fuild container12">
    <div className="child1">
      <h2>Other Platform Links :</h2>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/software-developer">Software Developer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.techtarget.com/searchcloudcomputing/definition/cloud-engineer"> Cloud Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/network-security-engineer"> Network Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/what-is-a-system-administrator-a-career-guide"> System Administrator</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.atlassian.com/devops/what-is-devops/devops-engineer"> Dev Oops Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.oracle.com/database/what-is-a-dba/">Data Base Administrator</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/help-desk-technician">Help Desk Technician</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/what-does-a-business-analyst-do-and-how-to-become-one">Business Analystic</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/ai-engineer">Artificial Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://bootcamp.cvn.columbia.edu/blog/what-is-ux-design/">UI/UX Design</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.atlassian.com/agile/product-management/product-manager">Product Manager</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/blockchain-developer">Block Chain Developer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.indeed.com/career-advice/finding-a-job/how-to-become-qa-engineer">Quality Assurance (QA) Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/it-project-manager"> IT Project Manager</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://aws.amazon.com/what-is/sre/"> SRC Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.careerexplorer.com/careers/robotics-engineer/">Robotics Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.coursera.org/articles/game-developer">Game Developer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://resources.pcb.cadence.com/blog/how-to-become-an-embedded-systems-engineer-2">Embedded Systems Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://skillcrush.com/tech-jobs/ar-vr-developer/">VR/AR Developer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.techtarget.com/searchdatamanagement/definition/big-data-engineer">Big Data Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.investopedia.com/terms/c/chief-technology-officer.asp">Chief Technology Officer (CTO)</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.reddit.com/r/technicalwriting/comments/11dsycd/whats_it_like_being_a_technical_writer/">Technical Writer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.infosecinstitute.com/skills/roles/digital-forensics-analyst/">Digital Forensics Analyst</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.indeed.com/career-advice/finding-a-job/what-is-an-it-consultant"> IT Consultant</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://bigbang360.com/what-does-an-erp-consultant-do/">ERP Consultant</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://au.indeed.com/career-advice/finding-a-job/how-to-become-bioinformatics-engineer">Bioinformatics Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.glassdoor.co.in/Salaries/voice-recognition-engineer-salary-SRCH_KO0,26.htm?countryRedirect=true"> Voice Recognition Engineer</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://blog.hubspot.com/website/information-architecture">Information Architect</a></p>
      <p><i class="fa-solid fa-chevron-right"></i><a href="https://www.cisco.com/c/en/us/products/security/what-is-ciso.html">Chief Information Security Officer (CISO)</a></p>
    </div>
    <div className="child2">
      <video controls className='video1' loop>
        <source src={Video1} />
      </video>
      <h1 className='hea'>A Final Call From Carrer !</h1>
      <h2>Why ?</h2>
      {/* <img src={Img4} alt=""  id='img2'/> */}

      <img src={Img3} alt="" className='img1' />
      <p id='correct1'>
      Choosing the right career path in computer science during your B.Tech is crucial, as it shapes your skill set, job opportunities, and long-term career satisfaction. Here are some reasons why selecting the correct career path is essential:
      </p>
      <ul>
        <li><span>Skill Development and Specialization: </span> The field of computer science has various branches like software engineering, data science, cybersecurity, artificial intelligence, and web development, among others. Each branch requires specific skills and knowledge. Choosing a path early allows you to build expertise in that area, making you more competitive in the job market.</li>
        <li><span> Alignment with Industry Trends:</span> Technology evolves quickly, and demand for skills varies. By choosing a career path that aligns with current trends—like AI, machine learning, cloud computing, or cybersecurity—you increase your chances of finding rewarding and high-paying jobs. Industries highly value these skills, and you’ll be better positioned for future opportunities.</li>
        <li> <span>Job Satisfaction:</span> When you select a path that aligns with your interests, you’re more likely to enjoy the work you do daily. This can contribute to long-term career satisfaction, leading to motivation, creativity, and a desire to keep learning and growing in your field.</li>
        <li><span>Better Career Opportunities:</span> Different paths lead to different roles, with some fields offering more demand or better job security. For instance, data science and AI professionals are in high demand due to the data-centric nature of modern businesses, while cybersecurity experts are essential to prevent digital threats. Choosing a high-demand field can increase job security and open up more opportunities.</li>
        <img src={Img4} alt=""  id='img2'/>
        {/* <img src={Img3} alt="" className='img1' /> */}
        <li><span>Salary Potential:</span> Some fields in computer science tend to offer higher salaries than others. For example, artificial intelligence, machine learning, and cybersecurity professionals generally have higher average salaries compared to other fields. Choosing a path with a strong earning potential can lead to greater financial stability.</li>
        <li><span>Preparation for Higher Education or Specialized Roles:</span> If you plan to pursue higher studies or certifications, having a clear career path helps you select the relevant courses and projects during your B.Tech. This can give you a head start for specialized roles or advanced studies, positioning you as a strong candidate for master’s programs or specialized certifications.</li>
        <li><span>Industry Connections and Networking:</span> By focusing on a specific path, you can build a network within that niche. Attending conferences, joining related groups, and connecting with industry professionals becomes easier, helping you learn from their experiences and opening up potential job opportunities.</li>
      <hr />
      </ul>
      <center><h3>Here are some Information Usefull to You...</h3></center>
      <h2 id='why'>Why google Want's You! :</h2>
      <img src={Img5} alt="" className='img3'/>
      <p id='par1'>Google prioritizes various tech domains, especially **AI and Machine Learning** for products like Google Assistant and self-driving cars. **Data Science** and **Big Data** are crucial for analyzing vast data sets, while **Cloud Computing** experts support Google Cloud Platform.
**Cybersecurity** talent ensures data protection, and **Quantum Computing** pushes boundaries in quantum algorithms. Google also invests in **AR/VR** for immersive experiences and **NLP** for language processing in products like Search. <br /> <br /> Ethical AI and **User Experience** focus on creating user-centered, responsible tech.
Google values experts in AI, Data Science, Cloud Computing, Cybersecurity, Quantum Computing, and AR/VR. Key areas also include NLP, Ethical AI, and User Experience, all driving innovation across Google’s platforms. <br /><br />
Google is focusing on Edge Computing for faster, localized data processing, sustainable tech for green data centers, robotics for automation, 5G for connectivity, and privacy computing to enhance data security.</p>
<h2 id="why">Why Amazon want's You! :</h2>
<img src={Img8} alt="" className='img4'/>

<p id="par2">
Amazon prioritizes fields like **Cloud Computing** for its Amazon Web Services (AWS) platform, **E-commerce Optimization** for improving user experience, and **AI/ML** for personalized recommendations. **Logistics and Automation** are central to efficient delivery, while **Voice AI** powers Alexa. Additionally, Amazon invests in **Sustainability** to reduce its environmental footprint and **Data Security** to protect customer information. These areas drive Amazon's innovation across technology, supply chain, and customer service.
<br /><br />Amazon emphasizes Cloud Computing with AWS, AI for recommendations, logistics automation, and voice AI with Alexa. Sustainability and data security are also key, enhancing efficiency, customer experience, and environmental impact.
<br /><br />
Amazon focuses on AWS cloud, AI-driven recommendations, logistics automation, Alexa, sustainability, and data security to enhance efficiency and customer experience.
</p>
<h2 id="why">Why Microsoft Want's you! :</h2>
<img src={Img9} alt="" className='img5'/>
<p id="par1">
Microsoft prioritizes **Cloud Computing** through Azure, enabling businesses to scale and innovate. They focus on **Artificial Intelligence** for products like Microsoft 365, enhancing productivity and collaboration. **Cybersecurity** is critical, protecting user data across platforms. Additionally, Microsoft emphasizes **Mixed Reality** with HoloLens for immersive experiences and invests in **Quantum Computing** research for future technology advancements. **Sustainability** initiatives also drive their commitment to reducing environmental impact while promoting **Open Source** development to foster community collaboration and innovation.
<br /><br />Microsoft emphasizes Azure cloud services, AI for productivity, cybersecurity, mixed reality with HoloLens, quantum computing, and sustainability initiatives for environmental responsibility.
<br /><br />
Microsoft focuses on Azure for cloud computing, AI to enhance productivity, robust cybersecurity measures, mixed reality with HoloLens, quantum computing research, and sustainability initiatives to reduce its environmental impact and promote innovation.
</p>
<h2 id="why">Why Apple Wants You! :</h2>
<img src={Img10} alt="" className='img6'/>
<p id='par3'>
Apple prioritizes **User Experience** by designing intuitive products, emphasizing seamless integration across devices. Their focus on **Privacy and Security** ensures user data protection. Apple invests heavily in **Artificial Intelligence** for features like Siri and personalized experiences. The company is also dedicated to **Sustainability**, using renewable materials and aiming for carbon neutrality in its supply chain. Additionally, Apple explores **Augmented Reality (AR)** technologies, enhancing user engagement and experience through ARKit, while continuously innovating in **Wearable Technology** like the Apple Watch. <br /><br />
Apple emphasizes user experience, privacy, and security, invests in AI, AR technology, and sustainability, and innovates with products like the Apple Watch. <br /><br />
Apple focuses on user experience and privacy, invests in AI for features like Siri, explores augmented reality, prioritizes sustainability through renewable materials, and continuously innovates in wearable technology like the Apple Watch.
</p>
    </div>
   </div>
   {/* // ! second main div end */}
  <div className="footer">
    <div className="fir">
    <img src={Img2} alt="" className='foot-img'/>
    <h2>LearnGo.In</h2>
    </div>
    <address>
      <p>LearnGo.in |Tirupati | Andhra Pradesh | India | copyright &copy; since 2024-2026 | Contact us : 7569896128 ,6302056310 | Best of luck! for your Bright Future....😊</p>
    </address>
  </div>
   </>
  )
}
