import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; // this is the slider "swiper" which contains many types of sliders
import "swiper/css"; // only we have to insert data into the slider and styling or position 
import CourseCard from './CourseCard';

const CourseSlider = ({ Courses }) => { 
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          breakpoints={{ 1024: { slidesPerView: 3 } }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
