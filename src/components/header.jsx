// ! web develoment page
import React from 'react'
import Res1 from '../source/res1.jpg'
import Order1 from '../source/order1.jpg'
import Food1 from '../source/food1.webp'
// import Cheif1 from '../source/cheif1.webp'
import Vid1 from '../source/web1.gif'
// import {Link} from 'react-router-dom'
// import Student from '../source/student.webp'
import '../css/webMedia.css'
// import '../css/web.css'
import '../two-css/web.css'
// import Intenship from './intenship'
// import Footer from './footer'
export default function header(){
  return (
   <>
   <div className="lit">
   <div className='first-container'>
   <img src={Vid1} alt="" className='vid'/>
   <div className="content1">
    <h1>Web <span>-</span> Development</h1>
   </div>
   </div>
   {/* ! Description place start */}
   <div className="container desc">
    <h1>Description : </h1>
    <h4>Web-Development, This is the path where we create websites beautifully and dinamically anyway there are two different types of Websites They are <span><i class="fa-solid fa-star"></i> Web Development  <i class="fa-solid fa-star"></i> Web Design</span>
    </h4>
    <hr />
    <h2><b>Web Development : </b></h2>
    <h4>Web Development is a path to built websites using coding from scratch.There are 2 kinds of Developments they are 
      <ol>
        <li> Front-End Development </li>
        <li> Back-End Development </li>
        <li> Data-Base Development </li>
      </ol>
    </h4>
   <h2 className='str1'><strong>Front-End Development</strong></h2>
   <h5><span id='str2'>Description :</span> Front-end Development is completely based on user viewing page ,This page is manditory for every website for example you are visited this website that means that what you are viewing currently this is Front-end page that we created for you.
    there is only that you viewing part.there is no any extra part in it. and there are 2 types of Developers in Front-End they are 
    <ul>
      <li>MEAN Developers [MongoDB,Express,Angular,NodeJS]</li>
      <li>MERN Developers [MongoDB,Express,React,NodeJS]</li>
    </ul> 
   </h5>
   <h2 className='str1'><strong>Back-End Development</strong></h2>
    <h5><span id='str2'>Description : </span>Back-end Development this is invisable development Because of this work for example 
    If you click on any links you are re-directing to other pages it is only by the servers this is the part where you completely talk with the servers to get Data from Data Base. 
    There a five types of Developers in Back-end they are 
    <ul>
      <li>Dot-Nut Developer</li>
      <li>Javascript Developer</li>
      <li>Python Developer</li>
      <li>Java Developer</li>
      <li>Ruby Developer</li>
    </ul>
    </h5>
    <div className='col-12 col-xl-12 col-lg-12 col-sm-12 design'>
    <h2><b>Web-Design :</b></h2>
    <h4 id='ux'>UX Design</h4>
    <p>One popular tool in web design is UX Design, it is a type of art that designs products to perform an accurate user background. UX design is very deep. UX is more than the web, it is very independent, and its fundamentals can be applied to many other browsers or apps. Web design is mostly based on web-based things. UX can overlap both web design and design. UX design mostly focuses on products that are less web-based.</p>
    <h2>Platform/Websites for web Design</h2>
    <ol  className='col-12 col-xl-12 col-lg-12 col-sm-12 plat'>
      <li><span id='web-des'>Awwwards:</span> A platform that showcases and recognizes well-designed websites, providing inspiration and examples of excellent web design.</li>
      <li><span id='web-des'>Behance: </span>A platform for creatives to showcase their work, including web design projects, and discover inspiration from others.</li>
      <li><span id='web-des'>Land-book:</span> A curated collection of high-quality, visually stunning websites, providing inspiration for web designers and developers.</li>
      <li><span id='web-des'>Webflow:</span> A visual-first platform for designing and building custom websites, offering a range of features, including AI-powered design, responsive design, and collaboration tools.</li>
      <li><span id='web-des'>Squarespace:</span> A website design platform that provides templates, drag-and-drop editing, and AI-powered design guidance to help users create professional-looking websites.</li>
      <li><span id='web-des'>Wix: </span>A cloud-based website builder that offers a drag-and-drop editor, AI-powered design features, and a range of templates and customization options.</li>
      <li><span id='web-des'>Hostinger Website Builder:</span> A simple and intuitive platform for creating websites without design or coding skills, featuring AI-powered design tools and a range of templates.
      </li>
    </ol>
    </div>
   </div>
   {/* ! Description place end */}
   {/* Over review Part start */}

   <h2 id='over'>Over-Review Of Developments : </h2>
   <div className="container over col-12 col-lg-12 col-sm-12 col-md-12">
    <div className="one col-6 col-lg-6 col-sm-6 col-md-6">
      <h3>For Example : We went to the Restarent with friends or Family members and this are you may see the restarent aren't you they must be a example of Front-end part.</h3>
      <h3>Then You go for Food avaliable this process must go in front-end part after you looked then a person came to you and ask what you want 
        in this part the waiter is a example of Servers this is interconnection between frontpage to Data-base.
      </h3>
      <h3>After that the waiter take order from you and go to kitchen and ask the food what you wished for if it exist he bring it to you or else 
        he says no food Avaliblity like the same websites work Here the Kitchen is Data Base and waiter is Server and the Restarent is Fron-end Page.
      </h3>
      <h3>we hope that you are understanded,if you didn't get see below for more!</h3>
    </div>
    <div className="two col-6 col-lg-6 col-sm-6 col-md-6">
    <img src={Res1} alt="" />
   <img src={Order1} alt="" />
   <img src={Food1} alt="" />
   {/* <img src={Cheif1} alt="" id='las'/> */}
    </div>
   </div>
   {/* Over review Part end */}
   {/* Source part start here... */}
   <h1 id='sour1'>Source To Learn Web Development</h1>
    <div className="container source1">
      <h3>Youtube Source</h3>
      <div className="first">
        <div className="one">
          <center>
      <h4>HTML(Hyper Text Markup Language)</h4>
          </center>
      <p>This is Known As Website Structure Language For more example it is like a how our body containe Skeleton like this language contain to the websites.
        with out this there is no websites as per the conclusion this is manditory for every web developer.
        Don't be panic it is like a piece of cake to learn because of the understanding tags.once you gain the knowledge on basic tags it gets some easy. 
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" className='html' src="https://www.youtube.com/embed/kUMe1FH4CHE?si=dVy_gU6sRLVnGcYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
     <div className="first">
        <div className="one">
          <center>
      <h4>CSS(Cascading Style Sheets)</h4>
          </center>
      <p>
        CSS this is not a language but it like color to the website let me explain more before we learn about the Html with the 
        example of skeleton now imagine that upperbody of our skeleton is covered with skin where there is different types of skins
        with color like css is the skin to the websites. <br /> With out css websites are look like a dump with css it is like a full body.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" className='html' src="https://www.youtube.com/embed/ESnrn1kAD4E?si=-hcsArOLEoOs7bAr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* ! third video start */}
      <div className="first">
        <div className="one">
          <center>
      <h4>BootStrap</h4>
          </center>
      <p>
      Bootstrap is a free and open-source front-end development framework designed to create responsive and mobile-first websites and web applications. Developed by Twitter, Bootstrap was first released in 2011 and has since become one of the most popular frameworks for web development due to its flexibility, ease of use, and strong community support. Bootstrap is built using HTML, CSS, and JavaScript, allowing developers to quickly design and customize websites without having to start from scratch.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" className='html' src="https://www.youtube.com/embed/-qfEOE4vtxE?si=jVQRhfNjYN080VcD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* ! third video end */}
      {/* ! fourth video start js */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Javscript</h4>
          </center>
      <p>
      JavaScript is a versatile, high-level programming language that is one of the core technologies of web development, alongside HTML and CSS. Initially created in 1995 by Brendan Eich at Netscape, it has since become a crucial component of interactive web applications and modern websites. JavaScript enables developers to create dynamic and responsive content, control multimedia, animate images, and handle user inputs, making websites more engaging and interactive.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" className='html' src="https://www.youtube.com/embed/JVTZb4YvKjM?si=Q4jaaXIS3YhaV_2p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* ! fourth video end js */}
      {/* ! React video start from  here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>React Js</h4>
          </center>
      <p>
      React is a popular open-source JavaScript library developed by Facebook, primarily used for building user interfaces (UIs), especially for single-page applications (SPAs). Since its release in 2013, React has gained widespread adoption due to its simplicity, performance, and flexibility. It focuses on creating reusable UI components, allowing developers to build complex, dynamic web applications more efficiently.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" className='html' src="https://www.youtube.com/embed/bMknfKXIFA8?si=Sj7hbjgGGQJ67jaG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* ! React video end from  here */}
      {/* ! Git start from here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Git</h4>
          </center>
      <p>
      Git is a free, open-source version control system (VCS) that helps developers manage changes in their codebase over time. Created in 2005 by Linus Torvalds, the same person who developed the Linux operating system, Git is designed to handle everything from small to large-scale projects with speed and efficiency. Today, Git is one of the most popular version control systems used in software development, offering a wide range of powerful features that help teams collaborate effectively while maintaining a comprehensive history of their code.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" className='html' src="https://www.youtube.com/embed/vwj89i2FmG0?si=U5JxHbWOD1rLDKDz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* ! Git end from here */}
      <h2>Back-End Languages</h2>
      {/* ! Node JS Start from HERE */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Node Js</h4>
          </center>
      <p>
      Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server side. Developed by Ryan Dahl in 2009, Node.js enables the use of JavaScript beyond the browser, allowing it to be used for building scalable, high-performance backend applications, APIs, and even desktop applications. It is built on Google Chrome's V8 JavaScript engine, which makes it fast and efficient.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f2EqECiTBL8?si=2q-8iJ0_sQ5h2SZ2" className='html' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* ! Node JS end from HERE */}
      {/* ! express js start from here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Express Js</h4>
          </center>
      <p>
      Express.js is a fast, minimal, and flexible web application framework for Node.js that simplifies building web servers and APIs. Released in 2010 by TJ Holowaychuk, Express.js has become one of the most popular frameworks in the Node.js ecosystem, making it easy to manage HTTP requests, set up routes, and handle middleware in web applications. It provides a thin layer of fundamental web application features, without obscuring the powerful functionality of Node.js.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nH9E25nkk3I?si=yYxixFUy9ZK9C351" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! express js end from here */}
      {/* ! pyton video start here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Python Language</h4>
          </center>
      <p>
      Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. Created by Guido van Rossum and first released in 1991, Python has become one of the most popular programming languages due to its clear syntax and powerful capabilities, making it ideal for both beginners and experienced developers. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming, and is used for a wide range of application.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw?si=_ZnvJxj4w7zL8Ia_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='html' referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* ! pyton video end here */}
      {/* ! github video start from here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Git-Hub</h4>
          </center>
      <p>
      GitHub is a web-based platform that provides hosting for version control using Git. It is widely used by developers to manage code repositories, collaborate on projects, track changes, and maintain software development workflows. Launched in 2008, GitHub has become the largest and most popular code hosting platform, offering a range of features to help individuals and teams collaborate on software projects efficiently.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zDkc8xfvOjA?si=B9pJMBLe2ZsbFlay" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! github video end from here */}
      {/* ! mongodb start here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Mongo-DB</h4>
          </center>
      <p>
      MongoDB is a popular, open-source, NoSQL database designed for handling large amounts of unstructured or semi-structured data. Released in 2009 by MongoDB, Inc., it is a document-oriented database, meaning data is stored in flexible, JSON-like documents rather than traditional table-based formats like relational databases. MongoDB is designed to provide high performance, scalability, and flexibility, making it ideal for modern applications that deal with large datasets, frequent schema changes, or need to handle diverse data types.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ofme2o29ngU?si=Ho8n2_bsavnSFt48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! mongodb end here */}
      {/* ! Rest Api start here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Rest-API</h4>
          </center>
      <p>
      A REST API (Representational State Transfer Application Programming Interface) is a set of rules that allows communication between a client and server over the web. It follows the principles of REST, a lightweight architectural style designed for building scalable and efficient web services. REST APIs are widely used to enable interaction between different software applications, allowing them to exchange data and perform operations over HTTP, the same protocol used by web browsers.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fgTGADljAeg?si=mUGUB0tsuNOogrx2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! Rest Api end here */}
    </div>
    {/* <Intenship/>
    <Footer/> */}
   {/* Source part end here... */}
   {/* ! websites source start from here */}


   {/* <h2 className='learn-websites'>Learn From Websites!</h2> */}
    {/* <div className="container websites">
    <h3>To learn from websites : </h3>
    <div className="listlinks">
      <ul>
    <li><a href="https://www.w3schools.com">W3 Schools</a></li>
    <li><a href="https://www.freecodecamp.org/">Free-Code Camp</a></li>
      </ul>
    <ul>
    <li><a href="https://www.codecademy.com/">Codecademy</a></li>
    <li><a href="https://developer.mozilla.org/">MDN Web Docs (Mozilla Developer Network)</a></li>
    </ul>
    <ul>
    <li><a href="https://www.linkedin.com/learning">LinkedIn Learning</a></li>
    <li><a href="https://www.pluralsight.com/">Pluralsight</a></li>
    </ul>
    <ul> 
      <li><a href="https://www.theodinproject.com/">The Odin Project</a></li>
      <li><a href="https://www.frontendmentor.io/">Frontend Mentor</a></li>
    </ul>
    <ul>
    <li><a href="https://www.coursera.org/">Coursera</a></li>
    <li><a href="https://www.udemy.com/">Udemy</a></li>
    </ul>
    <ul>
    <li><a href="https://www.edx.org/">edX</a></li>
    <li><a href="https://www.khanacademy.org/">Khan Academy</a></li>
    </ul>
    </div>
    <h4>To Practice online</h4>
    <div className="listlinks">
    <ul>
      <li><a href="https://codepen.io/">CodePen</a></li>
      <li><a href="https://jsfiddle.net/">JSFiddle</a></li>
      
    </ul>
    <ul>
    <li><a href="https://jsbin.com/">JSBin</a></li>
      <li><a href="https://replit.com/">Repl.it</a></li>
    </ul>
    <ul>
    <li><a href="https://playcode.io/">PlayCode</a></li>
    <li><a href="https://codesandbox.io/">CodeSandbox </a></li>
    </ul>
    <ul>
      <li><a href="https://stackblitz.com/">StackBlitz</a></li>
      <li><a href="https://jsitor.com/">JSitor</a></li>
    </ul>
    <ul>
      <li><a href="https://thimble.mozilla.org/">Thimble by Mozilla (Archived)</a></li>
    </ul>
    </div>
   </div>

   </div> */}

  {/* //  websites source end from here */} */


   {/* <h2 id='platform1'>Intenships Platforms</h2>
   <div className="intenships container">
    <h4>Check Out Your Carrer in These Websites</h4>
    <div className="inten">
    <ul>
      <li><a href="https://www.linkedin.com">Linkedin.com</a></li>
      <li><a href="https://www.indeed.com">Indeed.in</a></li>
    </ul>
    <ul>
      <li><a href="https://www.glassdoor.com">GlassDoor.in</a></li>
      <li><a href="https://www.Internships.com">Intenships.com</a></li>
    </ul>
    <ul>
      <li><a href="http://www.wayup.com">Way-Up.com</a></li>
      <li><a href="https://www.idealist.com">IdeaList</a></li>
    </ul>
    <ul>
      <li><a href="https://www.chegg.com">Chegg.in</a></li>
      <li><a href="https://careers.google.com">Google Carrers</a></li>
    </ul>
    <ul>
      <li><a href="https://careerbuilder.com">Carrer Builder</a></li>
      <li><a href="https://monster.com">Monster.In</a></li>
    </ul>
    <ul>
      <li><a href="https://ziprecruiter.com">Ziprecruiter.in</a></li>
      <li><a href="https://coolworks.com">CoolWorks.Com</a></li>
    </ul>
    <ul>
      <li><a href="https://flexjobs.com">Flexjobs.in</a></li>
      <li><a href="https://looksharp.com">LookSharp.com</a></li>
    </ul>
    <ul>
      <li><a href="https://themuse.com">Themuse.in</a></li>
    </ul>
    </div> */}

    {/* ! jobs start here */}



    
    {/* <h1 id='job'>Job Platforms!</h1>
    <div className="container jobs">
      <h3>Here are job Roll's</h3>
      <div className="lis1">
      <ul id='fir'>
        <li><a href="https://flexjobs.com">Flex-Jobs</a></li>
        <li><a href="https://angel.co">Angel.com</a></li>
        <li><a href="https://themuse.com">Themuse.in</a></li>
      </ul>
      <ul>
        <li><a href="https://snagajob.com">Sanga-Jobs</a></li>
        <li><a href="https://jooble.org">Jooble</a></li>
        <li><a href="https://roberthalf.com">Robert Half</a></li>
      </ul>
      <ul>
        <li><a href="https://aftercollege.com">After Collage</a></li>
        <li><a href="https://peopleperhour.com">People Per Hour</a></li>
        <li><a href="https://guru.com">Guru.com</a></li>
      </ul>
      <ul>
      <li><a href="https://www.linkedin.com">Linkedin.com</a></li>
      <li><a href="https://www.indeed.com">Indeed.in</a></li>
      <li><a href="https://themuse.com">Themuse.in</a></li>
    </ul>
      </div>
    </div>
 */}


    {/* ! jobs end here */}
   {/* About us session start */}
   {/* <h2 id='about'>About Us</h2> */}




   {/* <div className="about">
    <div className="one">
    <img src={Student} alt="" />
    </div>
    <div className="two">
      <h3>From Our Team</h3>
      <p>Hi friends, we are very glad to meet you, we hope our website is usefull on choosing your carrer.
        this website is to teach you how to learn the new Technology, here you can go with correct direction towards the paths,
        But from our side a small advice this is not final step,keep learning untill you reach your final Destiny,You can clear your True Destiny you can only by Practicing many times untill you Clear it , Our self we are from Mohan Babu University 
        and we are currently B.tech 3 Year Belongs to Computer Science and Engineering at Tirupati. We hope we meet once again by achiving our Goal's.
      </p>
    </div>
   </div> */}





   
   {/* </div> */}

   {/* <div className="container-fluid footer ">
      <h2>LearnGo.in</h2>  
    <b>Our Address : Tirupati,Mohan Babu University,Rangampeta,517501 || Copyright &copy; since 2024-2026 and our contact numbers are [1763-778-748 , 1563-758-899]</b>
  </div> */}
    </div>
   </>
  )
}
 