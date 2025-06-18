import React from 'react'

const HistorySection = () => {
  return (
    <div>
        <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-8">Our History</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.
                </p>
                <p className="text-gray-700">
                  Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.
                </p>
                <p className="text-gray-700">
                  Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Leadership Cards */}
              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_1.jpg" alt="Greeg Graham" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Greeg Graham</h3>
                  <p className="text-gray-600">CEO</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_2.jpg" alt="Jennifer Greive" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Jennifer Greive</h3>
                  <p className="text-gray-600">President</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_3.jpg" alt="Patrick Marx" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Patrick Marx</h3>
                  <p className="text-gray-600">Marketer</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_4.jpg" alt="Mike Coolbert" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Mike Coolbert</h3>
                  <p className="text-gray-600">Partner</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistorySection