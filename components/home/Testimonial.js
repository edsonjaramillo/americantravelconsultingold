export default function Testimonial() {
  return (
    <>
      <div className='testimonial'>
        <blockquote>
          <p className='testimonial__quote'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            veniam inventore alias voluptas deserunt minima perspiciatis
            quisquam aut et, soluta quas iusto laboriosam. Quis optio laboriosam
            fuga, maxime soluta laudantium?
          </p>
        </blockquote>
        <div className='testimonial__citations'>
          <cite className='testimonial__author'>FirstName LastName</cite>
          <cite className='testimonial__position'>Band Director</cite>
        </div>
      </div>
    </>
  );
}
