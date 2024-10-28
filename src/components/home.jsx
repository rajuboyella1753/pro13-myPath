import React from 'react'
import '../machine/home.css'
import Img1 from '../images/machine9.jpg'
import Img2 from '../images/machine8.jpg'
import Img3 from '../images/machine1.jpg'
import Img4 from '../images/machine3.jpg'
import Img5 from '../images/machine5.jpg'
import Intenship from './intenship'
import About from '../components/about'
import Footer from '../components/footer'
export default function home() {
  return (
    <>
    <div className="main">
      <img src={Img1} alt="" />
    </div>
    <div className="conten">
      <h1><marquee>Machine Learning</marquee></h1>
    </div>
    <div className="conten1">
      <button><a href="#">Learn More</a></button>
      <button><a href="#">Get Course</a></button>
    </div>
    {/* // ! first container start */}
    <div className="container1">
      <h1 id='intro'>Introduction About Machine Learning</h1>
      <b>Machine Learning :</b>
      <img src={Img2} alt="" />
      <p>Machine learning (ML) is a subfield of artificial intelligence (AI) that enables computers to learn from data and make decisions or predictions without being explicitly programmed. It revolves around creating algorithms that improve over time as they are exposed to more data. There are different types of machine learning: in **supervised learning**, the model is trained on labeled data, where the correct answers are provided, allowing it to make predictions on new data. **Unsupervised learning** involves discovering patterns in data without labeled outcomes, while **reinforcement learning** allows models to learn by interacting with an environment and receiving rewards or penalties for actions. Popular machine learning algorithms include **linear regression**, used for predicting continuous variables, **decision trees**, which make decisions by splitting data into branches, and **neural networks**, which mimic the human brain to solve more complex tasks like image recognition or language understanding. Machine learning is highly data-driven, and its performance improves with the quality and quantity of data used.</p>
    </div>
    <hr />
    {/* // ? first container end */}
    {/* // ! Types start here */}
    <h1 id='types'>Types in Machine Learning</h1>
    <div className="container7">
      <h5><p><span> Machine learning :</span> <br /> <br />Machine Learning is generally categorized into three main types based on the nature of the learning process and the type of data provided. These types are:</p></h5>
   <h2>1. Supervised Learning</h2>
   <img src={Img3} alt=""  className='img1'/>
   <p>In supervised learning, the model is trained on a labeled dataset, which means the input data is paired with the correct output. The algorithm learns to map inputs to the desired output by comparing its predictions with the actual results. The goal is to predict outcomes for new, unseen data.</p>
   <ul>
    <li>Examples: Linear regression, decision trees, support vector machines (SVM), and neural networks.</li>
    <li>Use cases: Spam detection, image classification, and predicting house prices.</li>
   </ul>
   <h2 id='two'>2. Unsupervised Learning</h2>
   <img src={Img4} alt="" className='img2'/>
   <p>Unsupervised learning works with data that has no labels or predefined outcomes. The algorithm tries to identify patterns, relationships, or structure within the data on its own. This type is used for clustering, association, and dimensionality reduction tasks.</p>
   <ul>
    <li>Examples: K-means clustering, hierarchical clustering, principal component analysis (PCA).</li>
    <li>Use cases: Market segmentation, customer profiling, and recommendation systems.</li>
   </ul>
   <h2>3. Reinforcement Learning</h2>
    {/* <img src={Img5} alt="" className='img3'/> */}
   <p id='par'>Reinforcement learning is an area of machine learning where an agent learns by interacting with an environment, making decisions, and receiving feedback in the form of rewards or penalties. The agent's goal is to maximize cumulative rewards over time.</p>
   <ul>
    <li>Examples: Q-learning, deep reinforcement learning.</li>
    <li>Use cases: Game playing (like AlphaGo), robotic control, and autonomous vehicles.</li>
   </ul>
    </div>
    <hr />
    {/* // ! Types  end here */}
    {/* //? Languages source start */}
    <h1 id='types'>Languages for Machine Learning </h1>
    <div className="parent1">
      <div className="child1">
        <h3>1. Python Language : </h3>
        <p>
        Python is the most popular language for machine learning because of its simplicity, readability, and rich ecosystem of libraries and frameworks. It has powerful libraries like:
          </p>
            <ul>
              <li>NumPy and Pandas: For data manipulation and analysis.</li>
              <li>Scikit-learn: For implementing common ML algorithms.</li>
              <li>TensorFlow and PyTorch: For deep learning and neural networks.</li>
              <li>Matplotlib and Seaborn: For data visualization.</li>
            </ul>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DInMru2Eq6E?si=CFX1a_svMhyNtAnH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
    {/* // ! second language */}
    <div className="parent1">
      <div className="child1">
        <h3>2. R Language : </h3>
        <p>
        R is a language primarily used for statistical computing and data analysis. It is favored by statisticians and data scientists for tasks involving data visualization, statistical modeling, and exploratory data analysis. Popular ML libraries include:
          </p>
          <ul>
            <li>caret: For building and evaluating machine learning models.</li>
            <li>randomForest: For decision trees and ensemble learning.</li>
            <li>nnet: For neural networks.</li>
          </ul>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_V8eKsto3Ug?si=s-Pur4t-cVxWcM2q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
{/* // //! third language */}
 <div className="parent1">
      <div className="child1">
        <h3>3. Java Language : </h3>
        <p>
        Java is used in large-scale, enterprise-level applications and for integrating machine learning models into production environments. It has libraries like:
          </p>
          <ul>
            <li>Weka: A suite of machine learning tools for data mining.</li>
            <li>Deeplearning4j: A deep learning library that supports neural networks.</li>
          </ul>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/grEKMHGYyns?si=34xGt5HG5Igh9fy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
    {/* // ! fourth language */}
    <div className="parent1">
      <div className="child1">
        <h3>4. C++ Language : </h3>
        <p>
        C++ is known for its speed and efficiency, making it suitable for implementing performance-intensive machine learning algorithms. It is often used in systems requiring real-time processing, like robotics or gaming. Libraries like dlib provide support for ML tasks in C++.
          </p>
          <ul>
           <li>Performance and Efficiency: C++ is known for its high performance and control over hardware resources, making it suitable for implementing machine learning algorithms that require fast computation, such as neural networks and real-time systems.</li>
          </ul>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8jLOx1hD3_o?si=8nES3ciEcUzQofbD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
{/* // ! Fifth langugage */}
<div className="parent1">
      <div className="child1">
        <h3>4. Julia Language : </h3>
        <p>
        Julia is a high-performance language increasingly used in numerical and scientific computing. Its ability to handle large datasets efficiently makes it a good option for machine learning, especially in research and development.
          </p>
          <ul>
            <li>Flux.jl: A machine learning library for building models in Julia.
            </li>
          </ul>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lZskxdMpYfE?si=JMv4PeE7Yd5AH5lM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
{/* // ! six language */}
<div className="parent1">
      <div className="child1">
        <h3>4. MATLAB Language : </h3>
        <p>
        MATLAB is used in academic and research settings for numerical computing, data analysis, and algorithm development. It is equipped with built-in machine learning tools for model training, classification, and regression.
          </p>
          <ul>
            <li>Flux.jl: A machine learning library for building models in Julia.
            </li>
          </ul>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7f50sQYjNRA?si=1leFeIWZNas-Y0tC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
    {/* //! Languages source start */}

{/* <Intenship/>
<About/>
<Footer/> */}










    </>
  )
}
