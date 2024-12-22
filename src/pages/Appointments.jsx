import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const daysofweeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [docSlots, setdocSlots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slotTime, setslotTime] = useState('');



  const getAvailableSlots = async () => {
    setdocSlots([])
    let today = new Date()


    for (let i = 1; i < 7; i++) {
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate() + i)



      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentdate.getDate()) {
        currentdate.setHours(currentdate.getHours() > 10 ? currentdate.getHours() : 10)
        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0)

      } else {
        currentdate.setHours(10)
        currentdate.setMinutes(0)
      }
      let timeslots = [];
      while (currentdate < endtime) {
        let formettedtime = currentdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })



        timeslots.push({
          datetime: new Date(currentdate),
          time: formettedtime
        })

        currentdate.setMinutes(currentdate.getMinutes() + 30)

      }
      setdocSlots((prev) => ([...prev, timeslots]))
    }
  }


  useEffect(() => {
    console.log(docSlots);

  }, [docSlots])


  useEffect(() => {
    getAvailableSlots()
  }, [docInfo]);

  useEffect(() => {
    const fetchDocInfo = () => {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoc);
      console.log(foundDoc);
    };

    if (doctors.length > 0) {
      fetchDocInfo();
    }
  }, [doctors, docId]);

  if (!docInfo) {
    return <p>Loading doctor information...</p>;
  }

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        {/* Doctor image */}
        <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={`${docInfo.name}`} />

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* Doctor info */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="Verified icon" />
          </p>
          <div className='flex flex-center gap-2 text-sm mt-1 text-gray-600'>
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/* doctor about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>about <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointsment fee: <span className='text-gray-600'>{currency}{docInfo.fees}</span>
          </p>
          <p>

          </p>
        </div>
      </div>
      {/* booking slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='text-lg font-bold'>Booking Slots</p>
        <div className='flex gap-3 items.center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setslotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysofweeks[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>


        <div className='flex items.center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
            <p className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white': 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Appointments;
