export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-6 bg-gray-300 rounded-full w-20"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Ingredients */}
                <div>
                  <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3"></div>
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div>
                  <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <div className="h-10 bg-gray-300 rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
