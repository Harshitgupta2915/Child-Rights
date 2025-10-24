import React from 'react'

const Childrightspage = () => {
    const headings = [
        "Survival and Development Rights",
        "Protection Rights",
        "Participation Rights",
    ]
    const Survivalrighs = [
        "Right to a name, nationality, and identity.",
        "Right to live with parents unless it’s against the child’s best interests.",
        "Right to family reunification if separated.",
        "Right to an adequate standard of living (food, clothing, housing).",
        "Right to health and healthcare.",
        "Right to social security and assistance.",
        "Right to benefit from scientific progress.",
        "Right to play, rest, and leisure.",
        "Right to education (primary education must be free and compulsory; secondary accessible to all).",
        "Right to access information and mass media that benefit development.",
        "Rights for children with disabilities to special care, education, and training.",
    ]
    const Protectionrights = [
        "Protection from all forms of violence, abuse, neglect, or exploitation.",
        "Protection from torture or degrading treatment.",
        "Protection from child labor that is hazardous or interferes with education.",
        "Protection from sexual exploitation and abuse.",
        "Protection from trafficking, sale, and abduction.",
        "Protection in armed conflict — no child under 15 should take part in hostilities or be recruited into armed forces.",
        "Protection from harmful drugs and drug trafficking.",
        "Protection from exploitation in the justice system (e.g., no life imprisonment without parole for children)",
        "Protection of refugee and asylum-seeking children.",
        "Protection of children belonging to minorities or indigenous groups.",
    ]
    const Participation = [
        "Right to freedom of expression.",
        "Right to freedom of thought, conscience, and religion.",
        "Right to freedom of association and peaceful assembly.",
        "Right to access information.",
        "Right to participate in cultural and artistic life.",
        "Right to be heard in legal and administrative proceedings affecting them.",
    ]
  return (
    <main >
          <section>
              <h1>{headings.map((heading) => { heading})
              }</h1>
              <p></p>
      </section>
    </main>
  )
}

export default Childrightspage
