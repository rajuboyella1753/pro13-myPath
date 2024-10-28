import React from 'react'
import '../two-css/hacking.css'
import Img2 from '../images/hacking9.avif'
import Img1 from '../images/hacking12.avif'
import Img3 from '../images/hacking1.avif'
import Img4 from '../images/hacking2.avif'
import Img5 from '../images/hacking3.avif'
import Img6 from '../images/hacking5.avif'
import Intenship from './intenship'
import About from './about'
import Footer from './footer'
export default function ehicalHacking() {
  return (
    <>
    <div className='main'>
      <img src={Img1} alt="" />
    </div>
    <div className="content1">
        <h2><marquee>Cyber Security</marquee></h2>
        {/* <img src={Img2} alt="" /> */}
    </div>
    {/*// ! 0 Container */}
    <div className="description">
      <h3>Description : </h3>
        <p>Ethical hacking involves authorized attempts to penetrate computer systems, networks, or software to identify security vulnerabilities. Ethical hackers, also known as white-hat hackers, use the same techniques as malicious hackers but with permission and legal approval. Their goal is to strengthen security by finding weaknesses before cybercriminals can exploit them. Ethical hacking plays a critical role in cybersecurity, helping organizations protect sensitive data, improve system defenses, and ensure compliance with legal and industry standards.
        Ethical hacking is the practice of legally testing systems for vulnerabilities to enhance security. It helps organizations prevent cyberattacks by identifying weaknesses before malicious hackers can exploit them.
        </p>
    </div>
    {/* //! First Container start */}
    <h2 id='types'>Types of Hacking  !</h2>
    <div className="container2">
      {/* // ! White Hat Hacking */}
      <h3 id='head'><b>White Hat Hacking</b></h3>
      <img src={Img2} alt="" className='oneImg'/>
      <p><i class="fa-regular fa-star"></i> White hat hacking, also known as ethical hacking, refers to the practice of intentionally probing systems, networks, or applications to identify vulnerabilities or security weaknesses in order to improve their security. Unlike malicious hackers (often called black hat hackers), white hat hackers have permission from the system owner to perform these activities and use their skills for legal and beneficial purposes.</p>
      <h5><b>Key Points About White Hat Hacking:</b></h5>
      <ol>
        <li>
      <i><span>Purpose:</span>  The goal of white hat hacking is to find and fix security vulnerabilities before they can be exploited by malicious actors. They help organizations strengthen their security defenses and protect sensitive data.</i>
        </li>
        <li>
          <i><span> Penetration Testing:</span> One of the main activities white hat hackers perform is penetration testing (pen testing), where they simulate attacks on a system to discover weaknesses that might otherwise be overlooked.</i>
        </li>
        <li>
          <i><span>Authorization:</span>  Ethical hackers always have authorization to test the security of a system. This distinguishes them from black hats, who break into systems without permission.</i>
        </li>
        <li>
          <i><span> Techniques Used:</span> White hat hackers use many of the same tools and techniques as malicious hackers, such as exploiting software bugs, cracking passwords, or network sniffing. The difference is that they do it ethically, with the aim of identifying and reporting vulnerabilities.</i>
        </li>
        <li>
          <i><span> Certifications:</span> Many white hat hackers earn certifications like Certified Ethical Hacker (CEH), Offensive Security Certified Professional (OSCP), or CompTIA PenTest+ to demonstrate their knowledge and skills in ethical hacking.</i>
        </li>
        <li>
          <i><span> Bug Bounty Programs:</span> Some companies run bug bounty programs, where they reward white hat hackers for finding and reporting security vulnerabilities in their systems. Major tech companies like Google, Facebook, and Apple have such programs.</i>
        </li>
        <li>
          <i><span> Legal and Ethical Boundaries:</span> White hat hackers must adhere to strict legal and ethical guidelines. They should only test systems where they have permission and should never exploit vulnerabilities they find for personal gain.</i>
        </li>
      </ol>
      <hr />
      {/* // ! Black Hat Hacking */}
      <h3 id='head'>Black Hat Hacking</h3>
      <img src={Img3} alt="" className='twoImg'/>
      <h5><b>Key Points About Black Hat Hacking:</b></h5>
      <ul>
        <li>
          <i><span>Malicious Intent:</span> Black hat hackers break into systems without permission to steal data, cause damage, or disrupt operations.</i>
        </li>
        <li>
          <i><span>Illegal Activities:</span>Their actions are unlawful and can lead to legal consequences such as imprisonment or fines.</i>
        </li>
        <li>
          <i><span>Common Motives:</span>Financial gain, personal revenge, or simply causing chaos are typical motivations for black hat hacking.</i>
        </li>
        <li>
          <i><span>Techniques Used: </span>They use various methods like malware, phishing, exploiting software vulnerabilities, and ransomware attacks.</i>
        </li>
        <li>
          <i><span>Data Theft and Exploitation: </span>Black hat hackers often steal sensitive data, such as credit card numbers, personal identities, or proprietary business information, to sell on the dark web.</i>
        </li>
        <li><i><span>Ransomware:</span></i> Some black hats use ransomware to encrypt a victim's data</li>
      </ul>
      <hr />
      {/* // ! Grey Hat Hacking */}
    <h3 id='head'>Grey Hat Hacking :</h3>
    <img src={Img4} alt="" className='oneImg'/>
    <h5><b>Key Points About Grey Hat Hacking:</b></h5>
    <ol>
      <li>
        <i><span>Unauthorized Access: </span>Grey hat hackers often access systems without permission but do not have malicious intent like black hats.</i>
      </li>
      <li>
        <i><span>Ethical Ambiguity:</span>While they aim to report or fix vulnerabilities, grey hats don’t always follow proper legal or ethical channels, leading to a blurry line between right and wrong.</i>
      </li>
      <li>
        <i><span>Public Disclosure: </span>Some grey hats publicly disclose the vulnerabilities they find, often pressuring organizations to take action. This can sometimes put the system at further risk if not handled carefully.</i>
      </li>
      <li>
        <i><span>No Malicious Motives: </span>Unlike black hat hackers, grey hats do not exploit the vulnerabilities for personal gain or harm but instead aim to improve security.</i>
      </li>
      <li>
        <i><span>Legal Risks:</span> Even though they may have good intentions, grey hat hacking is still illegal because it involves unauthorized access to systems or data.</i>
      </li>
    </ol>
    <hr />
    {/* // ! Phishing  */}
    <h3 id="head">Phishing</h3>
    <img src={Img5} alt="" className='twoImg'/>
    <h5><b>Key Points About Phishing:</b></h5>
    <ul>
      <li><i><span>Deceptive Emails or Messages: </span></i>Phishing often involves sending fake emails or messages that seem to come from trusted sources, such as banks, social media platforms, or other reputable companies.</li>
      <li>
        <i><span>Personal Information Theft:</span>The goal of phishing is to trick individuals into providing sensitive information like passwords, credit card details, or Social Security numbers.</i>
      </li>
      <li>
        <i><span>Spoofed Websites: </span> Phishing attacks often direct users to fake websites that look identical to real ones, prompting them to enter personal information that is then stolen.</i>
      </li>
      <li>
        <i><span>Malware Delivery: </span>Some phishing attacks include malicious attachments or links that, when clicked, install malware onto the victim's device, allowing attackers to gain further access or control.</i>
      </li>
      <li>
        <i><span>Social Engineering: </span> Phishing relies heavily on social engineering tactics, manipulating people's trust, fear, or urgency to trick them into taking action without thinking carefully.</i>
      </li>
    </ul>
    <hr />
    {/* // ! Malware Hacking  */}
    <h3 id="head">Malware Hacking </h3>
    <h5><b>Key Points About Malware Hacking:</b></h5>
    <img src={Img6} alt="" className='oneImg'/>
    <ol>
      <li>
        <i><span>Malicious Software (Malware):</span> Malware refers to any software intentionally designed to cause harm, including viruses, ransomware, spyware, and trojans.</i>
      </li>
      <li>
        <i><span>Methods of Infection:</span> Malware can spread through email attachments, malicious links, compromised websites, infected downloads, or network vulnerabilities.</i>
      </li>
      <li>
        <i><span>Data Theft and System Control: </span>Once malware infiltrates a system, it can steal sensitive data (such as passwords or financial information) or allow hackers to remotely control the affected devices or networks.</i>
      </li>
      <li>
        <i><span>Ransomware Attacks: </span>These have become particularly prevalent, where attackers lock down systems or encrypt files, demanding a ransom for their release. Businesses, hospitals, and even governments have been targeted.</i>
      </li>
      <li>
        <i><span>Botnets: </span>Hackers may use malware to create botnets, a network of infected devices (called "zombies") that they control remotely to perform large-scale attacks, such as Distributed Denial-of-Service (DDoS) attacks.</i>
      </li>
    </ol>
    </div>
    {/* //! First Container end */}
    <h2 className='you'>Youtube Resource :</h2>
    {/* // ? Youtube Resource start */}
    {/* // ! first video */}
    <div className="container3">
      <div className="child1">
      <h5>White Hat Hackers :</h5>
        <p>White Hat Hacker, also known as ethical hackers, are cybersecurity professionals who specialize in identifying and fixing security vulnerabilities in computer systems, networks, and software. Unlike malicious hackers, they operate with the permission of the system owner and follow legal and ethical guidelines. Their primary goal is to strengthen security by simulating attacks to find weaknesses before malicious hackers can exploit them. .</p>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JKOIRnVTjNM?si=gv2ORK9XOoJSnED3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
    {/* // ! first video */}
    {/* // ? second video */}
    <div className="container4">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iU3YRKQnb6s?si=iP-6zgUbVyLgjbSh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>White Hat Hackers :</h5>
        <p>
        Black hat hacking refers to illegal hacking activities where individuals break into systems, networks, or devices without permission to steal data, cause damage, or disrupt operations. Motivated by personal gain, revenge, or malicious intent, black hat hackers exploit vulnerabilities using techniques like malware, phishing, and ransomware. Their actions are criminal and can result in severe legal consequences, posing significant threats to organizations, individuals.
          </p>
      </div>
    </div>
    {/* // ! second video */}
{/* // ? Gray hat hacker  start*/}
<div className="container3">
      <div className="child1">
      <h5>Gray Hat Hackers :</h5>
        <p>
        A gray hat hacker operates in a legal and ethical gray area, hacking systems without permission but without malicious intent. Unlike black hats, they don’t exploit vulnerabilities for personal gain, and unlike white hats, they lack authorization. Gray hats often find and report vulnerabilities to system owners, sometimes publicizing them, but their actions are still illegal since they access systems without proper consent.
          </p>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9K8Xn0y5CU4?si=ZXo4DUx2dTxVVoob" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
{/* // ! Gray hat hacker end */}

{/* //? Linux start*/}
<div className="container4">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lZAoFs75_cs?si=tOfhbt5cgDZm3fkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>Linux Operating System :</h5>
        <p>
        Linux is an open-source, Unix-like operating system that serves as the foundation for a wide range of devices, from personal computers to servers and mobile devices. Known for its stability, security, and flexibility, Linux is highly customizable and allows users to modify its source code to suit their needs. It's widely used in server environments, cloud computing, and software development. Popular Linux distributions include Ubuntu, Fedora, and CentOS. Linux is favored by developers and cybersecurity professionals.
          </p>
      </div>
    </div>
{/* //? Linux end*/}

{/* // ! penetration start */}
<div className="container3">
      <div className="child1">
      <h5>Penetration Testing :</h5>
      <p>
      Penetration testing, often called **pen testing**, is a cybersecurity practice where authorized professionals simulate cyberattacks on a system, network, or application to identify vulnerabilities. The goal is to assess the system's security by attempting to exploit weaknesses, much like a real attacker would. Pen testers use various techniques, such as exploiting software bugs or misconfigurations, to discover flaws. The results help organizations fix security gaps before malicious hackers can exploit them. Pen testing is crucial.
      </p>
      </div>
      <div className="child2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3Kq1MIfTWCE?si=brw4cEmuDYSL-JIh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
    </div>
    <hr />
{/* // ! penetration end */}
    <h1 className='language'>Languages for Hacking :</h1>
    {/* // ! python start */}
     <div className="container5">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw?si=2MWeKmNyUXnIsVdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>Python Language:</h5>
        <p>
        Python is a high-level, versatile programming language known for its simplicity and readability. Its easy-to-learn syntax and extensive libraries make it popular for various applications, including web development, data science, automation, artificial intelligence, and machine learning. Python supports multiple programming paradigms such as object-oriented, procedural, and functional programming. It is widely used in both beginner and professional settings due to its flexibility and powerful capabilities, with frameworks like Django, Flask, and tools for scientific computing like NumPy and Pandas.
          </p>
      </div>
    </div>
    {/* // ! python end */}
     {/* // ! python start */}
     <div className="container6">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0?si=3ZrCxkm1zlyihqGG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>C Language:</h5>
        <p>
        C is a powerful, low-level programming language that is widely regarded for its efficiency and control over system resources. Developed in the early 1970s, C is often used in system programming, embedded systems, operating systems, and software that requires direct interaction with hardware, like drivers and kernels. Its syntax forms the foundation for many modern programming languages, such as C++, Java, and Python. Known for its speed and performance, C is ideal for applications where resource management is critical.
          </p>
      </div>
    </div>
    {/* // ! python end */}
    {/* //? Javascript start*/}
    <div className="container5">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IC5vBKc21X8?si=LMiCXfMaR2Irz0lU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>Javascript Language:</h5>
        <p>
        JavaScript is a versatile, high-level programming language used primarily for web development. It enables dynamic, interactive content on websites, running directly in the browser without needing a server. Originally created in 1995, it has evolved with modern features like ES6 and frameworks such as React and Node.js. JavaScript's flexibility allows it to be used for front-end, back-end, mobile, and desktop applications, making it a key tool for developers.
          </p>
      </div>
    </div>
    {/* //! Javascript end*/}
    {/* // ? My Sql start */}
    <div className="container6">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hlGoQC332VM?si=4TyIrw3OUMxRGAm3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>SQL:</h5>
        <p>
        SQL (Structured Query Language) is a domain-specific language used to manage and manipulate relational databases. It allows users to create, read, update, and delete data (CRUD operations) using queries. SQL is essential for tasks like retrieving specific data from large datasets, managing database schemas, and ensuring data integrity. Popular database systems like MySQL, PostgreSQL, and SQL Server use SQL. It is widely used in web applications, data analysis, and enterprise systems.
          </p>
      </div>
    </div>
    {/* // ? My Sql end */}
    {/* //! Bash Start */}
    <div className="container5">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tK9Oc6AEnR4?si=NUPRSgB3FBAfOquk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>Bash:</h5>
        <p>
        Bash (Bourne Again Shell) is a command-line interpreter and scripting language commonly used in Unix-based systems like Linux and macOS. It allows users to interact with the operating system by executing commands, managing files, and automating tasks. Bash scripts can perform repetitive tasks, handle system operations, and manage server environments. It supports features like variables, loops, and conditionals, making it powerful for system administrators and developers in automating workflows and handling system processes efficiently.
          </p>
      </div>
    </div>
    {/* //! Bash end */}
    {/* //? Ruby Language start */}
    <div className="container6">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1k-ZtjbU6gI?si=i1zTPWlDS3nBwqAr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>Ruby:</h5>
        <p>
        Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity. Created in the mid-1990s by Yukihiro "Matz" Matsumoto, Ruby emphasizes human-readable code and ease of use. It’s known for its elegant syntax, which allows developers to write clean, concise code. Ruby powers the popular web framework Ruby on Rails, which streamlines web development by offering conventions and tools. Ruby is used for web applications, scripting, automation, and data processing.
          </p>
      </div>
    </div>
    {/* //? Ruby Language end */}
    {/* // ! Ruby language start */}
    <div className="container5">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OK_JCtrrv-c?si=M7MptxcDK1zQlqaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>PHP:</h5>
        <p>
        PHP (Hypertext Preprocessor) is a widely-used, open-source scripting language designed for web development. Created in 1994 by Rasmus Lerdorf, PHP is embedded within HTML to create dynamic web pages and server-side applications. It is known for its simplicity, speed, and flexibility in handling tasks like database integration, form processing, and session management. Popular content management systems like WordPress and Drupal are built with PHP, making it a crucial tool for web developers.
          </p>
      </div>
    </div>
    {/* // ! Ruby language end */}
    {/* // ? Assembly Language start*/}
    <div className="container6">
      <div className="child1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gfmRrPjnEw4?si=04yGmMv0ZKI1MYUt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='html' allowfullscreen></iframe>
      </div>
      <div className="child2">
      <h5>Assembly:</h5>
        <p>
        Assembly language is a low-level programming language that provides a direct interface to a computer's hardware. It translates machine code, which consists of binary instructions, into human-readable mnemonics. Each assembly instruction corresponds to a specific operation, like moving data or performing arithmetic. Assembly is specific to a computer's architecture (such as x86 or ARM) and is used when performance and hardware control are critical. Though harder to learn, it allows precise control over the CPU and memory.
          </p>
      </div>
    </div>
    {/* // ? Assembly Language end */}
    {/* // ? Youtube Resource end */}
    {/* <Intenship/>
    <About/>
    <Footer/> */}
    </>
  )
}
