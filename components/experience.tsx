import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description:
      "Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Increased application performance by 40%",
      "Led a team of 5 developers",
      "Implemented microservices architecture",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
    achievements: [
      "Built 20+ client websites",
      "Improved page load times by 60%",
      "Introduced modern development practices",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description:
      "Started my career building web applications with JavaScript, HTML, and CSS. Gained experience in full-stack development.",
    achievements: [
      "Contributed to 10+ projects",
      "Learned modern frameworks",
      "Collaborated with cross-functional teams",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
                <CardHeader className="pl-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</div>
                  </div>
                </CardHeader>
                <CardContent className="pl-8">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
