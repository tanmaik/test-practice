const questions = [
  {
    question_number: 1,
    question:
      " Physical assets defined in an organization's business impact analysis (BIA) could include which of the following?",
    choices: [
      "A. Personal belongings of organizational staff members",
      "B. Disaster recovery (DR) line-item revenues",
      "C. Cloud-based applications",
      "D. Supplies kept off-site a remote facility",
    ],
  },
  {
    question_number: 2,
    question:
      " When assessing the audit capability of an application, which of the following activities is MOST important?",
    choices: [
      "A. Identify procedures to investigate suspicious activity.",
      "B. Determine if audit records contain sufficient information.",
      "C. Verify if sufficient storage is allocated for audit records.",
      "D. Review security plan for actions to be taken in the event of audit failure.",
    ],
  },
  {
    question_number: 3,
    question:
      " An organization would like to implement an authorization mechanism that would simplify the assignment of various system access permissions for many users with similar job responsibilities. Which type of authorization mechanism would be the BEST choice for the organization to implement?",
    choices: [
      "A. Role-based access control (RBAC)",
      "B. Discretionary access control (DAC)",
      "C. Content-dependent Access Control",
      "D. Rule-based Access Control",
    ],
  },
  {
    question_number: 4,
    question:
      " What is the PRIMARY reason for criminal law being difficult to enforce when dealing with cybercrime?",
    choices: [
      "A. Jurisdiction is hard to define.",
      "B. Law enforcement agencies are understaffed.",
      "C. Extradition treaties are rarely enforced.",
      "D. Numerous language barriers exist.",
    ],
  },
  {
    question_number: 5,
    question:
      " Wi-Fi Protected Access 2 (WPA2) provides users with a higher level of assurance that their data will remain protected by using which protocol?",
    choices: [
      "A. Extensible Authentication Protocol (EAP)",
      "B. Internet Protocol Security (IPsec)",
      "C. Secure Sockets Layer (SSL)",
      "D. Secure Shell (SSH)",
    ],
  },
  {
    question_number: 6,
    question:
      " Which part of an operating system (OS) is responsible for providing security interfaces among the hardware, OS, and other parts of the computing system?",
    choices: [
      "A. Reference monitor",
      "B. Trusted Computing Base (TCB)",
      "C. Time separation",
      "D. Security kernel",
    ],
  },
  {
    question_number: 7,
    question:
      " What process facilitates the balance of operational and economic costs of protective measures with gains in mission capability?",
    choices: [
      "A. Performance testing",
      "B. Risk assessment",
      "C. Security audit",
      "D. Risk management",
    ],
  },
  {
    question_number: 8,
    question:
      " Clothing retailer employees are provisioned with user accounts that provide access to resources at partner businesses. All partner businesses use common identity and access management (IAM) protocols and differing technologies. Under the Extended Identity principle, what is the process flow between partner businesses to allow this IAM action? that act as a Service Provider and allows access to services. businesses that act as a Service Provider and allows access to services. that act as an identity provider (IdP) and allows access to resources. businesses that act as a Service Provider and allows access to resources.",
    choices: [
      "A. Clothing retailer acts as User Self Service, confirms identity of user using industry standards, then sends credentials to partner businesses",
      "B. Clothing retailer acts as identity provider (IdP), confirms identity of user using industry standards, then sends credentials to partner",
      "C. Clothing retailer acts as Service Provider, confirms identity of user using industry standards, then sends credentials to partner businesses",
      "D. Clothing retailer acts as Access Control Provider, confirms access of user using industry standards, then sends credentials to partner",
    ],
  },
  {
    question_number: 9,
    question:
      " Which of the following statements BEST describes least privilege principle in a cloud environment?",
    choices: [
      "A. A single cloud administrator is configured to access core functions.",
      "B. Internet traffic is inspected for all incoming and outgoing packets.",
      "C. Routing configurations are regularly updated with the latest routes.",
      "D. Network segments remain private if unneeded to access the internet.",
    ],
  },
  {
    question_number: 10,
    question:
      " An organization has been collecting a large amount of redundant and unusable data and filling up the storage area network (SAN). Management has requested the identification of a solution that will address ongoing storage problems. Which is the BEST technical solution?",
    choices: [
      "A. Compression",
      "B. Caching",
      "C. Replication",
      "D. Deduplication",
    ],
  },
  {
    question_number: 11,
    question:
      " Which Wide Area Network (WAN) technology requires the first router in the path to determine the full path the packet will travel, removing the need for other routers in the path to make independent determinations?",
    choices: [
      "A. Synchronous Optical Networking (SONET)",
      "B. Multiprotocol Label Switching (MPLS)",
      "C. Fiber Channel Over Ethernet (FCoE)",
      "D. Session Initiation Protocol (SIP)",
    ],
  },
  {
    question_number: 12,
    question:
      " Which of the following would an information security professional use to recognize changes to content, particularly unauthorized changes?",
    choices: [
      "A. File Integrity Checker",
      "B. Security information and event management (SIEM) system",
      "C. Audit Logs",
      "D. Intrusion detection system (IDS)",
    ],
  },
  {
    question_number: 13,
    question: " Which of the following is included in change management?",
    choices: [
      "A. Technical review by business owner",
      "B. User Acceptance Testing (UAT) before implementation",
      "C. Cost-benefit analysis (CBA) after implementation",
      "D. Business continuity testing",
    ],
  },
  {
    question_number: 14,
    question:
      " A company is enrolled in a hard drive reuse program where decommissioned equipment is sold back to the vendor when it is no longer needed. The vendor pays more money for functioning drives than equipment that is no longer operational. Which method of data sanitization would provide the most secure means of preventing unauthorized data loss, while also receiving the most money from the vendor?",
    choices: [
      "A. Pinning",
      "B. Single-pass wipe",
      "C. Multi-pass wipes",
      "D. Degaussing",
    ],
  },
  {
    question_number: 15,
    question:
      " When reviewing vendor certifications for handling and processing of company data, which of the following is the BEST Service Organization Controls (SOC) certification for the vendor to possess?",
    choices: [
      "A. SOC 1 Type 1",
      "B. SOC 2 Type 1",
      "C. SOC 2 Type 2",
      "D. SOC 3",
    ],
  },
  {
    question_number: 16,
    question:
      " Which application type is considered high risk and provides a common way for malware and viruses to enter a network?",
    choices: [
      "A. Instant messaging or chat applications",
      "B. Peer-to-Peer (P2P) file sharing applications",
      "C. E-mail applications",
      "D. End-to-end applications",
    ],
  },
  {
    question_number: 17,
    question:
      " An organization is looking to include mobile devices in its asset management system for better tracking. In which system tier of the reference architecture would mobile devices be tracked?",
    choices: ["A. 0", "B. 1", "C. 2", "D. 3"],
  },
  {
    question_number: 18,
    question:
      " Which of the following is the BEST way to protect an organization's data assets?",
    choices: [
      "A. Encrypt data in transit and at rest using up-to-date cryptographic algorithms.",
      "B. Monitor and enforce adherence to security policies.",
      "C. Require Multi-Factor Authentication (MFA) and Separation of Duties (SoD).",
      "D. Create the Demilitarized Zone (DMZ) with proxies, firewalls and hardened bastion hosts.",
    ],
  },
  {
    question_number: 19,
    question:
      " Within a large organization, what business unit is BEST positioned to initiate provisioning and deprovisioning of user accounts?",
    choices: [
      "A. Training department",
      "B. Internal audit",
      "C. Human resources",
      "D. Information technology (IT)",
    ],
  },
  {
    question_number: 20,
    question:
      " Which of the following is the PRIMARY purpose of installing a mantrap within a facility?",
    choices: [
      "A. Control traffic",
      "B. Control air flow",
      "C. Prevent piggybacking",
      "D. Prevent rapid movement",
    ],
  },
  {
    question_number: 21,
    question:
      ' In the "Do" phase of the Plan-Do-Check-Act model, which of the following is performed? review. determine and authorize actions for remediation and improvement. have been established.',
    choices: [
      "A. Maintain and improve the Business Continuity Management (BCM) system by taking corrective action, based on the results of management",
      "B. Monitor and review performance against business continuity policy and objectives, report the results to management for review, and",
      "C. Ensure the business continuity policy, controls, processes, and procedures have been implemented.",
      "D. Ensure that business continuity policy, objectives, targets, controls, processes and procedures relevant to improving business continuity",
    ],
  },
  {
    question_number: 22,
    question:
      " What industry-recognized document could be used as a baseline reference that is related to data security and business operations or conducting a security assessment?",
    choices: [
      "A. Service Organization Control (SOC) 1 Type 2",
      "B. Service Organization Control (SOC) 1 Type 1",
      "C. Service Organization Control (SOC) 2 Type 2",
      "D. Service Organization Control (SOC) 2 Type 1",
    ],
  },
  {
    question_number: 23,
    question:
      " A criminal organization is planning an attack on a government network. Which of the following scenarios presents the HIGHEST risk to the organization?",
    choices: [
      "A. Organization loses control of their network devices.",
      "B. Network is flooded with communication traffic by the attacker.",
      "C. Network management communications is disrupted.",
      "D. Attacker accesses sensitive information regarding the network topology.",
    ],
  },
  {
    question_number: 24,
    question:
      " Which reporting type requires a service organization to describe its system and define its control objectives and controls that are relevant to users' internal control over financial reporting?",
    choices: [
      "A. Statement on Auditing Standards (SAS) 70",
      "B. Service Organization Control 1 (SOC1)",
      "C. Service Organization Control 2 (SOC2)",
      "D. Service Organization Control 3 (SOC3)",
    ],
  },
  {
    question_number: 25,
    question:
      " Which of the following is the BEST method to validate secure coding techniques against injection and overflow attacks?",
    choices: [
      "A. Scheduled team review of coding style and techniques for vulnerability patterns",
      "B. The regular use of production code routines from similar applications already in use",
      "C. Using automated programs to test for the latest known vulnerability patterns",
      "D. Ensure code editing tools are updated against known vulnerability patterns",
    ],
  },
  {
    question_number: 26,
    question:
      " When resolving ethical conflicts, the information security professional MUST consider many factors. In what order should the considerations be prioritized?",
    choices: [
      "A. Public safety, duties to individuals, duties to the profession, and duties to principals",
      "B. Public safety, duties to principals, duties to the profession, and duties to individuals",
      "C. Public safety, duties to principals, duties to individuals, and duties to the profession",
      "D. Public safety, duties to the profession, duties to principals, and duties to individuals",
    ],
  },
  {
    question_number: 27,
    question:
      " Which service management process BEST helps information technology (IT) organizations with reducing cost, mitigating risk, and improving customer service?",
    choices: [
      "A. Kanban",
      "B. Lean Six Sigma",
      "C. Information Technology Service Management (ITSM)",
      "D. Information Technology Infrastructure Library (ITIL)",
    ],
  },
  {
    question_number: 28,
    question:
      " A company is attempting to enhance the security of its user authentication processes. After evaluating several options, the company has decided to utilize Identity as a Service (IDaaS). Which of the following factors leads the company to choose an IDaaS as their solution?",
    choices: [
      "A. In-house team lacks resources to support an on-premise solution.",
      "B. Third-party solutions are inherently more secure.",
      "C. Third-party solutions are known for transferring the risk to the vendor.",
      "D. In-house development provides more control.",
    ],
  },
  {
    question_number: 29,
    question:
      " An organization recently suffered from a web-application attack that resulted in stolen user session cookie information. The attacker was able to obtain the information when a user's browser executed a script upon visiting a compromised website. What type of attack MOST likely occurred?",
    choices: [
      "A. SQL injection (SQLi)",
      "B. Extensible Markup Language (XML) external entities",
      "C. Cross-Site Scripting (XSS)",
      "D. Cross-Site Request Forgery (CSRF)",
    ],
  },
  {
    question_number: 30,
    question:
      " An attack utilizing social engineering and a malicious Uniform Resource Locator (URL) link to take advantage of a victim's existing browser session with a web application is an example of which of the following types of attack?",
    choices: [
      "A. Clickjacking",
      "B. Cross-site request forgery (CSRF)",
      "C. Cross-Site Scripting (XSS)",
      "D. Injection",
    ],
  },
  {
    question_number: 31,
    question:
      " Which of the following encryption technologies has the ability to function as a stream cipher?",
    choices: [
      "A. Cipher Block Chaining (CBC) with error propagation",
      "B. Electronic Code Book (ECB)",
      "C. Cipher Feedback (CFB)",
      "D. Feistel cipher",
    ],
  },
  {
    question_number: 32,
    question:
      " In a disaster recovery (DR) test, which of the following would be a trait of crisis management?",
    choices: ["A. Process", "B. Anticipate", "C. Strategic", "D. Wide focus"],
  },
  {
    question_number: 33,
    question:
      " Which of the following BEST describes the purpose of the reference monitor when defining access control to enforce the security model?",
    choices: [
      "A. Strong operational security to keep unit members safe",
      "B. Policies to validate organization rules",
      "C. Cyber hygiene to ensure organizations can keep systems healthy",
      "D. Quality design principles to ensure quality by design",
    ],
  },
  {
    question_number: 34,
    question: " Which of the following is security control volatility?",
    choices: [
      "A. A reference to the impact of the security control.",
      "B. A reference to the likelihood of change in the security control.",
      "C. A reference to how unpredictable the security control is.",
      "D. A reference to the stability of the security control.",
    ],
  },
  {
    question_number: 35,
    question:
      " When auditing the Software Development Life Cycle (SDLC) which of the following is one of the high-level audit phases?",
    choices: [
      "A. Planning",
      "B. Risk assessment",
      "C. Due diligence",
      "D. Requirements",
    ],
  },
  {
    question_number: 36,
    question:
      " What is the term used to define where data is geographically stored in the cloud?",
    choices: [
      "A. Data privacy rights",
      "B. Data sovereignty",
      "C. Data warehouse",
      "D. Data subject rights",
    ],
  },
  {
    question_number: 37,
    question:
      " Which of the following does the security design process ensure within the System Development Life Cycle (SDLC)?",
    choices: [
      "A. Proper security controls, security objectives, and security goals are properly initiated.",
      "B. Security objectives, security goals, and system test are properly conducted.",
      "C. Proper security controls, security goals, and fault mitigation are properly conducted.",
      "D. Security goals, proper security controls, and validation are properly initiated.",
    ],
  },
  {
    question_number: 38,
    question:
      " Which of the following is MOST important to follow when developing information security controls for an organization?",
    choices: [
      "A. Use industry standard best practices for security controls in the organization.",
      "B. Exercise due diligence with regard to all risk management information to tailor appropriate controls.",
      "C. Review all local and international standards and choose the most stringent based on location.",
      "D. Perform a risk assessment and choose a standard that addresses existing gaps.",
    ],
  },
  {
    question_number: 39,
    question:
      " When recovering from an outage, what is the Recovery Point Objective (RPO), in terms of data recovery?",
    choices: [
      "A. The RPO is the minimum amount of data that needs to be recovered.",
      "B. The RPO is the amount of time it takes to recover an acceptable percentage of data lost.",
      "C. The RPO is a goal to recover a targeted percentage of data lost.",
      "D. The RPO is the maximum amount of time for which loss of data is acceptable.",
    ],
  },
  {
    question_number: 40,
    question:
      " Which of the following attacks, if successful, could give an intruder complete control of a software-defined networking (SDN) architecture?",
    choices: [
      "A. A brute force password attack on the Secure Shell (SSH) port of the controller",
      "B. Sending control messages to open a flow that does not pass a firewall from a compromised host within the network",
      "C. Remote Authentication Dial-In User Service (RADIUS) token replay attack",
      "D. Sniffing the traffic of a compromised host inside the network",
    ],
  },
  {
    question_number: 41,
    question:
      " Which of the following is the BEST option to reduce the network attack surface of a system?",
    choices: [
      "A. Disabling unnecessary ports and services",
      "B. Ensuring that there are no group accounts on the system",
      "C. Uninstalling default software on the system",
      "D. Removing unnecessary system user accounts",
    ],
  },
  {
    question_number: 42,
    question:
      " The security architect is designing and implementing an internal certification authority to generate digital certificates for all employees. Which of the following is the BEST solution to securely store the private keys?",
    choices: [
      "A. Physically secured storage device",
      "B. Trusted Platform Module (TPM)",
      "C. Encrypted flash drive",
      "D. Public key infrastructure (PKI)",
    ],
  },
  {
    question_number: 43,
    question:
      " The existence of physical barriers, card and personal identification number (PIN) access systems, cameras, alarms, and security guards BEST describes this security approach?",
    choices: [
      "A. Access control",
      "B. Security information and event management (SIEM)",
      "C. Defense-in-depth",
      "D. Security perimeter",
    ],
  },
  {
    question_number: 44,
    question:
      " A hospital enforces the Code of Fair Information Practices. What practice applies to a patient requesting their medical records from a web portal?",
    choices: [
      "A. Purpose specification",
      "B. Collection limitation",
      "C. Use limitation",
      "D. Individual participation",
    ],
  },
  {
    question_number: 45,
    question:
      " A colleague who recently left the organization asked a security professional for a copy of the organization's confidential incident management policy. Which of the following is the BEST response to this request?",
    choices: [
      "A. Access the policy on a company-issued device and let the former colleague view the screen.",
      "B. E-mail the policy to the colleague as they were already part of the organization and familiar with it.",
      "C. Do not acknowledge receiving the request from the former colleague and ignore them.",
      "D. Submit the request using company official channels to ensure the policy is okay to distribute.",
    ],
  },
  {
    question_number: 46,
    question:
      " Which of the following BEST describes when an organization should conduct a black box security audit on a new software protect?",
    choices: [
      "A. When the organization wishes to check for non-functional compliance",
      "B. When the organization wants to enumerate known security vulnerabilities across their infrastructure",
      "C. When the organization is confident the final source code is complete",
      "D. When the organization has experienced a security incident",
    ],
  },
  {
    question_number: 47,
    question:
      " In software development, which of the following entities normally signs the code to protect the code integrity?",
    choices: [
      "A. The organization developing the code",
      "B. The quality control group",
      "C. The developer",
      "D. The data owner",
    ],
  },
  {
    question_number: 48,
    question:
      " Which of the following technologies can be used to monitor and dynamically respond to potential threats on web applications?",
    choices: [
      "A. Field-level tokenization",
      "B. Web application vulnerability scanners",
      "C. Runtime application self-protection (RASP)",
      "D. Security Assertion Markup Language (SAML)",
    ],
  },
  {
    question_number: 49,
    question:
      " A security architect is developing an information system for a client. One of the requirements is to deliver a platform that mitigates against common vulnerabilities and attacks. What is the MOST efficient option used to prevent buffer overflow attacks?",
    choices: [
      "A. Access control mechanisms",
      "B. Process isolation",
      "C. Address Space Layout Randomization (ASLR)",
      "D. Processor states",
    ],
  },
  {
    question_number: 50,
    question:
      " In a quarterly system access review, an active privileged account was discovered that did not exist in the prior review on the production system. The account was created one hour after the previous access review. Which of the following is the BEST option to reduce overall risk in addition to quarterly access reviews?",
    choices: [
      "A. Implement bi-annual reviews.",
      "B. Create policies for system access.",
      "C. Implement and review risk-based alerts.",
      "D. Increase logging levels.",
    ],
  },
  {
    question_number: 51,
    question:
      " A corporation does not have a formal data destruction policy. During which phase of a criminal legal proceeding will this have the MOST impact?",
    choices: ["A. Sentencing", "B. Trial", "C. Discovery", "D. Arraignment"],
  },
  {
    question_number: 52,
    question:
      " What is considered the BEST explanation when determining whether to provide remote network access to a third-party security service?",
    choices: [
      "A. Contract negotiation",
      "B. Supplier request",
      "C. Business need",
      "D. Vendor demonstration",
    ],
  },
  {
    question_number: 53,
    question:
      " The acquisition of personal data being obtained by a lawful and fair means is an example of what principle?",
    choices: [
      "A. Collection Limitation Principle",
      "B. Openness Principle",
      "C. Purpose Specification Principle",
      "D. Data Quality Principle",
    ],
  },
  {
    question_number: 54,
    question:
      " Which of the following is the MOST appropriate control for asset data labeling procedures?",
    choices: [
      "A. Categorizing the types of media being used",
      "B. Logging data media to provide a physical inventory control",
      "C. Reviewing off-site storage access controls",
      "D. Reviewing audit trails of logging records",
    ],
  },
  {
    question_number: 55,
    question:
      " What is the BEST approach to anonymizing personally identifiable information (PII) in a test environment?",
    choices: [
      "A. Swapping data",
      "B. Randomizing data",
      "C. Encoding data",
      "D. Encrypting data",
    ],
  },
  {
    question_number: 56,
    question:
      " Which of the following departments initiates the request, approval, and provisioning business process?",
    choices: [
      "A. Operations",
      "B. Security",
      "C. Human resources (HR)",
      "D. Information technology (IT)",
    ],
  },
  {
    question_number: 57,
    question:
      " An organization is setting a security assessment scope with the goal of developing a Security Management Program (SMP). The next step is to select an approach for conducting the risk assessment. Which of the following approaches is MOST effective for the SMP?",
    choices: [
      "A. Security controls driven assessment that focuses on controls management",
      "B. Business processes based risk assessment with a focus on business goals",
      "C. Asset driven risk assessment with a focus on the assets",
      "D. Data driven risk assessment with a focus on data",
    ],
  },
  {
    question_number: 58,
    question:
      " Which technique helps system designers consider potential security concerns of their systems and applications?",
    choices: [
      "A. Threat modeling",
      "B. Manual inspections and reviews",
      "C. Source code review",
      "D. Penetration testing",
    ],
  },
  {
    question_number: 59,
    question:
      " A security professional can BEST mitigate the risk of using a Commercial Off-The-Shelf (COTS) solution by deploying the application with which of the following controls in place?",
    choices: [
      "A. Network segmentation",
      "B. Blacklisting application",
      "C. Whitelisting application",
      "D. Hardened configuration",
    ],
  },
  {
    question_number: 60,
    question:
      " Which of the following BEST describes centralized identity management?",
    choices: [
      "A. Service providers perform as both the credential and identity provider (IdP).",
      "B. Service providers identify an entity by behavior analysis versus an identification factor.",
      "C. Service providers agree to integrate identity system recognition across organizational boundaries.",
      "D. Service providers rely on a trusted third party (TTP) to provide requestors with both credentials and identifiers.",
    ],
  },
  {
    question_number: 61,
    question:
      " What is the MOST significant benefit of role-based access control (RBAC)?",
    choices: [
      "A. Reduces inappropriate access",
      "B. Management of least privilege",
      "C. Most granular form of access control",
      "D. Reduction in authorization administration overhead",
    ],
  },
  {
    question_number: 62,
    question: " What is the MOST common security risk of a mobile device?",
    choices: [
      "A. Data spoofing",
      "B. Malware infection",
      "C. Insecure communications link",
      "D. Data leakage",
    ],
  },
  {
    question_number: 63,
    question:
      " What level of Redundant Array of Independent Disks (RAID) is configured PRIMARILY for high-performance data reads and writes?",
    choices: ["A. RAID-0", "B. RAID-1", "C. RAID-5", "D. RAID-6"],
  },
  {
    question_number: 64,
    question:
      " What type of risk is related to the sequences of value-adding and managerial activities undertaken in an organization?",
    choices: [
      "A. Control risk",
      "B. Demand risk",
      "C. Supply risk",
      "D. Process risk",
    ],
  },
  {
    question_number: 65,
    question:
      " International bodies established a regulatory scheme that defines how weapons are exchanged between the signatories. It also addresses cyber weapons, including malicious software, Command and Control (C2) software, and internet surveillance software. This is a description of which of the following?",
    choices: [
      "A. International Traffic in Arms Regulations (ITAR)",
      "B. Palermo convention",
      "C. Wassenaar arrangement",
      "D. General Data Protection Regulation (GDPR)",
    ],
  },
  {
    question_number: 66,
    question:
      " An organization has implemented a protection strategy to secure the network from unauthorized external access. The new Chief Information Security Officer (CISO) wants to increase security by better protecting the network from unauthorized internal access. Which Network Access Control (NAC) capability BEST meets this objective?",
    choices: [
      "A. Port security",
      "B. Two-factor authentication (2FA)",
      "C. Strong passwords",
      "D. Application firewall",
    ],
  },
  {
    question_number: 67,
    question:
      " Which section of the assessment report addresses separate vulnerabilities, weaknesses, and gaps?",
    choices: [
      "A. Findings definition section",
      "B. Risk review section",
      "C. Executive summary with full details",
      "D. Key findings section",
    ],
  },
  {
    question_number: 68,
    question:
      " Why is data classification control important to an organization?",
    choices: [
      "A. To enable data discovery",
      "B. To ensure security controls align with organizational risk appetite",
      "C. To ensure its integrity, confidentiality and availability",
      "D. To control data retention in alignment with organizational policies and regulation",
    ],
  },
  {
    question_number: 69,
    question:
      " To monitor the security of buried data lines inside the perimeter of a facility, which of the following is the MOST effective control?",
    choices: [
      "A. Fencing around the facility with closed-circuit television (CCTV) cameras at all entry points",
      "B. Ground sensors installed and reporting to a security event management (SEM) system",
      "C. Regular sweeps of the perimeter, including manual inspection of the cable ingress points",
      "D. Steel casing around the facility ingress points",
    ],
  },
  {
    question_number: 70,
    question:
      " An enterprise is developing a baseline cybersecurity standard its suppliers must meet before being awarded a contract. Which of the following statements is TRUE about the baseline cybersecurity standard?",
    choices: [
      "A. It should be expressed as general requirements.",
      "B. It should be expressed as technical requirements.",
      "C. It should be expressed in business terminology.",
      "D. It should be expressed in legal terminology.",
    ],
  },
  {
    question_number: 71,
    question:
      " Which access control method is based on users issuing access requests on system resources, features assigned to those resources, the operational or situational context, and a set of policies specified in terms of those features and context?",
    choices: [
      "A. Mandatory Access Control (MAC)",
      "B. Attribute Based Access Control (ABAC)",
      "C. Role Based Access Control (RBAC)",
      "D. Discretionary Access Control (DAC)",
    ],
  },
  {
    question_number: 72,
    question:
      " What is a security concern when considering implementing software-defined networking (SDN)?",
    choices: [
      "A. It has a decentralized architecture.",
      "B. It increases the attack footprint.",
      "C. It uses open source protocols.",
      "D. It is cloud based.",
    ],
  },
  {
    question_number: 73,
    question:
      " What is the BEST way to restrict access to a file system on computing systems?",
    choices: [
      "A. Use least privilege at each level to restrict access.",
      "B. Restrict access to all users.",
      "C. Allow a user group to restrict access.",
      "D. Use a third-party tool to restrict access.",
    ],
  },
  {
    question_number: 74,
    question:
      " Which of the following is the PRIMARY reason for selecting the appropriate level of detail for audit record generation?",
    choices: [
      "A. Avoid lengthy audit reports",
      "B. Enable generation of corrective action reports",
      "C. Facilitate a root cause analysis (RCA)",
      "D. Lower costs throughout the System Development Life Cycle (SDLC)",
    ],
  },
  {
    question_number: 75,
    question:
      " What is the correct order of execution for security architecture?",
    choices: [
      "A. Governance, strategy and program management, operations, project delivery",
      "B. Governance, strategy and program management, project delivery, operations",
      "C. Strategy and program management, project delivery, governance, operations",
      "D. Strategy and program management, governance, project delivery, operations",
    ],
  },
  {
    question_number: 76,
    question:
      " An international organization has decided to use a Software as a Service (SaaS) solution to support its business operations. Which of the following compliance standards should the organization use to assess the international code security and data privacy of the solution?",
    choices: [
      "A. Service Organization Control (SOC) 2",
      "B. Information Assurance Technical Framework (IATF)",
      "C. Health Insurance Portability and Accountability Act (HIPAA)",
      "D. Payment Card Industry (PCI)",
    ],
  },
  {
    question_number: 77,
    question:
      " An authentication system that uses challenge and response was recently implemented on an organization's network, because the organization conducted an annual penetration test showing that testers were able to move laterally using authenticated credentials. Which attack method was MOST likely used to achieve this?",
    choices: [
      "A. Hash collision",
      "B. Pass the ticket",
      "C. Brute force",
      "D. Cross-Site Scripting (XSS)",
    ],
  },
  {
    question_number: 78,
    question:
      ' Which of the following would qualify as an exception to the "right to be forgotten" of the General Data Protection Regulation (GDPR)?',
    choices: [
      "A. For the establishment, exercise, or defense of legal claims",
      "B. The personal data has been lawfully processed and collected",
      "C. For the reasons of private interest",
      "D. The personal data remains necessary to the purpose for which it was collected",
    ],
  },
  {
    question_number: 79,
    question:
      " Dumpster diving is a technique used in which stage of penetration testing methodology?",
    choices: ["A. Attack", "B. Reporting", "C. Planning", "D. Discovery"],
  },
  {
    question_number: 80,
    question:
      " Which of the following is performed to determine a measure of success of a security awareness training program designed to prevent social engineering attacks?",
    choices: [
      "A. Employee evaluation of the training program",
      "B. Internal assessment of the training program's effectiveness",
      "C. Multiple choice tests to participants",
      "D. Management control of reviews",
    ],
  },
  {
    question_number: 81,
    question:
      " The security team is notified that a device on the network is infected with malware. Which of the following is MOST effective in enabling the device to be quickly located and remediated?",
    choices: [
      "A. Data loss protection (DLP)",
      "B. Intrusion detection",
      "C. Vulnerability scanner",
      "D. Information Technology Asset Management (ITAM)",
    ],
  },
  {
    question_number: 82,
    question:
      " Which of the following threats would be MOST likely mitigated by monitoring assets containing open source libraries for vulnerabilities?",
    choices: [
      "A. Distributed denial-of-service (DDoS) attack",
      "B. Advanced persistent threat (APT) attempt",
      "C. Zero-day attack",
      "D. Phishing attempt",
    ],
  },
  {
    question_number: 83,
    question:
      " As a design principle, which one of the following actors is responsible for identifying and approving data security requirement in a cloud ecosystem?",
    choices: [
      "A. Cloud auditor",
      "B. Cloud broker",
      "C. Cloud provider",
      "D. Cloud consumer",
    ],
  },
  {
    question_number: 84,
    question:
      " Which of the following is the MOST effective way to ensure the endpoint devices used by remote users are compliant with an organization's approved policies before being allowed on the network?",
    choices: [
      "A. Network Access Control (NAC)",
      "B. Privileged Access Management (PAM)",
      "C. Group Policy Object (GPO)",
      "D. Mobile Device Management (MDM)",
    ],
  },
  {
    question_number: 85,
    question:
      " Which one of the following BEST protects vendor accounts that are used for emergency maintenance?",
    choices: [
      "A. Vendor access should be disabled until needed",
      "B. Frequent monitoring of vendor access",
      "C. Role-based access control (RBAC)",
      "D. Encryption of routing tables",
    ],
  },
  {
    question_number: 86,
    question:
      " Which event magnitude is defined as deadly, destructive, and disruptive when a hazard interacts with human vulnerability?",
    choices: ["A. Crisis", "B. Catastrophe", "C. Accident", "D. Disaster"],
  },
  {
    question_number: 87,
    question:
      " Which of the following BEST describes the purpose of software forensics?",
    choices: [
      "A. To analyze possible malicious intent of malware",
      "B. To perform cyclic redundancy check (CRC) verification and detect changed applications",
      "C. To determine the author and behavior of the code",
      "D. To review program code to determine the existence of backdoors",
    ],
  },
  {
    question_number: 88,
    question:
      " A web developer is completing a new web application security checklist before releasing the application to production. The task of disabling unnecessary services is on the checklist. Which web application threat is being mitigated by this action?",
    choices: [
      "A. Session hijacking",
      "B. Security misconfiguration",
      "C. Broken access control",
      "D. Sensitive data exposure",
    ],
  },
  {
    question_number: 89,
    question:
      " What is the BEST method to use for assessing the security impact of acquired software?",
    choices: [
      "A. Threat modeling",
      "B. Common vulnerability review",
      "C. Software security compliance validation",
      "D. Vendor assessment",
    ],
  },
  {
    question_number: 90,
    question:
      " Which of the following ensures old log data is not overwritten?",
    choices: [
      "A. Log retention",
      "B. Implement Syslog",
      "C. Increase log file size",
      "D. Log preservation",
    ],
  },
  {
    question_number: 91,
    question:
      " Under the General Data Protection Regulation (GDPR), what is the maximum amount of time allowed for reporting a personal data breach?",
    choices: ["A. 24 hours", "B. 48 hours", "C. 72 hours", "D. 96 hours"],
  },
  {
    question_number: 92,
    question:
      " A financial organization that works according to agile principles has developed a new application for their external customer base to request a line of credit. A security analyst has been asked to assess the security risk of the minimum viable product (MVP). Which is the MOST important activity the analyst should assess?",
    choices: [
      "A. The software has been signed off for release by the product owner.",
      "B. The software had been branded according to corporate standards.",
      "C. The software has the correct functionality.",
      "D. The software has been code reviewed.",
    ],
  },
  {
    question_number: 93,
    question:
      " An application developer receives a report back from the security team showing their automated tools were able to successfully enter unexpected data into the organization's customer service portal, causing the site to crash. This is an example of which type of testing?",
    choices: [
      "A. Performance",
      "B. Positive",
      "C. Non-functional",
      "D. Negative",
    ],
  },
  {
    question_number: 94,
    question:
      " Which of the following is the MOST effective strategy to prevent an attacker from disabling a network?",
    choices: [
      "A. Design networks with the ability to adapt, reconfigure, and fail over.",
      "B. Test business continuity and disaster recovery (DR) plans.",
      "C. Follow security guidelines to prevent unauthorized network access.",
      "D. Implement network segmentation to achieve robustness.",
    ],
  },
  {
    question_number: 95,
    question:
      " What is the FIRST step that should be considered in a Data Loss Prevention (DLP) program?",
    choices: [
      "A. Policy creation",
      "B. Information Rights Management (IRM)",
      "C. Data classification",
      "D. Configuration management (CM)",
    ],
  },
  {
    question_number: 96,
    question:
      " Which change management role is responsible for the overall success of the project and supporting the change throughout the organization?",
    choices: [
      "A. Change driver",
      "B. Project manager",
      "C. Program sponsor",
      "D. Change implementer",
    ],
  },
  {
    question_number: 97,
    question:
      " A company needs to provide shared access of sensitive data on a cloud storage to external business partners. Which of the following identity models is the BEST to blind identity providers (IdP) and relying parties (RP) so that subscriber lists of other parties are not disclosed?",
    choices: [
      "A. Proxied federation",
      "B. Dynamic registration",
      "C. Federation authorities",
      "D. Static registration",
    ],
  },
  {
    question_number: 98,
    question:
      " A security professional needs to find a secure and efficient method of encrypting data on an endpoint. Which solution includes a root key?",
    choices: [
      "A. Bitlocker",
      "B. Trusted Platform Module (TPM)",
      "C. Virtual storage array network (VSAN)",
      "D. Hardware security module (HSM)",
    ],
  },
  {
    question_number: 99,
    question:
      " Which combination of cryptographic algorithms are compliant with Federal Information Processing Standard (FIPS) Publication 140-2 for nonlegacy systems? Digital Signature Algorithm (DSA) (>=2048 bits) Rivest-Shamir-Adleman (RSA) (1024 bits) Elliptic Curve Digital Signature Algorithm (ECDSA) (>=256 bits)",
    choices: [
      "A. Diffie-hellman (DH) key exchange: DH (>=2048 bits) Symmetric Key: Advanced Encryption Standard (AES) > 128 bits Digital Signature:",
      "B. Diffie-hellman (DH) key exchange: DH (>=2048 bits) Symmetric Key: Advanced Encryption Standard (AES) > 128 bits Digital Signature:",
      "C. Diffie-hellman (DH) key exchange: DH (<=1024 bits) Symmetric Key: Blowfish Digital Signature: Rivest-Shamir-Adleman (RSA) (>=2048 bits)",
      "D. Diffie-hellman (DH) key exchange: DH (>=2048 bits) Symmetric Key: Advanced Encryption Standard (AES) < 128 bits Digital Signature:",
    ],
  },
  {
    question_number: 100,
    question:
      " What is the PRIMARY purpose of creating and reporting metrics for a security awareness, training, and education program?",
    choices: [
      "A. Measure the effect of the program on the organization's workforce.",
      "B. Make all stakeholders aware of the program's progress.",
      "C. Facilitate supervision of periodic training events.",
      "D. Comply with legal regulations and document due diligence in security practices.",
    ],
  },
  {
    question_number: 101,
    question:
      " In a DevOps environment, which of the following actions is MOST necessary to have confidence in the quality of the changes being made?",
    choices: [
      "A. Prepare to take corrective actions quickly.",
      "B. Automate functionality testing.",
      "C. Review logs for any anomalies.",
      "D. Receive approval from the change review board.",
    ],
  },
  {
    question_number: 102,
    question: " What is the MAIN purpose of a security assessment plan?",
    choices: [
      "A. Provide education to employees on security and privacy, to ensure their awareness on policies and procedures.",
      "B. Provide the objectives for the security and privacy control assessments and a detailed roadmap of how to conduct such assessments.",
      "C. Provide guidance on security requirements, to ensure the identified security risks are properly addressed based on the recommendation.",
      "D. Provide technical information to executives to help them understand information security postures and secure funding.",
    ],
  },
  {
    question_number: 103,
    question:
      " What documentation is produced FIRST when performing an effective physical loss control process?",
    choices: [
      "A. Deterrent controls list",
      "B. Security standards list",
      "C. Asset valuation list",
      "D. Inventory list",
    ],
  },
  {
    question_number: 104,
    question:
      " Which organizational department is ultimately responsible for information governance related to e-mail and other e-records?",
    choices: ["A. Legal", "B. Audit", "C. Compliance", "D. Security"],
  },
  {
    question_number: 105,
    question:
      " A cloud service provider requires its customer organizations to enable maximum audit logging for its data storage service and to retain the logs for the period of three months. The audit logging gene has extremely high amount of logs. What is the MOST appropriate strategy for the log retention?",
    choices: [
      "A. Keep all logs in an online storage.",
      "B. Keep last week's logs in an online storage and the rest in an offline storage.",
      "C. Keep last week's logs in an online storage and the rest in a near-line storage.",
      "D. Keep all logs in an offline storage.",
    ],
  },
  {
    question_number: 106,
    question:
      " In Federated Identity Management (FIM), which of the following represents the concept of federation?",
    choices: [
      "A. Collection, maintenance, and deactivation of user objects and attributes in one or more systems, directories or applications",
      "B. Collection of information logically grouped into a single entity",
      "C. Collection of information for common identities in a system",
      "D. Collection of domains that have established trust among themselves",
    ],
  },
  {
    question_number: 107,
    question:
      " Which of the following is an indicator that a company's new user security awareness training module has been effective?",
    choices: [
      "A. There are more secure connections to internal e-mail servers.",
      "B. More incidents of phishing attempts are being reported.",
      "C. Fewer incidents of phishing attempts are being reported.",
      "D. There are more secure connections to the internal database servers.",
    ],
  },
  {
    question_number: 108,
    question:
      " An organization is trying to secure instant messaging (IM) communications through its network perimeter. Which of the following is the MOST significant challenge?",
    choices: [
      "A. IM clients can interoperate between multiple vendors.",
      "B. IM clients can run as executables that do not require installation.",
      "C. IM clients can utilize random port numbers.",
      "D. IM clients can run without administrator privileges.",
    ],
  },
  {
    question_number: 109,
    question:
      " Using the cipher text and resultant cleartext message to derive the monoalphabetic cipher key is an example of which method of cryptanalytic attack?",
    choices: [
      "A. Known-plaintext attack",
      "B. Ciphertext-only attack",
      "C. Frequency analysis",
      "D. Probable-plaintext attack",
    ],
  },
  {
    question_number: 110,
    question:
      " When developing an organization's information security budget, it is important that the:",
    choices: [
      "A. requested funds are at an equal amount to the expected cost of breaches.",
      "B. expected risk can be managed appropriately with the funds allocated.",
      "C. requested funds are part of a shared funding pool with other areas.",
      "D. expected risk to the organization does not exceed the funds allocated.",
    ],
  },
  {
    question_number: 111,
    question:
      " A subscription service which provides power, climate control, raised flooring, and telephone wiring but NOT the computer and peripheral equipment is BEST described as a:",
    choices: [
      "A. cold site.",
      "B. warm site.",
      "C. hot site.",
      "D. reciprocal site.",
    ],
  },
  {
    question_number: 112,
    question:
      " An international trading organization that holds an International Organization for Standardization (ISO) 27001 certification is seeking to outsource their security monitoring to a managed security service provider (MSSP). The trading organization's security officer is tasked with drafting the requirements that need to be included in the outsourcing contract. Which of the following MUST be included in the contract?",
    choices: [
      "A. A detailed overview of all equipment involved in the outsourcing contract",
      "B. The right to perform security compliance tests on the MSSP's equipment",
      "C. The MSSP having an executive manager responsible for information security",
      "D. The right to audit the MSSP's security process",
    ],
  },
  {
    question_number: 113,
    question:
      " Which of the following is the PRIMARY type of cryptography required to support non-repudiation of a digitally signed document?",
    choices: [
      "A. Hashing",
      "B. Message digest (MD)",
      "C. Symmetric",
      "D. Asymmetric",
    ],
  },
  {
    question_number: 114,
    question:
      " What is the MOST effective method to enhance security of a single sign-on (SSO) solution that interfaces with critical systems?",
    choices: [
      "A. Two-factor authentication",
      "B. Reusable tokens for application level authentication",
      "C. High performance encryption algorithms",
      "D. Secure Sockets Layer (SSL) for all communications",
    ],
  },
  {
    question_number: 115,
    question:
      " Which of the following is MOST appropriate to collect evidence of a zero-day attack?",
    choices: ["A. Honeypot", "B. Antispam", "C. Antivirus", "D. Firewall"],
  },
  {
    question_number: 116,
    question:
      " When assessing web vulnerabilities, how can navigating the dark web add value to a penetration test?",
    choices: [
      "A. Information may be found on hidden vendor patches.",
      "B. The actual origin and tools used for the test can be hidden.",
      "C. Information may be found on related breaches and hacking.",
      "D. Vulnerabilities can be tested without impact on the tested environment.",
    ],
  },
  {
    question_number: 117,
    question:
      " The quality assurance (QA) department is short-staffed and is unable to test all modules before the anticipated release date of an application. What security control is MOST likely to be violated?",
    choices: [
      "A. Change management",
      "B. Separation of environments",
      "C. Program management",
      "D. Mobile code controls",
    ],
  },
  {
    question_number: 118,
    question:
      " Which of the following criteria ensures information is protected relative to its importance to the organization?",
    choices: [
      "A. Legal requirements, value, criticality, and sensitivity to unauthorized disclosure or modification",
      "B. The value of the data to the organization's senior management",
      "C. Organizational stakeholders, with classification approved by the management board",
      "D. Legal requirements determined by the organization headquarters' location",
    ],
  },
  {
    question_number: 119,
    question:
      " What is the FIRST step when developing an Information Security Continuous Monitoring (ISCM) program?",
    choices: [
      "A. Collect the security-related information required for metrics, assessments, and reporting.",
      "B. Establish an ISCM program determining metrics, status monitoring frequencies, and control assessment frequencies.",
      "C. Define an ISCM strategy based on risk tolerance.",
      "D. Establish an ISCM technical architecture.",
    ],
  },
  {
    question_number: 120,
    question:
      " An organization has requested storage area network (SAN) disks for a new project. What Redundant Array of Independent Disks (RAID) level provides the BEST redundancy and fault tolerance?",
    choices: [
      "A. RAID level 1",
      "B. RAID level 3",
      "C. RAID level 4",
      "D. RAID level 5",
    ],
  },
  {
    question_number: 121,
    question:
      " Compared to a traditional network, which of the following is a security-related benefit that software-defined networking (SDN) provides?",
    choices: [
      "A. Centralized network provisioning",
      "B. Reduced network latency when scaled",
      "C. Centralized network administrative control",
      "D. Reduced hardware footprint and cost",
    ],
  },
  {
    question_number: 122,
    question:
      " What is the MOST effective response to a hacker who has already gained access to a network and will attempt to pivot to other resources?",
    choices: [
      "A. Warn users of a breach.",
      "B. Reset all passwords.",
      "C. Segment the network.",
      "D. Shut down the network.",
    ],
  },
  {
    question_number: 123,
    question:
      " Which of the following is a common term for log reviews, synthetic transactions, and code reviews?",
    choices: [
      "A. Application development",
      "B. Spiral development functional testing",
      "C. Security control testing",
      "D. DevOps Integrated Product Team (IPT) development",
    ],
  },
  {
    question_number: 124,
    question:
      " A database server for a financial application is scheduled for production deployment. Which of the following controls will BEST prevent tampering?",
    choices: [
      "A. Data sanitization",
      "B. Data validation",
      "C. Service accounts removal",
      "D. Logging and monitoring",
    ],
  },
  {
    question_number: 125,
    question:
      " The Industrial Control System (ICS) Computer Emergency Response Team (CERT) has released an alert regarding ICS-focused malware specifically propagating through Windows-based business networks. Technicians at a local water utility note that their dams, canals, and locks controlled by an internal Supervisory Control and Data Acquisition (SCADA) system have been malfunctioning. A digital forensics professional is consulted in the Incident Response (IR) and recovery. Which of the following is the MOST challenging aspect of this investigation?",
    choices: [
      "A. Group policy implementation",
      "B. SCADA network latency",
      "C. Physical access to the system",
      "D. Volatility of data",
    ],
  },
  {
    question_number: 126,
    question:
      " What term is commonly used to describe hardware and software assets that are stored in a configuration management database (CMDB)?",
    choices: [
      "A. Configuration item",
      "B. Configuration element",
      "C. Ledger item",
      "D. Asset register",
    ],
  },
  {
    question_number: 127,
    question:
      " A company is planning to implement a private cloud infrastructure. Which of the following recommendations will support the move to a cloud infrastructure? on users, devices and applications. planes.",
    choices: [
      "A. Implement software-defined networking (SDN) to provide the ability to apply high-level policies to shape and reorder network traffic based",
      "B. Implement a virtual local area network (VLAN) for each department and create a separate subnet for each VLAN.",
      "C. Implement software-defined networking (SDN) to provide the ability for the network infrastructure to be integrated with the control and data",
      "D. Implement a virtual local area network (VLAN) to logically separate the local area network (LAN) from the physical switches.",
    ],
  },
  {
    question_number: 128,
    question:
      " Which is MOST important when negotiating an Internet service provider (ISP) service-level agreement (SLA) by an organization that solely provides Voice over Internet Protocol (VoIP) services?",
    choices: [
      "A. Mean time to repair (MTTR)",
      "B. Quality of Service (QoS) between applications",
      "C. Financial penalties in case of disruption",
      "D. Availability of network services",
    ],
  },
  {
    question_number: 129,
    question:
      " A company hired an external vendor to perform a penetration test of a new payroll system. The company's internal test team had already performed an in-depth application and security test of the system and determined that it met security requirements. However, the external vendor uncovered significant security weaknesses where sensitive personal data was being sent unencrypted to the tax processing systems. What is the MOST likely cause of the security issues?",
    choices: [
      "A. Inadequate performance testing",
      "B. Inadequate application level testing",
      "C. Failure to perform negative testing",
      "D. Failure to perform interface testing",
    ],
  },
  {
    question_number: 130,
    question:
      " An organization wants to define as physical perimeter. What primary device should be used to accomplish this objective if the organization's perimeter MUST cost- efficiently deter casual trespassers?",
    choices: [
      "A. Fences three to four feet high with a turnstile",
      "B. Fences six to seven feet high with a painted gate",
      "C. Fences accompanied by patrolling security guards",
      "D. Fences eight or more feet high with three strands of barbed wire",
    ],
  },
  {
    question_number: 131,
    question:
      " Which of the following vulnerabilities can be BEST detected using automated analysis?",
    choices: [
      "A. Multi-step process attack vulnerabilities",
      "B. Business logic flaw vulnerabilities",
      "C. Valid cross-site request forgery (CSRF) vulnerabilities",
      "D. Typical source code vulnerabilities",
    ],
  },
  {
    question_number: 132,
    question:
      " A project manager for a large software firm has acquired a government contract that generates large amounts of Controlled Unclassified Information (CUI). The organization's information security manager had received a request to transfer project-related CUI between systems of differing security classifications. What role provides the authoritative guidance for this transfer?",
    choices: [
      "A. PM",
      "B. Information owner",
      "C. Data Custodian",
      "D. Mission/Business Owner",
    ],
  },
  {
    question_number: 133,
    question:
      " Which of the following determines how traffic should flow based on the status of the infrastructure layer?",
    choices: [
      "A. Control plane",
      "B. Application plane",
      "C. Traffic plane",
      "D. Data plane",
    ],
  },
  {
    question_number: 134,
    question:
      " When testing password strength, which of the following is the BEST method for brute forcing passwords?",
    choices: [
      "A. Conduct an offline attack on the hashed password information.",
      "B. Use a comprehensive list of words to attempt to guess the password.",
      "C. Use social engineering methods to attempt to obtain the password.",
      "D. Conduct an online password attack until the account being used is locked.",
    ],
  },
  {
    question_number: 135,
    question:
      " Which of the following is the name of an individual or group that is impacted by a change?",
    choices: ["A. Change agent", "B. End User", "C. Stakeholder", "D. Sponsor"],
  },
  {
    question_number: 136,
    question:
      " The European Union (EU) General Data Protection Regulation (GDPR) requires organizations to implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk. The Data Owner should therefore consider which of the following requirements?",
    choices: [
      "A. Never to store personal data of EU citizens outside the EU",
      "B. Data masking and encryption of personal data",
      "C. Only to use encryption protocols approved by EU",
      "D. Anonymization of personal data when transmitted to sources outside the EU",
    ],
  },
  {
    question_number: 137,
    question:
      " What is the PRIMARY benefit of incident reporting and computer crime investigations?",
    choices: [
      "A. Complying with security policy",
      "B. Repairing the damage and preventing future occurrences",
      "C. Providing evidence to law enforcement",
      "D. Appointing a computer emergency response team",
    ],
  },
  {
    question_number: 138,
    question:
      " Which of the following is the MOST common method of memory protection?",
    choices: [
      "A. Error correction",
      "B. Virtual local area network (VLAN) tagging",
      "C. Segmentation",
      "D. Compartmentalization",
    ],
  },
  {
    question_number: 139,
    question:
      " What testing technique enables the designer to develop mitigation strategies for potential vulnerabilities?",
    choices: [
      "A. Source code review",
      "B. Threat modeling",
      "C. Penetration testing",
      "D. Manual inspections and reviews",
    ],
  },
  {
    question_number: 140,
    question:
      " Assuming an individual has taken all of the steps to keep their internet connection private, which of the following is the BEST to browse the web privately?",
    choices: [
      "A. Store information about browsing activities on the personal device.",
      "B. Prevent information about browsing activities from being stored on the personal device.",
      "C. Prevent information about browsing activities from being stored in the cloud.",
      "D. Store browsing activities in the cloud.",
    ],
  },
  {
    question_number: 141,
    question:
      " A software engineer uses automated tools to review application code and search for application flaws, back doors, or other malicious code. Which of the following is the FIRST Software Development Life Cycle (SDLC) phase where this takes place?",
    choices: ["A. Deployment", "B. Development", "C. Test", "D. Design"],
  },
  {
    question_number: 142,
    question:
      " A company developed a web application which is sold as a Software as a Service (SaaS) solution to the customer. The application is hosted by a web server running on a specific operating system (OS) on a virtual machine (VM). During the transition phase of the service, it is determined that the support team will need access to the application logs. Which of the following privileges would be the MOST suitable?",
    choices: [
      "A. Administrative privileges on the hypervisor",
      "B. Administrative privileges on the application folders",
      "C. Administrative privileges on the web server",
      "D. Administrative privileges on the OS",
    ],
  },
  {
    question_number: 143,
    question:
      " A security practitioner detects an Endpoint attack on the organization's network. What is the MOST reasonable approach to mitigate future Endpoint attacks?",
    choices: [
      "A. Remove all non-essential client-side web services from the network.",
      "B. Harden the client image before deployment.",
      "C. Screen for harmful exploits of client-side services before implementation.",
      "D. Block all client-side web exploits at the perimeter.",
    ],
  },
  {
    question_number: 144,
    question:
      " What are the essential elements of a Risk Assessment Report (RAR)?",
    choices: [
      "A. Executive summary, body of the report, and appendices",
      "B. Executive summary, graph of risks, and process",
      "C. Table of contents, testing criteria, and index",
      "D. Table of contents, chapters, and executive summary",
    ],
  },
  {
    question_number: 145,
    question:
      " The security operations center (SOC) has received credible intelligence that a threat actor is planning to attack with multiple variants of a destructive virus. After obtaining a sample set of this virus' variants and reverse engineering them to understand how they work, a commonality was found. All variants are coded to write to a specific memory location. It is determined this virus is of no threat to the organization because they had the foresight to enable what feature on all endpoints?",
    choices: [
      "A. Address Space Layout Randomization (ASLR)",
      "B. Trusted Platform Module (TPM)",
      "C. Virtualization",
      "D. Process isolation",
    ],
  },
  {
    question_number: 146,
    question:
      " The Chief Information Security Officer (CISO) is to establish a single, centralized, and relational repository to hold all information regarding the software and hardware assets. Which of the following s ions would be the BEST option?",
    choices: [
      "A. Information Security Management System (ISMS)",
      "B. Configuration Management Database (CMDB)",
      "C. Security Information and Event Management (SIEM)",
      "D. Information Technology Asset Management (ITAM)",
    ],
  },
  {
    question_number: 147,
    question:
      " What type of investigation applies when malicious behavior is suspected between two organizations?",
    choices: ["A. Regulatory", "B. Operational", "C. Civil", "D. Criminal"],
  },
  {
    question_number: 148,
    question:
      " Which of the following techniques evaluates the secure design principles of network or software architectures?",
    choices: [
      "A. Risk modeling",
      "B. Waterfall method",
      "C. Threat modeling",
      "D. Fuzzing",
    ],
  },
  {
    question_number: 149,
    question:
      " Which element of software supply chain management has the GREATEST security risk to organizations?",
    choices: [
      "A. Unsupported libraries are often used.",
      "B. Applications with multiple contributors are difficult to evaluate.",
      "C. Vulnerabilities are difficult to detect.",
      "D. New software development skills are hard to acquire.",
    ],
  },
  {
    question_number: 150,
    question:
      " Which of the following should be done at a disaster site before any item is removed, repaired, or replaced?",
    choices: [
      "A. Communicate with the press following the communications plan",
      "B. Dispatch personnel to the disaster recovery (DR) site",
      "C. Take photos of the damage",
      "D. Notify all of the Board of Directors",
    ],
  },
  {
    question_number: 151,
    question:
      " When designing a new Voice over Internet Protocol (VoIP) network, an organization's top concern is preventing unauthorized users accessing the VoIP network. Which of the following will BEST help secure the VoIP network?",
    choices: [
      "A. 802.11g",
      "B. Web application firewall (WAF)",
      "C. Transport Layer Security (TLS)",
      "D. 802.1x",
    ],
  },
  {
    question_number: 152,
    question:
      " A user's credential for an application is stored in a relational database. Which control protects the confidentiality of the credential while it is stored?",
    choices: [
      "A. Use a salted cryptographic hash of the password.",
      "B. Validate passwords using a stored procedure.",
      "C. Allow only the application to have access to the password field in order to verify user authentication.",
      "D. Encrypt the entire database and embed an encryption key in the application.",
    ],
  },
  {
    question_number: 153,
    question:
      " Which of the following frameworks provides vulnerability metrics and characteristics to support the National Vulnerability Database (NVD)?",
    choices: [
      "A. Common Vulnerabilities and Exposures (CVE)",
      "B. Center for Internet Security (CIS)",
      "C. Common Vulnerability Scoring System (CVSS)",
      "D. Open Web Application Security Project (OWASP)",
    ],
  },
  {
    question_number: 154,
    question:
      " A security architect is reviewing plans for an application with a Recovery Point Objective (RPO) of 15 minutes. The current design has all of the application infrastructure located within one co-location data center. Which security principle is the architect currently assessing?",
    choices: [
      "A. Disaster recovery (DR)",
      "B. Availability",
      "C. Redundancy",
      "D. Business continuity (BC)",
    ],
  },
  {
    question_number: 155,
    question:
      " Which factors MUST be considered when classifying information and supporting assets for risk management, legal discovery, and compliance?",
    choices: [
      "A. System owner roles and responsibilities, data handling standards, storage and secure development lifecycle requirements",
      "B. Compliance office roles and responsibilities, classified material handling standards, storage system lifecycle requirements",
      "C. Data stewardship roles, data handling and storage standards, data lifecycle requirements",
      "D. System authorization roles and responsibilities, cloud computing standards, lifecycle requirements",
    ],
  },
  {
    question_number: 156,
    question:
      " The Chief Information Security Officer (CISO) of a small organization is making a case for building a security operations center (SOC). While debating between an in-house, fully outsourced, or a hybrid capability, which of the following would be the MAIN consideration, regardless of the model?",
    choices: [
      "A. Headcount and capacity",
      "B. Scope and service catalog",
      "C. Skill set and training",
      "D. Tools and technologies",
    ],
  },
  {
    question_number: 157,
    question:
      " An organization would like to ensure that all new users have a predefined departmental access template applied upon creation. The organization would also like additional access for users to be granted on a per-project basis. What type of user access administration is BEST suited to meet the organization's needs?",
    choices: [
      "A. Decentralized",
      "B. Hybrid",
      "C. Centralized",
      "D. Federated",
    ],
  },
  {
    question_number: 158,
    question:
      " Which of the following is a secure design principle for a new product?",
    choices: [
      "A. Restrict the use of modularization.",
      "B. Do not rely on previously used code.",
      "C. Build in appropriate levels of fault tolerance.",
      "D. Utilize obfuscation whenever possible.",
    ],
  },
  {
    question_number: 159,
    question:
      " What is the PRIMARY benefit of relying on Security Content Automation Protocol (SCAP)?",
    choices: [
      "A. Standardize specifications between software security products.",
      "B. Achieve organizational compliance with international standards.",
      "C. Improve vulnerability assessment capabilities.",
      "D. Save security costs for the organization.",
    ],
  },
  {
    question_number: 160,
    question:
      " What are the three key benefits that application developers should derive from the northbound application programming interface (API) of software defined networking (SDN)?",
    choices: [
      "A. Network syntax, abstraction of network flow, and abstraction of network protocols",
      "B. Network syntax, abstraction of network commands, and abstraction of network protocols",
      "C. Familiar syntax, abstraction of network topology, and definition of network protocols",
      "D. Familiar syntax, abstraction of network topology, and abstraction of network protocols",
    ],
  },
  {
    question_number: 161,
    question:
      " Which of the following is a unique feature of attribute-based access control (ABAC)?",
    choices: [
      "A. A user is granted access to a system at a particular time of day.",
      "B. A user is granted access to a system based on username and password.",
      "C. A user is granted access to a system based on group affinity.",
      "D. A user is granted access to a system with biometric authentication.",
    ],
  },
  {
    question_number: 162,
    question:
      " Which of the following is the BEST approach to implement multiple servers on a virtual system?",
    choices: [
      "A. Implement one primary function per virtual server and apply individual security configuration for each virtual server.",
      "B. Implement multiple functions within the same virtual server and apply individual security configurations to each function.",
      "C. Implement one primary function per virtual server and apply high security configuration on the host operating system.",
      "D. Implement multiple functions per virtual server and apply the same security configuration for each virtual server.",
    ],
  },
  {
    question_number: 163,
    question:
      " Which of the following is the MOST common cause of system or security failures?",
    choices: [
      "A. Lack of physical security controls",
      "B. Lack of change control",
      "C. Lack of logging and monitoring",
      "D. Lack of system documentation",
    ],
  },
  {
    question_number: 164,
    question:
      " The Chief Information Officer (CIO) has decided that as part of business modernization efforts the organization will move towards a cloud architecture. All business-critical data will be migrated to either internal or external cloud services within the next two years. The CIO has a PRIMARY obligation to work with personnel in which role in order to ensure proper protection of data during and after the cloud migration?",
    choices: [
      "A. Chief Security Officer (CSO)",
      "B. Information owner",
      "C. Chief Information Security Officer (CISO)",
      "D. General Counsel",
    ],
  },
  {
    question_number: 165,
    question:
      " A developer is creating an application that requires secure logging of all user activity. What is the BEST permission the developer should assign to the log file to ensure requirements are met?",
    choices: ["A. Execute", "B. Read", "C. Write", "D. Append"],
  },
  {
    question_number: 166,
    question:
      " When performing an investigation with the potential for legal action, what should be the analyst's FIRST consideration?",
    choices: [
      "A. Data decryption",
      "B. Chain-of-custody",
      "C. Authorization to collect",
      "D. Court admissibility",
    ],
  },
  {
    question_number: 167,
    question:
      " Building blocks for software-defined networks (SDN) require which of the following?",
    choices: [
      "A. The SDN is composed entirely of client-server pairs.",
      "B. Random-access memory (RAM) is used in preference to virtual memory.",
      "C. The SDN is mostly composed of virtual machines (VM).",
      "D. Virtual memory is used in preference to random-access memory (RAM).",
    ],
  },
  {
    question_number: 168,
    question:
      " What is the MINIMUM standard for testing a disaster recovery plan (DRP)?",
    choices: [
      "A. Quarterly or more frequently depending upon the advice of the information security manager",
      "B. As often as necessary depending upon the stability of the environment and business requirements",
      "C. Annually or less frequently depending upon audit department requirements",
      "D. Semi-annually and in alignment with a fiscal half-year business cycle",
    ],
  },
  {
    question_number: 169,
    question:
      " Which security audit standard provides the BEST way for an organization to understand a vendor's Information Systems (IS) in relation to confidentiality, integrity, and availability?",
    choices: [
      "A. Service Organization Control (SOC) 2",
      "B. Statement on Standards for Attestation Engagements (SSAE) 18",
      "C. Statement on Auditing Standards (SAS) 70",
      "D. Service Organization Control (SOC) 1",
    ],
  },
  {
    question_number: 170,
    question:
      " An application team is running tests to ensure that user entry fields will not accept invalid input of any length. What type of negative testing is this an example of?",
    choices: [
      "A. Allowed number of characters",
      "B. Population of required fields",
      "C. Reasonable data",
      "D. Session testing",
    ],
  },
  {
    question_number: 171,
    question:
      " An organization is considering partnering with a third-party supplier of cloud services. The organization will only be providing the data and the third-party supplier will be providing the security controls. Which of the following BEST describes this service offering?",
    choices: [
      "A. Platform as a Service (PaaS)",
      "B. Anything as a Service (XaaS)",
      "C. Infrastructure as a Service (IaaS)",
      "D. Software as a Service (SaaS)",
    ],
  },
  {
    question_number: 172,
    question:
      " Which of the following factors should be considered characteristics of Attribute Based Access Control (ABAC) in terms of the attributes used?",
    choices: [
      "A. Mandatory Access Control (MAC) and Discretionary Access Control (DAC)",
      "B. Discretionary Access Control (DAC) and Access Control List (ACL)",
      "C. Role Based Access Control (RBAC) and Mandatory Access Control (MAC)",
      "D. Role Based Access Control (RBAC) and Access Control List (ACL)",
    ],
  },
  {
    question_number: 173,
    question:
      " Which of the following is the MOST significant key management problem due to the number of keys created?",
    choices: [
      "A. Exponential growth when using symmetric keys",
      "B. Exponential growth when using asymmetric keys",
      "C. Storage of the keys require increased security",
      "D. Keys are more difficult to provision and revoke",
    ],
  },
  {
    question_number: 174,
    question:
      " Systems Security Professional (CISSP) with identity and access management (IAM) responsibilities is asked by the Chief Information Security Officer (CISO) to perform a vulnerability assessment on a web application to pass a Payment Card Industry (PCI) audit. The CISSP has never performed this before. According to the (ISC) Code of Professional Ethics, which of the following should the CISSP do? and qualified timely manner",
    choices: [
      "A. Inform the CISO that they are unable to perform the task because they should render only those services for which they are fully competent",
      "B. Since they are CISSP certified, they have enough knowledge to assist with the request, but will need assistance in order to complete it in a",
      "C. Review the CISSP guidelines for performing a vulnerability assessment before proceeding to complete it",
      "D. Review the PCI requirements before performing the vulnerability assessment",
    ],
  },
  {
    question_number: 175,
    question:
      " While performing a security review for a new product, an information security professional discovers that the organization's product development team is proposing to collect government-issued identification (ID) numbers from customers to use as unique customer identifiers. Which of the following recommendations should be made to the product development team?",
    choices: [
      "A. Customer identifiers should be a variant of the user's government-issued ID number.",
      "B. Customer identifiers should be a cryptographic hash of the user's government-issued ID number.",
      "C. Customer identifiers that do not resemble the user's government-issued ID number should be used.",
      'D. Customer identifiers should be a variant of the user\'s name, for example, "jdoe" or "john.doe."',
    ],
  },
  {
    question_number: 176,
    question:
      " The development team has been tasked with collecting data from biometric devices. The application will support a variety of collection data streams. During the testing phase, the team utilizes data from an old production database in a secure testing environment. What principle has the team taken into consideration?",
    choices: [
      "A. Biometric data cannot be changed.",
      "B. The biometric devices are unknown.",
      "C. Biometric data must be protected from disclosure.",
      "D. Separate biometric data streams require increased security.",
    ],
  },
  {
    question_number: 177,
    question:
      " Information security practitioners are in the midst of implementing a new firewall. Which of the following failure methods would BEST prioritize security in the event of failure?",
    choices: ["A. Failover", "B. Fail-Closed", "C. Fail-Safe", "D. Fail-Open"],
  },
  {
    question_number: 178,
    question:
      " Which of the following services can be deployed via a cloud service or on-premises to integrate with Identity as a Service (IDaaS) as the authoritative source of user identities?",
    choices: [
      "A. Multi-factor authentication (MFA)",
      "B. Directory",
      "C. User database",
      "D. Single sign-on (SSO)",
    ],
  },
  {
    question_number: 179,
    question:
      " Which of the following statements is TRUE about Secure Shell (SSH)?",
    choices: [
      "A. SSH supports port forwarding, which can be used to protect less secured protocols.",
      "B. SSH does not protect against man-in-the-middle (MITM) attacks.",
      "C. SSH is easy to deploy because it requires a Web browser only.",
      "D. SSH can be used with almost any application because it is concerned with maintaining a circuit.",
    ],
  },
  {
    question_number: 180,
    question:
      " What is considered a compensating control for not having electrical surge protectors installed?",
    choices: [
      "A. Having dual lines to network service providers built to the site",
      "B. Having a hot disaster recovery (DR) environment for the site",
      "C. Having network equipment in active-active clusters at the site",
      "D. Having backup diesel generators installed to the site",
    ],
  },
  {
    question_number: 181,
    question: " What is the FIRST step in risk management?",
    choices: [
      "A. Identify the factors that have potential to impact business.",
      "B. Establish the scope and actions required.",
      "C. Identify existing controls in the environment.",
      "D. Establish the expectations of stakeholder involvement.",
    ],
  },
  {
    question_number: 182,
    question:
      " Which of the following is the PRIMARY goal of logical access controls?",
    choices: [
      "A. Restrict access to an information asset.",
      "B. Ensure availability of an information asset.",
      "C. Restrict physical access to an information asset.",
      "D. Ensure integrity of an information asset.",
    ],
  },
  {
    question_number: 183,
    question: " Which of the following is a covert channel type?",
    choices: ["A. Pipe", "B. Memory", "C. Storage", "D. Monitoring"],
  },
  {
    question_number: 184,
    question:
      " A software developer wishes to write code that will execute safely and only as intended. Which of the following programming language types is MOST likely to achieve this goal?",
    choices: [
      "A. Weakly typed",
      "B. Dynamically typed",
      "C. Strongly typed",
      "D. Statically typed",
    ],
  },
  {
    question_number: 185,
    question:
      " Which of the following roles is responsible for ensuring that important datasets are developed, maintained, and are accessible within their defined specifications?",
    choices: [
      "A. Data Custodian",
      "B. Data Reviewer",
      "C. Data User",
      "D. Data Owner",
    ],
  },
  {
    question_number: 186,
    question:
      " What is static analysis intended to do when analyzing an executable file?",
    choices: [
      "A. Search the documents and files associated with the executable file.",
      "B. Analyze the position of the file in the file system and the executable file's libraries.",
      "C. Collect evidence of the executable file's usage, including dates of creation and last use.",
      "D. Disassemble the file to gather information about the executable file's function.",
    ],
  },
  {
    question_number: 187,
    question:
      " A network security engineer needs to ensure that a security solution analyzes traffic for protocol manipulation and various sorts of common attacks. In addition, all Uniform Resource Locator (URL) traffic must be inspected and users prevented from browsing inappropriate websites. Which of the following solutions should be implemented to enable administrators the capability to analyze traffic, blacklist external sites, and log user traffic for later analysis?",
    choices: [
      "A. Application-Level Proxy",
      "B. Intrusion detection system (IDS)",
      "C. Host-based Firewall",
      "D. Circuit-Level Proxy",
    ],
  },
  {
    question_number: 188,
    question:
      " What is the PRIMARY consideration when testing industrial control systems (ICS) for security weaknesses?",
    choices: [
      "A. ICS often run on UNIX operating systems.",
      "B. ICS often do not have availability requirements.",
      "C. ICS are often sensitive to unexpected traffic.",
      "D. ICS are often isolated and difficult to access.",
    ],
  },
  {
    question_number: 189,
    question:
      " The security team plans on using automated account reconciliation in the corporate user access review process. Which of the following must be implemented for the BEST results with fewest errors when running the audit?",
    choices: [
      "A. Frequent audits",
      "B. Segregation of Duties (SoD)",
      "C. Removal of service accounts from review",
      "D. Clear provisioning policies",
    ],
  },
  {
    question_number: 190,
    question:
      " In the common criteria, which of the following is a formal document that expresses an implementation-independent set of security requirements?",
    choices: [
      "A. Organizational Security Policy",
      "B. Security Target (ST)",
      "C. Protection Profile (PP)",
      "D. Target of Evaluation (TOE)",
    ],
  },
  {
    question_number: 191,
    question:
      " Which of the following is an example of a vulnerability of full-disk encryption (FDE)?",
    choices: [
      "A. Data on the device cannot be restored from backup.",
      "B. Data on the device cannot be backed up.",
      "C. Data in transit has been compromised when the user has authenticated to the device.",
      "D. Data at rest has been compromised when the user has authenticated to the device.",
    ],
  },
  {
    question_number: 192,
    question:
      " What is the FIRST step in reducing the exposure of a network to Internet Control Message Protocol (ICMP) based attacks?",
    choices: [
      "A. Implement network access control lists (ACL).",
      "B. Implement an intrusion prevention system (IPS).",
      "C. Implement a web application firewall (WAF).",
      "D. Implement egress filtering at the organization's network boundary.",
    ],
  },
  {
    question_number: 193,
    question:
      " A large organization's human resources and security teams are planning on implementing technology to eliminate manual user access reviews and improve compliance. Which of the following options is MOST likely to resolve the issues associated with user access?",
    choices: [
      "A. Implement a Privileged Access Management (PAM) system.",
      "B. Implement a role-based access control (RBAC) system.",
      "C. Implement identity and access management (IAM) platform.",
      "D. Implement a single sign-on (SSO) platform.",
    ],
  },
  {
    question_number: 194,
    question:
      " A cloud service accepts Security Assertion Markup Language (SAML) assertions from users to exchange authentication and authorization data between security domains. However, an attacker was able to spoof a registered account on the network and query the SAML provider. What is the MOST common attack leveraged against this flaw?",
    choices: [
      "A. Attacker leverages SAML assertion to register an account on the security domain.",
      "B. Attacker forges requests to authenticate as a different user.",
      "C. Attacker exchanges authentication and authorization data between security domains.",
      "D. Attacker conducts denial-of-service (DoS) against the security domain by authenticating as the same user repeatedly.",
    ],
  },
  {
    question_number: 195,
    question:
      " An organization is implementing security review as part of system development. Which of the following is the BEST technique to follow?",
    choices: [
      "A. Perform incremental assessments.",
      "B. Engage a third-party auditing firm.",
      "C. Review security architecture.",
      "D. Conduct penetration testing.",
    ],
  },
  {
    question_number: 196,
    question:
      " What Hypertext Transfer Protocol (HTTP) response header can be used to disable the execution of inline JavaScript and the execution of eval()- type functions?",
    choices: [
      "A. X-XSS-Protection",
      "B. Content-Security-Policy",
      "C. X-Frame-Options",
      "D. Strict-Transport-Security",
    ],
  },
  {
    question_number: 197,
    question:
      " A security professional was tasked with rebuilding a company's wireless infrastructure. Which of the following are the MOST important factors to consider while making a decision on which wireless spectrum to deploy?",
    choices: [
      "A. Facility size, intermodulation, and direct satellite service",
      "B. Performance, geographic location, and radio signal interference",
      "C. Existing client devices, manufacturer reputation, and electrical interference",
      "D. Hybrid frequency band, service set identifier (SSID), and interpolation",
    ],
  },
  {
    question_number: 198,
    question:
      " A software development company has a short timeline in which to deliver a software product. The software development team decides to use open-source software libraries to reduce the development time. What concept should software developers consider when using open-source software libraries? exploited.",
    choices: [
      "A. Open source libraries contain known vulnerabilities, and adversaries regularly exploit those vulnerabilities in the wild.",
      "B. Open source libraries can be used by everyone, and there is a common understanding that the vulnerabilities in these libraries will not be",
      "C. Open source libraries contain unknown vulnerabilities, so they should not be used.",
      "D. Open source libraries are constantly updated, making it unlikely that a vulnerability exists for an adversary to exploit.",
    ],
  },
  {
    question_number: 199,
    question:
      " A security engineer is assigned to work with the patch and vulnerability management group. The deployment of a new patch has been approved and needs to be applied. The research is complete, and the security engineer has provided recommendations. Where should the patch be applied FIRST?",
    choices: [
      "A. Lower environment",
      "B. Desktop environment",
      "C. Server environment",
      "D. Production environment",
    ],
  },
  {
    question_number: 200,
    question:
      " What BEST describes the confidentiality, integrity, availability triad?",
    choices: [
      "A. A vulnerability assessment to see how well the organization's data is protected",
      "B. The three-step approach to determine the risk level of an organization",
      "C. The implementation of security systems to protect the organization's data",
      "D. A tool used to assist in understanding how to protect the organization's data",
    ],
  },
  {
    question_number: 201,
    question:
      " Why is it important that senior management clearly communicates the formal Maximum Tolerable Downtime (MTD) decision?",
    choices: [
      "A. To provide each manager with precise direction on selecting an appropriate recovery alternative",
      "B. To demonstrate to the board of directors that senior management is committed to continuity recovery efforts",
      "C. To provide a formal declaration from senior management as required by internal audit to demonstrate sound business practices",
      "D. To demonstrate to the regulatory bodies that the company takes business continuity seriously",
    ],
  },
  {
    question_number: 202,
    question:
      " A Simple Power Analysis (SPA) attack against a device directly observes which of the following?",
    choices: [
      "A. Magnetism",
      "B. Generation",
      "C. Consumption",
      "D. Static discharge",
    ],
  },
  {
    question_number: 203,
    question:
      " Which of the following MUST the administrator of a security information and event management (SIEM) system ensure?",
    choices: [
      "A. All sources are synchronized with a common time reference.",
      "B. All sources are reporting in the exact same Extensible Markup Language (XML) format.",
      "C. Data sources do not contain information infringing upon privacy regulations.",
      "D. Each source uses the same Internet Protocol (IP) address for reporting.",
    ],
  },
  {
    question_number: 204,
    question:
      " An organization wants to share data securely with their partners via the Internet. Which standard port is typically used to meet this requirement?",
    choices: [
      "A. Setup a server on User Datagram Protocol (UDP) port 69",
      "B. Setup a server on Transmission Control Protocol (TCP) port 21",
      "C. Setup a server on Transmission Control Protocol (TCP) port 22",
      "D. Setup a server on Transmission Control Protocol (TCP) port 80",
    ],
  },
  {
    question_number: 205,
    question:
      " When designing a business continuity plan (BCP), what is the formula to determine the Maximum Tolerable Downtime (MTD)?",
    choices: [
      "A. Estimated Maximum Loss (EML) + Recovery Time Objective (RTO)",
      "B. Business impact analysis (BIA) + Recovery Point Objective (RPO)",
      "C. Annual Loss Expectancy (ALE) + Work Recovery Time (WRT)",
      "D. Recovery Time Objective (RTO) + Work Recovery Time (WRT)",
    ],
  },
  {
    question_number: 206,
    question:
      " In systems security engineering, what does the security principle of modularity provide?",
    choices: [
      "A. Minimal access to perform a function",
      "B. Documentation of functions",
      "C. Isolated functions and data",
      "D. Secure distribution of programs and data",
    ],
  },
  {
    question_number: 207,
    question:
      " Which of the following is the strongest physical access control?",
    choices: [
      "A. Biometrics, a password, and personal identification number (PIN)",
      "B. Individual password for each user",
      "C. Biometrics and badge reader",
      "D. Biometrics, a password, and badge reader",
    ],
  },
  {
    question_number: 208,
    question:
      " An access control list (ACL) on a router is a feature MOST similar to which type of firewall?",
    choices: [
      "A. Stateful firewall",
      "B. Packet filtering firewall",
      "C. Application gateway firewall",
      "D. Heuristic firewall",
    ],
  },
  {
    question_number: 209,
    question:
      " While dealing with the consequences of a security incident, which of the following security controls are MOST appropriate?",
    choices: [
      "A. Detective and recovery controls",
      "B. Corrective and recovery controls",
      "C. Preventative and corrective controls",
      "D. Recovery and proactive controls",
    ],
  },
  {
    question_number: 210,
    question:
      " A cloud hosting provider would like to provide a Service Organization Control (SOC) report relevant to its security program. This report should an abbreviated report that can be freely distributed. Which type of report BEST meets this requirement?",
    choices: ["A. SOC 1", "B. SOC 2 Type 1", "C. SOC 2 Type 2", "D. SOC 3"],
  },
  {
    question_number: 211,
    question:
      " Which of the following is TRUE for an organization that is using a third-party federated identity service?",
    choices: [
      "A. The organization specifies alone how to authenticate other organization's users",
      "B. The organization defines internal standard for overall user identification",
      "C. The organization establishes a trust relationship with the other organizations",
      "D. The organization enforces the rules to other organization's user provisioning",
    ],
  },
  {
    question_number: 212,
    question:
      " Which of the following describes the BEST method of maintaining the inventory of software and hardware within the organization? management tools tools",
    choices: [
      "A. Maintaining the inventory through a combination of asset owner interviews, open-source system management, and open-source",
      "B. Maintaining the inventory through a combination of desktop configuration, administration management, and procurement management",
      "C. Maintaining the inventory through a combination of on premise storage configuration, cloud management, and partner management tools",
      "D. Maintaining the inventory through a combination of system configuration, network management, and license management tools",
    ],
  },
  {
    question_number: 213,
    question:
      " Which of the following outsourcing agreement provisions has the HIGHEST priority from a security operations perspective?",
    choices: [
      "A. Conditions to prevent the use of subcontractors",
      "B. Terms for contract renegotiation in case of disaster",
      "C. Root cause analysis for application performance issue",
      "D. Escalation process for problem resolution during incidents",
    ],
  },
  {
    question_number: 214,
    question:
      " Which of the following is the MOST comprehensive Business Continuity (BC) test?",
    choices: [
      "A. Full interruption",
      "B. Full simulation",
      "C. Full table top",
      "D. Full functional drill",
    ],
  },
  {
    question_number: 215,
    question:
      " A security practitioner needs to implement a solution to verify endpoint security protections and operating system (OS) versions. Which of the following is the BEST solution to implement?",
    choices: [
      "A. An intrusion prevention system (IPS)",
      "B. Network Access Control (NAC)",
      "C. Active Directory (AD) authentication",
      "D. A firewall",
    ],
  },
  {
    question_number: 216,
    question:
      " During an internal audit of an organizational Information Security Management System (ISMS), nonconformities are identified. In which of the following management stages are nonconformities reviewed, assessed and/or corrected by the organization?",
    choices: ["A. Assessment", "B. Planning", "C. Improvement", "D. Operation"],
  },
  {
    question_number: 217,
    question:
      " When developing an external facing web-based system, which of the following would be the MAIN focus of the security assessment prior to implementation and production?",
    choices: [
      "A. Ensuring Secure Sockets Layer (SSL) certificates are signed by a certificate authority",
      "B. Ensuring Secure Sockets Layer (SSL) certificates are internally signed",
      "C. Assessing the Uniform Resource Locator (URL)",
      "D. Ensuring that input validation is enforced",
    ],
  },
  {
    question_number: 218,
    question:
      " A financial services organization has employed a security consultant to review processes used by employees across various teams. The consultant interviewed a member of the application development practice and found gaps in their threat model. Which of the following correctly represents a trigger for when a threat model should be revised?",
    choices: [
      "A. After operating system (OS) patches are applied",
      "B. A new developer is hired into the team.",
      "C. After a modification to the firewall rule policy",
      "D. A new data repository is added.",
    ],
  },
  {
    question_number: 219,
    question:
      " The Chief Information Security Officer (CISO) of an organization has requested that a Service Organization Control (SOC) report be created to outline the security and availability of a particular system over a 12-month period. Which type of SOC report should be utilized?",
    choices: [
      "A. SOC 1 Type 1",
      "B. SOC 1 Type 2",
      "C. SOC 2 Type 2",
      "D. SOC 3 Type 1",
    ],
  },
  {
    question_number: 220,
    question:
      " An organization recently upgraded to a Voice over Internet Protocol (VoIP) phone system. Management is concerned with unauthorized phone usage. The security consultant is responsible for putting together a plan to secure these phones. Administrators have assigned unique personal identification number (PIN) codes for each person in the organization. What is the BEST solution?",
    choices: [
      "A. Have the administrator enforce a policy to change the PIN regularly. Implement call detail records (CDR) reports to track usage.",
      "B. Have the administrator change the PIN regularly. Implement call detail records (CDR) reports to track usage.",
      "C. Use phone locking software to enforce usage and PIN policies. Inform the user to change the PIN regularly.",
      "D. Implement call detail records (CDR) reports to track usage.",
    ],
  },
  {
    question_number: 221,
    question:
      " Which of the following protection is provided when using a Virtual Private Network (VPN) with Authentication Header (AH)?",
    choices: [
      "A. Sender non-repudiation",
      "B. Multi-factor authentication (MFA)",
      "C. Payload encryption",
      "D. Sender confidentiality",
    ],
  },
  {
    question_number: 222,
    question:
      " An organization contracts with a consultant to perform a System Organization Control (SOC) 2 audit on their internal security controls. An auditor documents a finding a related to an Application Programming Interface (API) performing an action that is not aligned with the scope or objective of the system. Which trust service principle would be MOST applicable in th is situation?",
    choices: [
      "A. Confidentiality",
      "B. Processing Integrity",
      "C. Security",
      "D. Availability",
    ],
  },
  {
    question_number: 223,
    question:
      " In which process MUST security be considered during the acquisition of new software?",
    choices: [
      "A. Request for proposal (RFP)",
      "B. Implementation",
      "C. Vendor selection",
      "D. Contract negotiation",
    ],
  },
  {
    question_number: 224,
    question:
      " Which of the following is the MAIN difference between a network-based firewall and a host-based firewall?",
    choices: [
      "A. A network-based firewall is stateful, while a host-based firewall is stateless.",
      "B. A network-based firewall blocks network intrusions, while a host-based firewall blocks malware.",
      "C. A network-based firewall controls traffic passing through the device, while a host-based firewall controls traffic destined for the device.",
      "D. A network-based firewall verifies network traffic, while a host-based firewall verifies processes and applications.",
    ],
  },
  {
    question_number: 225,
    question:
      " Which of the following measures serves as the BEST means for protecting data on computers, smartphones, and external storage devices when traveling to high- risk countries? network (VPN) upon arriving at the destination. destination. control mechanisms to unlock smartphones.",
    choices: [
      "A. Review applicable destination country laws, forensically clean devices prior to travel, and only download sensitive data over a virtual private",
      "B. Leverage a Secure Socket Layer (SSL) connection over a virtual private network (VPN) to download sensitive data upon arriving at the",
      "C. Keep laptops, external storage devices, and smartphones in the hotel room when not in use.",
      "D. Use multi-factor authentication (MFA) to gain access to data stored on laptops or external storage devices and biometric fingerprint access",
    ],
  },
  {
    question_number: 226,
    question:
      " When network management is outsourced to third parties, which of the following is the MOST effective method of protecting critical data assets?",
    choices: [
      "A. Confirm that confidentiality agreements are signed",
      "B. Employ strong access controls",
      "C. Log all activities associated with sensitive systems",
      "D. Provide links to security policies",
    ],
  },
  {
    question_number: 227,
    question:
      " Which of the following regulations dictates how data breaches are handled?",
    choices: [
      "A. Payment Card Industry Data Security Standard (PCI-DSS)",
      "B. National Institute of Standards and Technology (NIST)",
      "C. Sarbanes-Oxley (SOX)",
      "D. General Data Protection Regulation (GDPR)",
    ],
  },
  {
    question_number: 228,
    question:
      " In software development, developers should use which type of queries to prevent a Structured Query Language (SQL) injection?",
    choices: ["A. Parameterised", "B. Controlled", "C. Dynamic", "D. Static"],
  },
  {
    question_number: 229,
    question:
      " Which type of access control includes a system that allows only users that are type=managers and department=sales to access employee records?",
    choices: [
      "A. Role-based access control (RBAC)",
      "B. Attribute-based access control (ABAC)",
      "C. Discretionary access control (DAC)",
      "D. Mandatory access control (MAC)",
    ],
  },
  {
    question_number: 230,
    question:
      " Which of the following examples is BEST to minimize the attack surface for a customer's private information?",
    choices: [
      "A. Data masking",
      "B. Authentication",
      "C. Obfuscation",
      "D. Collection limitation",
    ],
  },
  {
    question_number: 231,
    question:
      " Which evidence collecting technique would be utilized when it is believed an attacker is employing a rootkit and a quick analysis is needed?",
    choices: [
      "A. Forensic disk imaging",
      "B. Live response",
      "C. Memory collection",
      "D. Malware analysis",
    ],
  },
  {
    question_number: 232,
    question:
      " An application is used for funds transfers between an organization and a third-party. During a security audit, an auditor has found an issue with the business continuity disaster recovery policy and procedures for this application. Which of the following reports should the auditor file with the organization?",
    choices: [
      "A. Statement on Auditing Standards (SAS) 70-1",
      "B. Statement on Auditing Standards (SAS) 70",
      "C. Service Organization Control (SOC) 1",
      "D. Service Organization Control (SOC) 2",
    ],
  },
  {
    question_number: 233,
    question:
      " When determining data and information asset handling, regardless of the specific toolset being used, which of the following is one of the common components of big data?",
    choices: [
      "A. Distributed storage locations",
      "B. Centralized processing location",
      "C. Distributed data collection",
      "D. Consolidated data collection",
    ],
  },
  {
    question_number: 234,
    question:
      " A Chief Information Security Officer (CISO) of a firm which decided to migrate to cloud has been tasked with ensuring an optimal level of security. Which of the following would be the FIRST consideration?",
    choices: [
      "A. Analyze the firm's applications and data repositories to determine the relevant control requirements.",
      "B. Request a security risk assessment of the cloud vendor be completed by an independent third-party.",
      "C. Define the cloud migration roadmap and set out which applications and data repositories should be moved into the cloud.",
      "D. Ensure that the contract between the cloud vendor and the firm clearly defines responsibilities for operating security controls.",
    ],
  },
  {
    question_number: 235,
    question:
      " Which of the following BEST describes the purpose of Border Gateway Protocol (BGP)?",
    choices: [
      "A. Provide Routing Information Protocol (RIP) version 2 advertisements to neighboring layer 3 devices.",
      "B. Maintain a list of network paths between internet routers.",
      "C. Provide firewall services to cloud-enabled applications.",
      "D. Maintain a list of efficient network paths between autonomous systems.",
    ],
  },
  {
    question_number: 236,
    question:
      " What is the BEST design for securing physical perimeter protection?",
    choices: [
      "A. Closed-circuit television (CCTV)",
      "B. Business continuity planning (BCP)",
      "C. Barriers, fences, gates, and walls",
      "D. Crime Prevention through Environmental Design (CPTED)",
    ],
  },
  {
    question_number: 237,
    question:
      " The security organization is looking for a solution that could help them determine with a strong level of confidence that attackers have breached their network. Which solution is MOST effective at discovering a successful network breach?",
    choices: [
      "A. Developing a sandbox",
      "B. Installing an intrusion detection system (IDS)",
      "C. Deploying a honeypot",
      "D. Installing an intrusion prevention system (IPS)",
    ],
  },
  {
    question_number: 238,
    question:
      " Which of the following is a benefit of implementing data-in-use controls?",
    choices: [
      "A. If the data is lost, it must be decrypted to be opened.",
      "B. When the data is being viewed, it can only be printed by authorized users.",
      "C. When the data is being viewed, it can be accessed using secure protocols.",
      "D. If the data is lost, it may not be accessible to unauthorized users.",
    ],
  },
  {
    question_number: 239,
    question:
      " When configuring Extensible Authentication Protocol (EAP) in a Voice over Internet Protocol (VoIP) network, which of the following authentication types is the MOST secure?",
    choices: [
      "A. EAP-Protected Extensible Authentication Protocol (PEAP)",
      "B. EAP-Transport Layer Security (TLS)",
      "C. EAP-Tunneled Transport Layer Security (TLS)",
      "D. EAP-Flexible Authentication via Secure Tunneling",
    ],
  },
  {
    question_number: 240,
    question:
      " Which of the following would be the BEST guideline to follow when attempting to avoid the exposure of sensitive data?",
    choices: [
      "A. Monitor mail servers for sensitive data being exfiltrated.",
      "B. Educate end-users on methods of attacks on sensitive data.",
      "C. Establish report parameters for sensitive data.",
      "D. Store sensitive data only when necessary.",
    ],
  },
  {
    question_number: 241,
    question:
      " An organization with divisions in the United States (US) and the United Kingdom (UK) processes data comprised of personal information belonging to subjects living in the European Union (EU) and in the US. Which data MUST be handled according to the privacy protections of General Data Protection Regulation (GDPR)?",
    choices: [
      "A. Only the UK citizens' data",
      "B. Only the EU residents' data",
      "C. Only data processed in the UK",
      "D. Only the EU citizens' data",
    ],
  },
  {
    question_number: 242,
    question: " What are the first two components of logical access control?",
    choices: [
      "A. Authentication and availability",
      "B. Authentication and identification",
      "C. Identification and confidentiality",
      "D. Confidentiality and authentication",
    ],
  },
  {
    question_number: 243,
    question:
      " Which of the following is the MOST effective measure for dealing with rootkit attacks?",
    choices: [
      "A. Restoring the system from the last backup",
      "B. Finding and replacing the altered binaries with legitimate ones",
      "C. Turning off unauthorized services and rebooting the system",
      "D. Reinstalling the system from trusted sources",
    ],
  },
  {
    question_number: 244,
    question:
      " Which of the following is the FIRST requirement a data owner should consider before implementing a data retention policy?",
    choices: ["A. Storage", "B. Training", "C. Legal", "D. Business"],
  },
  {
    question_number: 245,
    question:
      " A new employee formally reported suspicious behavior to the organization security team. The report claims that someone not affiliated with the organization was inquiring about the member's work location, length of employment, and building access controls. The employee's reporting is MOST likely the result of which of the following?",
    choices: [
      "A. Security engineering",
      "B. Security awareness",
      "C. Phishing",
      "D. Risk avoidance",
    ],
  },
  {
    question_number: 246,
    question: " The disaster recovery (DR) process should always include:",
    choices: [
      "A. periodic inventory review",
      "B. financial data analysis",
      "C. plan maintenance",
      "D. periodic vendor review",
    ],
  },
  {
    question_number: 247,
    question:
      " An organization has determined that its previous waterfall approach to software development is not keeping pace with business demands. To adapt to the rapid changes required for product delivery, the organization has decided to move towards an Agile software development and release cycle. In order to ensure the success of the Agile methodology, who is the MOST critical in creating acceptance criteria for each release?",
    choices: [
      "A. Business customers",
      "B. Software developers",
      "C. Independent testers",
      "D. Project managers",
    ],
  },
  {
    question_number: 248,
    question:
      " What is the FIRST step for an organization to take before allowing personnel to access social media from a corporate device or user account?",
    choices: [
      "A. Publish an acceptable usage policy.",
      "B. Publish a social media guidelines document.",
      "C. Deliver security awareness training.",
      "D. Document a procedure for accessing social media sites.",
    ],
  },
  {
    question_number: 249,
    question:
      " A hospital has allowed virtual private networking (VPN) access to remote database developers. Upon auditing the internal configuration, the network administrator discovered that split-tunneling was enabled. What is the concern with this configuration?",
    choices: [
      "A. The network intrusion detection system (NIDS) will fail to inspect Secure Sockets Layer (SSL) traffic.",
      "B. Remote sessions will not require multi-layer authentication.",
      "C. Remote clients are permitted to exchange traffic with the public and private network.",
      "D. Multiple Internet Protocol Security (IPSec) tunnels may be exploitable in specific circumstances.",
    ],
  },
  {
    question_number: 250,
    question:
      " In an IDEAL encryption system, who has sole access to the decryption key?",
    choices: [
      "A. Data custodian",
      "B. System owner",
      "C. System administrator",
      "D. Data owner",
    ],
  },
  {
    question_number: 251,
    question:
      " Which type of disaster recovery plan (DRP) testing carries the MOST operational risk?",
    choices: ["A. Cutover", "B. Parallel", "C. Walkthrough", "D. Tabletop"],
  },
  {
    question_number: 252,
    question:
      " Which of the following methods provides the MOST protection for user credentials?",
    choices: [
      "A. Forms-based authentication",
      "B. Self-registration",
      "C. Basic authentication",
      "D. Digest authentication",
    ],
  },
  {
    question_number: 253,
    question:
      " An organization is planning a penetration test that simulates the malicious actions of a former network administrator. What kind of penetration test is needed?",
    choices: [
      "A. Functional test",
      "B. Unit test",
      "C. Grey box",
      "D. White box",
    ],
  },
  {
    question_number: 254,
    question:
      " How does Radio-Frequency Identification (RFID) assist with asset management?",
    choices: [
      "A. It uses biometric information for system identification.",
      "B. It uses two-factor authentication (2FA) for system identification.",
      "C. It transmits unique serial numbers wirelessly.",
      "D. It transmits unique Media Access Control (MAC) addresses wirelessly.",
    ],
  },
  {
    question_number: 255,
    question:
      " Which of the following is the FIRST step an organization's professional performs when defining a cyber-security program based upon industry standards?",
    choices: [
      "A. Review the past security assessments",
      "B. Define the organization's objectives regarding security and risk mitigation",
      "C. Map the organization's current security practices to industry standards and frameworks",
      "D. Select from a choice of security best practices",
    ],
  },
  {
    question_number: 256,
    question:
      " What is the MOST important criterion that needs to be adhered to during the data collection process of an active investigation?",
    choices: [
      "A. Maintaining the chain of custody",
      "B. Capturing an image of the system",
      "C. Outlining all actions taken during the investigation",
      "D. Complying with the organization's security policy",
    ],
  },
  {
    question_number: 257,
    question:
      " Two computers, each with a single connection on the same physical 10 gigabit Ethernet network segment, need to communicate with each other. The first machine has a single Internet Protocol (IP) Classless Inter-Domain Routing (CIDR) address of 192.168.1.3/30 and the second machine has an IP/CIDR address 192.168.1.6/30. Which of the following is correct? communicate communicate communicate communicate",
    choices: [
      "A. Since each computer is on a different layer 3 network, traffic between the computers must be processed by a network bridge in order to",
      "B. Since each computer is on the same layer 3 network, traffic between the computers may be processed by a network router in order to",
      "C. Since each computer is on the same layer 3 network, traffic between the computers may be processed by a network bridge in order to",
      "D. Since each computer is on a different layer 3 network, traffic between the computers must be processed by a network router in order to",
    ],
  },
  {
    question_number: 258,
    question:
      " Security Software Development Life Cycle (SDLC) expects application code to be written in a consistent manner to allow ease of auditing and which of the following?",
    choices: ["A. Protecting", "B. Copying", "C. Enhancing", "D. Executing"],
  },
  {
    question_number: 259,
    question: " Which of the following is a risk matrix?",
    choices: [
      "A. A tool for determining risk management decisions for an activity or system.",
      "B. A database of risks associated with a specific information system.",
      "C. A two-dimensional picture of risk for organizations, products, projects, or other items of interest.",
      "D. A table of risk management factors for management to consider.",
    ],
  },
  {
    question_number: 260,
    question:
      " What part of an organization's strategic risk assessment MOST likely includes information on items affecting the success of the organization?",
    choices: [
      "A. Threat analysis",
      "B. Vulnerability analysis",
      "C. Key Performance Indicator (KPI)",
      "D. Key Risk Indiaitor (KRI)",
    ],
  },
  {
    question_number: 261,
    question:
      " A company needs to provide employee access to travel services, which are hosted by a third-party service provider. Employee experience is important, and when users are already authenticated, access to the travel portal is seamless. Which of the following methods is used to share information and grant user access to the travel portal?",
    choices: [
      "A. Single sign-on (SSO) access",
      "B. Security Assertion Markup Language (SAML) access",
      "C. Open Authorization (OAuth) access",
      "D. Federated access",
    ],
  },
  {
    question_number: 262,
    question:
      " The Chief Executive Officer (CEO) wants to implement an internal audit of the company's information security posture. The CEO wants to avoid any bias in the audit process; therefore, has assigned the Sales Director to conduct the audit. After significant interaction over a period of weeks the audit concludes that the company's policies and procedures are sufficient, robust and well established. The CEO then moves on to engage an external penetration testing company in order to showcase the organization's robust information security stance. This exercise reveals significant failings in several critical security controls and shows that the incident response processes remain undocumented. What is the MOST likely reason for this disparity in the results of the audit and the external penetration test? incomplete assessment being formulated.",
    choices: [
      "A. The audit team lacked the technical experience and training to make insightful and objective assessments of the data provided to them.",
      "B. The scope of the penetration test exercise and the internal audit were significantly different.",
      "C. The external penetration testing company used custom zero-day attacks that could not have been predicted.",
      "D. The information technology (IT) and governance teams have failed to disclose relevant information to the internal audit team leading to an",
    ],
  },
  {
    question_number: 263,
    question:
      " An information security administrator wishes to block peer-to-peer (P2P) traffic over Hypertext Transfer Protocol (HTTP) tunnels. Which of the following layers of the Open Systems Interconnection (OSI) model requires inspection?",
    choices: [
      "A. Application",
      "B. Transport",
      "C. Session",
      "D. Presentation",
    ],
  },
  {
    question_number: 264,
    question:
      " A Chief Information Officer (CIO) has delegated responsibility of their system security to the head of the information technology (IT) department. While corporate policy dictates that only the CIO can make decisions on the level of data protection required, technical implementation decisions are done by the head of the IT department. Which of the following BEST describes the security role filled by the head of the IT department?",
    choices: [
      "A. System security officer",
      "B. System processor",
      "C. System custodian",
      "D. System analyst",
    ],
  },
  {
    question_number: 265,
    question:
      " Which of the following actions should be undertaken prior to deciding on a physical baseline Protection Profile (PP)?",
    choices: [
      "A. Conduct a site survey.",
      "B. Choose a suitable location.",
      "C. Check the technical design.",
      "D. Categorize assets.",
    ],
  },
  {
    question_number: 266,
    question:
      " Management has decided that a core application will be used on personal cellular phones. As an implementation requirement, regularly scheduled analysis of the security posture needs to be conducted. Management has also directed that continuous monitoring be implemented. Which of the following is required to accomplish management's directive?",
    choices: [
      "A. Routine reports generated by the user's cellular phone provider that detail security events",
      "B. Strict integration of application management, configuration management (CM), and phone management",
      "C. Management application installed on user phones that tracks all application events and cellular traffic",
      "D. Enterprise-level security information and event management (SIEM) dashboard that provides full visibility of cellular phone activity",
    ],
  },
  {
    question_number: 267,
    question:
      " A systems engineer is designing a wide area network (WAN) environment for a new organization. The WAN will connect sites holding information at various levels of sensitivity, from publicly available to highly confidential. The organization requires a high degree of interconnectedness to support existing business processes. What is the BEST design approach to securing this environment?",
    choices: [
      'A. Use reverse proxies to create a secondary "shadow" environment for critical systems.',
      "B. Place firewalls around critical devices, isolating them from the rest of the environment.",
      "C. Layer multiple detective and preventative technologies at the environment perimeter.",
      "D. Align risk across all interconnected elements to ensure critical threats are detected and handled.",
    ],
  },
  {
    question_number: 268,
    question:
      " Which of the following techniques is MOST useful when dealing with advanced persistent threat (APT) intrusions on live virtualized environments?",
    choices: [
      "A. Memory forensics",
      "B. Logfile analysis",
      "C. Reverse engineering",
      "D. Antivirus operations",
    ],
  },
  {
    question_number: 269,
    question:
      " Which of the following types of web-based attack is happening when an attacker is able to send a well-crafted, malicious request to an authenticated user realizing it?",
    choices: [
      "A. Process injection",
      "B. Cross-Site request forgery (CSRF)",
      "C. Cross-Site Scripting (XSS)",
      "D. Broken Authentication And Session Management",
    ],
  },
  {
    question_number: 270,
    question:
      " A scan report returned multiple vulnerabilities affecting several production servers that are mission critical. Attempts to apply the patches in the development environment have caused the servers to crash. What is the BEST course of action?",
    choices: [
      "A. Mitigate the risks with compensating controls.",
      "B. Upgrade the software affected by the vulnerability.",
      "C. Remove the affected software from the servers.",
      "D. Inform management of possible risks.",
    ],
  },
  {
    question_number: 271,
    question:
      " A security professional has reviewed a recent site assessment and has noted that a server room on the second floor of a building has Heating, Ventilation, and Air Conditioning (HVAC) intakes on the ground level that have ultraviolet light fi lters installed, Aero-K Fire suppression in the server room, and preaction fire suppression on floors above the server room. Which of the following changes can the security professional recommend to reduce risk associated with these conditions? system",
    choices: [
      "A. Remove the ultraviolet light filters on the HVAC intake and replace the fire suppression system on the upper floors with a dry system",
      "B. Elevate the HVAC intake by constructing a plenum or external shaft over it and convert the server room fire suppression to a pre-action",
      "C. Add additional ultraviolet light fi lters to the HVAC intake supply and return ducts and change server room fire suppression to FM-200",
      "D. Apply additional physical security around the HVAC intakes and update upper floor fire suppression to FM-200",
    ],
  },
  {
    question_number: 272,
    question:
      " Which of the following is the MOST common use of the Online Certificate Status Protocol (OCSP)?",
    choices: [
      "A. To verify the validity of an X.509 digital certificate",
      "B. To obtain the expiration date of an X.509 digital certificate",
      "C. To obtain the revocation status of an X.509 digital certificate",
      "D. To obtain the author name of an X.509 digital certificate",
    ],
  },
  {
    question_number: 273,
    question:
      " A security professional has been assigned to assess a web application. The assessment report recommends switching to Security Assertion Markup Language (SAML). What is the PRIMARY security benefit in switching to SAML?",
    choices: [
      "A. It enables single sign-on (SSO) for web applications.",
      "B. It uses Transport Layer Security (TLS) to address confidentiality.",
      "C. It limits unnecessary data entry on web forms.",
      "D. The users' password is not passed during authentication.",
    ],
  },
  {
    question_number: 274,
    question:
      " An organization purchased a commercial off-the-shelf (COTS) software several years ago. The information technology (IT) Director has decided to migrate the application into the cloud, but is concerned about the application security of the software in the organization's dedicated environment with a cloud service provider. What is the BEST way to prevent and correct the software's security weaknesses?",
    choices: [
      "A. Follow the software end-of-life schedule",
      "B. Implement a dedicated COTS sandbox environment",
      "C. Transfer the risk to the cloud service provider",
      "D. Examine the software updating and patching process",
    ],
  },
  {
    question_number: 275,
    question:
      " What type of database attack would allow a customer service employee to determine quarterly sales results before they are publicly announced?",
    choices: [
      "A. Inference",
      "B. Aggregation",
      "C. Polyinstantiation",
      "D. Data mining",
    ],
  },
  {
    question_number: 276,
    question:
      " In a multi-tenant cloud environment, what approach will secure logical access to assets?",
    choices: [
      "A. Controlled configuration management (CM)",
      "B. Transparency/Auditability of administrative access",
      "C. Virtual private cloud (VPC)",
      "D. Hybrid cloud",
    ],
  },
  {
    question_number: 277,
    question:
      " An information technology (IT) employee who travels frequently to various countries remotely connects to an organization's resources to troubleshoot problems. Which of the following solutions BEST serves as a secure control mechanism to meet the organization's requirements?",
    choices: [
      "A. Install a third-party screen sharing solution that provides remote connection from a public website.",
      "B. Install a bastion host in the demilitarized zone (DMZ) and allow multi-factor authentication (MFA) access.",
      "C. Implement a Dynamic Domain Name Services (DONS) account to initiate a virtual private network (VPN) using the DONS record.",
      "D. Update the firewall rules to include the static Internet Protocol (IP) addresses of the locations where the employee connects from.",
    ],
  },
  {
    question_number: 278,
    question:
      " Which of the following is the BEST way to determine the success of a patch management process?",
    choices: [
      "A. Change management",
      "B. Configuration management (CM)",
      "C. Analysis and impact assessment",
      "D. Auditing and assessment",
    ],
  },
  {
    question_number: 279,
    question:
      " An organization has discovered that organizational data is posted by employees to data storage accessible to the general public. What is the PRIMARY step an organization must take to ensure data is properly protected from public release?",
    choices: [
      "A. Implement a user reporting policy.",
      "B. Implement a data encryption policy.",
      "C. Implement a user training policy.",
      "D. Implement a data classification policy.",
    ],
  },
  {
    question_number: 280,
    question:
      " A security engineer is required to integrate security into a software project that is implemented by small groups that quickly, continuously, and independently develop, test, and deploy code to the cloud. The engineer will MOST likely integrate with which software development process?",
    choices: [
      "A. Devops Integrated Product Team (IPT)",
      "B. Structured Waterfall Programming Development",
      "C. Service-oriented architecture (SOA)",
      "D. Spiral Methodology",
    ],
  },
  {
    question_number: 281,
    question:
      " Which of the following is the BEST method to identify security controls that should be implemented for a web-based application while in development?",
    choices: [
      "A. Agile software development",
      "B. Secure software development",
      "C. Application threat modeling",
      "D. Penetration testing",
    ],
  },
  {
    question_number: 282,
    question:
      " Which Open Systems Interconnection (OSI) layer(s) BEST corresponds to the network access layer in the Transmission Control Protocol/Internet Protocol (TCP/ IP) model?",
    choices: [
      "A. Data Link and Physical Layers",
      "B. Session and Network Layers",
      "C. Transport Layer",
      "D. Application, Presentation, and Session Layers",
    ],
  },
  {
    question_number: 283,
    question:
      " An organization's retail website provides its only source of revenue, so the disaster recovery plan (DRP) must document an estimated time for each step in the plan. Which of the following steps in the DRP will list the GREATEST duration of time for the service to be fully operational?",
    choices: [
      "A. Update the Network Address Translation (NAT) table.",
      "B. Update Domain Name System (DNS) server addresses with domain registrar.",
      "C. Update the Border Gateway Protocol (BGP) autonomous system number.",
      "D. Update the web server network adapter configuration.",
    ],
  },
  {
    question_number: 284,
    question:
      " In supervisory control and data acquisition (SCADA) systems, which of the following controls can be used to reduce device exposure to malware?",
    choices: [
      "A. Disallow untested code in the execution space of the SCADA device.",
      "B. Disable all command line interfaces.",
      "C. Disable Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) port 138 and 139 on the SCADA device.",
      "D. Prohibit the use of unsecure scripting languages.",
    ],
  },
  {
    question_number: 285,
    question:
      " Which of the following secure transport protocols is often used to secure Voice over Internet Protocol (VoIP) communications on a network from end to end?",
    choices: [
      "A. Secure File Transfer Protocol (SFTP)",
      "B. Secure Real-time Transport Protocol (SRTP)",
      "C. Generic Routing Encapsulation (GRE)",
      "D. Internet Protocol Security (IPSec)",
    ],
  },
  {
    question_number: 286,
    question:
      " A healthcare insurance organization chose a vendor to develop a software application. Upon review of the draft contract, the information security professional notices that software security is not addressed. What is the BEST approach to address the issue?",
    choices: [
      "A. Update the contract to require the vendor to perform security code reviews.",
      "B. Update the service level agreement (SLA) to provide the organization the right to audit the vendor.",
      "C. Update the contract so that the vendor is obligated to provide security capabilities.",
      "D. Update the service level agreement (SLA) to require the vendor to provide security capabilities.",
    ],
  },
  {
    question_number: 287,
    question:
      " Which of the following security tools will ensure authorized data is sent to the application when implementing a cloud-based application?",
    choices: [
      "A. Host-based intrusion prevention system (HIPS)",
      "B. Access control list (ACL)",
      "C. Data loss prevention (DLP)",
      "D. File integrity monitoring (FIM)",
    ],
  },
  {
    question_number: 288,
    question:
      " A client server infrastructure that provides user-to-server authentication describes which one of the following?",
    choices: [
      "A. Secure Sockets Layer (SSL)",
      "B. User-based authorization",
      "C. Kerberos",
      "D. X.509",
    ],
  },
  {
    question_number: 289,
    question:
      " A system developer has a requirement for an application to check for a secure digital signature before the application is accessed on a user's laptop. Which security mechanism addresses this requirement?",
    choices: [
      "A. Trusted Platform Module (TPM)",
      "B. Certificate revocation list (CRL) policy",
      "C. Key exchange",
      "D. Hardware encryption",
    ],
  },
  {
    question_number: 290,
    question:
      " Which of the following is a term used to describe maintaining ongoing awareness of information security, vulnerabilities, and threats to support organizational risk management decisions?",
    choices: [
      "A. Information Security Continuous Monitoring (ISCM)",
      "B. Risk Management Framework (RMF)",
      "C. Information Sharing & Analysis Centers (ISAC)",
      "D. Information Security Management System (ISMS)",
    ],
  },
  {
    question_number: 291,
    question:
      ' Which of the following types of firewall only examines the "handshaking" between packets before forwarding traffic?',
    choices: [
      "A. Proxy firewalls",
      "B. Circuit-level firewalls",
      "C. Network Address Translation (NAT) firewalls",
      "D. Host-based firewalls",
    ],
  },
  {
    question_number: 292,
    question: " What is a use for mandatory access control (MAC)?",
    choices: [
      "A. Allows for mandatory user identity and passwords based on sensitivity",
      "B. Allows for mandatory system administrator access control over objects",
      "C. Allows for labeling of sensitive user accounts for access control",
      "D. Allows for object security based on sensitivity represented by a label",
    ],
  },
  {
    question_number: 293,
    question:
      " An organization has developed a way for customers to share information from their wearable devices with each other. Unfortunately, the users were not informed as to what information collected would be shared. What technical controls should be put in place to remedy the privacy issue while still trying to accomplish the organization's business goals?",
    choices: [
      "A. Share only what the organization decides is best.",
      "B. Stop sharing data with the other users.",
      "C. Default the user to not share any information.",
      "D. Inform the user of the sharing feature changes after implemented.",
    ],
  },
  {
    question_number: 294,
    question:
      " Which of the following system components enforces access controls on an object?",
    choices: [
      "A. Security perimeter",
      "B. Access control matrix",
      "C. Trusted domain",
      "D. Reference monitor",
    ],
  },
  {
    question_number: 295,
    question:
      " In setting expectations when reviewing the results of a security test, which of the following statements is MOST important to convey to reviewers?",
    choices: [
      "A. The accuracy of testing results can be greatly improved if the target(s) are properly hardened.",
      "B. The results of the tests represent a point-in-time assessment of the target(s).",
      "C. The deficiencies identified can be corrected immediately.",
      "D. The target's security posture cannot be further compromised.",
    ],
  },
  {
    question_number: 296,
    question:
      " What is the benefit of an operating system (OS) feature that is designed to prevent an application from executing code from a non-executable memory region?",
    choices: [
      "A. Identifies which security patches still need to be installed on the system",
      "B. Reduces the risk of polymorphic viruses from encrypting their payload",
      "C. Stops memory resident viruses from propagating their payload",
      "D. Helps prevent certain exploits that store code in buffers",
    ],
  },
  {
    question_number: 297,
    question: " What is the overall goal of software security testing?",
    choices: [
      "A. Identifying the key security features of the software",
      "B. Ensuring all software functions perform as specified",
      "C. Reducing vulnerabilities within a software system",
      "D. Making software development more agile",
    ],
  },
  {
    question_number: 298,
    question:
      " Which of the following implementations will achieve high availability in a website?",
    choices: [
      "A. Disk mirroring of the web server with redundant disk drives in a hardened data center",
      "B. Disk striping of the web server hard drives and large amounts of bandwidth",
      "C. Multiple geographically dispersed web servers that are configured for failover",
      "D. Multiple Domain Name System (DNS) entries resolving to the same web server and large amounts of bandwidth",
    ],
  },
  {
    question_number: 299,
    question:
      " Which of the following is an important design feature for the outer door of a mantrap?",
    choices: [
      "A. Allow it to be opened by an alarmed emergency button.",
      "B. Do not allow anyone to enter it alone.",
      "C. Do not allow it to be observed by closed-circuit television (CCTV) cameras.",
      "D. Allow it be opened when the inner door of the mantrap is also open.",
    ],
  },
  {
    question_number: 300,
    question:
      " Which of the following is the MOST important rule for digital investigations?",
    choices: [
      "A. Ensure original data is never modified.",
      "B. Ensure systems are powered on.",
      "C. Ensure event logs are rotated.",
      "D. Ensure individual privacy is protected.",
    ],
  },
  {
    question_number: 301,
    question:
      " An information security professional is reviewing user access controls on a customer-facing application. The application must have multi-factor authentication (MFA) in place. The application currently requires a username and password to login. Which of the following options would BEST implement MFA?",
    choices: [
      "A. Geolocate the user and compare to previous logins",
      "B. Require a pre-selected number as part of the login",
      "C. Have the user answer a secret question that is known to them",
      "D. Enter an automatically generated number from a hardware token",
    ],
  },
  {
    question_number: 302,
    question:
      " Which of the following is a MAJOR consideration in implementing a Voice over Internet Protocol (VoIP) network?",
    choices: [
      "A. Use of Request for Comments (RFC) 1918 addressing.",
      "B. Use of Network Access Control (NAC) on switches.",
      "C. Use of separation for the voice network.",
      "D. Use of a unified messaging.",
    ],
  },
  {
    question_number: 303,
    question:
      " During testing, where are the requirements to inform parent organizations, law enforcement, and a computer incident response team documented?",
    choices: [
      "A. Security Assessment Report (SAR)",
      "B. Security assessment plan",
      "C. Unit test results",
      "D. System integration plan",
    ],
  },
  {
    question_number: 304,
    question:
      " The security architect has been mandated to assess the security of various brands of mobile devices. At what phase of the product lifecycle would this be MOST likely to occur?",
    choices: [
      "A. Implementation",
      "B. Operations and maintenance",
      "C. Disposal",
      "D. Development",
    ],
  },
  {
    question_number: 305,
    question:
      " Which of the following statements is MOST accurate regarding information assets? inventory.",
    choices: [
      "A. International Organization for Standardization (ISO) 27001 compliance specifies which information assets must be included in asset",
      "B. Information assets include any information that is valuable to the organization.",
      "C. Building an information assets register is a resource-intensive job.",
      "D. Information assets inventory is not required for risk assessment.",
    ],
  },
  {
    question_number: 306,
    question:
      " Which of the following attack types can be used to compromise the integrity of data during transmission?",
    choices: [
      "A. Synchronization flooding",
      "B. Session hijacking",
      "C. Keylogging",
      "D. Packet sniffing",
    ],
  },
  {
    question_number: 307,
    question:
      " A malicious user gains access to unprotected directories on a web server. Which of the following is MOST likely the cause for this information disclosure?",
    choices: [
      "A. Broken authentication management",
      "B. Security misconfiguration",
      "C. Cross-site request forgery (CSRF)",
      "D. Structured Query Language injection (SQLi)",
    ],
  },
  {
    question_number: 308,
    question:
      " When reviewing the security logs, the password shown for an administrative login event was ' OR ' '1'='1' --. This is an example of which of the following kinds of attack?",
    choices: [
      "A. Structured Query Language (SQL) Injection",
      "B. Brute Force Attack",
      "C. Rainbow Table Attack",
      "D. Cross-Site Scripting (XSS)",
    ],
  },
  {
    question_number: 309,
    question:
      " Which is the BEST control to meet the Statement on Standards for Attestation Engagements 18 (SSAE-18) confidentiality category?",
    choices: [
      "A. File hashing",
      "B. Storage encryption",
      "C. Data retention policy",
      "D. Data processing",
    ],
  },
  {
    question_number: 310,
    question:
      " Which of the following BEST describes why software assurance is critical in helping prevent an increase in business and mission risk for an organization?",
    choices: [
      "A. Request for proposals (RFP) avoid purchasing software that does not meet business needs.",
      "B. Contracting processes eliminate liability for security vulnerabilities for the purchaser.",
      "C. Decommissioning of old software reduces long-term costs related to technical debt.",
      "D. Software that does not perform as intended may be exploitable which makes it vulnerable to attack.",
    ],
  },
  {
    question_number: 311,
    question:
      " An employee's home address should be categorized according to which of the following references?",
    choices: [
      "A. The consent form terms and conditions signed by employees",
      "B. An organization security plan for human resources",
      "C. Existing employee data classifications",
      "D. The organization's data classification model",
    ],
  },
  {
    question_number: 312,
    question:
      " Which of the following activities should a forensic examiner perform FIRST when determining the priority of digital evidence collection at a crime scene?",
    choices: [
      "A. Gather physical evidence.",
      "B. Assign responsibilities to personnel on the scene.",
      "C. Establish a list of files to examine.",
      "D. Establish order of volatility.",
    ],
  },
  {
    question_number: 313,
    question:
      " Which software defined networking (SDN) architectural component is responsible for translating network requirements?",
    choices: [
      "A. SDN Controller",
      "B. SDN Datapath",
      "C. SDN Northbound Interfaces",
      "D. SDN Application",
    ],
  },
  {
    question_number: 314,
    question:
      " An internal audit for an organization recently identified malicious actions by a user account. Upon further investigation, it was determined the offending user account was used by multiple people at multiple locations simultaneously for various services and applications. What is the BEST method to prevent this problem in the future?",
    choices: [
      "A. Ensure each user has their own unique account.",
      "B. Allow several users to share a generic account.",
      "C. Ensure the security information and event management (SIEM) is set to alert.",
      "D. Inform users only one user should be using the account at a time.",
    ],
  },
  {
    question_number: 315,
    question:
      " Who should perform the design review to uncover security design flaws as part of the Software Development Life Cycle (SDLC)?",
    choices: [
      "A. A security subject matter expert (SME)",
      "B. A developer subject matter expert (SME)",
      "C. The business owner",
      "D. The application owner",
    ],
  },
  {
    question_number: 316,
    question:
      " The initial security categorization should be done early in the system life cycle and should be reviewed periodically. Why is it important for this to be done correctly?",
    choices: [
      "A. It determines the functional and operational requirements.",
      "B. It determines the security requirements.",
      "C. It affects other steps in the certification and accreditation process.",
      "D. The system engineering process works with selected security controls.",
    ],
  },
  {
    question_number: 317,
    question:
      " When designing a Cyber-Physical System (CPS), which of the following should be a security practitioner's first consideration?",
    choices: [
      "A. Detection of sophisticated attackers",
      "B. Topology of the network used for the system",
      "C. Risk assessment of the system",
      "D. Resiliency of the system",
    ],
  },
  {
    question_number: 318,
    question:
      " Which of the following events prompts a review of the disaster recovery plan (DRP)?",
    choices: [
      "A. Change in senior management",
      "B. Completion of the security policy review",
      "C. Organizational merger",
      "D. New members added to the steering committee",
    ],
  },
  {
    question_number: 319,
    question:
      ' A user is allowed to access the file labeled "Financial Forecast," but only between 9:00 a.m. and 5:00 p.m., Monday through Friday. Which type of access mechanism should be used to accomplish this?',
    choices: [
      "A. Minimum access control",
      "B. Limited role-based access control (RBAC)",
      "C. Access control list (ACL)",
      "D. Rule-based access control",
    ],
  },
  {
    question_number: 320,
    question: " What is the benefit of using Network Admission Control (NAC)?",
    choices: [
      "A. NAC only supports Windows operating systems (OS).",
      "B. NAC supports validation of the endpoint's security posture prior to allowing the session to go into an authorized state.",
      "C. NAC can require the use of certificates, passwords, or a combination of both before allowing network admission.",
      "D. Operating system (OS) versions can be validated prior to allowing network access.",
    ],
  },
  {
    question_number: 321,
    question:
      " When MUST an organization's information security strategic plan be reviewed?",
    choices: [
      "A. Whenever there are major changes to the business",
      "B. Quarterly, when the organization's strategic plan is updated",
      "C. Every three years, when the organization's strategic plan is updated",
      "D. Whenever there are significant changes to a major application",
    ],
  },
  {
    question_number: 322,
    question:
      " An established information technology (IT) consulting firm is considering acquiring a successful local startup. To gain a comprehensive understanding of the startup's security posture, which type of assessment provides the BEST information?",
    choices: [
      "A. A security audit",
      "B. A tabletop exercise",
      "C. A penetration test",
      "D. A security threat model",
    ],
  },
  {
    question_number: 323,
    question:
      " An organization plans to acquire a commercial off-the-shelf (COTS) system to replace their aging home-built reporting system. When should the organization's security team FIRST get involved in this acquisition's life cycle?",
    choices: [
      "A. When the system is verified and validated",
      "B. When the need for a system is expressed and the purpose of the system is documented",
      "C. When the system is deployed into production",
      "D. When the system is being designed, purchased, programmed, developed, or otherwise constructed",
    ],
  },
  {
    question_number: 324,
    question:
      " Which of the following is a PRIMARY security weakness in the design of Domain Name System (DNS)?",
    choices: [
      "A. Each DNS server must hold the address of the root servers.",
      "B. A DNS server can be disabled in a denial-of-service (DoS) attack.",
      "C. A DNS server does not authenticate source of information.",
      "D. A DNS server database can be injected with falsified checksums.",
    ],
  },
  {
    question_number: 325,
    question:
      " To minimize the vulnerabilities of a web-based application, which of the following FIRST actions will lock down the system and minimize the risk of an attack?",
    choices: [
      "A. Apply the latest vendor patches and updates",
      "B. Run a vulnerability scanner",
      "C. Review access controls",
      "D. Install an antivirus on the server",
    ],
  },
  {
    question_number: 326,
    question:
      " An organization has implemented a password complexity and an account lockout policy enforcing five incorrect logins tries within ten minutes. Network users have reported significantly increased account lockouts. Which of the following security principles is this company affecting?",
    choices: [
      "A. Confidentiality",
      "B. Integrity",
      "C. Availability",
      "D. Authentication",
    ],
  },
  {
    question_number: 327,
    question:
      " In the last 15 years a company has experienced three electrical failures. The cost associated with each failure is listed below. Which of the following would be a reasonable annual loss expectation?",
    choices: ["A. 3,500", "B. 140,000", "C. 14,000", "D. 350,000"],
  },
  {
    question_number: 328,
    question:
      " A security practitioner has been asked to model best practices for disaster recovery (DR) and business continuity. The practitioner has decided that a formal committee is needed to establish a business continuity policy. Which of the following BEST describes this stage of business continuity development?",
    choices: [
      "A. Developing and Implementing business continuity plans (BCP)",
      "B. Project Initiation and Management",
      "C. Risk Evaluation and Control",
      "D. Business impact analysis (BIA)",
    ],
  },
  {
    question_number: 329,
    question:
      " What physical characteristic does a retinal scan biometric device measure?",
    choices: [
      "A. The amount of light reflected by the retina",
      "B. The pattern of blood vessels at the back of the eye",
      "C. The size, curvature, and shape of the retina",
      "D. The pattern of light receptors It the back of the eye",
    ],
  },
  {
    question_number: 330,
    question:
      " Which of the following BEST represents a defense in depth concept? on core switches encryption (PAM), security information and event management (SIEM) zone (DMZ) tuning",
    choices: [
      "A. Network-based data loss prevention (DLP), Network Access Control (NAC), network-based Intrusion prevention system (NIPS), Port security",
      "B. Host-based data loss prevention (DLP), Endpoint anti-malware solution, Host-based integrity checker, Laptop locks, hard disk drive (HDD)",
      "C. Endpoint security management, network intrusion detection system (NIDS), Network Access Control (NAC), Privileged Access Management",
      "D. Web application firewall (WAF), Gateway network device tuning, Database firewall, Next-Generation Firewall (NGFW), Tier-2 demilitarized",
    ],
  },
  {
    question_number: 331,
    question:
      " Which of the following is required to verify the authenticity of a digitally signed document?",
    choices: [
      "A. Agreed upon shared secret",
      "B. Digital hash of the signed document",
      "C. Recipient's public key",
      "D. Sender's private key",
    ],
  },
  {
    question_number: 332,
    question:
      " Which of the following contributes MOST to the effectiveness of a security officer?",
    choices: [
      "A. Developing precise and practical security plans",
      "B. Integrating security into the business strategies",
      "C. Understanding the regulatory environment",
      "D. Analyzing the strengths and weakness of the organization",
    ],
  },
  {
    question_number: 333,
    question:
      " Where can the Open Web Application Security Project (OWASP) list of associated vulnerabilities be found?",
    choices: [
      "A. OWASP Mobile Project",
      "B. OWASP Software Assurance Maturity Model (SAMM) Project",
      "C. OWASP Guide Project",
      "D. OWASP Top 10 Project",
    ],
  },
  {
    question_number: 334,
    question:
      " Employee training, risk management, and data handling procedures and policies could be characterized as which type of security measure?",
    choices: [
      "A. Preventative",
      "B. Management",
      "C. Non-essential",
      "D. Administrative",
    ],
  },
  {
    question_number: 335,
    question:
      " A hospital's building controls system monitors and operates the environmental equipment to maintain a safe and comfortable environment. Which of the following could be used to minimize the risk of utility supply interruption? network",
    choices: [
      "A. Digital protection and control devices capable of minimizing the adverse impact to critical utility",
      "B. Standardized building controls system software with high connectivity to hospital networks",
      "C. Lock out maintenance personnel from the building controls system access that can impact critical utility supplies",
      "D. Digital devices that can turn equipment off and continuously cycle rapidly in order to increase supplies and conceal activity on the hospital",
    ],
  },
  {
    question_number: 336,
    question:
      " Which of the following statements BEST distinguishes a stateful packet inspection firewall from a stateless packet filter firewall?",
    choices: [
      "A. The SPI inspects traffic on a packet-by-packet basis.",
      "B. The SPI inspects the flags on Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) packets.",
      "C. The SPI is capable of dropping packets based on a pre-defined rule set.",
      "D. The SPI inspects the traffic in the context of a session.",
    ],
  },
  {
    question_number: 337,
    question:
      " What is the MAIN purpose of conducting a business impact analysis (BIA)?",
    choices: [
      "A. To determine the cost for restoration of damaged information system",
      "B. To determine the controls required to return to business critical operations",
      "C. To determine the critical resources required to recover from an incident within a specified time period",
      "D. To determine the effect of mission-critical information system failures on core business processes",
    ],
  },
  {
    question_number: 338,
    question:
      " Which algorithm gets its security from the difficulty of calculating discrete logarithms in a finite field and is used to distribute keys, but cannot be used to encrypt or decrypt messages?",
    choices: [
      "A. Kerberos",
      "B. Digital Signature Algorithm (DSA)",
      "C. Diffie-Hellman",
      "D. Rivest-Shamir-Adleman (RSA)",
    ],
  },
  {
    question_number: 339,
    question:
      " Which of the following is established to collect information in accordance with pre-established metrics, utilizing information readily available in part through implemented security controls?",
    choices: [
      "A. Security Assessment Report (SAR)",
      "B. Organizational risk tolerance",
      "C. Risk assessment report",
      "D. Information Security Continuous Monitoring (ISCM)",
    ],
  },
  {
    question_number: 340,
    question:
      " When conducting a remote access session using Internet Protocol Security (IPSec), which Open Systems Interconnection (OSI) model layer does this connection use?",
    choices: ["A. Presentation", "B. Transport", "C. Network", "D. Data link"],
  },
  {
    question_number: 341,
    question:
      " Which of the following is the MOST effective corrective control to minimize the effects of a physical intrusion?",
    choices: [
      "A. Rapid response by guards or police to apprehend a possible intruder",
      "B. Sounding a loud alarm to frighten away a possible intruder",
      "C. Automatic videotaping of a possible intrusion",
      "D. Activating bright lighting to frighten away a possible intruder",
    ],
  },
  {
    question_number: 342,
    question:
      " Which of the following are the three MAIN categories of security controls?",
    choices: [
      "A. Preventative, corrective, detective",
      "B. Administrative, technical, physical",
      "C. Corrective, detective, recovery",
      "D. Confidentiality, integrity, availability",
    ],
  },
  {
    question_number: 343,
    question:
      " Which is the PRIMARY mechanism for providing the workforce with the information needed to protect an agency's vital information resources?",
    choices: [
      "A. Implementation of access provisioning process for coordinating the creation of user accounts",
      "B. Incorporating security awareness and training as part of the overall information security program",
      "C. An information technology (IT) security policy to preserve the confidentiality, integrity, and availability of systems",
      "D. Execution of periodic security and privacy assessments to the organization",
    ],
  },
  {
    question_number: 344,
    question:
      " Which of the following is considered the FIRST step when designing an internal security control assessment?",
    choices: [
      "A. Create a plan based on comprehensive knowledge of known breaches.",
      "B. Create a plan based on reconnaissance of the organization's infrastructure.",
      "C. Create a plan based on a recognized framework of known controls.",
      "D. Create a plan based on recent vulnerability scans of the systems in question.",
    ],
  },
  {
    question_number: 345,
    question:
      " The Open Web Application Security Project's (OWASP) Software Assurance Maturity Model (SAMM) allows organizations to implement a flexible software security strategy to measure organizational impact based on what risk management aspect?",
    choices: [
      "A. Risk exception",
      "B. Risk tolerance",
      "C. Risk treatment",
      "D. Risk response",
    ],
  },
  {
    question_number: 346,
    question:
      " DRAG DROP - Match the roles for an external audit to the appropriate responsibilities. Drag each role on the left to its corresponding responsibility on the right. Select and Place:",
  },
  {
    question_number: 347,
    question:
      " What is the PRIMARY reason that a bit-level copy is more desirable than a file-level copy when replicating a hard drives contents for an e-discovery investigation?",
    choices: [
      "A. The corruption of files is less likely.",
      "B. Files that have been deleted will be transferred.",
      "C. The file and directory structure is retained.",
      "D. File-level security settings will be preserved.",
    ],
  },
  {
    question_number: 348,
    question:
      " An organization outgrew its internal data center and is evaluating third-party hosting facilities. In this evaluation, which of the following is a PRIMARY factor for selection?",
    choices: [
      "A. Facility provides an acceptable level of risk",
      "B. Facility provides disaster recovery (DR) services",
      "C. Facility has physical access protection measures",
      "D. Facility provides the most cost-effective solution",
    ],
  },
  {
    question_number: 349,
    question:
      " A large manufacturing organization arranges to buy an industrial machine system to produce a new line of products. The system includes software provided to the vendor by a third-party organization. The financial risk to the manufacturing organization starting production is high. What step should the manufacturing organization take to minimize its financial risk in the new venture prior to the purchase? price.",
    choices: [
      "A. Require that the software be thoroughly tested by an accredited independent software testing company.",
      "B. Hire a performance tester to execute offline tests on a system.",
      "C. Calculate the possible loss in revenue to the organization due to software bugs and vulnerabilities, and compare that to the system's overall",
      "D. Place the machine behind a Layer 3 firewall.",
    ],
  },
  {
    question_number: 350,
    question:
      " Which of the following is the BEST method a security practitioner can use to ensure that systems and sub-systems gracefully handle invalid input?",
    choices: [
      "A. Unit testing",
      "B. Acceptance testing",
      "C. Integration testing",
      "D. Negative testing",
    ],
  },
  {
    question_number: 351,
    question:
      " Commercial off-the-shelf (COTS) software presents which of the following additional security concerns?",
    choices: [
      "A. Vendors take on the liability for COTS software vulnerabilities.",
      "B. In-house developed software is inherently less secure.",
      "C. COTS software is inherently less secure.",
      "D. Exploits for COTS software are well documented and publicly available.",
    ],
  },
  {
    question_number: 352,
    question:
      " When conducting a third-party risk assessment of a new supplier, which of the following reports should be reviewed to confirm the operating effectiveness of the security, availability, confidentiality, and privacy trust principles?",
    choices: [
      "A. Service Organization Control (SOC) 1, Type 2",
      "B. Service Organization Control (SOC) 2, Type 2",
      "C. International Organization for Standardization (ISO) 27001",
      "D. International Organization for Standardization (ISO) 27002",
    ],
  },
  {
    question_number: 353,
    question:
      " Which of the following would be the BEST mitigation practice for man-in-the-middle (MITM) Voice over Internet Protocol (VoIP) attacks?",
    choices: [
      "A. Use Secure Shell (SSH) protocol",
      "B. Use File Transfer Protocol (FTP)",
      "C. Use Transport Layer Security (TLS) protocol",
      "D. Use Media Gateway Control Protocol (MGCP)",
    ],
  },
  {
    question_number: 354,
    question:
      " The Chief Information Security Officer (CISO) is concerned about business application availability. The organization was recently subject to a ransomware attack that resulted in the unavailability of applications and services for 10 working days that required paper-based running of all main business processes. There are now aggressive plans to enhance the Recovery Time Objective (RTO) and cater for more frequent data captures. Which of the following solutions should be implemented to fully comply to the new business requirements?",
    choices: [
      "A. Virtualization",
      "B. Antivirus",
      "C. Host-based intrusion prevention system (HIPS)",
      "D. Process isolation",
    ],
  },
  {
    question_number: 355,
    question:
      " What is the MOST appropriate hierarchy of documents when implementing a security program?",
    choices: [
      "A. Policy, organization principle, standard, guideline",
      "B. Standard, policy, organization principle, guideline",
      "C. Organization principle, policy, standard, guideline",
      "D. Organization principle, guideline, policy, standard",
    ],
  },
  {
    question_number: 356,
    question:
      " Which of the following is the MOST important consideration in selecting a security testing method based on different Radio-Frequency Identification (RFID) vulnerability types?",
    choices: [
      "A. An understanding of the attack surface",
      "B. Adaptability of testing tools to multiple technologies",
      "C. The quality of results and usability of tools",
      "D. The performance and resource utilization of tools",
    ],
  },
  {
    question_number: 357,
    question:
      " An organization's internal audit team performed a security audit on the company's system and reported that the manufacturing application is rarely updated along with other issues categorized as minor. Six months later, an external audit team reviewed the same system with the same scope, but identified severe weaknesses in the manufacturing application's security controls. What is MOST likely to be the root cause of the internal audit team's failure in detecting these security issues?",
    choices: [
      "A. Inadequate security patch testing",
      "B. Inadequate test coverage analysis",
      "C. Inadequate log reviews",
      "D. Inadequate change control procedures",
    ],
  },
  {
    question_number: 358,
    question:
      " Which of the following is a limitation of the Bell-LaPadula model? higher classification.",
    choices: [
      'A. Segregation of duties (SoD) is difficult to implement as the "no read-up" rule limits the ability of an object to access information with a',
      "B. Mandatory access control (MAC) is enforced at all levels making discretionary access control (DAC) impossible to implement.",
      "C. It contains no provision or policy for changing data access control and works well only with access systems that are static in nature.",
      "D. It prioritizes integrity over confidentiality which can lead to inadvertent information disclosure.",
    ],
  },
  {
    question_number: 359,
    question:
      " Which of the following vulnerability assessment activities BEST exemplifies the Examine method of assessment?",
    choices: [
      "A. Asking the Information System Security Officer (ISSO) to describe the organization's patch management processes",
      "B. Ensuring that system audit logs capture all relevant data fields required by the security controls baseline",
      "C. Logging into a web server using the default administrator account and a default password",
      "D. Performing Port Scans of selected network hosts to enumerate active services",
    ],
  },
  {
    question_number: 360,
    question:
      " Which of the following BEST ensures the integrity of transactions to intended recipients?",
    choices: [
      "A. Public key infrastructure (PKI)",
      "B. Blockchain technology",
      "C. Pre-shared key (PSK)",
      "D. Web of trust",
    ],
  },
  {
    question_number: 361,
    question:
      " Recently, an unknown event has disrupted a single Layer-2 network that spans between two geographically diverse data centers. The network engineers have asked for assistance in identifying the root cause of the event. Which of the following is the MOST likely cause?",
    choices: [
      "A. Smurf attack",
      "B. Misconfigured routing protocol",
      "C. Broadcast domain too large",
      "D. Address spoofing",
    ],
  },
  {
    question_number: 362,
    question:
      " A company is moving from the V model to Agile development. How can the information security department BEST ensure that secure design principles are implemented in the new methodology?",
    choices: [
      "A. Information security requirements are captured in mandatory user stories.",
      "B. All developers receive a mandatory targeted information security training.",
      "C. The information security department performs an information security assessment after each sprint.",
      "D. The non-financial information security requirements remain mandatory for the new model.",
    ],
  },
  {
    question_number: 363,
    question:
      " Which of the (ISC) Code of Ethics canons is MOST reflected when preserving the value of systems, applications, and entrusted information while avoiding conflicts of interest?",
    choices: [
      "A. Provide diligent and competent service to principles.",
      "B. Act honorably, honestly, justly, responsibly, and legally.",
      "C. Advance and protect the profession.",
      "D. Protect society, the commonwealth, and the infrastructure.",
    ],
  },
  {
    question_number: 364,
    question:
      " Which of the following should exist in order to perform a security audit?",
    choices: [
      "A. Neutrality of the auditor",
      "B. Industry framework to audit against",
      "C. External (third-party) auditor",
      "D. Internal certified auditor",
    ],
  },
  {
    question_number: 365,
    question:
      " When telephones in a city are connected by a single exchange, the caller can only connect with the switchboard operator. The operator then manually connects the call. This is an example of which type of network topology?",
    choices: [
      "A. Point-to-Point Protocol (PPP)",
      "B. Bus",
      "C. Star",
      "D. Tree",
    ],
  },
  {
    question_number: 366,
    question:
      " A firm within the defense industry has been directed to comply with contractual requirements for encryption of a government client's Controlled Unclassified Information (CUI). What encryption strategy represents how to protect data at rest in the MOST efficient and cost-effective manner? systems",
    choices: [
      "A. Perform logical separation of program information, using virtualized storage solutions with encryption management in the back-end disk",
      "B. Perform logical separation of program information, using virtualized storage solutions with built-in encryption at the virtualization layer",
      "C. Perform physical separation of program information and encrypt only information deemed critical by the defense client",
      "D. Implement data at rest encryption across the entire storage area network (SAN)",
    ],
  },
  {
    question_number: 367,
    question:
      " Which audit type is MOST appropriate for evaluating the effectiveness of a security program?",
    choices: ["A. Analysis", "B. Threat", "C. Assessment", "D. Validation"],
  },
  {
    question_number: 368,
    question:
      " Before allowing a web application into the production environment, the security practitioner performs multiple types of tests to confirm that the web application performs as expected. To test the username field, the security practitioner creates a test that enters more characters into the field than is allowed. Which of the following BEST describes the type of test performed?",
    choices: [
      "A. Misuse case testing",
      "B. Interface testing",
      "C. Web session testing",
      "D. Penetration testing",
    ],
  },
  {
    question_number: 369,
    question:
      " If the wide area network (WAN) is supporting converged applications like Voice over Internet Protocol (VoIP), which of the following becomes even MORE essential to the assurance of the network?",
    choices: [
      "A. Boundary routing",
      "B. Classless Inter-Domain Routing (CIDR)",
      "C. Internet Protocol (IP) routing lookups",
      "D. Deterministic routing",
    ],
  },
  {
    question_number: 370,
    question:
      " Why would a system be structured to isolate different classes of information from one another and segregate them by user jurisdiction?",
    choices: [
      "A. The organization is required to provide different services to various third-party organizations.",
      "B. The organization can avoid e-discovery processes in the event of litigation.",
      "C. The organization's infrastructure is clearly arranged and scope of responsibility is simplified.",
      "D. The organization can vary its system policies to comply with conflicting national laws.",
    ],
  },
  {
    question_number: 371,
    question:
      " An organization implements Network Access Control (NAC) using Institute of Electrical and Electronics Engineers (IEEE) 802.1x and discovers the printers do not support the IEEE 802.1x standard. Which of the following is the BEST resolution?",
    choices: [
      "A. Implement port security on the switch ports for the printers.",
      "B. Do nothing; IEEE 802.1x is irrelevant to printers.",
      "C. Install an IEEE 802.1x bridge for the printers.",
      "D. Implement a virtual local area network (VLAN) for the printers.",
    ],
  },
  {
    question_number: 372,
    question:
      " Which of the following goals represents a modern shift in risk management according to National Institute of Standards and Technology (NIST)?",
    choices: [
      "A. Provide an improved mission accomplishment approach.",
      "B. Focus on operating environments that are changing, evolving, and full of emerging threats.",
      "C. Enable management to make well-informed risk-based decisions justifying security expenditure.",
      "D. Secure information technology (IT) systems that store, mass, or transmit organizational information.",
    ],
  },
  {
    question_number: 373,
    question:
      " Which of the following security tools monitors devices and records the information in a central database for further analysis?",
    choices: [
      "A. Antivirus",
      "B. Host-based intrusion detection system (HIDS)",
      "C. Security orchestration automation and response",
      "D. Endpoint detection and response (EDR)",
    ],
  },
  {
    question_number: 374,
    question:
      " In addition to life, protection of which of the following elements is MOST important when planning a data center site?",
    choices: [
      "A. Data and hardware",
      "B. Property and operations",
      "C. Resources and reputation",
      "D. Profits and assets",
    ],
  },
  {
    question_number: 375,
    question:
      " Which of the following documents specifies services from the client's viewpoint?",
    choices: [
      "A. Business Impact analysis (BIA)",
      "B. Service level agreement (SLA)",
      "C. Service Level Requirement (SLR)",
      "D. Service level report",
    ],
  },
  {
    question_number: 376,
    question:
      " Which of the following should be included in a good defense-in-depth strategy provided by object-oriented programming for software development?",
    choices: [
      "A. Polymorphism",
      "B. Inheritance",
      "C. Polyinstantiation",
      "D. Encapsulation",
    ],
  },
  {
    question_number: 377,
    question:
      " Which of the following is a key responsibility for a data steward assigned to manage an enterprise data lake?",
    choices: [
      "A. Ensure proper business definition, value, and usage of data collected and stored within the enterprise data lake.",
      "B. Ensure adequate security controls applied to the enterprise data lake.",
      "C. Ensure proper and identifiable data owners for each data element stored within an enterprise data lake.",
      "D. Ensure that any data passing within remit is being used in accordance with the rules and regulations of the business.",
    ],
  },
  {
    question_number: 378,
    question:
      " What is the FIRST step prior to executing a test of an organization's disaster recovery (DR) or business continuity plan (BCP)?",
    choices: [
      "A. Develop clear evaluation criteria.",
      "B. Identify key stakeholders.",
      "C. Develop recommendations for disaster scenarios.",
      "D. Identify potential failure points.",
    ],
  },
  {
    question_number: 379,
    question:
      " A breach investigation found a website was exploited through an open source component. What is the FIRST step in the process that could have prevented this breach?",
    choices: [
      "A. Application whitelisting",
      "B. Vulnerability remediation",
      "C. Web application firewall (WAF)",
      "D. Software inventory",
    ],
  },
  {
    question_number: 380,
    question:
      ' What security principle addresses the issue of "Security by Obscurity"?',
    choices: [
      "A. Open design",
      "B. Role Based Access Control (RBAC)",
      "C. Segregation of duties (SoD)",
      "D. Least privilege",
    ],
  },
  {
    question_number: 381,
    question:
      " What is the MOST important goal of conducting security assessments?",
    choices: [
      "A. To align the security program with organizational risk appetite",
      "B. To demonstrate proper function of security controls and processes to senior management",
      "C. To prepare the organization for an external audit, particularly by a regulatory entity",
      "D. To discover unmitigated security vulnerabilities, and propose paths for mitigating them",
    ],
  },
  {
    question_number: 382,
    question:
      " Which of the following virtual network configuration options is BEST to protect virtual machines (VM)?",
    choices: [
      "A. Data segmentation",
      "B. Data encryption",
      "C. Traffic filtering",
      "D. Traffic throttling",
    ],
  },
  {
    question_number: 383,
    question:
      " Which of the following features is MOST effective in mitigating against theft of data on a corporate mobile device which has been stolen?",
    choices: [
      "A. Mobile Device Management (MDM) with device wipe",
      "B. Mobile device tracking with geolocation",
      "C. Virtual private network (VPN) with traffic encryption",
      "D. Whole device encryption with key escrow",
    ],
  },
  {
    question_number: 384,
    question:
      " An organization is implementing data encryption using symmetric ciphers and the Chief Information Officer (CIO) is concerned about the risk of using one key to protect all sensitive data. The security practitioner has been tasked with recommending a solution to address the CIO's concerns. Which of the following is the BEST approach to achieving the objective by encrypting all sensitive data?",
    choices: [
      "A. Use a Secure Hash Algorithm 256 (SHA-256).",
      "B. Use Rivest-Shamir-Adleman (RSA) keys.",
      "C. Use a hierarchy of encryption keys.",
      "D. Use Hash Message Authentication Code (HMAC) keys.",
    ],
  },
  {
    question_number: 385,
    question:
      " Which of the following is a MUST for creating a new custom-built, cloud-native application designed to be horizontally scalable?",
    choices: [
      "A. Network as a Service (NaaS)",
      "B. Platform as a Service (PaaS)",
      "C. Infrastructure as a Service (IaaS)",
      "D. Software as a Service (SaaS)",
    ],
  },
  {
    question_number: 386,
    question:
      " Which of the following access control mechanisms characterized subjects and objects using a set of encoded security-relevant properties?",
    choices: [
      "A. Mandatory access control (MAC)",
      "B. Role-based access control (RBAC)",
      "C. Attribute-based access control (ABAC)",
      "D. Discretionary access control (DAC)",
    ],
  },
  {
    question_number: 387,
    question:
      " Which kind of dependencies should be avoided when implementing secure design principles in software-defined networking (SDN)?",
    choices: ["A. Hybrid", "B. Circular", "C. Dynamic", "D. Static"],
  },
  {
    question_number: 388,
    question:
      " Which mechanism provides the BEST protection against buffer overflow attacks in memory?",
    choices: [
      "A. Address Space Layout Randomization (ASLR)",
      "B. Memory management unit",
      "C. Stack and heap allocation",
      "D. Dynamic random access memory (DRAM)",
    ],
  },
  {
    question_number: 389,
    question:
      " Which of the following terms is used for online service providers operating within a federation?",
    choices: [
      "A. Active Directory Federation Services (ADFS)",
      "B. Relying party (RP)",
      "C. Single sign-on (SSO)",
      "D. Identity and access management (IAM)",
    ],
  },
  {
    question_number: 390,
    question:
      " The Chief Information Security Officer (CISO) of a large financial institution is responsible for implementing the security controls to protect the confidentiality and integrity of the organization\u00e2\u20ac\u2122s Information Systems. Which of the controls below is prioritized FIRST?",
    choices: [
      "A. Firewall and reverse proxy",
      "B. Web application firewall (WAF) and HyperText Transfer Protocol Secure (HTTPS)",
      "C. Encryption of data in transit and data at rest",
      "D. Firewall and intrusion prevention system (IPS)",
    ],
  },
  {
    question_number: 391,
    question:
      " Who is the BEST person to review developed application code to ensure it has been tested and verified?",
    choices: [
      "A. A developer who knows what is expected of the application, but not the same one who developed it.",
      "B. A member of quality assurance (QA) should review the developer\u00e2\u20ac\u2122s code.",
      "C. A developer who understands the application requirements document, and who also developed the code.",
      "D. The manager should review the developer\u00e2\u20ac\u2122s application code.",
    ],
  },
  {
    question_number: 392,
    question:
      " A bank failed to meet service-level agreements (SLA) with customers after suffering from a database failure of the transaction processing system (TPS) that resulted in delayed financial deposits. A regulatory agency overseeing the bank would like to determine if the cause of the delay was a material weakness. Which of the following documents is MOST relevant for the regulatory agency to review?",
    choices: [
      "A. Business continuity plan (BCP)",
      "B. Business impact analysis (BIA)",
      "C. Continuity of Operations Plan (COOP)",
      "D. Enterprise resource planning (ERP)",
    ],
  },
  {
    question_number: 393,
    question:
      " What is the MOST effective way to ensure that a cloud service provider does not access a customer\u00e2\u20ac\u2122s data stored within its infrastructure?",
    choices: [
      "A. Use the organization\u00e2\u20ac\u2122s encryption tools and data management controls.",
      "B. Ensure that the cloud service provider will contractually not access data unless given explicit authority.",
      "C. Request audit logs on a regular basis.",
      "D. Utilize the cloud provider\u00e2\u20ac\u2122s key management and elastic hardware security module (HSM) support.",
    ],
  },
  {
    question_number: 394,
    question:
      " Prohibiting which of the following techniques is MOST helpful in preventing users from obtaining confidential data by using statistical queries?",
    choices: [
      "A. Sequences of queries that refer repeatedly to the same population",
      "B. Repeated queries that access multiple databases",
      "C. Selecting all records from a table and displaying all columns",
      "D. Running queries that access sensitive data",
    ],
  },
  {
    question_number: 395,
    question:
      " Which of the following is a major component of the federated identity management (FIM) implementation model and used to establish a network between dozens of organizations?",
    choices: [
      "A. Identity as a Service (IDaaS)",
      "B. Attribute-based access control (ABAC)",
      "C. Cross-certification",
      "D. Trusted third party (TTP)",
    ],
  },
  {
    question_number: 396,
    question:
      " A Chief Information Security Officer (CISO) is considering various proposals for evaluating security weaknesses and vulnerabilities at the source code level. Which of the following items BEST equips the CISO to make smart decisions for the organization?",
    choices: [
      "A. The Common Weakness Risk Analysis Framework (CWRAF)",
      "B. The Common Vulnerabilities and Exposures (CVE)",
      "C. The Common Weakness Enumeration (CWE)",
      "D. The Open Web Application Security Project (OWASP) Top Ten",
    ],
  },
  {
    question_number: 397,
    question:
      " Which of the following methods is MOST effective in mitigating Cross-Site Scripting (XSS) vulnerabilities within HyperText Markup Language (HTML) websites? locked down",
    choices: [
      "A. Use antivirus and endpoint protection on the server to secure the web-based application",
      "B. Place the web-based system in a defined Demilitarized Zone (DMZ)",
      "C. Use .NET framework with .aspx extension to provide a higher level of security to the web application so that the web server display can be",
      "D. Not returning any HTML tags to the browser client",
    ],
  },
  {
    question_number: 398,
    question:
      " Which of the following MOST accurately describes the Security Target (ST) in the Common Criteria framework?",
    choices: [
      "A. The set of rules that define how resources or assets are managed and protected",
      "B. A product independent set of security criteria for a class of products",
      "C. The product and documentation to be evaluated",
      "D. A document that includes a product specific set of security criteria",
    ],
  },
  {
    question_number: 399,
    question:
      " An organization has approved deployment of a virtual environment for the development servers and has established controls for restricting access to resources. In order to implement best security practices for the virtual environment, the security team MUST also implement which of the following steps?",
    choices: [
      "A. Implement a dedicated management network for the hypervisor.",
      "B. Deploy Terminal Access Controller Access Control System Plus (TACACS+) for authentication.",
      "C. Implement complex passwords using Privileged Access Management (PAM).",
      "D. Capture network traffic for the network interface.",
    ],
  },
  {
    question_number: 400,
    question:
      " Which of the following is a weakness of the Data Encryption Standard (DES)?",
    choices: [
      "A. Block encryption scheme",
      "B. Use of same key for encryption and decryption",
      "C. Publicly disclosed algorithm",
      "D. Inadequate key length",
    ],
  },
  {
    question_number: 401,
    question:
      " What are facets of trustworthy software in supply chain operations?",
    choices: [
      "A. Functionality, safety, reliability, integrity, and accuracy",
      "B. Confidentiality, integrity, availability, authenticity, and possession",
      "C. Safety, reliability, availability, resilience, and security",
      "D. Reparability, security, upgradability, functionality, and accuracy",
    ],
  },
  {
    question_number: 402,
    question:
      " In order to meet the project delivery deadline, a web application developer used readily available software components. Which is the BEST method for reducing the risk associated with this practice?",
    choices: [
      "A. Ensure developers are using approved software development frameworks.",
      "B. Obtain components from official sources over secured link.",
      "C. Ensure encryption of all sensitive data in a manner that protects and defends against threats.",
      "D. Implement a process to verify the effectiveness of the software components and settings.",
    ],
  },
  {
    question_number: 403,
    question:
      " To ensure proper governance of information throughout the lifecycle, which of the following should be assigned FIRST?",
    choices: ["A. Owner", "B. Classification", "C. Custodian", "D. Retention"],
  },
  {
    question_number: 404,
    question:
      " An effective information security strategy is PRIMARILY based upon which of the following?",
    choices: [
      "A. Risk management practices",
      "B. Security budget constraints",
      "C. Security control implementation",
      "D. Industry and regulatory standards",
    ],
  },
  {
    question_number: 405,
    question:
      " One of Canada\u00e2\u20ac\u2122s leading pharmaceutical firms recently hired a Chief Data Officer (CDO) to oversee its data privacy program. The CDO has discovered the firm\u00e2\u20ac\u2122s marketing department has been collecting information from individuals without their knowledge and consent via the company website. Which of the following privacy regulations should concern the CDO regarding this practice?",
    choices: [
      "A. The Health Insurance Portability and Accountability Act (HIPAA)",
      "B. The Privacy Act of 1974",
      "C. The Fair Information Practice Principles (FIPPs)",
      "D. The Personal Information Protection and Electronic Documents Act (PIPEDA)",
    ],
  },
  {
    question_number: 406,
    question:
      " An organization is attempting to strengthen the configuration of its enterprise resource planning (ERP) software in order to enforce sufficient segregation of duties (SoD). Which of the following approaches would BEST improve SoD effectiveness?",
    choices: [
      "A. Implementation of frequent audits of access and activity in the ERP by a separate team with no operational duties",
      "B. Implementation of strengthened authentication measures including mandatory second-factor authentication",
      "C. Review of ERP access profiles to enforce the least-privilege principle based on existing employee responsibilities",
      "D. Review of employee responsibilities and ERP access profiles to differentiate mission activities from system support activities",
    ],
  },
  {
    question_number: 407,
    question:
      " Which type of log collection is focused on detecting and responding to attacks, malware infection, and data theft?",
    choices: [
      "A. Intrusion detection",
      "B. Operational",
      "C. Security",
      "D. Compliance",
    ],
  },
  {
    question_number: 408,
    question:
      " If a medical analyst independently provides protected health information (PHI) to an external marketing organization, which ethical principal is this a violation of?",
    choices: [
      "A. Higher ethic in the worst case",
      "B. Informed consent",
      "C. Change of scale test",
      "D. Privacy regulations",
    ],
  },
  {
    question_number: 409,
    question:
      " Which of the following measures is the MOST critical in order to safeguard from a malware attack on a smartphone?",
    choices: [
      "A. Enable strong password.",
      "B. Install anti-virus for mobile.",
      "C. Enable biometric authentication.",
      "D. Prevent jailbreaking or rooting.",
    ],
  },
  {
    question_number: 410,
    question:
      " Which of the following Secure Shell (SSH) remote access practices is MOST suited for scripted functions?",
    choices: [
      "A. Restricting authentication by Internet Protocol (IP) address",
      "B. Requiring multi-factor authentication (MFA)",
      "C. Implementing access credentials management tools",
      "D. Using public key-based authentication method",
    ],
  },
  {
    question_number: 411,
    question:
      " Which stage in the identity management (IdM) lifecycle constitutes the GREATEST risk for an enterprise if performed incorrectly?",
    choices: [
      "A. Propagating",
      "B. Deprovisioning",
      "C. Provisioning",
      "D. Maintaining",
    ],
  },
  {
    question_number: 412,
    question:
      " Which of the following reports provides the BEST attestation of detailed controls when evaluating an Identity as a Service (IDaaS) solution?",
    choices: [
      "A. Service Organization Control (SOC) 1",
      "B. Service Organization Control (SOC) 2",
      "C. Service Organization Control (SOC) 3",
      "D. Statement on Auditing Standards (SAS) 70",
    ],
  },
  {
    question_number: 413,
    question:
      " Single sign-on (SSO) for federated identity management (FIM) must be implemented and managed so that authorization mechanisms protect access to privileged information using OpenID Connect (OIDC) token or Security Assertion Markup Language (SAML) assertion. What is the BEST method to use to protect them?",
    choices: [
      "A. Pass data in a bearer assertion, only signed by the identity provider.",
      "B. Tokens and assertion should use base64 encoding to assure confidentiality.",
      "C. Use a challenge and response mechanism such as Challenge Handshake Authentication Protocol (CHAP).",
      "D. The access token or assertion should be encrypted to ensure privacy.",
    ],
  },
  {
    question_number: 414,
    question:
      " The client of a security firm reviewed a vulnerability assessment report and claims the report is inaccurate. The client states that the vulnerabilities listed are not valid because the host\u00e2\u20ac\u2122s operating system (OS) was not properly detected. Where in the vulnerability assessment process did the error MOST likely occur?",
    choices: [
      "A. Report writing",
      "B. Detection",
      "C. Enumeration",
      "D. Scanning",
    ],
  },
  {
    question_number: 415,
    question:
      " For a victim of a security breach to prevail in a negligence claim, what MUST the victim establish?",
    choices: [
      "A. Concern",
      "B. Breach of contract",
      "C. Proximate cause",
      "D. Hardship",
    ],
  },
  {
    question_number: 416,
    question:
      " A large international organization that collects information from its consumers has contracted with a Software as a Service (SaaS) cloud provider to process this data. The SaaS cloud provider uses additional data processing to demonstrate other capabilities it wishes to offer to the data owner. This vendor believes additional data processing activity is allowed since they are not disclosing to other organizations. Which of the following BEST supports this rationale?",
    choices: [
      "A. The data was encrypted at all times and only a few cloud provider employees had access.",
      "B. As the data owner, the cloud provider has the authority to direct how the data will be processed.",
      "C. As the data processor, the cloud provider has the authority to direct how the data will be processed.",
      "D. The agreement between the two parties is vague and does not detail how the data can be used.",
    ],
  },
  {
    question_number: 417,
    question:
      " A security engineer is conducting an audit of an organization\u00e2\u20ac\u2122s Voice over Internet Protocol (VoIP) phone network due to a large increase in charges from their phone provider. The engineer discovers unauthorized endpoints have connected to the phone server from the public internet and placed hundreds of unauthorized calls to parties around the globe. Which type of attack occurred?",
    choices: [
      "A. Control eavesdropping",
      "B. Toll fraud",
      "C. Call hijacking",
      "D. Address spoofing",
    ],
  },
  {
    question_number: 418,
    question:
      " An organization is looking to improve threat detection on their wireless network. The company goal is to automate alerts to improve response efforts. Which of the following best practices should be implemented FIRST?",
    choices: [
      "A. Deploy a standalone guest Wi-Fi network.",
      "B. Implement multi-factor authentication (MFA) on all domain accounts.",
      "C. Deploy a wireless intrusion detection system (IDS).",
      "D. Implement 802.1x authentication.",
    ],
  },
  {
    question_number: 419,
    question:
      " Security personnel should be trained by emergency management personnel in what to do before and during a disaster, as well as their role in recovery efforts. Personnel should take required training for emergency response procedures and protocols. Which part of physical security design does this fall under?",
    choices: [
      "A. Legal concerns",
      "B. Loss prevention",
      "C. Emergency preparedness",
      "D. Liability for employee conduct",
    ],
  },
  {
    question_number: 420,
    question:
      " How is protection for hypervisor host and software administration functions BEST achieved?",
    choices: [
      "A. Enforce network controls using a host-based firewall.",
      "B. Deploy the management interface in a dedicated virtual network segment.",
      "C. The management traffic pathway should have separate physical network interface cards (NIC) and network.",
      "D. Deny permissions to specific virtual machines (VM) groups and objects.",
    ],
  },
  {
    question_number: 421,
    question:
      " To ensure compliance with the General Data Protection Regulation (GDPR), who in the organization should the help desk manager confer with before selecting a Software as a Service (SaaS) solution?",
    choices: [
      "A. Data owner",
      "B. Database administrator (DBA)",
      "C. Data center manager",
      "D. Data Protection Officer (DPO)",
    ],
  },
  {
    question_number: 422,
    question:
      " An Information System Security Officer (ISSO) employed by a large corporation, while also freelancing in a similar role for a competitor, violates what canon of the (ISC)2 Code of Professional Ethics?",
    choices: [
      "A. Advance and protect the profession",
      "B. Provide diligent and competent service to principals",
      "C. Act honorably, honestly, justly, responsibly, and legally",
      "D. Protect society, the commonwealth, and the infrastructure",
    ],
  },
  {
    question_number: 423,
    question:
      " Which is the FIRST action the Incident Response team should take when an incident is suspected?",
    choices: [
      "A. Choose a containment strategy.",
      "B. Record all facts regarding the incident.",
      "C. Attempt to identify the attacker.",
      "D. Notify management of the incident.",
    ],
  },
  {
    question_number: 424,
    question:
      " A hospital has three data classification levels: shareable without restrictions, shareable with restrictions, and internal use only. Which of the following BEST demonstrates adhering to principles of good enterprise data classification? employee lunchroom.",
    choices: [
      'A. A printout of the employee code of conduct marked "shareable with restrictions" is posted in the hallway where patients have access.',
      'B. A printout of the employee code of conduct marked "internal use only" is posted in the waiting room.',
      'C. A memo regarding a newly discovered data breach marked as "internal use only" is posted on the wall in the employee lunchroom.',
      'D. An electronic health record (EHR) with personally identifiable information (PII) marked as "sharable with restrictions" is found in the',
    ],
  },
  {
    question_number: 425,
    question:
      " A web application requires users to register before they can use its services. Users must choose a unique username and a password that contains a minimum of eight characters. Which method MUST be used to store these passwords to ensure offline attacks are difficult?",
    choices: [
      "A. Use an encryption algorithm that is fast with a random per-user encryption key.",
      "B. Use a hash function that is fast with a per-user random salt.",
      "C. Use a hash function with a cost factor and a per-user random salt.",
      "D. Use an encryption algorithm with a random master key.",
    ],
  },
  {
    question_number: 426,
    question:
      " Which of the following is the PRIMARY objective of performing scans with an active discovery tool?",
    choices: [
      "A. Discovering virus and malware activity",
      "B. Discovering changes for security configuration management (CM)",
      "C. Asset identification (ID) and inventory management",
      "D. Vulnerability management and remediation",
    ],
  },
  {
    question_number: 427,
    question:
      " A large law firm would like to enable employees to participate in a bring your own device (BYOD) program. Only devices with up-to-date antivirus and operating system (OS) patches will be allowed on the network. Which solution will BEST enforce the security requirements?",
    choices: [
      "A. Endpoint Detection and Response",
      "B. Next-Generation Firewall",
      "C. Intrusion detection and prevention system (IDPS)",
      "D. Network Access Control (NAC)",
    ],
  },
  {
    question_number: 428,
    question:
      " A security operations center (SOC) discovers a recently deployed router beaconing to a malicious website. Replacing the router fixes the issue. What is the MOST likely cause of the router\u00e2\u20ac\u2122s behavior?",
    choices: [
      "A. The network administrator failed to reconfigure the router\u00e2\u20ac\u2122s access control list (ACL).",
      "B. The router was damaged during shipping or installed incorrectly.",
      "C. The router was counterfeit and acquired through unauthorized channels.",
      "D. The network administrator failed to update the router\u00e2\u20ac\u2122s firmware.",
    ],
  },
  {
    question_number: 429,
    question:
      " The principle that personally identifiable information (PII) should be kept up-to-date and relevant to the purposes for which they are to be used is attributed to which fair information practice per the United States (US) Organization for Economic Cooperation and Development (OECD)?",
    choices: [
      "A. Purpose Specification",
      "B. Security Safeguards",
      "C. Collection Limitation",
      "D. Data Quality",
    ],
  },
  {
    question_number: 430,
    question:
      " Which of the following are common components of a Security Assertion Markup Language (SAML) based federation system?",
    choices: [
      "A. Client, Service Provider, identity provider (IdP), Token",
      "B. Client, Service Provider, Resource Server, Grant",
      "C. Client, Authorization Server, identity provider (IdP), Claim",
      "D. Client, Authorization Server, Resource Server, Assertion",
    ],
  },
  {
    question_number: 431,
    question:
      " Which of the following is the MOST effective way to ensure hardware and software remain updated throughout an organization?",
    choices: [
      "A. Performance of frequent security configuration audits",
      "B. Performance of regular vulnerability scans",
      "C. Use an inventory management tool",
      "D. Use an automated configuration monitoring system",
    ],
  },
  {
    question_number: 432,
    question:
      " When developing an electronic health record (EHR) in the United States (US), which of the following would be the BEST source of information for any compliance requirements?",
    choices: [
      "A. World Health Organization (WHO)",
      "B. International Organization for Standardization (ISO)",
      "C. Health and Human Services (HHS)",
      "D. American Public Health Association (APHA)",
    ],
  },
  {
    question_number: 433,
    question:
      " An organization suspects it is receiving spoofed e-mails from a foreign-hosted web e-mail service. Where can the MOST relevant be found to begin the process of identifying the perpetrator?",
    choices: [
      "A. E-mail logs from foreign-hosted web server",
      "B. Message header of received e-mails",
      "C. Traffic logs from the corporate firewall",
      "D. Log files of the corporate Simple Mail Transfer Protocol (SMTP) server",
    ],
  },
  {
    question_number: 434,
    question:
      " A new internal auditor is tasked with auditing the supply chain. The system owner stated that the last internal auditor was terminated because the auditor discovered too many deficient controls. The auditor reports this conversation to their manager. Which of the following audit integrity principles BEST applies to this situation?",
    choices: [
      "A. Demonstrate competence while performing professional duties.",
      "B. Perform professional duties with honesty, diligence, and responsibility.",
      "C. Perform professional duties in accordance with company policy.",
      "D. Be aware of any influences that may be exerted on professional judgement.",
    ],
  },
  {
    question_number: 435,
    question:
      " An organization implements supply chain risk management (SCRM) into all phases of the Systems Development Life Cycle (SDLC). What methodology is MOST important to ensure that SCRM requirements are met?",
    choices: [
      "A. Supplier self-assessment",
      "B. Procurement assessment",
      "C. Vulnerability assessment",
      "D. Third-party assessment",
    ],
  },
  {
    question_number: 436,
    question:
      " An organization needs to evaluate the effectiveness of security controls implemented on a new system. Which of the following roles should the organization entrust to conduct the evaluation?",
    choices: [
      "A. Authorizing Official (AO)",
      "B. System owner",
      "C. Control assessor",
      "D. Information System Security Officer (ISSO)",
    ],
  },
  {
    question_number: 437,
    question:
      " During a disruptive event, which security continuity objectives will maintain an organization\u00e2\u20ac\u2122s information security to a predetermined level?",
    choices: [
      "A. Disaster recovery plan (DRP)",
      "B. Impact assessment report",
      "C. Information security continuity plan",
      "D. Business continuity plan (BCP)",
    ],
  },
  {
    question_number: 438,
    question:
      " An organization is implementing a bring your own device (BYOD) policy. What would be BEST for mitigating the risk of users managing their own devices and potentially bringing in malware?",
    choices: [
      "A. Setting up access control lists (ACL) for these devices.",
      "B. Installing a firewall on the organization\u00e2\u20ac\u2122s primary network.",
      "C. Setting up a separate network within the organization\u00e2\u20ac\u2122s demilitarized zone (DMZ).",
      "D. Setting up a separate, external wired or wireless network dedicated to these devices.",
    ],
  },
  {
    question_number: 439,
    question:
      " An organization acquired used technological equipment. This equipment will be integrated with new and existing business processes. What is the MOST appropriate consideration to identify the equipment that requires protection?",
    choices: [
      "A. Total monetary value of the acquisition",
      "B. The age of the computing hardware",
      "C. Stakeholder concerns of how the assets are used",
      "D. Length and extent of support by the vendor",
    ],
  },
  {
    question_number: 440,
    question:
      " Which of the following is one of the key objectives regarding data management roles and responsibilities?",
    choices: [
      "A. Determine data quality metrics.",
      "B. Define important data ownership regardless of functions.",
      "C. Establish data ownership during the final phase of a project.",
      "D. Install data accountability.",
    ],
  },
  {
    question_number: 441,
    question: " What BEST describes data ownership?",
    choices: [
      "A. Geographic sovereignty",
      "B. Confidentiality and integrity",
      "C. Accuracy and precision",
      "D. Legal responsibilities",
    ],
  },
  {
    question_number: 442,
    question:
      " A senior security engineer has been tasked with ensuring the confidentiality and integrity of the organization\u00e2\u20ac\u2122s most valuable personally identifiable information (PII). This data is stored on local file and database servers within the organization\u00e2\u20ac\u2122s data center. The following security measures have been implemented to ensure that unauthorized access is detected and logged. \u00e2\u20ac\u00a2 Network segmentation and enhanced access logging of the database and file servers \u00e2\u20ac\u00a2 Implemented encryption of data at rest \u00e2\u20ac\u00a2 Implemented full packet capture of the network traffic in and out of the sensitive network segment \u00e2\u20ac\u00a2 Ensured all transaction log data and packet captures are backed up to corporate backup appliance within the corporate backup network segment Which of the following is the MOST likely way to exfiltrate PII while avoiding detection?",
    choices: [
      "A. Unauthorized access to the file server via Secure Shell (SSH)",
      "B. Unauthorized access to the database server via a compromised web application",
      "C. Unauthorized access to the database server via a compromised user account",
      "D. Unauthorized access to the backup server via a compromised service account",
    ],
  },
  {
    question_number: 443,
    question:
      " During the change management process, which of the following is used to identify and record new risks?",
    choices: [
      "A. Risk assessment",
      "B. Lessons learned register",
      "C. Risk register",
      "D. Risk report",
    ],
  },
  {
    question_number: 444,
    question:
      ' The defense strategy "never trust any input" is MOST effective against which of the following web-based system vulnerabilities?',
    choices: [
      "A. Injection vulnerabilities",
      "B. Sensitive data exposure",
      "C. Man-in-the-browser attack",
      "D. Broken authentication",
    ],
  },
  {
    question_number: 445,
    question:
      " What is the MOST effective way to mitigate distributed denial of service (DDoS) attacks?",
    choices: [
      "A. Deploy a web application firewall (WAF).",
      "B. Block access to Transmission Control Protocol (TCP) ports under attack.",
      "C. Detect and block bad Internet Protocol (IP) subnets on the corporate firewall.",
      "D. Engage an upstream Internet service provider (ISP).",
    ],
  },
  {
    question_number: 446,
    question: " Which function does 802.1X provide?",
    choices: [
      "A. Network intrusion detection system (NIDS)",
      "B. Wireless access point (WAP)",
      "C. Wi-Fi Protected Access (WPA)",
      "D. Network Access Control (NAC)",
    ],
  },
  {
    question_number: 447,
    question:
      " Which of the following is the PRIMARY benefit of implementing an Information Security Management System (ISMS)?",
    choices: [
      "A. Correlates system events to monitor and demonstrate system health",
      "B. Improves customer confidence by demonstrating adherence to best practices",
      "C. Increases employee education and awareness of security policies",
      "D. Ensures user compliance with computing standards",
    ],
  },
  {
    question_number: 448,
    question:
      " Concerning appropriate data retention policies, which of the following is the MAIN risk factor for the availability of archived information?",
    choices: [
      "A. Data stored in third-party environments.",
      "B. Data maintained offline requires a higher time to access.",
      "C. Data recorded in obsolete media cannot be read.",
      "D. Retention of data involves a cost.",
    ],
  },
  {
    question_number: 449,
    question:
      " Wi-Fi Protected Access 2 (WPA2) is a security protocol designed with which of the following security feature?",
    choices: [
      "A. Encryption control",
      "B. Malware attack protection",
      "C. Data availability",
      "D. Replay attack protection",
    ],
  },
  {
    question_number: 450,
    question:
      " What security technique in the Software Development Life Cycle (SDLC) should be leveraged to BEST ensure secure development throughout a project?",
    choices: [
      "A. Dynamic application security testing (DAST)",
      "B. Waterfall",
      "C. Simple Object Access Protocol",
      "D. Static application security testing (SAST)",
    ],
  },
  {
    question_number: 451,
    question:
      " In designing the architecture of an access control system, it was determined that confidentiality and controlled access to information were the primary focus. Which of the following security models is the BEST choice for the organization?",
    choices: [
      "A. Biba integrity model",
      "B. Clark-Wilson model",
      "C. Bell-LaPadula model",
      "D. Brewer-Nash model",
    ],
  },
  {
    question_number: 452,
    question:
      " An organization is developing employee training content to increase awareness of Payment Card Industry (PCI) standards. What are the three types of awareness roles applicable to the organization?",
    choices: [
      "A. All personnel, specialized, management",
      "B. Standard, privileged, administrator",
      "C. Basic, intermediate, advanced",
      "D. Technical, operational, administrative",
    ],
  },
  {
    question_number: 453,
    question:
      " Which of the following is the BEST method to perform an end-to-end testing on production for both operational and security requirements?",
    choices: [
      "A. Synthetic transaction analysis.",
      "B. Dynamic code analysis",
      "C. Static code analysis",
      "D. Vulnerability analysis",
    ],
  },
  {
    question_number: 454,
    question:
      " A security architect is reviewing an implemented security framework. After the review, the security architect wants to enhance the security by implementing segregation of duties (SoD) to address protection against fraud. Which security model BEST protects the integrity of data?",
    choices: [
      "A. The Brewer-Nash model",
      "B. The Biba Integrity model",
      "C. The Bell-LaPadula model",
      "D. The Clark-Wilson model",
    ],
  },
  {
    question_number: 455,
    question:
      " An organization is building an enterprise system using attribute-based access control (ABAC). To avoid inadvertent exposure, what should organizations do to ensure the proper handling of personally identifiable information (PII) and enforcement of PII regulations across the enterprise?",
    choices: [
      "A. Employ trust agent.",
      "B. Employ trust agreements.",
      "C. Employ training program.",
      "D. Employ regulations from leadership.",
    ],
  },
  {
    question_number: 456,
    question:
      " Which of the following is a strong security protection provided by Trusted Platform Module (TPM)?",
    choices: [
      "A. Providing data integrity through digital signatures",
      "B. Creation of a secure kernel",
      "C. Separation of encryption keys from storage devices",
      "D. Reporting of system integrity",
    ],
  },
  {
    question_number: 457,
    question:
      " An application developer is developing a web application that will store and process personal information of European Union (EU) residents. Which of the following security principles explicitly specified in General Data Protection Regulation (GDPR), should the developer apply to safeguard the personal information in the application?",
    choices: [
      "A. Authorization",
      "B. Tokenization",
      "C. Pseudonymization",
      "D. Authentication",
    ],
  },
  {
    question_number: 458,
    question:
      " A security architect is implementing an authentication system for a distributed network of servers. This network will be accessed by users on workstations that cannot trust the identity of the user. Which solution should the security architect use to have the users trust one another?",
    choices: [
      "A. One-way authentication",
      "B. Kerberos",
      "C. Mutual authentication",
      "D. Single session software tokens",
    ],
  },
  {
    question_number: 459,
    question:
      " Which process compares its results against a standard to determine whether the results meet the standard?",
    choices: [
      "A. Penetration test",
      "B. Security audit",
      "C. Security assessment",
      "D. Functional review",
    ],
  },
  {
    question_number: 460,
    question:
      " A security consultant has been hired by a company to establish its vulnerability management program. The consultant is now in the deployment phase. Which of the following tasks is part of this process?",
    choices: [
      "A. Educate and train key stakeholders.",
      "B. Measure effectiveness of the program\u00e2\u20ac\u2122s stated goals.",
      "C. Determine a budget and cost analysis for the program.",
      "D. Select and procure supporting technologies.",
    ],
  },
  {
    question_number: 461,
    question:
      " An organization is formulating a strategy to provide access to third-party partners. The information technology (IT) department has been tasked with providing access by utilizing cloud services. Which of the following technologies is MOST commonly employed for completing the task?",
    choices: [
      "A. Identity as a Service (IDaaS)",
      "B. Firewall as a service",
      "C. Infrastructure as a Service (IaaS)",
      "D. Software as a Service (SaaS)",
    ],
  },
  {
    question_number: 462,
    question:
      " Which of the following are key activities when conducting a security assessment?",
    choices: [
      "A. Schedule, collect, examine",
      "B. Interview, examine, simulate",
      "C. Collect, interview, test",
      "D. Examine, interview, test",
    ],
  },
  {
    question_number: 463,
    question:
      " An organization wants to ensure that employees that move to a different department within the organization do not retain access privileges from their former department. To this end, the organization has implemented role-based access control (RBAC). Which additional measure is MOST important to successfully limit excess access privileges?",
    choices: [
      "A. Business role review",
      "B. Line manager review of assigned roles",
      "C. Segregation of duties (SoD) review",
      "D. Access control matrix",
    ],
  },
  {
    question_number: 464,
    question:
      " An organization has experienced multiple distributed denial-of-service (DDoS) attacks in recent months that have impact of their public-facing web and e-commerce sites that were previously all on-premises. After an analysis of the problems, the network engineers have recommended that the organization implement additional name service providers and redundant network paths. What is another recommendation that helps ensure the future availability of their web and e-commerce sites?",
    choices: [
      "A. Move all cloud-based operations back to on-premises to mitigate attacks.",
      "B. Move all websites to a new location.",
      "C. Review current detection strategies and employ signature-based techniques.",
      "D. Review the service-level agreements (SLA) with their cloud service providers.",
    ],
  },
  {
    question_number: 465,
    question:
      " While reviewing a web application-to-application connection, a security professional finds the use of Representational State Transfer (REST) application programming interfaces (API) and identifies it as secure. Which one of the following connection Uniform Resource Locators (URL) applies to this scenario?",
    choices: [
      "A. https://url.com/Resources//action?apiKey=a399ikjiuynj",
      "B. http://url.com/SecureTLS//action",
      "C. http://url.com/Resources//action?apiKey=a399ikjiuynj",
      "D. https://url.com/Resources//action",
    ],
  },
  {
    question_number: 466,
    question:
      " Which of the following principles is intended to produce information security professionals that are capable of vision and proactive response?",
    choices: [
      "A. Information security awareness",
      "B. Information security program",
      "C. Information security education",
      "D. Information security certification",
    ],
  },
  {
    question_number: 467,
    question:
      " An organization is the victim of a major data breach just one month after passing an external cyber security audit. Which of the following is the likely reason for this situation?",
    choices: [
      "A. Both the auditor and the organization validated the controls to be accurate.",
      "B. The organization had the minimum level of controls in place to pass the audit.",
      "C. The auditor performed an in-depth analysis of the required controls.",
      "D. The audit was initiated by appropriate levels of management in the organization.",
    ],
  },
  {
    question_number: 468,
    question:
      " Which of the following is MOST effective method of defending against zero-day malware threats?",
    choices: [
      "A. Client firewalls",
      "B. Client event logging",
      "C. Client application whitelisting",
      "D. Client antivirus",
    ],
  },
  {
    question_number: 469,
    question:
      " Which dynamic routing protocol is BEST suited for a dispersed campus network utilizing Internet Protocol version 6 (IPv6) addresses?",
    choices: [
      "A. Open Shortest Path First (OPSF) version 3",
      "B. Enhanced Interior Gateway Routing Protocol (EIGRP)",
      "C. Border Gateway Protocol (BGP) version 4",
      "D. Routing Information Protocol (RIP) version 2",
    ],
  },
  {
    question_number: 470,
    question:
      " Which of the following is a safeguard that could be used to validate a service provider and the authenticity of their service?",
    choices: [
      "A. Information graphing",
      "B. Code signing",
      "C. Service signing",
      "D. Code graphing",
    ],
  },
  {
    question_number: 471,
    question:
      " When implementing single sign-on (SSO) on a network, which authentication approach BEST allows users to use credentials across multiple applications?",
    choices: [
      "A. Public key infrastructure (PKI)",
      "B. Security Assertion Markup Language (SAML)",
      "C. Delegated Identity Management",
      "D. Federated Identity Management",
    ],
  },
  {
    question_number: 472,
    question:
      " Which of the following processes is BEST used to determine the extent to which modifications to an information system affect the security posture of the system?",
    choices: [
      "A. Patch management",
      "B. Continuous monitoring",
      "C. Configuration change control",
      "D. Security impact analysis",
    ],
  },
  {
    question_number: 473,
    question:
      " Which of the following attacks describes the intent behind the pivoting method used by attackers or penetration testers?",
    choices: [
      "A. Interrupt the communications flows on the network",
      "B. Use a compromised or obsolete system to traverse the network",
      "C. Extract sensitive data from resources on the network",
      "D. Escalate compromised user permissions within the network",
    ],
  },
  {
    question_number: 474,
    question:
      " A vendor released a security patch for a dangerous vulnerability affecting thousands of computers in an organization. Which of the following actions will the security practitioner do FIRST to mitigate the security risk?",
    choices: [
      "A. Deploy the patch.",
      "B. Accept the risk.",
      "C. Transfer the risk.",
      "D. Evaluate the patch.",
    ],
  },
  {
    question_number: 475,
    question:
      " At which layer of the Open Systems Interconnection (OSI) model does a circuit-level firewall operate?",
    choices: [
      "A. Session layer",
      "B. Network layer",
      "C. Application layer",
      "D. Transport layer",
    ],
  },
  {
    question_number: 476,
    question:
      " An architect has observed the complexity of a new design has introduced increased risk. After review, the test team lead cannot determine how to test for some of the security controls the organization requires to be in place. Which of the following secure design principles has MOST likely been violated?",
    choices: [
      "A. Complete remediation",
      "B. Economy of mechanism",
      "C. Psychological acceptability",
      "D. Least privilege",
    ],
  },
  {
    question_number: 477,
    question:
      " An organization would like to secure a trusted and untrusted network. One of the requirements is to provide access to the trusted network from a few of the hosts from the untrusted network. Which of the following is the BEST device or system that should be deployed to enable this capability?",
    choices: [
      "A. Router",
      "B. Bastion host",
      "C. Forward proxy host",
      "D. Intrusion detection system (IDS)",
    ],
  },
  {
    question_number: 478,
    question:
      " Which of the following languages supports a modular program structure and was designed for military and real-time systems?",
    choices: ["A. C++", "B. Personal Home Page (PHP)", "C. Ada", "D. Java"],
  },
  {
    question_number: 479,
    question:
      " Which of the following BEST describes an example of evading intrusion detection system (IDS) signature detection?",
    choices: [
      "A. Packet fragmentation",
      "B. SQL injection (SQLi)",
      "C. Cross-Site Scripting (XSS)",
      "D. Encoding",
    ],
  },
  {
    question_number: 480,
    question:
      " An organization is establishing a privacy program to ensure that personally identifiable information (PII) is properly protected. What is the FIRST action the organization should take to establish the program?",
    choices: [
      "A. Appoint a senior official to oversee the privacy program.",
      "B. Allocate sufficient resources to implement the privacy program.",
      "C. Develop a strategic organizational privacy plan.",
      "D. Monitor privacy laws and policy changes.",
    ],
  },
  {
    question_number: 481,
    question:
      " With regards to physical security, what is the MOST critical element of an organization\u00e2\u20ac\u2122s recovery plan?",
    choices: [
      "A. Restore monitoring.",
      "B. Restore communications.",
      "C. Restore the network.",
      "D. Restore power.",
    ],
  },
  {
    question_number: 482,
    question:
      " An application developer is deciding on the amount of idle session time that the application allows before a timeout. Which of the following is the BEST reason for determining the session timeout requirement?",
    choices: [
      "A. Application requirements",
      "B. Industry best practices",
      "C. Industry feedback",
      "D. Management feedback",
    ],
  },
  {
    question_number: 483,
    question:
      " When securing Hypertext Markup Language (HTML) text data, which is the purpose of the escape function?",
    choices: [
      "A. Ending the current process to protect the code",
      "B. Providing an exit path for user input",
      "C. Replacing potentially harmful characters",
      "D. Preventing unauthorized users from writing data",
    ],
  },
  {
    question_number: 484,
    question:
      " An information security consultant is asked to make recommendations for a small business to protect the access to information, stored on network drives. The small business supports several government agencies that manage highly sensitive information. Which of the following recommendations is BEST to achieve this objective?",
    choices: [
      "A. Develop and implement a security information and event monitoring system.",
      "B. Develop and implement access management policies and procedures.",
      "C. Develop and implement data center access policies and procedures.",
      "D. Develop and implement a security operations center (SOC) for access monitoring.",
    ],
  },
];

export default questions;
