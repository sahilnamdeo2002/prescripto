import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      applyFilter();
    }
  }, [speciality, doctors]);

  return (
    <div className="p-5">
      <p className="text-gray-700 font-semibold mb-6 text-center sm:text-left">Browse through the doctors specialist.</p>

      {/* Speciality List */} transition-all duration-300
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <p onClick={()=>speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : "" }`}>General physician</p>
          <p  onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : "" }`}>Gynecologist</p>
          <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all 0 cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : "" }`}>Dermatologist</p>
          <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : "" }`}>Pediatricians</p>
          <p  onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : "" }`}>Neurologist</p>
          <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : "" }`}>Gastroenterologist</p>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-transform duration-200"
              key={index}
            >
              <img className="w-full h-55 object-cover" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2 text-green-500 text-xs">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="font-medium text-base text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
