import React from "react";
import { Box, Heading, SlideFade, Grid, Text, VStack } from "@chakra-ui/react";
import Menu from "../Menu/menu.js";
import Footer from "../Footer/footer.js";

/**
 * Blog component that displays educational background.
 * @return {JSX.Element} A React component with education details.
 */
export default function Blog() {
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
                    Education
                  </Heading>
                  <Text>Below is a summary of my academic background</Text>
                </VStack>

                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#3B99E1", fontSize: "20px" }}
                  >
                    Masters of Science Degree in Cybersecurity
                  </Text>
                  <Text style={{ color: "#7992B1" }}>
                    University of York, UK | 2022-2023
                  </Text>
                  <Text>
                    Successfully completed masters with{" "}
                    <span style={{ fontWeight: "bold" }}>Merit</span> (69%) -
                    2:1
                  </Text>
                  <Text>
                    Throughout my master&apos;s program, I studied nine
                    cybersecurity modules which covered the various aspects of
                    cybersecurity, including both theoretical and practical
                    components.
                  </Text>
                  <Text>
                    {" "}
                    I gained a lot of knowledge and skills in this field. I
                    learned the core concepts and techniques of cybersecurity,
                    such as information security governance, risk and
                    compliance, program creation and management, incident
                    response and business continuity, and leadership,
                    collaboration and communication. I also learned how to
                    design, implement, and evaluate secure and resilient systems
                    that can protect data and information from cyber threats.
                  </Text>
                  <Text>
                    Cyber Security Research Project (i.e. Dissertation), I
                    achieved distinction with 73%, the research compared
                    password management practices between India and the UK,
                    uncovering cultural influences on trust and security
                    perceptions. The research led to developing culturally
                    tailored password strategies and identifying knowledge gaps,
                    addressed through Public Advice Campaigns for Secure
                    Password Use. The study also combined a survey of 72
                    participants with interviews of 8 individuals, examining
                    password habits, trust in security, and the impact of advice
                    campaigns on security behaviors.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontWeight="bold"
                    style={{ color: "#3B99E1", fontSize: "20px" }}
                  >
                    Bachelor of Engineering in Information Technology
                  </Text>
                  <Text style={{ color: "#7992B1" }}>
                    Vidyalankar Institute of Technology, India | 2017-2020
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Achieved First Class Honour&apos;s.
                  </Text>
                  <Text>
                    During my 3 years of engineering, I learned the core
                    concepts and skills of information technology and its
                    applications. I also gained knowledge of various topics such
                    as database management systems, Java programming,
                    information security, algorithm analysis, computer
                    networking, ERP, e-commerce, cloud computing, software
                    engineering and many other operating systems-related items.
                    I also developed the ability to design, implement, and
                    evaluate secure and resilient systems that can protect data
                    and information from cyber threats.
                  </Text>
                  <Text>
                    Final Year Research Project was based on blockchain
                    technology to enhance the security of real estate
                    transactions and minimize fraud. The project involved a
                    secure and unalterable transaction log, while smart
                    contracts automate agreements, mitigating errors and
                    tampering. Advanced algorithms safeguard transaction data,
                    and biometric authentication verifies the identities of
                    parties involved. Access to the blockchain is restricted for
                    additional security, and stringent web protocols ensure the
                    project&apos;s robustness in protecting real estate
                    dealings.
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
