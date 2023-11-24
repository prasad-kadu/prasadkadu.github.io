import {
  Box,
  Heading,
  SlideFade,
  Grid,
  Text,
  VStack,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu/menu.js";
import Footer from "../Footer/footer.js";
import "../CSS/blog.css";

/**
 * Talks component.
 * @return {ReactElement} the talks component.
 */
export default function Talks() {
  return (
    <>
      <Menu />
      <SlideFade in>
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <Grid templateColumns="1fr">
            <Box as="section">
              <VStack spacing={8} align="left">
                <VStack spacing={2} align="left">
                  <Heading as="h1" size="xl">
                    Projects, Industrial Trainings, Cybersecurtiy Modules and
                    Certifications
                  </Heading>
                  <Text>
                    A thorough look at my projects, industrial trainings,
                    modules and certifications:
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#3B99E1", fontSize: "20px" }}
                  >
                    Exploring the cross-cultural differences in password
                    behaviour, and online security knowledge, perceptions and
                    trust: Evidence from India and the UK - Master&apos;s
                    Dissertation
                  </Text>
                  <Text style={{ color: "#7992B1" }}>
                    Project Scope: Cross-Cultural Independent Research | Domain:
                    Cybersecurity & HCI Studies
                  </Text>
                  <Text>
                    The purpose of this project was to look into the aspects of
                    password management practises and assess users levels of
                    awareness about online security as well as their
                    perceptions. It additionally looked at the impact and
                    awareness of public advice campaigns in altering the
                    behaviour of people from two different countries, India and
                    the UK. The study employed Hofstede&apos;s cultural
                    framework (Individualism, Power Distance, Uncertainty
                    Avoidance) used previously in other literatures. These three
                    dimensions were selected to acquire insights into the larger
                    cultural differences between India and the UK and explore
                    how these variations can influence users approaches to
                    password management.
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#3B99E1", fontSize: "20px" }}
                  >
                    Securing IoT Devices from MITM (Man-In-The-Middle) Attacks
                  </Text>
                  <Text style={{ color: "#7992B1" }}>
                    Project Scope: Independent | Domain: Cybersecurity (IoT
                    Security) | Tech: IoT & Blockchain
                  </Text>
                  <Text>
                    The purpose of this project was to imporve the security of
                    Internet of Things (IoT) devices against Man-in-the-Middle
                    (MITM) attacks. The objective was achieved by designing and
                    implementing a multi-layered security system that integrates
                    TLS/SSL for end-to-end encryption, employs Public Key
                    Infrastructure (PKI) for reliable device-to-server
                    authentication, and ensures a secure boot process to prevent
                    firmware tampering. Additionally, an Intrusion Detection
                    System (IDS) was utilized for real-time monitoring and
                    detection of potential MITM attacks, while blockchain
                    technology was incorporated in certain cases to establish
                    decentralized trust and verification. The outcome was a
                    robust IoT security system, effective in safeguarding
                    devices against MITM threats, accompanied by comprehensive
                    documentation to guide implementation across various IoT
                    platforms.
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#b2f5ea" }}>
                    Key Areas: Network Security, Encryption and Authentication,
                    Intrusion Detection System
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#3B99E1", fontSize: "20px" }}
                  >
                    Real Estate Deals Using Smart Contract: Ethereum Network
                  </Text>
                  <a
                    href="https://www.ijresm.com/Vol.3_2020/Vol3_Iss3_March20/IJRESM_V3_I3_36.pdf"
                    style={{ color: "#7992B1" }}
                  >
                    Paper Published in Journal
                  </a>

                  <Text style={{ color: "#7992B1" }}>
                    Project Scope: Group Research | Domain: Blockchain &
                    Security | Tech: Ethereum
                  </Text>

                  <Text>
                    This project was designed to provide a comprehensive
                    solution to counteract fraud in real estate transactions by
                    employing blockchain technology. The core objective was to
                    utilise the inherent security features of blockchain —
                    decentralized control and cryptographic hashing — to
                    establish an unalterable and tamper-proof ledger for real
                    estate transactions. Utilizing smart contracts, the system
                    autonomously executes agreements upon meeting predefined
                    criteria, thus diminishing the potential for human error or
                    deliberate interference. The implementation of cryptographic
                    algorithms safeguards transaction records on the blockchain,
                    securing them against unauthorized access and alterations.
                    Key technical features of the project include biometric
                    authentication to verify user identities and mitigate
                    identity theft risks. This authentication, combined with
                    digital signatures, reinforces the transaction authorization
                    process. The project also adopts a permissioned blockchain
                    model, restricting access to vetted users only. This model
                    addresses compliance with privacy regulations and minimizes
                    cybersecurity vulnerabilities. Moreover, the web portal
                    adheres to secure coding practices, conducts regular audits,
                    and employs HTTPS protocols to ensure secure data
                    transmission, thereby maintaining data integrity and
                    confidentiality in real estate transactions.
                  </Text>
                  <Text>
                    Outcome Achieved: The project successfully implemented a
                    secure, blockchain-based platform for real estate
                    transactions. The purpose of this project was to imporve the
                    security of Internet of Things (IoT) devices against
                    Man-in-the-Middle (MITM) attacks.
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#b2f5ea" }}>
                    Key Areas: Data Integrity and Confidentiality, Secure
                    Transaction Ledger, Compliance Security and Measures
                  </Text>
                </Box>

                {/** Training */}
                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#ff7974", fontSize: "20px" }}
                  >
                    Industrial Training Programs
                  </Text>
                  <Text style={{ color: "#7992B1" }}>
                    Acquiring Hands-on Expertise and Skill Development
                  </Text>
                  <Text>
                    <UnorderedList>
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Security Analyst Program for Security Awareness -
                        Mastercard
                      </ListItem>
                      <Text>
                        In the Mastercard Cybersecurity Program focused on
                        Security Awareness, I engaged in hands-on activities as
                        a Security Analyst, particularly addressing phishing
                        threats. My primary tasks included designing realistic
                        phishing emails to understand and evaluate the
                        effectiveness of Mastercard&apos;s security protocols
                        among employees. This involved a deep dive into various
                        phishing attack vectors and their potential impacts on
                        the organizational infrastructure. Additionally, I
                        conducted a detailed quantitative analysis of the
                        phishing campaign&apos;s results, identifying
                        susceptibility patterns across different departments.
                        Leveraging this data, I developed tailored security
                        training modules aimed at enhancing employees skills in
                        identifying and mitigating cyber threats. This
                        experience significantly improved my understanding of
                        cyber defense strategies and the importance of human
                        factors in cybersecurity, equipping me with practical
                        skills in threat simulation and response in a constantly
                        evolving cyber threat landscape.
                      </Text>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** Space*/}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Information Security Analyst Program - Telstra
                      </ListItem>
                      <Text>
                        In the cybersecurity program I participated in at
                        Telstra, I assumed the role of an Information Security
                        Analyst working under Security Operations Centre, tasked
                        with swiftly responding to various cybersecurity
                        threats. My key responsibilities included triaging and
                        assessing the severity of incoming malware attacks,
                        particularly targeting the Spring Framework, analyzing
                        firewall logs to identify the Spring4Shell attack
                        pattern, and developing Python-based firewall rules to
                        mitigate zero-day vulnerabilities. Additionally, I was
                        responsible for effective communication with team leads
                        and compiling comprehensive incident reports, including
                        root cause analysis and resolution steps. This
                        experience honed my skills in rapid threat response,
                        detailed analysis, and proactive strategy development in
                        the dynamic field of internet security.
                      </Text>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** Space*/}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Java Developer - Software Development Institute
                      </ListItem>
                      <Text>
                        During training, I have acquired a deep understanding of
                        key concepts and techniques vital for sophisticated
                        programming. My skills in Java include a strong grasp of
                        Object-Oriented Programming principles such as
                        abstraction, encapsulation, inheritance, and
                        polymorphism, as well as expertise in Java constructs
                        like loops, data types, string manipulation, and the
                        collection framework. I am proficient in method
                        overloading and overriding, interface and abstract class
                        design, exception handling, package structuring, and
                        effectively managing multithreading in Java
                        applications. In SQL, my capabilities extend to advanced
                        techniques like Common Table Expressions (CTEs), data
                        pivoting, and nuanced date-time manipulation, equipping
                        me with the tools to handle complex data operations with
                        precision and efficiency.
                      </Text>
                    </UnorderedList>
                  </Text>
                </Box>

                {/* Modules */}
                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#fe9cff", fontSize: "20px" }}
                  >
                    Cybersecurity Core Modules Covered During MSc
                  </Text>
                  <Text style={{ color: "#7992B1" }}>
                    Examined Diverse Aspects of Cybersecurity
                  </Text>
                  <Text>
                    <OrderedList>
                      {/** CTAP */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Cryptography Theory & Applications
                      </ListItem>
                      <Text>
                        I learned about securing data using cryptographic
                        methods and protocols. Moreover, explored cryptanalysis
                        to identify and improve system security. I also gained
                        knowledge about attack vulnerabilities, algorithm
                        weaknesses, and secure cryptography design concepts in
                        ethical and legal approach.
                      </Text>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** ITRA */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Identity, Trust, Reputation & Their Applications
                      </ListItem>
                      <Text>
                        I gained in-depth knowledge of authentication
                        mechanisms, anonymity challenges, and their implications
                        for system security and user privacy. My proficiency in
                        identifying and mitigating threats further developed
                        through the implementation of Intrusion Detection
                        Systems (IDS) and Intrusion Prevention Systems (IPS),
                        complemented by robust network security practices. This
                        expertise further extends to conducting comprehensive
                        risk assessments, strategically designing and deploying
                        firewall configurations, and utilizing advanced
                        encryption technologies to protect sensitive data
                        against cyber-attacks and security breaches.
                      </Text>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** MALF */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Malware & Other Malfeasance
                      </ListItem>
                      <Text>
                        By studying this module, I acquired an extensive
                        understanding of malware&apos;s impact on networked
                        systems, its operational interactions, and effective
                        detection methodologies. My focus was on identifying,
                        analyzing, and understanding the threats from various
                        malware types to system security. Insights into current
                        malware attacks sophistication which have enhanced my
                        threat evaluation skills. Additionally, I became
                        experienced in identifying software vulnerabilities and
                        various types of malware detection techniques.
                      </Text>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** CSRS */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Cyber Security Research Skills
                      </ListItem>
                      <Text>
                        The module provided me comprehensive understanding of UK
                        cybercrime and privacy regulations, including NIST and
                        ISO standards. Additionally, I gained understanding
                        about UK Data Protection Regulations, including the Data
                        Protection Act (DPA) and UK General Data Protection
                        Regulation (UK GDPR), imparting knowledge of fundamental
                        principles and rights.
                      </Text>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** NTAC */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Network and Communications Security: Threats, Attacks &
                        Countermeasures
                      </ListItem>
                      <Text>
                        This module provided a comprehensive foundation in cyber
                        security. It covered the basics, including the
                        cyberattack lifecycle, network threat assumptions, and
                        the CIA Triad. I explored various threat models, attack
                        types, ISO 27001:2005 standards, and TCP/IP protocol
                        vulnerabilities, such as ARP Poisoning and SYN Scanning.
                        Practical skills in packet analysis with Wireshark were
                        developed. The module also addressed key security
                        components like routers, firewalls, VPNs, and intrusion
                        detection systems, emphasizing the importance of
                        logging. Additionally, it covered challenges in wireless
                        network security, including MAC spoofing and
                        man-in-the-middle attacks
                      </Text>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** FACI */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Forensic Analysis of Cyber Incidents
                      </ListItem>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** RISS */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Rigour in Secure System Development & Assessment
                      </ListItem>
                      {/* Spacer */}
                      <div style={{ height: "10px" }}></div>{" "}
                      {/* This div acts as a spacer */}
                      {/** WASP */}
                      <ListItem
                        style={{ fontWeight: "bold", color: "#7dd8eb" }}
                      >
                        Wider Aspects of Cybersecurity
                      </ListItem>
                    </OrderedList>
                  </Text>
                </Box>

                {/** Certifications */}
                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#FF824B", fontSize: "20px" }}
                  >
                    Industry-Recognized Certifications
                  </Text>
                  <Text style={{ color: "#7992B1" }}>
                    Technical Development
                  </Text>
                  <Text>
                    <UnorderedList>
                      <ListItem>Cybersecurity Fundamentals - IBM</ListItem>
                      <ListItem>
                        Core Java & SQL - Software Development Institute
                      </ListItem>
                      <ListItem>
                        Certified SAFe 5 Practitioner - Agile, Inc
                      </ListItem>
                      <ListItem>Cloud Practitioner Essentials - AWS</ListItem>
                      <ListItem>
                        IOT Foundations - Command & Control, Telemetry - AWS
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
}
