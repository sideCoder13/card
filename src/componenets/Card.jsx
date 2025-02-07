

function Card(props) {
    console.log(props.data)
    return (
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="p-6">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:rotate-3">
              <img
                src={props.data.picture.thumbnail || "/placeholder.svg"}
                alt={`${props.data.name.first} ${props.data.name.last}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-blue-400">
                {props.data.name.first} {props.data.name.last}
              </h2>
              <p className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-sm font-semibold text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {props.data.gender.charAt(0).toUpperCase() + props.data.gender.slice(1)}
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">{props.data.cell}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-medium">{props.data.email}</span>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"></div>
      </div>
    )
  }


export default Card;
  
  