import React from "react";
import pie from "../asstes/pie-chart.png";
import contract from "../asstes/contract.png";
import coin from "../asstes/coin.png";
import video from "../asstes/video-chat.png";
const Statistics = () => {
  return (
    <div className="py-8 lg:py-16 ">
      <div className="container mx-auto ">
        <h1 className="text-center text-2xl lg:w-[50%] mb-5 lg:-mb-10 xl:w-[70%]  mx-auto lg:text-4xl font-bold ">
          Comprehensive Care for Every Patient
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="mt-auto">
            <div className="flex flex-col justify-end items-center text-center bg-[#4545450a] p-4 rounded-lg shadow-lg h-[180px] lg:h-[280px]">
              <h1 className="text-4xl font-bold">90%</h1>
              <p className="text-gray-700 mb-4">Patient satisfaction rate.</p>
              <img src={pie} alt="Pie Chart" className="w-16 h-16" />
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col justify-end items-center text-center bg-[#fffff5] p-4 rounded-lg shadow-lg  h-[180px]  lg:h-[220px]">
              <h1 className="text-4xl font-bold">500+</h1>
              <p className="text-gray-700 mb-4">Board-certified doctors</p>
              <img src={contract} alt="Contract" className="w-16 h-16" />
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col justify-end items-center text-center  bg-[#33323211] p-4 rounded-lg shadow-lg  h-[180px]  lg:h-[180px]">
              <h1 className="text-4xl font-bold">
                4.8 <span className="text-yellow-500">★</span>
              </h1>
              <p className="text-gray-700 mb-4">Over 20,000 Patients</p>
              <div className="flex space-x-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/bfd0/9b20/f2cf44bfa3af771f6396363d4ae67aab?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjG47OWuZQB3dGWFqtN7eQt7g9gH4w7qEWKKzWxsQk~1TJ4r2C7EuoHBnhzGMGYyLeDgbtJc53A7i29VaOrInUFZb-DHxixSDppLcwXq3htX2YqHB-15z-iRsyHjHwrdzr7ATUMLruxEr8JHLqZmvkaOYfjXHM0gLza4Nzgbwe1H2SXDLIgmeVoTE8tRqm1A7ZkixeeU9eOGjw6sFv2yhl~3jbz5ETQQIdDrm-riuu4Qwexgw7gt~-ruGFtwG--z-0FWDBN3Yz~fNAuMpeMSJzIxGOR8-BI4A1y0qnGuCmfDRR6DniCBAq-4NhchUMHcTYq4AAfXXax8OJGtifeSoQ__"
                  alt="Patient 1"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/03fe/c691/cd5649351bed6a5d7acd6e3ab5000778?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d3UCY4etO~cs0NtaLw43ifOmh2oMBC3ri8F-KN4wY2NZPr6J-AWrOOSlhzaCo~ODJMYJ8kEIAzSPJ5PZBJx3ZLZI2MH38bZPSyWRfg9HM29i1qGwFiJaHNZ0CBA-v0sI9zriUE627I-uwKs8503lnOCrBGIpwmGXwHGC9HIxtUptR1-XQx0p4YRYufAVSXjr9K7-DIkEI663GEuQU3hgkhtLrESo1A4-IkQA1dtqk8uXAla1e4VBX~L16eHfhwOLg5628xCDkDcUL-r-aGqF6N4Ut5zRfQoioFWLtg~mHta95Sln11IJpEo~zbRjrBJlmpvL7pbtnwqSUSQFKFUCsw__"
                  alt="Patient 2"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/a3e4/6c23/468e67ad27d796428df80703412aebd7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EBjQeVM7P~66ym29bJOpZn5NTjWEJdeuO8xlGbXQPAxMHzsaDpoKqlsUp1EpJPhAmG-yhrELbVQujHr80~wz3qlf29GGWtlIahizezcILFsi9KqOFp~ZPnWTyyigY9nV5t5me3DjrPMPuzFoSjJ0Ra8thNbv2Or~J15jpeCJXwxbozv7y~NwMnL3SPgEJFhYljd2WgX~FG76upwrOuSzjF~dwCwrtIMfgeBMedVnpzV9m8997THQhWaYcNpWAU57BrYLj9FZYt1fO8T4MSGhKmxD59NbkpKuMR84FwBxUJz3OR1en~K4AWscZmC1pDlJDXv2m9nzbLnv2QnWaNg~LQ__"
                  alt="Patient 3"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/e0eb/8c7e/d08cbe61699dcdccad10d7e4dd0904b0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZXgtyt2tcszqD-n-LATTuFmCq7GxyLlSQTYxxBYy8qfP0NOsWWmqssVvE~daqf-0xTLRHXc-ZHCxZsssBuateQ2Fk07xE3KDK2nJK9cYYVfywiN7VsVOP~nHRexezJQ77qRdm~YHTBuOMW2K7t5UQl6JQJKupf9toks4kpg2azQulMrrAZGd5~kXkDvyXdG1VyeuhwQyEeB7~nwooJc9GWKepPAQjdV3zv2BZJ6N6xGhUfyzu3sjQJSoLdOVsg6QS~LOCDnFaBjhVinErGwWStTMGt5-ey8P948HZGYFhf7UDytd-IPRtDUY8ASIpoED2dcaJxw2qpjxOef3IfGpA__"
                  alt="Patient 4"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col justify-end items-center text-center bg-[#fffff5] p-4 rounded-lg shadow-lg  h-[180px]  lg:h-[220px]">
              <h1 className="text-4xl font-bold">$5000</h1>
              <p className="text-gray-700 mb-4">
                Money spent for poor patients
              </p>
              <img src={coin} alt="Coin" className="w-16 h-16" />
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col justify-end items-center text-center bg-[#4545450a] p-4 rounded-lg shadow-lg  h-[180px]  lg:h-[280px]">
              <h1 className="text-4xl font-bold">50+</h1>
              <p className="text-gray-700 mb-4">
                Free lesson videos for patients
              </p>
              <img src={video} alt="Video" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
