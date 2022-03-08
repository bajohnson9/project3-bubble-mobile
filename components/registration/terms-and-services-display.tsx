import { ScrollView, Text, View } from "react-native";
import styles from "./registration-style";

export default function TermsAndServicesContent() {
  interface term {
    title: string;
    desc: string[];
  }

  const terms: term[] = [
    {
      title: "nothing",
      desc: [
        "Please read these terms and conditions carefully before using the Bubble website operated by Best Revature Batch LLC. Keep your arms and legs inside the ride at all times, and please, no flash photography.",
      ],
    },
    {
      title: "CONDITIONS OF USE",
      desc: [
        "By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. Revature only grants use and access of this website, its products, and its services to those who have accepted its terms.",
      ],
    },
    {
      title: "PRIVACY POLICY",
      desc: [
        "Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices. [LINK REDACTED]",
      ],
    },
    {
      title: "AGE RESTRICTION",
      desc: [
        "You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. [name] assumes no responsibility for liabilities related to age misrepresentation.",
      ],
    },
    {
      title: "INTELLECTUAL PROPERTY",
      desc: [
        "You agree that all materials, products, and services provided on this website are the property of Revature, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the Revature’s intellectual property in any way, including electronic, digital, or new trademark registrations.",
        "You grant Revature a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.",
      ],
    },
    {
      title: "USER ACCOUNTS",
      desc: [
        "As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.",
        "If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.",
        "We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.",
      ],
    },
    {
      title: "APPLICABLE LAW",
      desc: [
        "By visiting this website, you agree that the laws of whatever applicable state, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between Revature and you, or its business partners and associates.",
      ],
    },
    {
      title: "DISPUTES",
      desc: [
        "Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court and you consent to exclusive jurisdiction and venue of such courts.",
      ],
    },
    {
      title: "IDENTIFICATION",
      desc: [
        "You agree to indemnify Revature and its affiliates and hold Revature harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel. ",
      ],
    },
    {
      title: "LIMITATION ON LIABILITY",
      desc: [
        "Revature is not liable for any damages that may occur to you as a result of your misuse of our website.",
        "Revature reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between Revature and the user, and this supersedes and replaces all prior agreements regarding the use of this website.",
      ],
    },
  ];

  return (
    <ScrollView style={styles.regPageTermsView}>
      {terms.map((item, key) => (
        <Text key={key}>
          {" "}
          <Text style={styles.regPageTermsViewSection}>
            {item.title !== "nothing" && item.title + "\n    "}
          </Text>{" "}
          {item.desc[0] + "\n    "}
          {!!item.desc[1] && item.desc[1] + "\n    "}
          {!!item.desc[2] && item.desc[2] + "\n"}{" "}
        </Text>
      ))}
    </ScrollView>
  );
}
