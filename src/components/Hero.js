import React from 'react';

export default function Hero({ backgroundClass, headline, linkHref, linkText }) {
  return (
    <div className={`hero ${backgroundClass}`}>
      <div className='container py-5 text-white'>
        <h1>{headline}</h1>
        {/* {linkHref
          ? <Link href={linkHref}>
            <a className="btn btn-primary mt-5">{linkText}</a>
          </Link>
          : ''
        } */}
      </div>
    </div>
  )
}