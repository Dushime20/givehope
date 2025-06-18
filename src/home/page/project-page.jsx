"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export default function ProjectsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};


  return (
    <div className="min-h-screen bg-gray-50 mt-8">
   

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the initiatives and programs driving change for Deaf women in Rwanda.
          </p>
        </div>

        {/* Current Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Current Projects</h2>

          <div className="space-y-16">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Active Project
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Empowering Deaf Women Through Vocational Training</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We provide comprehensive vocational training and handicrafts to enhance the economic independence of
                  Deaf women.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white"><Link to={'/projects-details'}>Learn More</Link></Button>
                  <Button variant="outline" className="border-yellow-400 text-grey-600 bg-yellow-400 hover:bg-yellow-600">
                    <Link to={"/donate-page"}>Donate</Link>
                  </Button>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Women in vocational training"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Active Project
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sign Language Education for Families</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We offer sign language classes to families of Deaf individuals, fostering better communication and
                  inclusion within communities.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                  <Button variant="outline" className="border-yellow-400 text-grey-800 bg-yellow-400 hover:bg-yellow-600">
                    Enroll Family
                  </Button>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Family learning sign language"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Past Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Past Projects</h2>

          <div className="space-y-16">
            {/* Project 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Completed 2020
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Advocacy for Deaf Rights</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our advocacy efforts have led to increased awareness and policy changes supporting the rights of Deaf
                  women in education and employment.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Results</Button>
                  <Button variant="outline" className="border-yellow-400 text-grey-800 bg-yellow-400 hover:bg-yellow-600">
                    Read Report
                  </Button>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Advocacy event"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Project 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Completed 2023
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Outreach Programs</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We conducted outreach programs in rural areas to provide information on health, education, and social
                  services to Deaf women and their families.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Impact</Button>
                  <Button variant="outline" className="border-yellow-400 text-grey-600 bg-yellow-400 hover:bg-yellow-600">
                    Photo Gallery
                  </Button>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Community outreach"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-600 text-lg mb-8">
              For more information about our projects or how to get involved, please contact us.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

   
    </div>
  )
}
