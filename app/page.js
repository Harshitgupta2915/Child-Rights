"use client";


import ScrollPop from "../components/ScrollPop";
import Frontpage2 from "../components/Frontpage2";
import Complainttype from "../components/Complainttype";
import QuotesLoop from "../components/Quotes";
import Learningcorner from "../components/Learningcorner";
import Opinionbox from "../components/Opinionbox";
import Noofcases from "../components/noofcases";
import Footer from "../components/Footer";


export default function Home() {

 

  return (
    <main>
      <ScrollPop><Frontpage2 /></ScrollPop>
      <ScrollPop delay={0.1}><Complainttype /></ScrollPop>
      <ScrollPop delay={0.2}><QuotesLoop /></ScrollPop>
      <ScrollPop delay={0.3}><Learningcorner /></ScrollPop>
      <ScrollPop delay={0.4}><Opinionbox /></ScrollPop>
      <ScrollPop delay={0.5}><Noofcases /></ScrollPop>
      <Footer />
    </main>
  );
}
