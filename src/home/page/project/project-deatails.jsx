
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Target, Calendar, Award } from "lucide-react"

export default function ProjectDetail() {
  const stats = [
    { icon: Users, label: "Women Trained", value: "150+" },
    { icon: Target, label: "Skills Taught", value: "8" },
    { icon: Award, label: "Employment Rate", value: "85%" },
    { icon: Calendar, label: "Years Active", value: "3" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
     

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Current Project
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
              Vocational Training
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Deaf Women Through Vocational Training
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
            Our flagship program providing comprehensive vocational training and handicrafts education to enhance the
            economic independence and self-sufficiency of Deaf women across Rwanda.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="images/bg_3.jpg"
            alt="Women participating in vocational training"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
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

            {/* Success Stories */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
              <div className="space-y-8">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Marie Uwimana</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          "After completing the tailoring program, I started my own clothing business. I now employ two
                          other women and support my family independently."
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Graduate 2023
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Grace Mukamana</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          "The handicrafts training opened new opportunities for me. My products are now sold in local
                          markets and I've gained confidence in my abilities."
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Graduate 2022
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">2021 - 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Kigali, Rwanda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium">$75,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get Involved */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Involved</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Donate to This Project
                  </Button>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3">
                    Volunteer as Trainer
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3">
                    Partner with Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Contact</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Project Manager:</span>
                    <br />
                    <span className="text-gray-600">Sarah Mukamana</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Email:</span>
                    <br />
                    <a href="mailto:vocational@rnadw.org" className="text-blue-600 hover:underline">
                      vocational@rnadw.org
                    </a>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Phone:</span>
                    <br />
                    <a href="tel:+250788123456" className="text-blue-600 hover:underline">
                      +250 788 123 456
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
