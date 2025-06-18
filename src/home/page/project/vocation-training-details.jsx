"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Target, Heart } from "lucide-react"
import Image from "next/image"

export default function VocationalTrainingDetail() {
  const stats = [
    { label: "Women Trained", value: "150+", icon: Users },
    { label: "Skills Taught", value: "8", icon: Target },
    { label: "Employment Rate", value: "85%", icon: Heart },
    { label: "Years Active", value: "3", icon: Calendar },
  ]

  const skills = [
    "Tailoring & Sewing",
    "Handicrafts & Weaving",
    "Computer Literacy",
    "Business Management",
    "Financial Literacy",
    "Marketing & Sales",
    "Quality Control",
    "Customer Service",
  ]

  return (
    <div className="min-h-screen bg-gray-50 mt-8">
      {/* Header */}
     

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </button>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-green-100 text-green-800">Current Project</Badge>
            <Badge variant="outline">Vocational Training</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Empowering Deaf Women Through Vocational Training</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our flagship program providing comprehensive vocational training and handicrafts education to enhance the
            economic independence and self-sufficiency of Deaf women across Rwanda.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src="images/bg_3.jpg"
            alt="Women participating in vocational training program"
            width={800}
            height={400}
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Since 2021, our Vocational Training Program has been transforming the lives of Deaf women by providing
                  them with practical skills and knowledge needed to achieve economic independence. The program focuses
                  on traditional handicrafts, modern sewing techniques, and essential business skills.
                </p>
                <p>
                  Our comprehensive approach includes not only technical training but also life skills, financial
                  literacy, and entrepreneurship development. We believe that empowering Deaf women economically creates
                  a ripple effect that benefits entire families and communities.
                </p>
              </div>
            </section>

            {/* Objectives */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Objectives</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Provide vocational training to 200+ Deaf women by 2025
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Achieve 90% employment or self-employment rate among graduates
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Establish sustainable income sources for participating women
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Create a network of Deaf women entrepreneurs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Promote economic inclusion and reduce poverty
                </li>
              </ul>
            </section>

            {/* Success Stories */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Marie Uwimana</h3>
                        <p className="text-gray-600 mb-3">
                          "After completing the tailoring program, I started my own clothing business. I now employ two
                          other women and support my family independently."
                        </p>
                        <Badge variant="outline" className="text-xs">
                          Graduate 2023
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Grace Mukamana</h3>
                        <p className="text-gray-600 mb-3">
                          "The handicrafts training opened new opportunities for me. My products are now sold in local
                          markets and I've gained confidence in my abilities."
                        </p>
                        <Badge variant="outline" className="text-xs">
                          Graduate 2022
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Details */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span>$75,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Taught */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-4">Skills Taught</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Get Involved */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-4">Get Involved</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Donate to This Project</Button>
                  <Button variant="outline" className="w-full">
                    Volunteer as Trainer
                  </Button>
                  <Button variant="outline" className="w-full">
                    Partner with Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-4">Project Contact</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Project Manager:</strong>
                    <br />
                    Sarah Mukamana
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <br />
                    vocational@rnadw.org
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    <br />
                    +250 788 123 456
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
