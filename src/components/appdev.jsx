import React from 'react'
import '../two-css/appDev.css'
import Img1 from '../images/app7.avif'
// import Img2 from '../images/app1.avif'
import Img3 from '../images/app2.avif'
import Img4 from '../images/app3.avif'
// import Img5 from '../images/app4.avif'
// import Img6 from '../images/app5.avif'
import Img7 from '../images/app6.avif'
import Img8 from '../images/app8.avif'
// import Img9 from '../images/app9.avif'
// import Img10 from '../images/app10.avif'
// import Img11 from '../images/app11.avif'
// import Img12 from '../images/app13.avif'
import Intenship from './intenship'
import Footer from './footer'
 function Appdev() {
  return (
    <>
    {/* container1 start */}
    <div className="con">
      <img src={Img1} alt="" />
    </div>
    {/* <div className="content">
      <h1>Welcome To App Development</h1>
    </div> */}
    {/* container1 end */}
    {/* content 2 start */}
    <div className="container-fluid con2">
     <center><h1>Key Platforms : </h1></center>
      <div className="parent">
        <div className="child3">
          <ol>
            <li><span><b>Planning and Research:</b></span> This stage involves identifying the purpose of the app, target audience, and key features. It also includes market research to analyze competitors and determine the app's viability.</li>
            <li><span><b>Design:</b></span>Designers create the layout, user interface (UI), and user experience (UX) to ensure the app is visually appealing and easy to navigate. This phase includes wireframes, mockups, and prototypes.</li>
            <li><span><b>Development:</b></span> The app is coded using programming languages and frameworks depending on the platform. For mobile apps, there are two main categories:</li>
            <li><ul>
              <li><span><p>Native apps:</p></span>Developed specifically for one platform (e.g., Swift for iOS or Kotlin/Java for Android).</li>
              <li><span><p>Cross-platform apps: </p></span>Created for multiple platforms using frameworks like Flutter, React Native, or Xamarin.</li>
              <li><span><p>Web apps: </p></span> Created using web technologies like HTML, CSS, and JavaScript. They are accessed through web browsers rather than being installed.</li>
            </ul></li>
            <li><span><b>Testing:</b></span>The app undergoes rigorous testing to ensure it is free of bugs, glitches, or performance issues. This includes testing functionality, user experience, security, and compatibility across devices.</li>
            <li><span><b>Deployment:</b></span> Once the app is fully developed and tested, it is published to app stores (Google Play Store for Android, Apple App Store for iOS) or made available via web platforms.</li>
            <li><span><b>Maintenance and Updates:</b></span>After launch, developers continuously maintain the app by fixing bugs, releasing updates, and adding new features to meet evolving user needs.</li>
          </ol>
        </div>
        <div className="child4">
        <img src={Img7} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        {/* <img src={Img8} alt="" /> */}
        {/* <img src={Img6} alt="" /> */}
        </div>
      </div>
      {/* Youtube Resource start here */}
      <center><h1 id='develop'>App Development : </h1></center>
      {/* Source part start here... */}
    <div className="container source1">
      <h3>Youtube Source</h3>
      <div className="first">
        <div className="one">
          <center>
      <h4>Java (Native App Development)</h4>
          </center>
      <p>
      Java is a powerful, object-oriented programming language widely used for app development due to its platform independence, allowing applications to run on various operating systems via the Java Virtual Machine (JVM). It is especially popular in Android app development and provides strong performance and scalability. Java's extensive libraries and frameworks, along with an active developer community, make it a reliable choice for both mobile and enterprise-level applications.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eIrMbAQSU34?si=P0FEcPRIMHlYuSQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
     <div className="first">
        <div className="one">
          <center>
      <h4>Kotlin Language (Native App Development)</h4>
          </center>
      <p>
      Kotlin is a modern, statically-typed programming language designed to improve productivity and readability in app development. It is fully interoperable with Java, making it a popular choice for Android development. Kotlin offers concise syntax, reduces boilerplate code, and supports both object-oriented and functional programming. Its safety features, such as null safety, help prevent common programming errors. With official support from Google, Kotlin is increasingly becoming the preferred language for Android apps.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/F9UC9DY-vIU?si=5AIHwg0uHHC0gUP6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! third video start */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Swift (For iOS)</h4>
          </center>
      <p>
      Swift is a powerful, intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It is designed to be fast, safe, and easy to learn, with modern syntax that reduces code complexity. Swift supports both object-oriented and functional programming, offering features like type inference and optionals to prevent errors. Its performance is optimized for Apple hardware, making it the preferred choice for developing Apple ecosystem apps.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/comQ1-x2a1Q?si=VRG0LQOKlpnjN9PB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! third video end */}
      {/* ! fourth video start js */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Objective - c</h4>
          </center>
      <p>
      Objective-C is an object-oriented programming language that was the primary language for developing macOS and iOS applications before Swift. It is an extension of the C language, adding object-oriented capabilities through message passing. Objective-C is known for its dynamic runtime and its ability to integrate seamlessly with Apple's frameworks. While Swift has largely replaced it in modern development, Objective-C is still widely used in maintaining legacy code and certain complex projects.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5esQqZIJ83g?si=H7j6sSIxER33Tovk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! fourth video end js */}
      {/* ! React video start from  here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Flutter (Dart)</h4>
          </center>
      <p>
      Flutter is an open-source UI software development toolkit created by Google, primarily used for building cross-platform mobile, web, and desktop applications from a single codebase. It uses the Dart programming language and provides a rich set of pre-designed widgets that allow developers to create visually attractive and highly performant apps. Flutter's "hot reload" feature enables quick testing and iteration, making it popular for fast, efficient development of apps for Android, iOS, and beyond.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CzRQ9mnmh44?si=18H28L72Ey7P6Igq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! React video end from  here */}
      {/* ! Git start from here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>React Native</h4>
          </center>
      <p>
      React Native is an open-source framework developed by Facebook that allows developers to build cross-platform mobile applications using JavaScript and React. It enables the development of native apps for both iOS and Android using a single codebase, with components that directly map to native platform elements. React Native's "live reload" feature helps developers see changes instantly. Its flexibility, large community, and integration with native modules make it popular for mobile app development.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ANdSdIlgsEw?si=X5ldovYUkPsuhkgr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! Git end from here */}
      <h2>Web App Development :</h2>
      {/* ! Node JS Start from HERE */}
      <div className="first">
        <div className="one">
          <center>
      <h4>JavaScript</h4>
          </center>
      <p>
      JavaScript is a versatile, high-level programming language primarily used for adding interactive elements to websites. Developed by Netscape in 1995, it is now one of the core technologies of the web, alongside HTML and CSS. JavaScript allows developers to create dynamic content that can interact with users, such as animations, form validations, and even complex web applications.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg?si=_6344pCAjGkcZFZi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! Node JS end from HERE */}
      {/* ! express js start from here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Ruby</h4>
          </center>
      <p>
      Ruby is a dynamic, open-source programming language known for its simplicity and productivity. Created by Yukihiro "Matz" Matsumoto in the mid-1990s, Ruby emphasizes readability and flexibility, making it popular for web development. It powers the Ruby on Rails framework, which is used to build dynamic web applications efficiently. Ruby is object-oriented and supports various programming paradigms, making it a versatile choice for developers who value clean, intuitive code.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/t_ispmWmdjY?si=rurW6Vz-91V6QuGB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! express js end from here */}
      {/* ! pyton video start here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>PHP</h4>
          </center>
      <p>
      PHP (Hypertext Preprocessor) is a widely-used open-source scripting language designed for web development. Originally created by Rasmus Lerdorf in 1994, PHP runs on the server side, allowing developers to build dynamic and interactive websites. It is embedded directly into HTML and can handle tasks like form data processing, database interactions, and session management. PHP powers many popular websites and platforms, including WordPress and Facebook, and is known for its simplicity and flexibility in web development.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BUCiSSyIGGU?si=SoGmIeA9jmf4Q1os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! pyton video end here */}
      {/* ! github video start from here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Type Script</h4>
          </center>
      <p>
      TypeScript is a statically typed superset of JavaScript developed by Microsoft in 2012. It adds optional static typing, enhancing JavaScript’s scalability and maintainability, particularly in large codebases. TypeScript compiles down to plain JavaScript, ensuring compatibility with any environment where JavaScript runs. Its main advantage is catching errors early during development, thanks to its type system, leading to more robust code. TypeScript is widely used in modern web development, especially for complex applications, and integrates well with popular frameworks like Angular.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/30LWjhZzg50?si=moFbHaQTVi0SThSb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>

        </div>
      </div>
      {/* ! github video end from here */}
      {/* ! mongodb start here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Go(Golang)</h4>
          </center>
      <p>
      Go, also known as Golang, is an open-source programming language created by Google in 2007. Designed for simplicity, efficiency, and scalability, Go is known for its fast execution and ease of use in building reliable software. It features a clean syntax, garbage collection, and built-in support for concurrent programming, making it ideal for cloud services, networking, and distributed systems. Go is particularly popular for creating web servers, APIs, and microservices due to its high performance and efficient resource management.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YS4e4q9oBaU?si=_jyTDIZhyqXlm3Ib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! mongodb end here */}
      {/* ! Rest Api start here */}
      <div className="first">
        <div className="one">
          <center>
      <h4>Java</h4>
          </center>
      <p>
      Java is a versatile, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in 1995. Known for its "write once, run anywhere" philosophy, Java code is compiled into bytecode, which runs on any platform with the Java Virtual Machine (JVM). Java is widely used for building enterprise-level applications, Android apps, and web services. Its robust libraries, frameworks, and strong security features make it a popular choice for large-scale software development, including cloud computing, big data, and IoT applications.
      </p>
        </div>
        <div className="two">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A74TOX803D0?si=mU8KlFvj6Ezjp4Z6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
        </div>
      </div>
      {/* ! Rest Api end here */}
    </div>
   {/* Source part end here... */}
    </div>
    {/* content 2 end */}
<div className="last">
    {/* <Intenship/> */}
    {/* <Footer/> */}
</div>
    </>
  )
}
export default Appdev;