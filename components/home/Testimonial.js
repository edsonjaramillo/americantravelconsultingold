export default function Testimonial({ quote, name, position, organization }) {
  return (
    <>
      <div className='testimonial'>
        <blockquote>
          <p className='testimonial__quote'>{quote}</p>
        </blockquote>
        <div className='testimonial__citations'>
          <cite className='testimonial__author'>{name}</cite>
          <cite className='testimonial__position'>{position}</cite>
          <cite className='testimonial__position'>{organization}</cite>
        </div>
      </div>
    </>
  );
}
