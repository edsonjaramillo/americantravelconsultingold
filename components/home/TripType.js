import Image from 'next/image';
export default function TripType({ filename, title, altDescription }) {
  return (
    <>
      <div className='type'>
        <div className='type__imageWrapper'>
          <Image
            src={`/images/home/${filename}`}
            height='40'
            width='40'
            layout='responsive'
            alt={altDescription}
          />
        </div>
        <h3 className='type__header'>{title}</h3>
      </div>
    </>
  );
}
